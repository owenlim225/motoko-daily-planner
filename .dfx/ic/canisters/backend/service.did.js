export const idlFactory = ({ IDL }) => {
  const AddNoteResult = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const OnThisDay = IDL.Record({
    'title' : IDL.Text,
    'wikiLink' : IDL.Text,
    'year' : IDL.Text,
  });
  const Note = IDL.Record({
    'id' : IDL.Nat,
    'content' : IDL.Text,
    'isCompleted' : IDL.Bool,
  });
  const DayData = IDL.Record({
    'onThisDay' : IDL.Opt(OnThisDay),
    'notes' : IDL.Vec(Note),
  });
  const HttpHeader = IDL.Record({ 'value' : IDL.Text, 'name' : IDL.Text });
  const HttpResponsePayload = IDL.Record({
    'status' : IDL.Nat,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HttpHeader),
  });
  const TransformArgs = IDL.Record({
    'context' : IDL.Vec(IDL.Nat8),
    'response' : HttpResponsePayload,
  });
  return IDL.Service({
    'addNote' : IDL.Func([IDL.Text, IDL.Text], [AddNoteResult], []),
    'completeNote' : IDL.Func([IDL.Text, IDL.Nat], [], []),
    'fetchAndStoreOnThisDay' : IDL.Func([IDL.Text], [Result], []),
    'getDayData' : IDL.Func([IDL.Text], [IDL.Opt(DayData)], ['query']),
    'getMonthData' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(IDL.Tuple(IDL.Text, DayData))],
        ['query'],
      ),
    'transformResponse' : IDL.Func(
        [TransformArgs],
        [HttpResponsePayload],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };

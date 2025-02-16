import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type AddNoteResult = { 'ok' : string } |
  { 'err' : string };
export interface DayData {
  'onThisDay' : [] | [OnThisDay],
  'notes' : Array<Note>,
}
export interface HttpHeader { 'value' : string, 'name' : string }
export interface HttpResponsePayload {
  'status' : bigint,
  'body' : Uint8Array | number[],
  'headers' : Array<HttpHeader>,
}
export interface Note {
  'id' : bigint,
  'content' : string,
  'isCompleted' : boolean,
}
export interface OnThisDay {
  'title' : string,
  'wikiLink' : string,
  'year' : string,
}
export type Result = { 'ok' : string } |
  { 'err' : string };
export interface TransformArgs {
  'context' : Uint8Array | number[],
  'response' : HttpResponsePayload,
}
export interface _SERVICE {
  'addNote' : ActorMethod<[string, string], AddNoteResult>,
  'completeNote' : ActorMethod<[string, bigint], undefined>,
  'fetchAndStoreOnThisDay' : ActorMethod<[string], Result>,
  'getDayData' : ActorMethod<[string], [] | [DayData]>,
  'getMonthData' : ActorMethod<[bigint, bigint], Array<[string, DayData]>>,
  'transformResponse' : ActorMethod<[TransformArgs], HttpResponsePayload>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];

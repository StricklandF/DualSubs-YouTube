// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,optimize_code_size
// @generated from protobuf file "player.response.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * https://youtubei.googleapis.com/youtubei/v1/player
 *
 * @generated from protobuf message Player
 */
export interface Player {
    /**
     * Context context = 1 [json_name = "responseContext"];
     * PlaybackTracking playbackTracking = 9;
     * StreamingData streamingData = 4;
     * PlaybackTracking playbackTracking = 9;
     * HeartbeatParams heartbeatParams = 6;
     *
     * @generated from protobuf field: Captions captions = 10;
     */
    captions?: Captions;
}
/**
 * @generated from protobuf message Captions
 */
export interface Captions {
    /**
     * @generated from protobuf field: PlayerCaptionsTracklistRenderer playerCaptionsTracklistRenderer = 51621377;
     */
    playerCaptionsTracklistRenderer?: PlayerCaptionsTracklistRenderer;
}
/**
 * @generated from protobuf message PlayerCaptionsTracklistRenderer
 */
export interface PlayerCaptionsTracklistRenderer {
    /**
     * @generated from protobuf field: repeated CaptionTracks captionTracks = 1;
     */
    captionTracks: CaptionTracks[];
    /**
     * @generated from protobuf field: repeated AudioTracks audioTracks = 2;
     */
    audioTracks: AudioTracks[];
    /**
     * @generated from protobuf field: repeated TranslationLanguages translationLanguages = 3;
     */
    translationLanguages: TranslationLanguages[];
    /**
     * @generated from protobuf field: optional int32 defaultAudioTrackIndex = 4;
     */
    defaultAudioTrackIndex?: number;
    /**
     * @generated from protobuf field: optional int32 defaultCaptionTrackIndex = 6;
     */
    defaultCaptionTrackIndex?: number;
}
/**
 * @generated from protobuf message CaptionTracks
 */
export interface CaptionTracks {
    /**
     * @generated from protobuf field: string baseUrl = 1;
     */
    baseUrl: string;
    /**
     * @generated from protobuf field: Name name = 2;
     */
    name?: Name;
    /**
     * @generated from protobuf field: string vssId = 3;
     */
    vssId: string;
    /**
     * @generated from protobuf field: string languageCode = 4;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: optional string kind = 5;
     */
    kind?: string;
    /**
     * @generated from protobuf field: optional bool rtl = 6;
     */
    rtl?: boolean;
    /**
     * @generated from protobuf field: bool isTranslatable = 7;
     */
    isTranslatable: boolean;
}
/**
 * @generated from protobuf message AudioTracks
 */
export interface AudioTracks {
    /**
     * @generated from protobuf field: repeated int32 captionTrackIndices = 2 [packed = false];
     */
    captionTrackIndices: number[];
    /**
     * @generated from protobuf field: optional int32 defaultCaptionTrackIndex = 3;
     */
    defaultCaptionTrackIndex?: number;
    /**
     * @generated from protobuf field: optional int32 forcedCaptionTrackIndex = 4;
     */
    forcedCaptionTrackIndex?: number;
    /**
     * @generated from protobuf field: optional int32 visibility = 5;
     */
    visibility?: number;
    /**
     * @generated from protobuf field: optional bool hasDefaultTrack = 6;
     */
    hasDefaultTrack?: boolean;
    /**
     * @generated from protobuf field: optional bool hasForcedTrack = 7;
     */
    hasForcedTrack?: boolean;
    /**
     * @generated from protobuf field: optional string audioTrackId = 8;
     */
    audioTrackId?: string;
    /**
     * @generated from protobuf field: optional int32 captionsInitialState = 11;
     */
    captionsInitialState?: number;
}
/**
 * @generated from protobuf message TranslationLanguages
 */
export interface TranslationLanguages {
    /**
     * @generated from protobuf field: string languageCode = 1;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: Name languageName = 2;
     */
    languageName?: Name;
}
/**
 * @generated from protobuf message Name
 */
export interface Name {
    /**
     * @generated from protobuf field: repeated Runs runs = 1;
     */
    runs: Runs[];
}
/**
 * @generated from protobuf message Runs
 */
export interface Runs {
    /**
     * @generated from protobuf field: string text = 1;
     */
    text: string;
}
declare class Player$Type extends MessageType<Player> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Player
 */
export declare const Player: Player$Type;
declare class Captions$Type extends MessageType<Captions> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Captions
 */
export declare const Captions: Captions$Type;
declare class PlayerCaptionsTracklistRenderer$Type extends MessageType<PlayerCaptionsTracklistRenderer> {
    constructor();
}
/**
 * @generated MessageType for protobuf message PlayerCaptionsTracklistRenderer
 */
export declare const PlayerCaptionsTracklistRenderer: PlayerCaptionsTracklistRenderer$Type;
declare class CaptionTracks$Type extends MessageType<CaptionTracks> {
    constructor();
}
/**
 * @generated MessageType for protobuf message CaptionTracks
 */
export declare const CaptionTracks: CaptionTracks$Type;
declare class AudioTracks$Type extends MessageType<AudioTracks> {
    constructor();
}
/**
 * @generated MessageType for protobuf message AudioTracks
 */
export declare const AudioTracks: AudioTracks$Type;
declare class TranslationLanguages$Type extends MessageType<TranslationLanguages> {
    constructor();
}
/**
 * @generated MessageType for protobuf message TranslationLanguages
 */
export declare const TranslationLanguages: TranslationLanguages$Type;
declare class Name$Type extends MessageType<Name> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Name
 */
export declare const Name: Name$Type;
declare class Runs$Type extends MessageType<Runs> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Runs
 */
export declare const Runs: Runs$Type;
export {};

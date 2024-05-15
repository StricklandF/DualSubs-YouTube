import _ from './ENV/Lodash.mjs'
import $Storage from './ENV/$Storage.mjs'
import ENV from "./ENV/ENV.mjs";

import Database from "./database/index.mjs";
import setENV from "./function/setENV.mjs";
import setCache from "./function/setCache.mjs";
import setCaptions from "./function/setCaptions.mjs";

import { WireType, UnknownFieldHandler, reflectionMergePartial, MESSAGE_TYPE, MessageType, BinaryReader, isJsonObject, typeofJsonValue, jsonWriteOptions } from "../node_modules/@protobuf-ts/runtime/build/es2015/index.js";

const $ = new ENV("🍿 DualSubs: ▶ YouTube v1.2.0(1004) response.beta");

/***************** Processing *****************/
// 解构URL
const url = new URL($request.url);
$.log(`⚠ url: ${url.toJSON()}`, "");
// 获取连接参数
const METHOD = $request.method, HOST = url.hostname, PATH = url.pathname;
$.log(`⚠ METHOD: ${METHOD}, HOST: ${HOST}, PATH: ${PATH}` , "");
// 解析格式
const FORMAT = ($response.headers?.["Content-Type"] ?? $response.headers?.["content-type"])?.split(";")?.[0];
$.log(`⚠ FORMAT: ${FORMAT}`, "");
!(async () => {
	// 读取设置
	const { Settings, Caches, Configs } = setENV("DualSubs", "YouTube", Database);
	$.log(`⚠ Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case true:
		default:
			// 获取字幕类型与语言
			const Type = url.searchParams.get("subtype") ?? Settings.Type, Languages = [url.searchParams.get("lang")?.toUpperCase?.() ?? Settings.Languages[0], (url.searchParams.get("tlang") ?? Caches?.tlang)?.toUpperCase?.() ?? Settings.Languages[1]];
			$.log(`⚠ Type: ${Type}, Languages: ${Languages}`, "");
			// 创建空数据
			let body = { "captions": { "playerCaptionsTracklistRenderer": { "captionTracks": [], "audioTracks": [], "translationLanguages": [] } } };
			// 格式判断
			switch (FORMAT) {
				case undefined: // 视为无body
					break;
				case "application/x-www-form-urlencoded":
				case "text/plain":
				default:
					break;
				case "application/x-mpegURL":
				case "application/x-mpegurl":
				case "application/vnd.apple.mpegurl":
				case "audio/mpegurl":
					//body = M3U8.parse($response.body);
					//$.log(`🚧 body: ${JSON.stringify(body)}`, "");
					//$response.body = M3U8.stringify(body);
					break;
				case "text/xml":
				case "text/html":
				case "text/plist":
				case "application/xml":
				case "application/plist":
				case "application/x-plist":
					//body = XML.parse($response.body);
					//$.log(`🚧 body: ${JSON.stringify(body)}`, "");
					//$response.body = XML.stringify(body);
					break;
				case "text/vtt":
				case "application/vtt":
					//body = VTT.parse($response.body);
					//$.log(`🚧 body: ${JSON.stringify(body)}`, "");
					//$response.body = VTT.stringify(body);
					break;
				case "text/json":
				case "application/json":
					body = JSON.parse($response.body ?? "{}");
					switch (PATH) {
						case "/youtubei/v1/player":
							// 找功能
							if (body?.captions) { // 有基础字幕
								$.log(`⚠ Captions`, "");
								// 有播放器字幕渲染器
								if (body?.captions.playerCaptionsRenderer) {
									body.captions.playerCaptionsRenderer.visibility = "ON" // 字幕选项按钮可见
									body.captions.playerCaptionsRenderer.showAutoCaptions = true; // 包含自动生成的字幕
								}
								// 有播放器字幕列表渲染器
								if (body?.captions?.playerCaptionsTracklistRenderer) {
									$.log(`⚠ Tracklist`, "");
									if (body?.captions?.playerCaptionsTracklistRenderer?.captionTracks) {
										// 改字幕可用性
										body.captions.playerCaptionsTracklistRenderer.captionTracks = body?.captions?.playerCaptionsTracklistRenderer.captionTracks.map(caption => {
											caption.isTranslatable = true;
											return caption;
										});
									};
									// 增加自动翻译可用语言
									switch (HOST) {
										case "www.youtube.com":
										case "tv.youtube.com":
										default:
											body.captions.playerCaptionsTracklistRenderer.translationLanguages = Configs.translationLanguages.DESKTOP;
											break;
										case "m.youtube.com":
										case "youtubei.googleapis.com":
											body.captions.playerCaptionsTracklistRenderer.translationLanguages = Configs.translationLanguages.MOBILE;
											break;
									};
								};
							};
							break;
						case "/youtubei/v1/browse":
							break;
					};
					$response.body = JSON.stringify(body);
					break;
				case "application/protobuf":
				case "application/x-protobuf":
				case "application/vnd.google.protobuf":
				case "application/grpc":
				case "application/grpc+proto":
				case "application/octet-stream":
					//$.log(`🚧 $response: ${JSON.stringify($response, null, 2)}`, "");
					let rawBody = $.isQuanX() ? new Uint8Array($response.bodyBytes ?? []) : $response.body ?? new Uint8Array();
					//$.log(`🚧 isBuffer? ${ArrayBuffer.isView(rawBody)}: ${JSON.stringify(rawBody)}`, "");
					switch (FORMAT) {
						case "application/protobuf":
						case "application/x-protobuf":
						case "application/vnd.google.protobuf":
							switch (PATH) {
								case "/youtubei/v1/get_watch":
								case "/youtubei/v1/player":
									/******************  initialization start  *******************/
									// proto/player.response.proto
									class Player$Type extends MessageType {
										constructor() {
											super("Player", [
												{ no: 10, name: "captions", kind: "message", T: () => Captions }
											]);
										}
									};
									const Player = new Player$Type();
									class Captions$Type extends MessageType {
										constructor() {
											super("Captions", [
												{ no: 51621377, name: "playerCaptionsTracklistRenderer", kind: "message", T: () => PlayerCaptionsTracklistRenderer }
											]);
										}
									};
									const Captions = new Captions$Type();
									class PlayerCaptionsTracklistRenderer$Type extends MessageType {
										constructor() {
											super("PlayerCaptionsTracklistRenderer", [
												{ no: 1, name: "captionTracks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CaptionTracks },
												{ no: 2, name: "audioTracks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AudioTracks },
												{ no: 3, name: "translationLanguages", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TranslationLanguages },
												{ no: 4, name: "defaultAudioTrackIndex", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
												{ no: 6, name: "defaultCaptionTrackIndex", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
											]);
										}
									};
									const PlayerCaptionsTracklistRenderer = new PlayerCaptionsTracklistRenderer$Type();
									class CaptionTracks$Type extends MessageType {
										constructor() {
											super("CaptionTracks", [
												{ no: 1, name: "baseUrl", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
												{ no: 2, name: "name", kind: "message", T: () => Name },
												{ no: 3, name: "vssId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
												{ no: 4, name: "languageCode", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
												{ no: 5, name: "kind", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
												{ no: 6, name: "rtl", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
												{ no: 7, name: "isTranslatable", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
											]);
										}
									};
									const CaptionTracks = new CaptionTracks$Type();
									class AudioTracks$Type extends MessageType {
										constructor() {
											super("AudioTracks", [
												{ no: 2, name: "captionTrackIndices", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ },
												{ no: 3, name: "defaultCaptionTrackIndex", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
												{ no: 4, name: "forcedCaptionTrackIndex", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
												{ no: 5, name: "visibility", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
												{ no: 6, name: "hasDefaultTrack", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
												{ no: 7, name: "hasForcedTrack", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
												{ no: 8, name: "audioTrackId", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
												{ no: 11, name: "captionsInitialState", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
											]);
										}
									};
									const AudioTracks = new AudioTracks$Type();
									class TranslationLanguages$Type extends MessageType {
										constructor() {
											super("TranslationLanguages", [
												{ no: 1, name: "languageCode", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
												{ no: 2, name: "languageName", kind: "message", T: () => Name }
											]);
										}
									};
									const TranslationLanguages = new TranslationLanguages$Type();
									class Name$Type extends MessageType {
										constructor() {
											super("Name", [
												{ no: 1, name: "runs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Runs }
											]);
										}
									};
									const Name = new Name$Type();
									class Runs$Type extends MessageType {
										constructor() {
											super("Runs", [
												{ no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
											]);
										}
									};
									const Runs = new Runs$Type();
									/******************  initialization finish  *******************/
									switch (PATH) {
										case "/youtubei/v1/get_watch":
											/******************  initialization start  *******************/
											// get_watch.response.proto
											class PlayerResponse$Type extends MessageType {
												constructor() {
													super("PlayerResponse", [
														{ no: 1, name: "playerResponse", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlayerResponse },
														{ no: 2, name: "playerData", kind: "message", T: () => Player },
														{ no: 3, name: "playerConfig", kind: "message", T: () => Player },
														{ no: 7, name: "playerAds", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
														{ no: 10, name: "adPlacements", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
													]);
												}
											}
											const PlayerResponse = new PlayerResponse$Type();
											/******************  initialization finish  *******************/
											body = PlayerResponse.fromBinary(rawBody);
											$.log(`🚧 body: ${JSON.stringify(body)}`, "");
											if (body?.playerResponse?.[0]?.playerData?.captions) body.playerResponse[0].playerData.captions = setCaptions(body.playerResponse[0].playerData.captions, Configs.translationLanguages);
											rawBody = PlayerResponse.toBinary(body);
											break;
										case "/youtubei/v1/player":
											body = Player.fromBinary(rawBody);
											$.log(`🚧 body: ${JSON.stringify(body)}`, "");
											let UF = UnknownFieldHandler.list(body?.streamingData?.adaptiveFormats[body?.streamingData?.adaptiveFormats?.length - 2]);
											$.log(`🚧 UF: ${JSON.stringify(UF)}`, "");
											if (UF) {
												UF = UF.map(uf => {
													//uf.no; // 22
													//uf.wireType; // WireType.Varint
													// use the binary reader to decode the raw data:
													let reader = new BinaryReader(uf.data);
													let addedNumber = reader.int32(); // 7777
													$.log(`🚧 no: ${uf.no}, wireType: ${uf.wireType}, reader: ${reader}, addedNumber: ${addedNumber}`, "");
												});
											};
											if (body?.captions) body.captions = setCaptions(body.captions, Configs.translationLanguages);
											rawBody = Player.toBinary(body);
											break;
									};
									break;
								case "/youtubei/v1/browse":
									break;
							};
							break;
						case "application/grpc":
						case "application/grpc+proto":
							break;
					};
					// 写入二进制数据
					$response.body = rawBody;
					break;
			};
			break;
		case false:
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done($response))

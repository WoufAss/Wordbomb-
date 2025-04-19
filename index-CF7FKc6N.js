const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/firebase-4EStdJ18.js", "assets/firebase-CzEjhAzx.js", "assets/@firebase-CPyV8_nR.js", "assets/idb-CFK1l90-.js", "assets/tslib-Cv3dJDD7.js"]))) => i.map(i => d[i]);
import {T as e, E as t, e as a} from "./@tweenjs-BM5x-qg6.js";
import {D as n, a as o, P as i} from "./@discord-DApdPhlU.js";
import {l as s} from "./colyseus.js-Yo1bpHwn.js";
import {B as r} from "./pixi-sound-CpXygov9.js";
import {u as d} from "./@colyseus-BMtxoHVo.js";
import "./ws-DLAd0t_s.js";
import "./httpie-Ciu2wjGX.js";
import "./@pixi-C14PRfc3.js";
import "./resource-loader-KrU8_pxR.js";
import "./parse-uri-CJ9KG51d.js";
import "./mini-signals-BvbpPWm4.js";
import "./ismobilejs-C35GVanF.js";
import "./earcut-BmJ_9fSM.js";
import "./url-C1T0GDlm.js";
import "./punycode-B6VZmn48.js";
import "./qs-CFJwZBKm.js";
import "./side-channel-Du8un_N8.js";
import "./get-intrinsic-C6hPflNg.js";
import "./es-errors-Bza6HHKb.js";
import "./has-symbols-BjfDv0FJ.js";
import "./has-proto-DxUgyt-t.js";
import "./function-bind-Ckw9YnhN.js";
import "./hasown-CiSk4rfU.js";
import "./call-bind-CJsJoro7.js";
import "./set-function-length-D1uMabyh.js";
import "./define-data-property-Bw3rpQ48.js";
import "./es-define-property-BM4BoV8-.js";
import "./gopd-Cr_Wyw0h.js";
import "./has-property-descriptors-jEDxcDWN.js";
import "./object-inspect-BFxx7sGB.js";
!function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            t(e);
        new MutationObserver((e => {
            for (const a of e)
                if ("childList" === a.type)
                    for (const e of a.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }
        )).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function t(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin",
            t
        }(e);
        fetch(e.href, t)
    }
}();
var l = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
const c = "1266394578702041119"
  , m = new URLSearchParams(window.location.search)
  , u = null != m.get("frame_id");
let p;
if (u)
    p = new n(c);
else {
    let e, t = function(e) {
        const t = m.get(e);
        if (null != t)
            return t;
        const a = sessionStorage.getItem(e);
        if (null != a)
            return a;
        const n = Math.random().toString(36).slice(2, 10);
        return sessionStorage.setItem(e, n),
        n
    };
    (h = e || (e = {})).user_id = "user_id",
    h.guild_id = "guild_id",
    h.channel_id = "channel_id";
    const a = t("user_id")
      , n = t("guild_id")
      , i = Math.ceil(1e5 * Math.random()).toString(16);
    p = new o(c,n,i,"web");
    const s = String(a.charCodeAt(0) % 5);
    p._updateCommandMocks({
        authenticate: () => l(void 0, void 0, void 0, (function*() {
            return yield{
                access_token: "mock_token",
                user: {
                    username: a,
                    discriminator: s,
                    id: a,
                    avatar: null,
                    public_flags: 1
                },
                scopes: [],
                expires: new Date(2112,1,1).toString(),
                application: {
                    description: "mock_app_description",
                    icon: "mock_app_icon",
                    id: "mock_app_id",
                    name: "mock_app_name"
                }
            }
        }
        ))
    })
}
var h;
const v = new s.Client("https://server.wordbomb.io")
  , g = {}
  , y = function(e, t, a) {
    let n = Promise.resolve();
    if (t && t.length > 0) {
        document.getElementsByTagName("link");
        const e = document.querySelector("meta[property=csp-nonce]")
          , a = (null == e ? void 0 : e.nonce) || (null == e ? void 0 : e.getAttribute("nonce"));
        n = Promise.allSettled(t.map((e => {
            if ((e = function(e) {
                return "/" + e
            }(e))in g)
                return;
            g[e] = !0;
            const t = e.endsWith(".css")
              , n = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${n}`))
                return;
            const o = document.createElement("link");
            return o.rel = t ? "stylesheet" : "modulepreload",
            t || (o.as = "script"),
            o.crossOrigin = "",
            o.href = e,
            a && o.setAttribute("nonce", a),
            document.head.appendChild(o),
            t ? new Promise(( (t, a) => {
                o.addEventListener("load", t),
                o.addEventListener("error", ( () => a(new Error(`Unable to preload CSS for ${e}`))))
            }
            )) : void 0
        }
        )))
    }
    function o(e) {
        const t = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    return n.then((t => {
        for (const e of t || [])
            "rejected" === e.status && o(e.reason);
        return e().catch(o)
    }
    ))
};
var b = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
function f() {
    return b(this, void 0, void 0, (function*() {
        if (!u) {
            const n = window.location.href
              , o = new URLSearchParams(new URL(n).search).get("code")
              , i = localStorage.getItem("dc_refresh");
            if (o)
                try {
                    const {data: a} = yield v.http.post("/discord_token", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            code: o
                        })
                    });
                    if (!a.access_token)
                        throw localStorage.removeItem("dc_refresh"),
                        new Error("No access token received from backend.");
                    if (a.refresh_token && localStorage.setItem("dc_refresh", a.refresh_token),
                    window.history && window.history.replaceState) {
                        var e = window.location.href;
                        if (e.indexOf("code=") > -1) {
                            var t = e.replace("?code=" + e.split("?code=")[1], "");
                            window.history.replaceState({}, "", t)
                        }
                    }
                    return a
                } catch (a) {
                    throw a && a.response && [400, 401, 403].includes(a.response.status) && localStorage.removeItem("dc_refresh"),
                    new Error("Failed to exchange authorization code.")
                }
            else if (i)
                try {
                    const {data: e} = yield v.http.post("/discord_token", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            refresh_token: i
                        })
                    });
                    if (!e.access_token)
                        throw localStorage.removeItem("dc_refresh"),
                        new Error("Failed to refresh access token.");
                    return e.refresh_token && localStorage.setItem("dc_refresh", e.refresh_token),
                    e
                } catch (a) {
                    throw a && a.response && [400, 401, 403].includes(a.response.status) && localStorage.removeItem("dc_refresh"),
                    new Error("Cache error. Please try again.")
                }
        }
        try {
            yield p.ready();
            const {code: e} = yield p.commands.authorize({
                client_id: c,
                response_type: "code",
                state: "",
                prompt: "none",
                scope: ["identify", "guilds", "guilds.members.read", "rpc.activities.write"]
            })
              , {data: t} = yield v.http.post("/discord_token", {
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: e
                })
            });
            if (!t.access_token)
                throw new Error("No access token received from backend.");
            return t.refresh_token && "mock_refresh_token" != t.refresh_token && localStorage.setItem("dc_refresh", t.refresh_token),
            yield p.commands.authenticate({
                access_token: t.access_token
            }),
            t
        } catch (a) {
            throw new Error("Failed to authenticate in embedded mode.")
        }
    }
    ))
}
var w = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class _ {
    static loadAssets() {
        return w(this, void 0, void 0, (function*() {
            const e = [{
                alias: "yourturn",
                src: "sound/your-turn.mp3"
            }, {
                alias: "newheart",
                src: "sound/newheart.mp3"
            }, {
                alias: "emoji",
                src: "sound/emoji.mp3"
            }, {
                alias: "joined",
                src: "sound/joined.mp3"
            }, {
                alias: "fuse",
                src: "sound/fuse.mp3"
            }, {
                alias: "wrong",
                src: "sound/wrong.mp3"
            }, {
                alias: "change_player",
                src: "sound/change_player.mp3"
            }, {
                alias: "winner",
                src: "sound/winner.mp3"
            }, {
                alias: "unlocked",
                src: "sound/unlocked.mp3"
            }, {
                alias: "diamond",
                src: "sound/diamond.mp3"
            }, {
                alias: "clock",
                src: "sound/clock.mp3"
            }, {
                alias: "bombthread",
                src: "sound/bombthread.mp3"
            }, {
                alias: "button",
                src: "sound/button.mp3"
            }, {
                alias: "countdown",
                src: "sound/countdown.mp3"
            }, {
                alias: "countdown-6",
                src: "sound/countdown-6.mp3"
            }, {
                alias: "eliminated",
                src: "sound/eliminated.mp3"
            }, {
                alias: "explosion",
                src: "sound/explosion.mp3"
            }, {
                alias: "tensionrising",
                src: "sound/tensionrising.mp3"
            }, {
                alias: "do",
                src: "sound/notes/do.mp3"
            }, {
                alias: "re",
                src: "sound/notes/re.mp3"
            }, {
                alias: "mi",
                src: "sound/notes/mi.mp3"
            }, {
                alias: "fa",
                src: "sound/notes/fa.mp3"
            }, {
                alias: "so",
                src: "sound/notes/so.mp3"
            }, {
                alias: "la",
                src: "sound/notes/la.mp3"
            }, {
                alias: "si",
                src: "sound/notes/si.mp3"
            }, {
                alias: "do2",
                src: "sound/notes/do2.mp3"
            }, {
                alias: "success",
                src: "sound/notes/success.mp3"
            }, {
                alias: "coin",
                src: "sound/coin.mp3"
            }, {
                alias: "gameends",
                src: "sound/gameends.mp3"
            }, {
                alias: "looser",
                src: "sound/looser.mp3"
            }, {
                alias: "unlock",
                src: "sound/unlock.mp3"
            }, {
                alias: "key",
                src: "sound/key.mp3"
            }, {
                alias: "bomb",
                src: "sound/bomb.mp3"
            }, {
                alias: "hit",
                src: "sound/hit.mp3"
            }, {
                alias: "monster_die",
                src: "sound/monster_die.mp3"
            }, {
                alias: "combo-6",
                src: "sound/combo6.mp3"
            }, {
                alias: "chat",
                src: "sound/chat.mp3"
            }, {
                alias: "writtenbefore",
                src: "sound/writtenbefore.mp3"
            }];
            for (const t of e)
                r.add(t.alias, t.src)
        }
        ))
    }
}
var C = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class E {
    constructor(e) {
        this.loaded = !1,
        this.url = e
    }
    close() {
        this.container && (this.container.remove(),
        this.container = void 0,
        this.loaded = !1,
        this.removeListener && this.removeListener(),
        this.removeListener2 && this.removeListener2(),
        this.removeListener3 && this.removeListener3(),
        this.timeout && clearTimeout(this.timeout)),
        this.keyEvent && document.removeEventListener("keydown", this.keyEvent)
    }
    load() {
        return C(this, void 0, void 0, (function*() {
            if (this.loaded)
                return;
            const e = yield fetch(this.url)
              , t = yield e.text();
            this.container = document.createElement("div"),
            this.container.innerHTML = t,
            document.body.appendChild(this.container),
            this.loaded = !0
        }
        ))
    }
    getAsDiv() {
        return C(this, void 0, void 0, (function*() {
            const e = yield fetch(this.url)
              , t = yield e.text();
            var a = document.createElement("div");
            return a.innerHTML = t,
            a
        }
        ))
    }
}
class L {
    static addListener(e) {
        this.localeChangeListeners.push(e)
    }
    static removeListener(e) {
        this.localeChangeListeners = this.localeChangeListeners.filter((t => t !== e))
    }
    static setLocale(e) {
        this.locale !== e && (this.locale = e,
        this.notifyLocaleChange(e))
    }
    static notifyLocaleChange(e) {
        for (const t of this.localeChangeListeners)
            t(e)
    }
    static getWord(e) {
        return (this.wordsByLocale[this.locale] || this.wordsByLocale[this.defaultLocale])[e] || this.wordsByLocale[this.defaultLocale][e] || `Key "${e}" not found.`
    }
    static getWordParams(e, t) {
        return this.getWord(e).replace("{0}", t.toString())
    }
    static getWordLocale(e, t) {
        return (this.wordsByLocale[t] || this.wordsByLocale[this.defaultLocale])[e] || this.wordsByLocale[this.defaultLocale][e] || `Key "${e}" not found.`
    }
}
L.defaultLocale = "en-US",
L.locale = L.defaultLocale,
L.wordsByLocale = {
    "en-US": {
        choose_language: "Choose a language",
        play: "Start",
        type_word: "Type a word that contains the given letters",
        loading: "Loading...",
        join_discord: "Join our Discord to see all the words you've typed so far and more!",
        needs_players: "At least 2 players\nare needed to start the game",
        longest_word: "Longest word",
        popup_title: "Heads Up!",
        popup_description: "This game is designed for more than one player. Are you sure you want to play solo?",
        discord_promotion: "Need someone to play with? Join our Discord and find a friend!",
        your_turn: "YOUR TURN",
        solo_mode_info: "In single-player mode, you can earn a maximum of 10 points per round.",
        no_button: "Cancel",
        yes_button: "Play",
        coming_soon: "Coming soon!",
        popular: "Popular",
        best_offer: "Best Offer",
        close: "Close",
        owned: "Owned",
        ok: "OK",
        not_enough_gold: "Not enough gold",
        not_enough_diamonds: "Not enough diamonds",
        error: "Error",
        market: "Market",
        theme: "Theme",
        avatars: "Avatars",
        settings: "Settings",
        master_volume: "Effects",
        bomb_ticking_volume: "Bomb Ticking Volume",
        coin: "Coin",
        win: "Win",
        level: "Level",
        leaderboard: "Leaderboard",
        enter_code: "Enter code",
        redeem: "Redeem",
        redeem_code: "Redeem a code if you have one. Join our Discord for free codes!",
        already_used: "You have already used this code.",
        code_not_exist: "This code does not exist.",
        too_many_requests: "Too many requests. Please try again later.",
        reedem_success: "Code redeemed successfully!",
        success: "Success",
        purchase_success: "Purchase successful! Thank you for helping us develop the game.",
        support_us: "Your contribution helps us improve and expand the game for everyone. Also you can get exclusive bombs, avatars and themes.",
        loading_user_data: "Loading user data...",
        achievements: "Achievements🏅",
        claim: "Claim",
        claimed: "Claimed",
        in_progress: "In Progress",
        type_100_word: "Submit 100 correct words.",
        type_500_word: "Submit 500 correct words.",
        type_1000_word: "Submit 1000 correct words.",
        type_5000_word: "Submit 5000 correct words.",
        win_10_times: "Win 10 games with at least 2 players.",
        win_50_times: "Win 50 games with at least 2 players.",
        win_100_times: "Win 100 games with at least 2 players.",
        win_250_times: "Win 250 games with at least 2 players.",
        play_20_times: "Play 20 times.",
        play_100_times: "Play 100 times.",
        play_200_times: "Play 200 times.",
        play_500_times: "Play 500 times.",
        longer_word_8: "Submit a word longer than 8 characters.",
        longer_word_12: "Submit a word longer than 12 characters.",
        longer_word_16: "Submit a word longer than 16 characters.",
        longer_word_24: "Submit a word longer than 24 characters.",
        play_2_players: "Play with at least 2 players.",
        play_4_players: "Play with at least 4 players.",
        play_6_players: "Play with at least 6 players.",
        play_8_players: "Play with at least 8 players.",
        earn_1000_score: "Have 1,000 coins.",
        earn_10000_score: "Have 10,000 coins.",
        earn_100000_score: "Have 100,000 coins.",
        earn_500000_score: "Have 500,000 coins.",
        earn_1000000_score: "Have 1,000,000 coins.",
        unlock_theme_3: "Have a total of 3 themes.",
        unlock_theme_5: "Have a total of 5 themes.",
        unlock_theme_10: "Have a total of 10 themes.",
        unlock_bomb_3: "Have a total of 3 bombs.",
        unlock_bomb_5: "Have a total of 5 bombs.",
        unlock_bomb_10: "Have a total of 10 bombs.",
        enter_discord_code: "Enter the Discord code.",
        shop_not_supported_on_mobile: "Shop is not supported on mobile devices. Please use a desktop to access the shop.",
        its_nice_to_see_you_here: "It's nice to see you here...",
        kh: "KH",
        original_mode: "Original",
        original_mode_desct: "Guess any word that contains the given letters.",
        chain_word_mode: "Chain Word",
        chain_word_desct: "Type a word that starts with the last letter of the previous word.",
        guess_word_mode: "Guess Word",
        guess_word_desct: "Guess the word",
        translation_mode: "Translation",
        translation_desct: "Translate the given words to choosen language.",
        mode_not_supported_in_language: "This mode is not fully supported in this language yet, but it will be available soon.",
        gamemode_beta_info: "Game modes are in beta, with new ones coming soon! Report bugs or suggestions on our Discord.",
        animated: "Animated",
        join: "Join",
        create_room: "Create Room",
        only_host_can_change: "Only the host can change the room settings.",
        only_host_can_start: "Only the host can start the game.",
        leave_room: "Leave",
        normal: "Normal",
        challenge: "Challenging",
        room_private_info: "Room is now private. Only the same voice channel members join the room.",
        room_public_info: "Room is now public. Anyone can join the room.",
        public: "Public",
        private: "Private",
        rooms: "Rooms",
        shop: "Shop",
        backgrounds: "Backgrounds",
        bombs: "Bombs",
        ban: "Ban",
        music_volume: "Music Volume",
        chatCooldown: "Please slow down! You can send a message every 1 seconds.",
        spectate: "Spectate",
        spectators: "Spectators",
        no_player_error: "At least 1 player is needed to start the game.",
        room_started_info: "You will join the game after the current game ends.",
        game_full: "Game is full. You can spectate the game.",
        joined_room: "{0} joined the room.",
        team_mode: "Team Mode",
        team_mode_desct: "Two teams face off—eliminate the other team to win. Teamwork is key!",
        team_error: "You need at least 1 player in each team to start the game.",
        multi: "Multi Word",
        cant_chat_guest: "You can't chat as a guest. Please login to chat.",
        written_before: "Written before",
        discord: "Join Discord!",
        correct_words: "Correct Words",
        wrong_words: "Wrong Words",
        collected_coins: "Collected Gold",
        skip: "Skip",
        back: "Back",
        speed_desct: "Speed of the game",
        heart_desct: "Number of hearts player starts",
        difficulty_desct: "Difficulty, which will affect words and your score",
        max_player_desct: "Maximum number of players can play in the room",
        guests_desct: "Allow or block guests to join the room",
        speed: "Speed",
        difficulty: "Difficulty",
        heart: "Heart",
        max_player: "Max Player",
        guests: "Guests",
        allowed: "Allowed",
        not_allowed: "Not Allowed",
        no_limit: "No Limit",
        translation: "Translation",
        translation_mode_info: "Change the translation language in the game settings",
        type_racer: "Typing Race",
        type_racer_desct: "Type the given words as fast as you can",
        cannot_kick_game_started: "You can't kick a player after the game has started.",
        wpp: "WPP",
        default: "Default",
        language: "Language",
        game_mode: "Game Mode",
        length_error: "Room name must be between 3 and 32 characters.",
        room_title: "Room Title",
        save: "Save",
        room_title_desct: "Room title will be shown in the room list. (Be aware choosing inappropriate names will get you banned.)",
        level_too_low: "You need to be at least level 20 to change room titles.",
        not_enough_exp: "You need to be at least level 10 level for this.",
        news: "About",
        rp: "RP",
        casual: "Casual",
        mode: "Mode",
        inactive: "Inactive",
        active: "Active",
        rp_title: "Rank Points",
        rp_desct: "When it's active, you'll earn rank points for winning and lose rank points for losing.",
        on: "On",
        off: "Off",
        zoom: "Zoom",
        new: "New",
        limited_words: "Limited Length",
        limited_words_desct: "You can only submit words that match the specified length limit.",
        wpp_desct: "How common should the syllable prompts be?",
        at_least: "At least",
        at_most: "At most",
        reach_elo: "Reach {0} RP",
        report: "Report",
        end_game: "End Game",
        unlock: "Unlock",
        key: "Key",
        key_info: "Keys are sometimes dropped upon entering a word, or you can buy them in the shop. Keys are used to unlock chests.",
        not_enough_key: "Not enough keys",
        discoverer: "Discoverer",
        daily_word: "Daily Word",
        frame: "Frame",
        kick: "Kick",
        room_code: "Room Code",
        room_code_copied: "Room code copied to clipboard.",
        host_transfer: "Give Host",
        cooldown: "Please slow down...",
        monsters: "Monsters",
        monsters_desct: "Defeat the unique monsters, each with different prompts—or create your own!",
        vegetable: "Any vegetable",
        fruit: "Any fruit",
        short_word: "A word with fewer than 4 characters",
        long_word: "A word longer than the character limit",
        ends_with: "A word that ends with",
        starts_with: "A word that starts with",
        "💩": "💩",
        double_letter: "A word with double letters",
        reverse: "Type the word in reverse order",
        aaaa: "Type AAAA...",
        ranked: "Ranked",
        auto_join: "Automatically join when the game ends",
        user: "Description not provided",
        invalid_monsters: "Choose at least 1 monster",
        left_room: "{0} left the room.",
        kicked: "{0} has been kicked from the room.",
        space_hypen: "Space key behaves like a hyphen",
        search: "Search",
        ctrl_a_deletes: "Ctrl+A deletes the word",
        disable_red_flash: "Disable the flash when a submitted word is incorrect",
        display_name_length: "Display name must be between 2 and 24 characters.",
        display_name: "Display Name",
        status_word: "Status Word",
        status_word_desct: "You can only change it to a word you own.",
        practice: "Practice",
        practice_desc: "Practice your vocabulary skills. A correct answer will be shown if you can't guess the word in time.",
        words: "Words",
        multi_lang: "Multi Language",
        multi_lang_desct: "Allow players to select their language in the room",
        notification: "Notification",
        notification_sound: "Notification Sound",
        mastered: "Mastered",
        "in-progress": "In Progress",
        climb: "Climb",
        climb_desct: "Challenge your vocabulary skills by climbing--it gets harder as you climb!",
        never_close_keyboard: "Never close the keyboard after submitting a word.",
        bonus_alphabet: "Heart Regen",
        letter_description: "You'll regen a heart when you complete these letters.",
        easy: "Easy",
        hard: "Hard",
        increase_all: "Increase All",
        decrease_all: "Decrease All",
        players: "Players",
        "sc-no-fail": "Players are not allowed to make any mistakes.They will be eliminated instantly.",
        "sc-win-heart-gain": "The player will win after gaining the specified number of hearts.",
        "sc-win-on-streak": "The player will win after reaching a specified combo streak.",
        "sc-loose-heart-on-submit": "Players cannot submit a word shorter or longer than the specified length.",
        "sc-loose-on-wrong-submit": "The player will lose if they submit a set number of incorrect words.",
        "sc-single-prompt": "Players will be given a single prompt to type.",
        "sc-submit-word-win": "Player will win if they submit a word containing the specified word",
        "sc-win-diamond-drop": "Player will win after specified number of diamond drops",
        "sc-win-key-drop": "Player will win after specified number of key drops",
        "sc-submit-limitation-word": "Player needs to submit a word including or excluding the specified word",
        "sc-no-fail-title": "No Fail",
        "sc-win-heart-gain-title": "Win on Heart Gain",
        "sc-win-on-streak-title": "Win on Streak",
        "sc-loose-heart-on-submit-title": "Lose Heart On Submit",
        "sc-loose-on-wrong-submit-title": "Lose On Wrong Submit",
        "sc-single-prompt-title": "Single Prompt",
        "sc-submit-word-win-title": "Submit Word Win",
        "sc-win-diamond-drop-title": "Win Diamond Drop",
        "sc-win-key-drop-title": "Win Key Drop",
        "sc-submit-limitation-word-title": "Submit Limitation Word",
        "sc-category-scenario-title": "Category",
        "sc-category-scenario": "You can only submit words that belong to the selected category.",
        scenarios: "Scenarios",
        "custom-scenario": "Custom Scenario",
        "custom-scenario-desct": "Create your own scenario with your own rules.",
        "no-fail-preset": "No Fail",
        "no-fail-preset-desct": "Players are not allowed to make any mistakes. They'll eliminate instantly.",
        "single-prompt-preset": "Single Prompt",
        "single-prompt-preset-desct": "Players will be given a single prompt to type.",
        "only-three-mistake-preset": "Only Two Mistake",
        "only-three-mistake-preset-desct": "Players will be eliminated after the third mistake.",
        "long-word-preset": "Size Matters",
        "long-word-preset-desct": "Players need to submit a word longer than the 8 character.",
        phobias: "Phobias",
        constellations: "Constellations",
        minerals: "Minerals",
        creatures: "Creatures",
        foods: "Foods",
        plants: "Plants",
        interjections: "Interjections",
        languages: "Languages",
        instruments: "Instruments",
        ethnonyms: "Ethnonyms",
        free: "Free",
        hypens: "Hyphens",
        apostrophes: "Apostrophes",
        longs: "Longs",
        wordbet: "Wordbet",
        wordbet_desct: "Bet fights!",
        chemicals: "Chemicals",
        diseases: "Diseases",
        word: "Word",
        trade: "Community",
        word_not_claimed: "The word has not been discovered or claimed by you. Type this word to claim it.",
        adverbs: "Adverbs",
        match_history: "Match History",
        countries: "Countries",
        cities: "Cities",
        periodic: "Periodic table",
        completed_categories: "Completed Categories",
        pizza: "Pizza",
        "all-syllables-preset": "All Syllables",
        "all-syllables-preset-desct": "Type a solve for each syllable.",
        "exp-modifiers": "Experience modifiers affect how fast you level up.",
        buff_scenario: "Scenario",
        buff_scenario_desct: "Play any scenario.",
        buff_discord: "Discord Server",
        buff_discord_desct: "Launch the game from WordBomb's Discord server.",
        buff_mlang: "Multi-Language",
        buff_mlang_desct: "Play with multi-language enabled.",
        buff_public: "Play in public rooms.",
        buff_public_desct: "Play in public rooms with at least two players."
    },
    "pt-BR": {
        choose_language: "Escolha um idioma",
        play: "Jogar",
        type_word: "Digite uma palavra que contenha as letras dadas",
        loading: "Carregando...",
        join_discord: "Junte-se ao nosso Discord para relatar bugs e sugestões",
        needs_players: "Pelo menos 2 jogadores\nsão necessários para iniciar o jogo",
        longest_word: "Palavra mais longa",
        popup_title: "Aviso!",
        popup_description: "Este jogo é projetado para mais de um jogador. Tem certeza de que quer jogar sozinho?",
        discord_promotion: "Precisa de alguém para jogar? Junte-se ao nosso Discord e encontre um amigo!",
        your_turn: "SUA VEZ",
        solo_mode_info: "No modo de um jogador, você pode ganhar um máximo de 10 pontos por rodada. ",
        no_button: "Cancelar",
        yes_button: "Jogar",
        coming_soon: "Em breve!",
        popular: "Popular",
        best_offer: "Melhor Oferta",
        close: "Fechar",
        owned: "Possuído",
        ok: "OK",
        not_enough_gold: "Ouro insuficiente",
        not_enough_diamonds: "Diamantes insuficientes",
        error: "Erro",
        market: "Mercado",
        theme: "Tema",
        avatars: "Avatares",
        settings: "Configurações",
        master_volume: "Efeitos",
        bomb_ticking_volume: "Volume de Tique-taque da Bomba",
        coin: "Moeda",
        win: "Vitória",
        level: "Nível",
        leaderboard: "Tabela de Classificação",
        enter_code: "Digite o código",
        redeem: "Resgatar",
        redeem_code: "Resgate um código se você tiver um. Junte-se ao nosso Discord para mais códigos!",
        already_used: "Você já usou este código.",
        code_not_exist: "Este código não existe.",
        too_many_requests: "Muitas solicitações. Por favor, tente novamente mais tarde.",
        reedem_success: "Código resgatado com sucesso!",
        success: "Sucesso",
        purchase_success: "Compra bem-sucedida! Obrigado por nos ajudar a desenvolver o jogo.",
        support_us: "Nos apoie comprando diamantes. Sua contribuição nos ajuda a melhorar e expandir o jogo para todos. Além disso, você pode obter avatares e temas exclusivos.",
        loading_user_data: "Carregando dados do usuário...",
        achievements: "Conquistas🏅",
        claim: "Reivindicar",
        claimed: "Reivindicado",
        in_progress: "Em progresso",
        type_100_word: "Envie 100 palavras corretas.",
        type_500_word: "Envie 500 palavras corretas.",
        type_1000_word: "Envie 1000 palavras corretas.",
        type_5000_word: "Envie 5000 palavras corretas.",
        win_10_times: "Vença 10 partidas com pelo menos 2 jogadores.",
        win_50_times: "Vença 50 partidas com pelo menos 2 jogadores.",
        win_100_times: "Vença 100 partidas com pelo menos 2 jogadores.",
        win_250_times: "Vença 250 partidas com pelo menos 2 jogadores.",
        play_20_times: "Jogue 20 partidas.",
        play_100_times: "Jogue 100 partidas.",
        play_200_times: "Jogue 200 partidas.",
        play_500_times: "Jogue 500 partidas.",
        longer_word_8: "Envie uma palavra com mais de 8 caracteres.",
        longer_word_12: "Envie uma palavra com mais de 12 caracteres.",
        longer_word_16: "Envie uma palavra com mais de 16 caracteres.",
        longer_word_24: "Envie uma palavra com mais de 24 caracteres.",
        play_2_players: "Jogue uma partida com pelo menos 2 jogadores.",
        play_4_players: "Jogue uma partida com pelo menos 4 jogadores.",
        play_6_players: "Jogue uma partida com pelo menos 6 jogadores.",
        play_8_players: "Jogue uma partida com pelo menos 8 jogadores.",
        earn_1000_score: "Tenha 1.000 moedas.",
        earn_10000_score: "Tenha 10.000 moedas.",
        earn_100000_score: "Tenha 100.000 moedas.",
        earn_500000_score: "Tenha 500.000 moedas.",
        earn_1000000_score: "Tenha 1.000.000 moedas.",
        unlock_theme_3: "Tenha um total de 3 temas.",
        unlock_theme_5: "Tenha um total de 5 temas.",
        unlock_theme_10: "Tenha um total de 10 temas.",
        unlock_bomb_3: "Tenha um total de bombas 3.",
        unlock_bomb_5: "Tenha um total de bombas 5.",
        unlock_bomb_10: "Tenha um total de bombas 10.",
        enter_discord_code: "Digite o código do Discord.",
        shop_not_supported_on_mobile: "A loja não é suportada em dispositivos móveis. Por favor, use um desktop para acessar a loja.",
        its_nice_to_see_you_here: "É bom te ver aqui...",
        kh: "KH",
        original_mode: "Original",
        original_mode_desct: "Adivinhe qualquer palavra que contenha as letras dadas.",
        chain_word_mode: "Palavra Encadeada",
        chain_word_desct: "Digite uma palavra que comece com a última letra da palavra anterior.",
        guess_word_mode: "Adivinhe a Palavra",
        guess_word_desct: "Adivinhe a palavra",
        translation_mode: "Tradução",
        translation_desct: "Traduza as palavras dadas para o idioma escolhido.",
        mode_not_supported_in_language: "Este modo ainda não é totalmente suportado neste idioma, mas estará disponível em breve.",
        gamemode_beta_info: "Os modos de jogo estão em beta, com novos chegando em breve! Relate bugs ou sugestões em nosso Discord.",
        animated: "Animado",
        join: "Junte-se",
        create_room: "Criar Sala",
        only_host_can_change: "Apenas o anfitrião pode alterar as configurações da sala.",
        only_host_can_start: "Apenas o anfitrião pode iniciar o jogo.",
        leave_room: "Sair",
        normal: "Normal",
        challenge: "Desafiador",
        room_private_info: "A sala agora é privada. Apenas os membros do mesmo canal de voz podem entrar na sala.",
        room_public_info: "A sala agora é pública. Qualquer pessoa pode entrar na sala.",
        public: "Pública",
        private: "Privada",
        rooms: "Salas",
        shop: "Loja",
        backgrounds: "Fundo",
        bombs: "Bombas",
        ban: "Banir",
        music_volume: "Volume de Música",
        chatCooldown: "Por favor, desacelere! Você pode enviar uma mensagem a cada 1 segundo.",
        spectate: "Espectar",
        spectators: "Espectadores",
        no_player_error: "Pelo menos 1 jogador é necessário para iniciar o jogo.",
        room_started_info: "Você entrará no jogo após o término do jogo atual.",
        game_full: "O jogo está cheio. Você pode assistir ao jogo.",
        joined_room: "{0} entrou na sala.",
        team_mode: "Modo de Equipe",
        team_mode_desct: "Duas equipes se enfrentam - elimine a outra equipe para vencer. O trabalho em equipe é fundamental!",
        team_error: "Você precisa de pelo menos 1 jogador em cada equipe para iniciar o jogo.",
        multi: "Multi Palavra",
        cant_chat_guest: "Você não pode conversar como convidado. Por favor, faça login para conversar.",
        written_before: "Escrito antes",
        discord: "Junte-se ao Discord",
        correct_words: "Palavras Corretas",
        wrong_words: "Palavras Erradas",
        collected_coins: "Moedas Coletadas",
        skip: "Pular",
        back: "Voltar",
        speed_desct: "Velocidade do jogo",
        heart_desct: "Número de corações com os quais o jogador começa",
        difficulty_desct: "Dificuldade, que afetará as palavras e sua pontuação",
        max_player_desct: "Número máximo de jogadores que podem jogar na sala",
        guests_desct: "Permitir ou bloquear que convidados entrem na sala",
        speed: "Velocidade",
        difficulty: "Dificuldade",
        heart: "Coração",
        max_player: "Jogador Máximo",
        guests: "Convidados",
        allowed: "Permitido",
        not_allowed: "Não Permitido",
        no_limit: "Sem Limite",
        translation: "Tradução",
        translation_mode_info: "Altere o idioma de tradução nas configurações do jogo",
        type_racer: "Corrida de Digitação",
        type_racer_desct: "Digite as palavras dadas o mais rápido possível",
        cannot_kick_game_started: "Você não pode expulsar um jogador depois que o jogo começou.",
        default: "Padrão",
        language: "Idioma",
        game_mode: "Modo de Jogo",
        length_error: "O nome da sala deve ter entre 3 e 32 caracteres.",
        room_title: "Título da Sala",
        save: "Salvar",
        room_title_desct: "O título da sala será exibido na lista de salas. (Esteja ciente de que escolher nomes inadequados resultará em banimento.)",
        level_too_low: "Você precisa ter pelo menos o nível 20 para alterar os títulos das salas.",
        news: "Sobre",
        rp: "RP",
        casual: "Casual",
        mode: "Modo",
        inactive: "Inativo",
        active: "Ativo",
        rp_title: "Pontos de Classificação",
        rp_desct: "Quando está ativo, você ganhará pontos de classificação por vencer e perderá pontos de classificação por perder.",
        on: "Ligado",
        off: "Desligado",
        zoom: "Zoom",
        new: "Novo",
        limited_words: "Comprimento de Palavra Limitado",
        limited_words_desct: "Você só pode enviar palavras que correspondam ao limite de comprimento especificado.",
        wpp_desct: "Quão comuns devem ser as sílabas?",
        at_least: "Pelo menos",
        at_most: "No máximo",
        reach_elo: "Alcance {0} RP",
        report: "Reportar",
        end_game: "Encerrar Jogo",
        unlock: "Desbloquear",
        key: "Chave",
        key_info: "As chaves podem ser deixadas enquanto joga. Ou você pode comprá-los. Você pode usá-los para desbloquear baús.",
        not_enough_key: "Chaves insuficientes",
        discoverer: "Descobridor",
        kick: "Expulsar",
        room_code: "Código da Sala",
        room_code_copied: "Código da sala copiado para a área de transferência.",
        host_transfer: "Dar Anfitrião",
        cooldown: "Por favor, desacelere...",
        monsters: "Monstros",
        monsters_desct: "Derrote os monstros para vencer o jogo.",
        vegetable: "Qualquer vegetal",
        fruit: "Qualquer fruta",
        short_word: "Uma palavra com menos de 4 caracteres",
        long_word: "Uma palavra mais longa que o limite de caracteres",
        ends_with: "Uma palavra que termina com",
        starts_with: "Uma palavra que começa com",
        double_letter: "Uma palavra com letras duplas",
        reverse: "Digite a palavra na ordem inversa",
        aaaa: "Digite AAAAA...",
        ranked: "Classificado",
        auto_join: "Junte-se automaticamente quando o jogo terminar",
        left_room: "{0} saiu da sala.",
        kicked: "{0} foi expulso da sala.",
        space_hypen: "A tecla de espaço se comporta como um hífen",
        search: "Pesquisar",
        ctrl_a_deletes: "Ctrl+A deleta a palavra",
        disable_red_flash: "Desativar o flash vermelho quando a palavra enviada estiver errada",
        display_name_length: "O nome de exibição deve ter entre 2 e 24 caracteres.",
        practice: "Prática",
        practice_desc: "Pratique suas habilidades de vocabulário. Uma resposta correta será mostrada se você não conseguir adivinhar a palavra a tempo.",
        words: "Palavras",
        multi_lang: "Multi Idioma",
        multi_lang_desct: "Permitir que os jogadores selecionem seu idioma na sala",
        notification: "Notificação",
        notification_sound: "Som de Notificação",
        mastered: "Dominado",
        "in-progress": "Em Progresso",
        climb: "Subir",
        climb_desct: "Desafie suas habilidades de vocabulário subindo - fica mais difícil à medida que você sobe!",
        never_close_keyboard: "Nunca feche o teclado após enviar uma palavra.",
        bonus_alphabet: "Alfabeto de Coração",
        letter_description: "Você ganhará um coração quando completar essas letras.",
        easy: "Fácil",
        hard: "Difícil",
        increase_all: "Aumentar Todos",
        decrease_all: "Diminuir Todos",
        players: "Jogadores",
        hypens: "Hífens",
        apostrophes: "Apóstrofos",
        longs: "Longos",
        word_not_claimed: "Você não possui esta palavra.",
        match_history: "Histórico de Partidas",
        completed_categories: "Categorias Completas"
    },
    "tr-TR": {
        choose_language: "Bir dil seçin",
        play: "Oyna",
        type_word: "Verilen harfleri içeren bir kelime yazın",
        loading: "Yükle fniyor...",
        join_discord: "Hataları ve önerileri bildirmek için Discord'umuza katılın",
        needs_players: "Oyunu başlatmak için\nen az 2 oyuncuya ihtiyaç var",
        longest_word: "En uzun kelime",
        popup_title: "Dikkat!",
        popup_description: "Bu oyun birden fazla oyuncu için tasarlanmıştır. Yalnız oynamak istediğinize emin misiniz?",
        discord_promotion: "Oynamak için birine mi ihtiyacınız var? Discord'umuza katılın ve bir arkadaş bulun!",
        your_turn: "SIRA SENDE",
        solo_mode_info: "Tek oyunculu modda tur başına en fazla 10 puan kazanabilirsiniz.",
        no_button: "İptal",
        yes_button: "Oyna",
        coming_soon: "Çok yakında!",
        popular: "Popüler",
        best_offer: "En İyi Teklif",
        close: "Kapat",
        owned: "Mevcut",
        ok: "Tamam",
        not_enough_gold: "Yetersiz altın",
        error: "Hata",
        not_enough_diamonds: "Yetersiz elmas",
        market: "Market",
        theme: "Tema",
        avatars: "Avatarlar",
        settings: "Ayarlar",
        master_volume: "Efektler",
        bomb_ticking_volume: "Bombanın Tıkırtı Ses Seviyesi",
        coin: "Para",
        win: "Birinci",
        level: "Seviye",
        leaderboard: "Lider Tablosu",
        enter_code: "Kodu Girin",
        redeem: "Kullan",
        redeem_code: "Bir kod kullanın. Ücretsiz kod için Discord'umuza katılın!",
        already_used: "Bu kod zaten kullandınız.",
        code_not_exist: "Bu kod mevcut değil.",
        too_many_requests: "Çok fazla istek. Lütfen daha sonra tekrar deneyin.",
        reedem_success: "Kod başarıyla kullanıldı!",
        success: "Başarılı",
        purchase_success: "Satın alma başarılı! Oyunu geliştirmemize yardımcı olduğunuz için teşekkür ederiz.",
        support_us: "Bizi elmas satın alarak destekleyin. Katkınız, oyunu herkes için geliştirmemize yardımcı olur. Ayrıca özel avatarlar ve temalar alabilirsiniz.",
        loading_user_data: "Kullanıcı verileri yükleniyor...",
        achievements: "Başarımlar🏅",
        claim: "Al",
        claimed: "Alındı",
        in_progress: "Devam Ediyor",
        type_100_word: "100 doğru kelime gönder.",
        type_500_word: "500 doğru kelime gönder.",
        type_1000_word: "1000 doğru kelime gönder.",
        type_5000_word: "5000 doğru kelime gönder.",
        win_10_times: "En az 2 oyuncuyla 10 oyun kazan.",
        win_50_times: "En az 2 oyuncuyla 50 oyun kazan.",
        win_100_times: "En az 2 oyuncuyla 100 oyun kazan.",
        win_250_times: "En az 2 oyuncuyla 250 oyun kazan.",
        play_20_times: "20 oyun oyna.",
        play_100_times: "100 oyun oyna.",
        play_200_times: "200 oyun oyna.",
        play_500_times: "500 oyun oyna.",
        longer_word_8: "8 harften uzun bir kelime gönder.",
        longer_word_12: "12 harften uzun bir kelime gönder.",
        longer_word_16: "16 harften uzun bir kelime gönder.",
        longer_word_24: "24 harften uzun bir kelime gönder.",
        play_2_players: "En az 2 oyuncuyla bir oyun oyna.",
        play_4_players: "En az 4 oyuncuyla bir oyun oyna.",
        play_6_players: "En az 6 oyuncuyla bir oyun oyna.",
        play_8_players: "En az 8 oyuncuyla bir oyun oyna.",
        earn_1000_score: "1.000 paranız olsun.",
        earn_10000_score: "10.000 paranız olsun.",
        earn_100000_score: "100.000 paranız olsun.",
        earn_500000_score: "500.000 paranız olsun.",
        earn_1000000_score: "1.000.000 paranız olsun.",
        unlock_theme_3: "Toplamda 3 tema sahip olun.",
        unlock_theme_5: "Toplamda 5 tema sahip olun.",
        unlock_theme_10: "Toplamda 10 tema sahip olun.",
        unlock_bomb_3: "Toplamda 3 bombaya sahip olun.",
        unlock_bomb_5: "Toplamda 5 bombaya sahip olun.",
        unlock_bomb_10: "Toplamda 10 bombaya sahip olun.",
        enter_discord_code: "Discord kodunu girin.",
        shop_not_supported_on_mobile: "Mağaza mobil cihazlarda desteklenmiyor. Mağazaya erişmek için lütfen bir masaüstü kullanın",
        its_nice_to_see_you_here: "Seni burada görmek güzel...",
        kh: "KH",
        original_mode: "Orijinal",
        original_mode_desct: "Verilen harfleri içeren herhangi bir kelimeyi tahmin edin.",
        chain_word_mode: "Zincir Kelime",
        chain_word_desct: "Önceki kelimenin son harfiyle başlayan bir kelime yazın.",
        guess_word_mode: "Kelime Tahmini",
        guess_word_desct: "Kelimeyi tahmin et",
        translation_mode: "Çeviri",
        translation_desct: "Verilen kelimeleri seçilen dile çevirin.",
        mode_not_supported_in_language: "Bu mod bu dilde henüz tam olarak desteklenmiyor, ancak yakında kullanılabilir olacak.",
        gamemode_beta_info: "Oyun modları beta aşamasında, yakında yeni modlar gelecek! Discord'umuzda hataları veya önerileri bildirin.",
        animated: "Animasyonlu",
        join: "Katıl",
        create_room: "Oda Oluştur",
        only_host_can_change: "Yalnızca ev sahibi oda ayarlarını değiştirebilir.",
        only_host_can_start: "Yalnızca ev sahibi oyunu başlatabilir",
        leave_room: "Ayrıl",
        normal: "Normal",
        challenge: "Zorlu",
        room_private_info: "Oda artık özel. Yalnızca aynı ses kanalı üyeleri odaya katılabilir",
        room_public_info: "Oda artık herkese açık. Herkes odaya katılabilir",
        public: "Açık Oda",
        private: "Özel",
        rooms: "Odalar",
        shop: "Mağaza",
        backgrounds: "Arka Planlar",
        bombs: "Bombalar",
        ban: "Yasakla",
        music_volume: "Müzik Ses Seviyesi",
        chatCooldown: "Lütfen yavaşlayın! Her 1 saniyede bir mesaj gönderebilirsiniz.",
        spectate: "İzle",
        spectators: "İzleyiciler",
        no_player_error: "Oyunu başlatmak için en az 1 oyuncuya ihtiyaç var.",
        room_started_info: "Mevcut oyunun bitmesinden sonra oyuna katılacaksınız.",
        game_full: "Oyun dolu. Oyunu izleyebilirsiniz.",
        joined_room: "{0} odaya katıldı.",
        team_mode: "Takım Modu",
        team_mode_desct: "İki takım karşı karşıya - diğer takımı elemek için kazanın. Takım çalışması önemlidir!",
        team_error: "Oyunu başlatmak için her takımda en az 1 oyuncuya ihtiyacınız var.",
        multi: "Çoklu Kelime",
        cant_chat_guest: "Misafir olarak sohbet edemezsiniz. Sohbet etmek için lütfen giriş yapın.",
        written_before: "Daha önce yazılmış",
        discord: "Discord'a Katıl",
        correct_words: "Doğru Kelimeler",
        wrong_words: "Yanlış Kelimeler",
        collected_coins: "Toplanan Altın",
        skip: "Atla",
        back: "Geri",
        speed_desct: "Oyun hızı",
        heart_desct: "Oyuncunun başlangıçta sahip olduğu kalp sayısı",
        difficulty_desct: "Kelimeleri ve puanınızı etkileyecek zorluk",
        max_player_desct: "Odadaki maksimum oyuncu sayısı",
        guests_desct: "Misafirlerin odaya katılmasına izin verin veya engelleyin",
        speed: "Hız",
        difficulty: "Zorluk",
        heart: "Kalp",
        max_player: "Maksimum Oyuncu",
        guests: "Misafirler",
        allowed: "İzin Verildi",
        not_allowed: "İzin Verilmedi",
        no_limit: "Sınırsız",
        translation: "Çeviri",
        translation_mode_info: "Oyun ayarlarında çeviri dili değiştirin",
        type_racer: "Yazma Yarışı",
        type_racer_desct: "Verilen kelimeleri mümkün olduğunca hızlı yazın",
        cannot_kick_game_started: "Oyun başladıktan sonra bir oyuncuyu atamazsınız.",
        default: "Varsayılan",
        language: "Dil",
        game_mode: "Oyun Modu",
        length_error: "Oda adı 3 ile 32 karakter arasında olmalıdır.",
        room_title: "Oda Başlığı",
        save: "Kaydet",
        room_title_desct: "Oda başlığı oda listesinde görünecektir. (Uygunsuz isimler seçmenin yasaklanacağını unutmayın.)",
        level_too_low: "Oda başlıklarını değiştirmek için en az 20. seviyede olmanız gerekmektedir.",
        news: "Bilgi",
        rp: "RP",
        casual: "Normal",
        mode: "Mod",
        inactive: "Pasif",
        active: "Aktif",
        rp_title: "Sıralama Puanı",
        rp_desct: "Aktif olduğunda kazanırsınız ve kaybedersiniz.",
        on: "Açık",
        off: "Kapalı",
        zoom: "Yakınlaştır",
        new: "Yeni",
        limited_words: "Sınırlı Kelime Uzunluğu",
        limited_words_desct: "Belirtilen uzunluk sınırına uyan kelimeleri gönderebilirsiniz.",
        wpp_desct: "Hece ne kadar yaygın olmalı?",
        at_least: "En az",
        at_most: "En fazla",
        reach_elo: "{0} RP'ye ulaşın",
        report: "Bildir",
        end_game: "Oyunu Bitir",
        unlock: "Aç",
        key: "Anahtar",
        key_info: "Anahtarlar oyun sırasında bırakılabilir. Veya satın alabilirsiniz. Sandıkları açmak için kullanabilirsiniz.",
        discoverer: "Keşfeden",
        kick: "At",
        room_code: "Oda Kodu",
        room_code_copied: "Oda kodu panoya kopyalandı.",
        host_transfer: "Oda Sahibi",
        cooldown: "Lütfen yavaşlayın...",
        monsters: "Canavarlar",
        monsters_desct: "Oyunu kazanmak için canavarları yenin.",
        vegetable: "Herhangi bir sebze",
        fruit: "Herhangi bir meyve",
        short_word: "4 karakterden kısa bir kelime",
        long_word: "Karakter sınırından uzun bir kelime",
        ends_with: "İle biten bir kelime",
        starts_with: "İle başlayan bir kelime",
        double_letter: "Çift harf içeren bir kelime",
        reverse: "Kelimeyi ters sırayla yazın",
        aaaa: "AAAAA... yaz",
        ranked: "Dereceli",
        auto_join: "Oyun bittiğinde otomatik katıl",
        left_room: "{0} odayı terk etti.",
        kicked: "{0} odadan atıldı.",
        space_hypen: "Boşluk tuşu (-) tire gibi davransın",
        search: "Ara",
        ctrl_a_deletes: "Ctrl+A kelimeyi siler",
        disable_red_flash: "Yanlış kelime gönderildiğinde kırmızı flaşı devre dışı bırak",
        display_name_length: "Kullanıcı adı 2 ile 24 karakter arasında olmalıdır.",
        display_name: "Görünen Ad",
        status_word_desct: "Sadece sahip olduğunuz bir kelimeye değiştirebilirsiniz.",
        practice: "Pratik",
        practice_desc: "Kelime becerilerinizi geliştirin. Kelimeyi zamanında tahmin edemezseniz doğru cevap gösterilecektir.",
        words: "Kelimeler",
        multi_lang: "Çoklu Dil",
        multi_lang_desct: "Oyuncuların oda içinde kendi dillerini seçmelerine izin verin.",
        notification: "Bildirim",
        notification_sound: "Bildirim Sesi",
        mastered: "Uzman",
        "in-progress": "Devam Ediyor",
        climb: "Tırmanış",
        climb_desct: "Kelime becerilerinizi test edin - tırmandıkça daha zor hale gelir",
        never_close_keyboard: "Bir kelime gönderdikten sonra klavyeyi kapatma",
        bonus_alphabet: "Kalp Alfabesi",
        letter_description: "Bu harfleri tamamladığınızda bir kalp kazanacaksınız.",
        easy: "Kolay",
        hard: "Zor",
        increase_all: "Hepsini Artır",
        decrease_all: "Hepsini Azalt",
        players: "Oyuncu",
        word_not_claimed: "Bu kelimeye sahip değilsiniz.",
        match_history: "Maç Geçmişi"
    },
    "fr-FR": {
        choose_language: "Choisissez une langue",
        play: "Jouer",
        type_word: "Tapez un mot contenant les lettres données",
        loading: "Chargement...",
        join_discord: "Rejoignez notre Discord pour signaler des bugs et des suggestions",
        needs_players: "Au moins 2 joueurs\nsont nécessaires pour démarrer le jeu",
        longest_word: "Mot le plus long",
        popup_title: "Attention !",
        popup_description: "Ce jeu est conçu pour plusieurs joueurs. Êtes-vous sûr de vouloir jouer seul ?",
        discord_promotion: "Besoin de quelqu'un avec qui jouer ? Rejoignez notre Discord et trouvez un ami !",
        your_turn: "À VOTRE TOUR",
        solo_mode_info: "En mode solo, vous pouvez gagner un maximum de 10 points par tour. ",
        no_button: "Annuler",
        yes_button: "Jouer",
        coming_soon: "Bientôt disponible !",
        popular: "Populaire",
        best_offer: "Meilleure Offre",
        close: "Fermer",
        owned: "Possédé",
        ok: "OK",
        not_enough_gold: "Pas assez d'or",
        error: "Erreur",
        not_enough_diamonds: "Pas assez de diamants",
        market: "Marché",
        theme: "Thème",
        avatars: "Avatars",
        settings: "Paramètres",
        master_volume: "Effets",
        bomb_ticking_volume: "Volume de Tic-tac de la Bombe",
        coin: "Pièce",
        win: "Gagner",
        level: "Niveau",
        leaderboard: "Classement",
        enter_code: "Entrez le code",
        redeem: "Utiliser",
        redeem_code: "Utilisez un code si vous en avez un. Rejoignez notre Discord pour plus de codes !",
        already_used: "Vous avez déjà utilisé ce code.",
        code_not_exist: "Ce code n'existe pas.",
        too_many_requests: "Trop de demandes. Veuillez réessayer plus tard.",
        reedem_success: "Code utilisé avec succès !",
        success: "Succès",
        purchase_success: "Achat réussi ! Merci de nous aider à développer le jeu.",
        support_us: "Soutenez-nous en achetant des diamants. Votre contribution nous aide à améliorer et à étendre le jeu pour tout le monde. Vous pouvez également obtenir des avatars et des thèmes exclusifs.",
        loading_user_data: "Chargement des données utilisateur...",
        achievements: "Succès🏅",
        claim: "Réclamer",
        claimed: "Réclamé",
        in_progress: "En Cours",
        type_100_word: "Soumettez 100 mots corrects.",
        type_500_word: "Soumettez 500 mots corrects.",
        type_1000_word: "Soumettez 1000 mots corrects.",
        type_5000_word: "Soumettez 5000 mots corrects.",
        win_10_times: "Gagnez 10 parties avec au moins 2 joueurs.",
        win_50_times: "Gagnez 50 parties avec au moins 2 joueurs.",
        win_100_times: "Gagnez 100 parties avec au moins 2 joueurs.",
        win_250_times: "Gagnez 250 parties avec au moins 2 joueurs.",
        play_20_times: "Jouez 20 parties.",
        play_100_times: "Jouez 100 parties.",
        play_200_times: "Jouez 200 parties.",
        play_500_times: "Jouez 500 parties.",
        longer_word_8: "Soumettez un mot de plus de 8 caractères.",
        longer_word_12: "Soumettez un mot de plus de 12 caractères.",
        longer_word_16: "Soumettez un mot de plus de 16 caractères.",
        longer_word_24: "Soumettez un mot de plus de 24 caractères.",
        play_2_players: "Jouez une partie avec au moins 2 joueurs.",
        play_4_players: "Jouez une partie avec au moins 4 joueurs.",
        play_6_players: "Jouez une partie avec au moins 6 joueurs.",
        play_8_players: "Jouez une partie avec au moins 8 joueurs.",
        earn_1000_score: "Ayez 1 000 pièces.",
        earn_10000_score: "Ayez 10 000 pièces.",
        earn_100000_score: "Ayez 100 000 pièces.",
        earn_500000_score: "Ayez 500 000 pièces.",
        earn_1000000_score: "Ayez 1 000 000 pièces.",
        unlock_theme_3: "Avoir un total de 3 thèmes.",
        unlock_theme_5: "Avoir un total de 5 thèmes.",
        unlock_theme_10: "Avoir un total de 10 thèmes.",
        unlock_bomb_3: "Avoir un total de 3 bombes.",
        unlock_bomb_5: "Avoir un total de 5 bombes.",
        unlock_bomb_10: "Avoir un total de 10 bombes.",
        enter_discord_code: "Entrez le code Discord.",
        shop_not_supported_on_mobile: "La boutique n'est pas prise en charge sur les appareils mobiles. Veuillez utiliser un ordinateur de bureau pour accéder à la boutique.",
        its_nice_to_see_you_here: "C'est sympa de vous voir ici...",
        kh: "KH",
        original_mode: "Original",
        original_mode_desct: "Devinez un mot qui contient les lettres données.",
        chain_word_mode: "Mot en Chaîne",
        chain_word_desct: "Tapez un mot qui commence par la dernière lettre du mot précédent.",
        guess_word_mode: "Devinez le Mot",
        guess_word_desct: "Devinez le mot.",
        translation_mode: "Traduction",
        translation_desct: "Traduisez les mots donnés dans la langue choisie.",
        mode_not_supported_in_language: "Ce mode n'est pas entièrement pris en charge dans cette langue pour le moment, mais il sera bientôt disponible.",
        gamemode_beta_info: "Les modes de jeu sont en bêta, avec de nouveaux modes à venir ! Signalez les bugs ou les suggestions sur notre Discord.",
        animated: "Animé",
        join: "Rejoindre",
        create_room: "Créer une Salle",
        only_host_can_change: "Seul l'hôte peut modifier les paramètres de la salle.",
        only_host_can_start: "Seul l'hôte peut démarrer le jeu.",
        leave_room: "Quitter",
        normal: "Normal",
        challenge: "Défi",
        room_private_info: "La salle est maintenant privée. Seuls les membres du même canal vocal peuvent rejoindre la salle.",
        room_public_info: "La salle est maintenant publique. Tout le monde peut rejoindre la salle.",
        public: "Public",
        private: "Privé",
        rooms: "Salles",
        shop: "Boutique",
        backgrounds: "Arrière-plans",
        bombs: "Bombes",
        ban: "Bannir",
        music_volume: "Volume de la Musique",
        chatCooldown: "Veuillez ralentir ! Vous pouvez envoyer un message toutes les 1 seconde.",
        spectate: "Spectateur",
        spectators: "Spectateurs",
        no_player_error: "Au moins 1 joueur est nécessaire pour démarrer le jeu.",
        room_started_info: "Vous rejoindrez le jeu après la fin du jeu actuel.",
        game_full: "Le jeu est complet. Vous pouvez regarder le jeu.",
        joined_room: "{0} a rejoint la salle.",
        team_mode: "Mode Équipe",
        team_mode_desct: "Deux équipes s'affrontent, éliminez l'autre équipe pour gagner. Le travail d'équipe est essentiel!",
        team_error: "Vous avez besoin d'au moins 1 joueur dans chaque équipe pour démarrer le jeu.",
        multi: "Multi Mot",
        cant_chat_guest: "Vous ne pouvez pas discuter en tant qu'invité. Veuillez vous connecter pour discuter.",
        written_before: "Écrit avant",
        discord: "Rejoindre Discord",
        correct_words: "Mots Corrects",
        wrong_words: "Mots Incorrects",
        collected_coins: "Pièces Collectées",
        skip: "Passer",
        back: "Retour",
        speed_desct: "Vitesse du jeu",
        heart_desct: "Nombre de cœurs avec lesquels le joueur commence",
        difficulty_desct: "Difficulté, qui influencera les mots et votre score",
        max_player_desct: "Nombre maximum de joueurs pouvant jouer dans la salle",
        guests_desct: "Autoriser ou bloquer les invités à rejoindre la salle",
        speed: "Vitesse",
        difficulty: "Difficulté",
        heart: "Cœur",
        max_player: "Joueur Maximum",
        guests: "Invités",
        allowed: "Autorisé",
        not_allowed: "Non Autorisé",
        no_limit: "Pas de Limite",
        translation: "Traduction",
        translation_mode_info: "Changez la langue de traduction dans les paramètres du jeu",
        type_racer: "Course de Frappe",
        type_racer_desct: "Tapez les mots donnés le plus rapidement possible.",
        cannot_kick_game_started: "Vous ne pouvez pas exclure un joueur après le début du jeu.",
        default: "Défaut",
        language: "Langue",
        game_mode: "Mode de Jeu",
        length_error: "Le nom de la salle doit comporter entre 3 et 32 caractères.",
        room_title: "Titre de la Salle",
        save: "Enregistrer",
        roomjgg_title_desct: "Le titre de la salle s'affichera dans la liste des salles. (Soyez conscient que le choix de noms inappropriés vous fera bannir.)",
        level_too_low: "Vous devez être au moins de niveau 20 pour changer les titres des salles.",
        news: "Nouvelles",
        rp: "RP",
        casual: "Décontracté",
        mode: "Mode",
        inactive: "Inactif",
        active: "Actif",
        rp_title: "Points de Classement",
        rp_desct: "Lorsqu'il est actif, vous gagnerez des points de classement pour gagner et vous en perdrez pour perdre.",
        on: "Activé",
        off: "Désactivé",
        zoom: "Zoom",
        new: "Nouveau",
        limited_words: "Longueur de Mot Limitée",
        limited_words_desct: "Vous ne pouvez envoyer que des mots qui correspondent à la limite de longueur spécifiée.",
        wpp_desct: "À quel point les syllabes doivent-elles être courantes?",
        at_least: "Au Moins",
        at_most: "Au Plus",
        reach_elo: "Atteignez {0} RP",
        report: "Signaler",
        end_game: "Terminer le Jeu",
        unlock: "Débloquer",
        key: "Clé",
        key_info: "Les clés peuvent être laissées pendant le jeu. Ou vous pouvez les acheter. Vous pouvez les utiliser pour débloquer les coffres.",
        discoverer: "Découvreur",
        kick: "Expluser",
        room_code: "Code de la Salle",
        room_code_copied: "Code de la salle copié dans le presse-papiers.",
        host_transfer: "Transférer l'Hôte",
        cooldown: "Veuillez ralentir...",
        monsters: "Monstres",
        monsters_desct: "Battez les monstres pour gagner le jeu.",
        vegetable: "N'importe quel légume",
        fruit: "N'importe quel fruit",
        short_word: "Un mot de moins de 4 caractères",
        long_word: "Un mot plus long que la limite de caractères",
        ends_with: "Un mot qui se termine par",
        starts_with: "Un mot qui commence par",
        double_letter: "Un mot avec des lettres doubles",
        reverse: "Tapez le mot dans l'ordre inverse",
        aaaa: "Tapez AAAAA...",
        ranked: "Classé",
        auto_join: "Rejoindre automatiquement lorsque le jeu est terminé",
        left_room: "{0} a quitté la salle.",
        kicked: "{0} a été exclu de la salle.",
        space_hypen: "La touche d'espace agit comme un tiret",
        search: "Rechercher",
        ctrl_a_deletes: "Ctrl+A supprime le mot",
        disable_red_flash: "Désactiver le flash rouge lorsqu'un mot incorrect est envoyé",
        display_name_length: "Le nom d'affichage doit comporter entre 2 et 24 caractères.",
        display_name: "Nom d'Affichage",
        status_word: "Statut",
        status_word_desct: "Vous ne pouvez le changer que pour un mot que vous avez réclamé.",
        practice: "Pratique",
        practice_desc: "Améliorez vos compétences en mots. Si vous ne devinez pas le mot à temps, la réponse correcte sera affichée.",
        words: "Mots",
        multi_lang: "Multilingue",
        multi_lang_desct: "Permettez aux joueurs de choisir leur propre langue dans la salle.",
        notification: "Notification",
        notification_sound: "Son de Notification",
        mastered: "Maîtrisé",
        "in-progress": "En Cours",
        climb: "Escalade",
        climb_desct: "Testez vos compétences en mots, la partie devient de plus en plus difficile à mesure que vous montez.",
        never_close_keyboard: "Ne jamais fermer le clavier après avoir envoyé un mot",
        bonus_alphabet: "Alphabet de Cœur",
        letter_description: "Vous gagnerez un cœur en complétant ces lettres.",
        easy: "Facile",
        hard: "Difficile",
        increase_all: "Tout Augmenter",
        decrease_all: "Tout Diminuer",
        players: "Joueurs",
        hypens: "Mots composés",
        apostrophes: "Apostrophes",
        longs: "Longs",
        phobias: "Phobies",
        word_not_claimed: "Vous ne possédez pas ce mot.",
        match_history: "Historique des Matchs",
        completed_categories: "Catégories Terminées",
        "exp-modifiers": "Les modificateurs d'expérience influencent la vitesse à laquelle vous montez de niveau.",
        buff_scenario: "Scénario",
        buff_scenario_desct: "Jouez à n'importe quel scénario.",
        buff_discord: "Serveur Discord",
        buff_discord_desct: "Lancez le jeu depuis le serveur Discord de WordBomb.",
        buff_mlang: "Multilingue",
        buff_mlang_desct: "Jouez avec le mode multilingue activé.",
        buff_public: "Jouer dans des salles publiques.",
        buff_public_desct: "Jouez dans des salles publiques avec au moins 2 joueurs."
    },
    "es-ES": {
        choose_language: "Elige un idioma",
        play: "Jugar",
        type_word: "Escribe una palabra que contenga las letras dadas",
        loading: "Cargando...",
        join_discord: "Únete a nuestro Discord para informar errores y sugerencias",
        needs_players: "Se necesitan al menos 2\njugadores para iniciar el juego",
        longest_word: "Palabra más larga",
        popup_title: "¡Aviso!",
        popup_description: "Este juego está diseñado para más de un jugador. ¿Estás seguro de que quieres jugar solo?",
        discord_promotion: "¿Necesitas a alguien para jugar? ¡Únete a nuestro Discord y encuentra un amigo!",
        your_turn: "TU TURNO",
        solo_mode_info: "En el modo de un jugador, puedes ganar un máximo de 10 puntos por ronda. ",
        no_button: "Cancelar",
        yes_button: "Jugar",
        coming_soon: "¡Próximamente!",
        popular: "Popular",
        best_offer: "Mejor Oferta",
        close: "Cerrar",
        owned: "Poseído",
        ok: "OK",
        not_enough_gold: "Oro insuficiente",
        error: "Error",
        not_enough_diamonds: "Diamantes insuficientes",
        market: "Mercado",
        theme: "Tema",
        avatars: "Avatares",
        settings: "Ajustes",
        master_volume: "Efectos",
        bomb_ticking_volume: "Volumen de Tic-tac de la Bomba",
        coin: "Moneda",
        win: "Ganar",
        level: "Nivel",
        leaderboard: "Tabla de clasificación",
        enter_code: "Introducir código",
        redeem: "Canjear",
        redeem_code: "Canjea un código si tienes uno. ¡Únete a nuestro Discord para más códigos!",
        already_used: "Ya has usado este código.",
        code_not_exist: "Este código no existe.",
        too_many_requests: "Demasiadas solicitudes. Por favor, inténtalo de nuevo más tarde.",
        reedem_success: "¡Código canjeado con éxito!",
        success: "Éxito",
        purchase_success: "¡Compra exitosa! Gracias por ayudarnos a desarrollar el juego.",
        support_us: "Apóyanos comprando diamantes. Tu contribución nos ayuda a mejorar y expandir el juego para todos. Además, puedes obtener avatares y temas exclusivos.",
        loading_user_data: "Cargando datos de usuario...",
        achievements: "Logros🏅",
        claim: "Reclamar",
        claimed: "Reclamado",
        in_progress: "En Progreso",
        type_100_word: "Envía 100 palabras correctas.",
        type_500_word: "Envía 500 palabras correctas.",
        type_1000_word: "Envía 1000 palabras correctas.",
        type_5000_word: "Envía 5000 palabras correctas.",
        win_10_times: "Gana 10 partidas con al menos 2 jugadores.",
        win_50_times: "Gana 50 partidas con al menos 2 jugadores.",
        win_100_times: "Gana 100 partidas con al menos 2 jugadores.",
        win_250_times: "Gana 250 partidas con al menos 2 jugadores.",
        play_20_times: "Juega 20 partidas.",
        play_100_times: "Juega 100 partidas.",
        play_200_times: "Juega 200 partidas.",
        play_500_times: "Juega 500 partidas.",
        longer_word_8: "Envía una palabra con más de 8 caracteres.",
        longer_word_12: "Envía una palabra con más de 12 caracteres.",
        longer_word_16: "Envía una palabra con más de 16 caracteres.",
        longer_word_24: "Envía una palabra con más de 24 caracteres.",
        play_2_players: "Juega una partida con al menos 2 jugadores.",
        play_4_players: "Juega una partida con al menos 4 jugadores.",
        play_6_players: "Juega una partida con al menos 6 jugadores.",
        play_8_players: "Juega una partida con al menos 8 jugadores.",
        earn_1000_score: "Ten 1.000 monedas.",
        earn_10000_score: "Ten 10.000 monedas.",
        earn_100000_score: "Ten 100.000 monedas.",
        earn_500000_score: "Ten 500.000 monedas.",
        earn_1000000_score: "Ten 1.000.000 monedas.",
        unlock_theme_3: "Tener un total de 3 temas.",
        unlock_theme_5: "Tener un total de 5 temas.",
        unlock_theme_10: "Tener un total de 10 temas.",
        unlock_bomb_3: "Tener un total de 3 bombas.",
        unlock_bomb_5: "Tener un total de 5 bombas.",
        unlock_bomb_10: "Tener un total de 10 bombas.",
        enter_discord_code: "Ingresa el código de Discord.",
        shop_not_supported_on_mobile: "La tienda no es compatible con dispositivos móviles. Utiliza un ordenador de sobremesa para acceder a la tienda.",
        its_nice_to_see_you_here: "Es agradable verte aquí...",
        kh: "KH",
        original_mode: "Original",
        original_mode_desct: "Adivina cualquier palabra que contenga las letras dadas.",
        chain_word_mode: "Palabra Encadenada",
        chain_word_desct: "Escribe una palabra que comience con la última letra de la palabra anterior.",
        guess_word_mode: "Adivina la Palabra",
        guess_word_desct: "Adivina la palabra",
        translation_mode: "Traducción",
        translation_desct: "Traduce las palabras dadas al idioma elegido.",
        mode_not_supported_in_language: "Este modo aún no es totalmente compatible en este idioma, pero estará disponible pronto.",
        gamemode_beta_info: "¡Los modos de juego están en beta, con nuevos modos en camino! Informa de errores o sugerencias en nuestro Discord.",
        animated: "Animado",
        join: "Unirse",
        create_room: "Crear Sala",
        only_host_can_change: "Solo el anfitrión puede cambiar la configuración de la sala.",
        only_host_can_start: "Solo el anfitrión puede iniciar el juego.",
        leave_room: "Salir",
        normal: "Normal",
        challenge: "Desafío",
        room_private_info: "La sala es ahora privada. Solo los miembros del mismo canal de voz pueden unirse a la sala.",
        room_public_info: "La sala es ahora pública. Cualquiera puede unirse a la sala.",
        public: "Pública",
        private: "Privada",
        rooms: "Salas",
        shop: "Tienda",
        backgrounds: "Fondos",
        bombs: "Bombas",
        ban: "Expulsar",
        music_volume: "Volumen de la Música",
        chatCooldown: "¡Por favor, ralentiza! Puedes enviar un mensaje cada 1 segundo.",
        spectate: "Espectar",
        spectators: "Espectadores",
        no_player_error: "Se necesita al menos 1 jugador para iniciar el juego.",
        room_started_info: "Entrarás en el juego después de que termine el juego actual.",
        game_full: "El juego está lleno. Puedes ver el juego.",
        joined_room: "{0} se unió a la sala.",
        team_mode: "Modo Equipo",
        team_mode_desct: "Dos equipos se enfrentan - elimina al otro equipo para ganar. ¡El trabajo en equipo es esencial!",
        team_error: "Necesitas al menos 1 jugador en cada equipo para iniciar el juego.",
        multi: "Multi Palabra",
        cant_chat_guest: "No puedes chatear como invitado. Inicia sesión para chatear.",
        written_before: "Escrito antes",
        discord: "Únete a Discord",
        correct_words: "Palabras Correctas",
        wrong_words: "Palabras Incorrectas",
        collected_coins: "Monedas Recogidas",
        skip: "Saltar",
        back: "Atrás",
        speed_desct: "Velocidad del juego",
        heart_desct: "Número de corazones con los que comienza el jugador",
        difficulty_desct: "Dificultad, que afectará a las palabras y a tu puntuación",
        max_player_desct: "Número máximo de jugadores que pueden jugar en la sala",
        guests_desct: "Permitir o bloquear a los invitados para unirse a la sala",
        speed: "Velocidad",
        difficulty: "Dificultad",
        heart: "Corazón",
        max_player: "Jugador Máximo",
        guests: "Invitados",
        allowed: "Permitido",
        not_allowed: "No Permitido",
        no_limit: "Sin Límite",
        translation: "Traducción",
        translation_mode_info: "Cambia el idioma de traducción en la configuración del juego",
        type_racer: "Mecanógrafo",
        type_racer_desct: "Escribe las palabras dadas lo más rápido posible",
        cannot_kick_game_started: "No puedes expulsar a un jugador después de que el juego haya comenzado.",
        default: "Predeterminado",
        language: "Idioma",
        game_mode: "Modo de Juego",
        length_error: "El nombre de la sala debe tener entre 3 y 32 caracteres.",
        room_title: "Título de la Sala",
        save: "Guardar",
        room_title_desct: "El título de la sala se mostrará en la lista de salas. (Ten en cuenta que elegir nombres inapropiados te hará ser baneado.)",
        level_too_low: "Debes tener al menos nivel 20 para cambiar los títulos de las salas.",
        news: "Noticias",
        rp: "RP",
        casual: "Normal",
        mode: "Modo",
        inactive: "Inactivo",
        active: "Activo",
        rp_title: "Puntos de Clasificación",
        rp_desct: "Cuando está activo, ganarás puntos de clasificación por ganar y los perderás por perder.",
        on: "Activado",
        off: "Desactivado",
        zoom: "Zoom",
        new: "Nuevo",
        limited_words: "Longitud de Palabra Limitada",
        limited_words_desct: "Solo puedes enviar palabras que coincidan con la longitud límite especificada.",
        wpp_desct: "¿Qué tan comunes deben ser las sílabas?",
        at_least: "Al Menos",
        at_most: "Como Máximo",
        reach_elo: "Alcanza {0} RP",
        report: "Reportar",
        end_game: "Terminar Juego",
        unlock: "Desbloquear",
        key: "Llave",
        key_info: "Las llaves pueden dejarse durante el juego. O puedes comprarlas. Puedes usarlas para desbloquear cofres.",
        discoverer: "Descubridor",
        kick: "Expulsar",
        room_code: "Código de la Sala",
        room_code_copied: "Código de la sala copiado al portapapeles.",
        host_transfer: "Transferir Anfitrión",
        cooldown: "Por favor, ralentiza...",
        monsters: "Monstruos",
        monsters_desct: "Vence a los monstruos para ganar el juego.",
        vegetable: "Cualquier verdura",
        fruit: "Cualquier fruta",
        short_word: "Una palabra de menos de 4 caracteres",
        long_word: "Una palabra más larga que el límite de caracteres",
        ends_with: "Una palabra que termina con",
        starts_with: "Una palabra que comienza con",
        double_letter: "Una palabra con letras dobles",
        reverse: "Escribe la palabra en orden inverso",
        aaaa: "Escribe AAAAA...",
        ranked: "Clasificado",
        auto_join: "Unirse automáticamente cuando el juego termine",
        left_room: "{0} ha dejado la sala.",
        kicked: "{0} ha sido expulsado de la sala.",
        space_hypen: "La tecla de espacio actúa como un guion",
        search: "Buscar",
        ctrl_a_deletes: "Ctrl+A elimina la palabra",
        disable_red_flash: "Desactivar el flash rojo cuando se envía una palabra incorrecta",
        display_name_length: "El nombre de visualización debe tener entre 2 y 24 caracteres.",
        status_word_desct: "Solo puedes cambiarlo para una palabra que hayas reclamado.",
        practice: "Práctica",
        practice_desc: "Mejora tus habilidades con las palabras. Si no adivinas la palabra a tiempo, se mostrará la respuesta correcta.",
        words: "Palabras",
        multi_lang: "Multilingüe",
        multi_lang_desct: "Permite a los jugadores elegir su propio idioma en la sala.",
        notification: "Notificación",
        notification_sound: "Sonido de Notificación",
        mastered: "Dominado",
        "in-progress": "En Progreso",
        climb: "Escalada",
        climb_desct: "Pon a prueba tus habilidades con las palabras: cada vez más difícil a medida que subes",
        never_close_keyboard: "Nunca cierres el teclado después de enviar una palabra",
        bonus_alphabet: "Alfabeto de Corazón",
        letter_description: "Regenerarás un corazón cuando completes estas letras.",
        easy: "Fácil",
        hard: "Difícil",
        increase_all: "Aumentar Todo",
        decrease_all: "Disminuir Todo",
        players: "Jugadores",
        phobias: "Fobias",
        constellations: "Constelaciones",
        minerals: "Minerales",
        creatures: "Criaturas",
        foods: "Comidas",
        plants: "Plantas",
        interjections: "Interjecciones",
        languages: "Idiomas",
        instruments: "Instrumentos",
        ethnonyms: "Etnónimos",
        hypens: "Guiones",
        apostrophes: "Apóstrofes",
        longs: "Largos",
        chemicals: "Químicos",
        diseases: "Enfermedades",
        word_not_claimed: "No posees esta palabra.",
        adverbs: "Adverbios",
        match_history: "Historial de Partidas",
        completed_categories: "Categorías Completadas",
        "exp-modifiers": "Los modificadores de experiencia afectan la velocidad a la que subes de nivel.",
        buff_scenario: "Escenario",
        buff_scenario_desct: "Juega cualquier escenario.",
        buff_discord: "Servidor de Discord",
        buff_discord_desct: "Inicia el juego desde el servidor de Discord de WordBomb.",
        buff_mlang: "Multilingüe",
        buff_mlang_desct: "Juega con el modo multilingüe activado.",
        buff_public: "Jugar en salas públicas.",
        buff_public_desct: "Juega en salas públicas con al menos 2 jugadores."
    },
    "tl-TL": {
        choose_language: "Pumili ng Wika",
        play: "Maglaro",
        type_word: "Mag-type ng isang salita na naglalaman ng mga ibinigay na titik",
        loading: "Naglo-load...",
        join_discord: "Sumali sa aming Discord para sa mga ulat ng bug at mungkahi",
        needs_players: "Kailangan ng hindi bababa sa 2 manlalaro upang simulan ang laro",
        longest_word: "Pinakamahabang Salita",
        popup_title: "Paalala!",
        popup_description: "Ang larong ito ay dinisenyo para sa higit sa isang manlalaro. Sigurado ka bang gustong maglaro nang mag-isa?",
        discord_promotion: "Kailangan mo ba ng makakalaro? Sumali sa aming Discord at maghanap ng kaibigan!",
        your_turn: "IYONG TURN",
        solo_mode_info: "Sa single-player mode, maaari kang kumita ng hanggang 10 puntos bawat round. ",
        no_button: "Kanselahin",
        yes_button: "Maglaro",
        coming_soon: "Paparating na!",
        popular: "Sikat",
        best_offer: "Pinakamahusay na Alok",
        close: "Isara",
        owned: "Pag-aari",
        ok: "OK",
        not_enough_gold: "Hindi sapat ang ginto",
        error: "Error",
        not_enough_diamonds: "Hindi sapat ang mga diamante",
        market: "Pamilihan",
        theme: "Tema",
        avatars: "Mga Avatar",
        settings: "Mga Setting",
        master_volume: "Epekto",
        bomb_ticking_volume: "Volume ng Pagtiktik ng Bomba",
        coin: "Pera",
        win: "Panalo",
        level: "Antas",
        leaderboard: "Talaan ng Pinakamataas na Puntos",
        enter_code: "Magpasok ng code",
        redeem: "I-redeem",
        redeem_code: "I-redeem ang isang code kung meron ka. Sumali sa aming Discord para sa iba pang mga code!",
        already_used: "Nagamit mo na ang code na ito.",
        code_not_exist: "Ang code na ito ay hindi umiiral.",
        too_many_requests: "Masyadong maraming kahilingan. Subukan muli mamaya.",
        reedem_success: "Matagumpay na na-redeem ang code!",
        success: "Tagumpay",
        purchase_success: "Matagumpay na pagbili! Salamat sa pagtulong sa amin sa pag-develop ng laro.",
        support_us: "Suportahan kami sa pamamagitan ng pagbili ng mga diamante. Ang iyong kontribusyon ay tumutulong sa amin na mapabuti at palawakin ang laro para sa lahat. Bukod dito, maaari kang makakuha ng mga eksklusibong avatar at tema.",
        loading_user_data: "Naglo-load ng data ng user...",
        achievements: "Mga Tagumpay🏅",
        claim: "Klaim",
        claimed: "Naklaim",
        in_progress: "Sa proseso",
        type_100_word: "Magpadala ng 100 tamang salita.",
        type_500_word: "Magpadala ng 500 tamang salita.",
        type_1000_word: "Magpadala ng 1000 tamang salita.",
        type_5000_word: "Magpadala ng 5000 tamang salita.",
        win_10_times: "Manalo ng 10 laro na may hindi bababa sa 2 manlalaro.",
        win_50_times: "Manalo ng 50 laro na may hindi bababa sa 2 manlalaro.",
        win_100_times: "Manalo ng 100 laro na may hindi bababa sa 2 manlalaro.",
        win_250_times: "Manalo ng 250 laro na may hindi bababa sa 2 manlalaro.",
        play_20_times: "Maglaro ng 20 beses.",
        play_100_times: "Maglaro ng 100 beses.",
        play_200_times: "Maglaro ng 200 beses.",
        play_500_times: "Maglaro ng 500 beses.",
        longer_word_8: "Magpadala ng salitang higit sa 8 karakter.",
        longer_word_12: "Magpadala ng salitang higit sa 12 karakter.",
        longer_word_16: "Magpadala ng salitang higit sa 16 karakter.",
        longer_word_24: "Magpadala ng salitang higit sa 24 karakter.",
        play_2_players: "Maglaro ng laro na may hindi bababa sa 2 manlalaro.",
        play_4_players: "Maglaro ng laro na may hindi bababa sa 4 manlalaro.",
        play_6_players: "Maglaro ng laro na may hindi bababa sa 6 manlalaro.",
        play_8_players: "Maglaro ng laro na may hindi bababa sa 8 manlalaro.",
        earn_1000_score: "Magkaroon ng 1,000 barya.",
        earn_10000_score: "Magkaroon ng 10,000 barya.",
        earn_100000_score: "Magkaroon ng 100,000 barya.",
        earn_500000_score: "Magkaroon ng 500,000 barya.",
        earn_1000000_score: "Magkaroon ng 1,000,000 barya.",
        unlock_theme_3: "Magkaroon ng kabuuang 3 tema.",
        unlock_theme_5: "Magkaroon ng kabuuang 5 tema.",
        unlock_theme_10: "Magkaroon ng kabuuang 10 tema.",
        unlock_bomb_3: "Magkaroon ng kabuuang  3 bomb",
        unlock_bomb_5: "Magkaroon ng kabuuang 5 bomb",
        unlock_bomb_10: "Magkaroon ng kabuuang 10 bomb",
        enter_discord_code: "Ilagay ang code ng Discord.",
        shop_not_supported_on_mobile: "Ang tindahan ay hindi suportado sa mga mobile device. Mangyaring gamitin ang desktop upang mag-access sa tindahan.",
        its_nice_to_see_you_here: "Nakakatuwa na makita ka dito...",
        kh: "KH",
        original_mode: "Orihinal",
        original_mode_desct: "Hulaan ang anumang salita na naglalaman ng mga ibinigay na titik.",
        chain_word_mode: "Salitang Kadena",
        chain_word_desct: "Mag-type ng salita na nagsisimula sa huling titik ng naunang salita.",
        guess_word_mode: "Hulaan ang Salita",
        guess_word_desct: "Hulaan ang salita",
        translation_mode: "Pagsasalin",
        translation_desct: "Isalin ang mga ibinigay na salita sa napiling wika.",
        mode_not_supported_in_language: "Ang mode na ito ay hindi pa ganap na suportado sa wika na ito, ngunit magiging magagamit ito sa lalong madaling panahon.",
        gamemode_beta_info: "Ang mga mode ng laro ay nasa beta, may mga bagong mode na darating! I-ulat ang mga bug o mungkahi sa aming Discord.",
        animated: "Animated",
        join: "Sumali",
        create_room: "Lumikha ng Kuwarto",
        only_host_can_change: "Tanging ang host lamang ang maaaring baguhin ang mga setting ng kuwarto.",
        only_host_can_start: "Tanging ang host lamang ang maaaring magsimula ng laro.",
        leave_room: "Lumabas",
        normal: "Normal",
        challenge: "Hamon",
        room_private_info: "Ang kuwarto ay pribado na. Tanging mga miyembro ng parehong voice channel ang maaaring sumali sa kuwarto.",
        room_public_info: "Ang kuwarto ay pampubliko na. Lahat ay maaaring sumali sa kuwarto.",
        public: "Pampubliko",
        private: "Pribado",
        rooms: "Mga Kuwarto",
        shop: "Tindahan",
        backgrounds: "Mga Background",
        bombs: "Mga Bomba",
        ban: "Tirisin",
        music_volume: "Volume ng Musika",
        chatCooldown: "Pakibagalan! Maaari kang magpadala ng mensahe bawat 1 segundo.",
        spectate: "Manood",
        spectators: "Mga Manonood",
        no_player_error: "Kailangan ng kahit 1 manlalaro para masimulan ang laro.",
        room_started_info: "Sasali ka sa laro pagkatapos ng kasalukuyang laro.",
        game_full: "Puno na ang laro. Maaari kang manood ng laro.",
        joined_room: "{0} ay sumali sa kuwarto.",
        team_mode: "Mode ng Team",
        team_mode_desct: "Dalawang team ang magtutunggali - alisin ang ibang team upang manalo. Mahalaga ang teamwork!",
        team_error: "Kailangan mo ng hindi bababa sa 1 manlalaro sa bawat team para simulan ang laro.",
        multi: "Multi Salita",
        cant_chat_guest: "Hindi ka maaaring mag-chat bilang guest. Mangyaring mag-login para makapag-chat.",
        written_before: "Nasulat na",
        discord: "Sumali sa Discord",
        correct_words: "Mga Tamang Salita",
        wrong_words: "Mga Mali na Salita",
        collected_coins: "Mga Nakolektang Pera",
        skip: "Laktawan",
        back: "Bumalik",
        speed_desct: "Bilis ng laro",
        heart_desct: "Bilang ng puso na mayroon ang manlalaro sa simula",
        difficulty_desct: "Kahirapan, na makakaapekto sa mga salita at sa iyong puntos",
        max_player_desct: "Pinakamataas na bilang ng manlalaro na maaaring maglaro sa kuwarto",
        guests_desct: "Pahintulutan o pigilan ang mga bisita na sumali sa kuwarto",
        speed: "Bilis",
        difficulty: "Kahirapan",
        heart: "Puso",
        max_player: "Pinakamataas na Manlalaro",
        guests: "Mga Bisita",
        allowed: "Pinapayagan",
        not_allowed: "Hindi Pinapayagan",
        no_limit: "Walang Limitasyon",
        translation: "Pagsasalin",
        translation_mode_info: "Baguhin ang wika ng pagsasalin sa mga setting ng laro",
        type_racer: "Type Racer",
        type_racer_desct: "Mag-type ng mga ibinigay na salita sa pinakamabilis na paraan",
        cannot_kick_game_started: "Hindi mo maaaring tirahin ang isang manlalaro pagkatapos magsimula ang laro.",
        default: "Default",
        language: "Wika",
        game_mode: "Mode ng Laro",
        length_error: "Ang pangalan ng kuwarto ay dapat may 3 hanggang 32 na karakter.",
        room_title: "Pamagat ng Kuwarto",
        save: "I-save",
        room_title_desct: "Ang pamagat ng kuwarto ay ipapakita sa listahan ng mga kuwarto. (Maging maingat sa pagpili ng mga pangalan, maaari kang ma-ban.)",
        level_too_low: "Kailangan mong magkaroon ng antas na hindi bababa sa 20 para baguhin ang pamagat ng kuwarto.",
        news: "Balita",
        rp: "RP",
        casual: "Normal",
        mode: "Mode",
        inactive: "Hindi Aktibo",
        active: "Aktibo",
        rp_title: "Mga Puntos ng Ranggo",
        rp_desct: "Kapag ito ay aktibo, makakakuha ka ng mga puntos ng ranggo sa bawat panalo at mawawala sa bawat talo.",
        on: "Aktibo",
        off: "Hindi Aktibo",
        zoom: "Zoom",
        new: "Bago",
        limited_words: "Limitadong Habang Salita",
        limited_words_desct: "Maaari ka lamang magpadala ng mga salitang tumutugma sa itinakdang haba ng salita.",
        wpp_desct: "Gaano kadalas dapat maging karaniwan ang mga pantig?",
        at_least: "Kahit na",
        at_most: "Hindi hihigit sa",
        reach_elo: "Makamit ang {0} RP",
        report: "I-ulat",
        end_game: "Tapusin ang Laro",
        unlock: "I-unlock",
        key: "Susian",
        key_info: "Maaaring iwan ang mga susian habang naglalaro. O maaari mo itong bilhin. Maaari mong gamitin ang mga ito upang i-unlock ang mga kahon.",
        discoverer: "Tagadiskubre",
        kick: "Tirisin",
        room_code: "Code ng Kuwarto",
        room_code_copied: "Code ng kuwarto na kinopya sa clipboard.",
        host_transfer: "Ilipat ang Host",
        cooldown: "Pakibagalan...",
        monsters: "Mga Halimaw",
        monsters_desct: "Sugurin ang mga halimaw upang manalo sa laro.",
        vegetable: "Anumang gulay",
        fruit: "Anumang prutas",
        short_word: "Isang salita na may hindi hihigit sa 4 na titik",
        long_word: "Isang salita na mas mahaba kaysa sa limitasyon ng titik",
        ends_with: "Isang salita na nagtatapos sa",
        starts_with: "Isang salita na nagsisimula sa",
        double_letter: "Isang salita na may dobleng titik",
        reverse: "I-type ang salita sa baligtad na pagkakasunod",
        aaaa: "I-type ang AAAAA...",
        ranked: "Rangko",
        auto_join: "Sumali nang awtomatiko pagkatapos ng laro",
        left_room: "{0} ay umalis sa kuwarto.",
        kicked: "{0} ay tiniris sa kuwarto.",
        space_hypen: "Ang space key ay gumagana bilang hypen",
        search: "Maghanap",
        ctrl_a_deletes: "Ang Ctrl+A ay naglilinis ng salita",
        disable_red_flash: "Huwag paganahin ang pula na flash kapag nagpadala ng maling salita",
        display_name_length: "Ang display name ay dapat may 2 hanggang 24 na titik.",
        practice: "Pagsasanay",
        practice_desc: "Pahusayin ang iyong mga kasanayan sa mga salita. Kung hindi mo nasasagot ang salita sa tamang oras, ipapakita ang tamang sagot.",
        words: "Mga Salita",
        multi_lang: "Multilingual",
        multi_lang_desct: "Pahintulutan ang mga manlalaro na pumili ng kanilang sariling wika sa kuwarto.",
        notification: "Notipikasyon",
        notification_sound: "Tunog ng Notipikasyon",
        mastered: "Nasagot",
        "in-progress": "Sa Proseso",
        climb: "Pag-akyat",
        climb_desct: "Subukan ang iyong mga kasanayan sa mga salita: mas mahirap habang umaakyat ka",
        never_close_keyboard: "Huwag isara ang keyboard pagkatapos magpadala ng salita",
        bonus_alphabet: "Alpabeto ng Puso",
        letter_description: "Makakakuha ka ng puso kapag natapos mo ang mga titik na ito.",
        easy: "Madali",
        hard: "Mahirap",
        increase_all: "Dagdagan ang Lahat",
        decrease_all: "Bawasan ang Lahat",
        players: "Mga Manlalaro",
        word_not_claimed: "Walang nag-aari sa salitang ito.",
        match_history: "Kasaysayan ng Laban"
    },
    "de-DE": {
        choose_language: "Wähle eine Sprache",
        play: "Spielen",
        type_word: "Gib ein Wort ein, das die angegebenen Buchstaben enthält",
        loading: "Wird geladen...",
        join_discord: "Tritt unserem Discord bei, um Fehler zu melden und Vorschläge zu machen",
        needs_players: "Mindestens 2 Spieler\nwerden benötigt, um das Spiel zu starten",
        longest_word: "Längstes Wort",
        popup_title: "Achtung!",
        popup_description: "Dieses Spiel ist für mehr als einen Spieler gedacht. Bist du sicher, dass du alleine spielen möchtest?",
        discord_promotion: "Niemanden zum Spielen? Tritt unserem Discord bei und finde einen Freund!",
        your_turn: "DEIN ZUG",
        solo_mode_info: "Im Einzelspielermodus kannst du maximal 10 Punkte pro Runde verdienen.",
        no_button: "Abbrechen",
        yes_button: "Spielen",
        coming_soon: "Demnächst verfügbar!",
        popular: "Beliebt",
        best_offer: "Bestes Angebot",
        close: "Schließen",
        owned: "Besitzt",
        ok: "OK",
        not_enough_gold: "Nicht genug Gold",
        not_enough_diamonds: "Nicht genug Diamanten",
        error: "Fehler",
        market: "Markt",
        theme: "Thema",
        avatars: "Avatare",
        settings: "Einstellungen",
        master_volume: "Effekte",
        bomb_ticking_volume: "Bombenticken-Lautstärke",
        coin: "Münze",
        win: "Gewinnen",
        level: "Level",
        leaderboard: "Bestenliste",
        enter_code: "Code eingeben",
        redeem: "Einlösen",
        redeem_code: "Löse einen Code ein, wenn du einen hast. Tritt unserem Discord bei, um kostenlose Codes zu erhalten!",
        already_used: "Du hast diesen Code bereits verwendet.",
        code_not_exist: "Dieser Code existiert nicht.",
        too_many_requests: "Zu viele Anfragen. Bitte versuche es später erneut.",
        reedem_success: "Code erfolgreich eingelöst!",
        success: "Erfolg",
        purchase_success: "Kauf erfolgreich! Vielen Dank, dass du uns bei der Entwicklung des Spiels unterstützt.",
        support_us: "Unterstütze uns, indem du Diamanten kaufst. Dein Beitrag hilft uns, das Spiel für alle zu verbessern und zu erweitern. Außerdem kannst du exklusive Avatare und Themen erhalten.",
        loading_user_data: "Benutzerdaten werden geladen...",
        achievements: "Erfolge🏅",
        claim: "Einfordern",
        claimed: "Eingefordert",
        in_progress: "In Bearbeitung",
        type_100_word: "Gebe 100 richtige Wörter ein.",
        type_500_word: "Gebe 500 richtige Wörter ein.",
        type_1000_word: "Gebe 1000 richtige Wörter ein.",
        type_5000_word: "Gebe 5000 richtige Wörter ein.",
        win_10_times: "Gewinne 10 Spiele mit mindestens 2 Spielern.",
        win_50_times: "Gewinne 50 Spiele mit mindestens 2 Spielern.",
        win_100_times: "Gewinne 100 Spiele mit mindestens 2 Spielern.",
        win_250_times: "Gewinne 250 Spiele mit mindestens 2 Spielern.",
        play_20_times: "Spiele 20 Spiele.",
        play_100_times: "Spiele 100 Spiele.",
        play_200_times: "Spiele 200 Spiele.",
        play_500_times: "Spiele 500 Spiele.",
        longer_word_8: "Gebe ein Wort mit mehr als 8 Buchstaben ein.",
        longer_word_12: "Gebe ein Wort mit mehr als 12 Buchstaben ein.",
        longer_word_16: "Gebe ein Wort mit mehr als 16 Buchstaben ein.",
        longer_word_24: "Gebe ein Wort mit mehr als 24 Buchstaben ein.",
        play_2_players: "Spiele ein Spiel mit mindestens 2 Spielern.",
        play_4_players: "Spiele ein Spiel mit mindestens 4 Spielern.",
        play_6_players: "Spiele ein Spiel mit mindestens 6 Spielern.",
        play_8_players: "Spiele ein Spiel mit mindestens 8 Spielern.",
        earn_1000_score: "Habe 1.000 Münzen.",
        earn_10000_score: "Habe 10.000 Münzen.",
        earn_100000_score: "Habe 100.000 Münzen.",
        earn_500000_score: "Habe 500.000 Münzen.",
        earn_1000000_score: "Habe 1.000.000 Münzen.",
        unlock_theme_3: "Haben Sie insgesamt 3 Themen.",
        unlock_theme_5: "Haben Sie insgesamt 5 Themen.",
        unlock_theme_10: "Haben Sie insgesamt 10 Themen.",
        unlock_bomb_3: "Haben Sie insgesamt 3 Bomben.",
        unlock_bomb_5: "Haben Sie insgesamt 5 Bomben.",
        unlock_bomb_10: "Haben Sie insgesamt 10 Bomben.",
        enter_discord_code: "Gib den Discord-Code ein.",
        shop_not_supported_on_mobile: "Der Shop wird auf Mobilgeräten nicht unterstützt. Bitte verwenden Sie einen Desktop, um auf den Shop zuzugreifen.",
        its_nice_to_see_you_here: "Schön, dich hier zu sehen...",
        kh: "KH",
        original_mode: "Original",
        original_mode_desct: "Errate ein Wort, das die angegebenen Buchstaben enthält.",
        chain_word_mode: "Kettenwort",
        chain_word_desct: "Gib ein Wort ein, das mit dem letzten Buchstaben des vorherigen Wortes beginnt.",
        guess_word_mode: "Wort erraten",
        guess_word_desct: "Vervollständige Wörter, indem man Buchstaben in die Lücken füllt",
        translation_mode: "Übersetzung",
        translation_desct: "Übersetze die gegebenen Wörter in die gewählte Sprache.",
        mode_not_supported_in_language: "Dieser Modus wird in dieser Sprache noch nicht vollständig unterstützt, wird aber bald verfügbar sein.",
        gamemode_beta_info: "Die Spielmodi befinden sich in der Beta-Phase, mit neuen Modi in Kürze! Melden Sie Fehler oder Vorschläge in unserem Discord.",
        animated: "Animiert",
        join: "Beitreten",
        create_room: "Raum erstellen",
        only_host_can_change: "Nur der Gastgeber kann die Raum-Einstellungen ändern.",
        only_host_can_start: "Nur der Gastgeber kann das Spiel starten.",
        leave_room: "Verlassen",
        normal: "Normal",
        challenge: "Herausforderung",
        room_private_info: "Der Raum ist jetzt privat. Nur Mitglieder des gleichen Sprachkanals können dem Raum beitreten.",
        room_public_info: "Der Raum ist jetzt öffentlich. Jeder kann dem Raum beitreten.",
        public: "Öffentlich",
        private: "Privat",
        rooms: "Räume",
        shop: "Geschäft",
        backgrounds: "Hintergründe",
        bombs: "Bomben",
        ban: "Ausschließen",
        music_volume: "Musiklautstärke",
        chatCooldown: "Bitte verlangsamen! Sie können alle 1 Sekunde eine Nachricht senden.",
        spectate: "Zuschauen",
        spectators: "Zuschauer",
        no_player_error: "Mindestens 1 Spieler wird benötigt, um das Spiel zu starten.",
        room_started_info: "Du wirst dem Spiel nach dem Ende des aktuellen Spiels beitreten.",
        game_full: "Das Spiel ist voll. Du kannst das Spiel ansehen.",
        joined_room: "{0} ist dem Raum beigetreten.",
        team_mode: "Teammodus",
        team_mode_desct: "Zwei Teams treten gegeneinander an - besiege das andere Team, um zu gewinnen. Teamarbeit ist entscheidend!",
        team_error: "Du benötigst mindestens 1 Spieler in jedem Team, um das Spiel zu starten.",
        multi: "Multi Wort",
        cant_chat_guest: "Als Gast kannst du nicht chatten. Bitte melde dich an, um zu chatten.",
        written_before: "Geschrieben vor",
        discord: "Discord beitreten",
        correct_words: "Richtige Wörter",
        wrong_words: "Falsche Wörter",
        collected_coins: "Gesammelte Münzen",
        skip: "Überspringen",
        back: "Zurück",
        speed_desct: "Spielgeschwindigkeit",
        heart_desct: "Anzahl der Leben, mit denen der Spieler beginnt",
        difficulty_desct: "Schwierigkeit, die sich auf die Wörter und deine Punktzahl auswirkt",
        max_player_desct: "Maximale Anzahl der Spieler, die im Raum spielen können",
        guests_desct: "Erlauben oder blockieren Sie Gäste, um dem Raum beizutreten",
        speed: "Geschwindigkeit",
        difficulty: "Schwierigkeit",
        heart: "Herz",
        max_player: "Maximale Spieler",
        guests: "Gäste",
        allowed: "Erlaubt",
        not_allowed: "Nicht erlaubt",
        no_limit: "Keine Begrenzung",
        translation: "Übersetzung",
        translation_mode_info: "Ändern Sie die Übersetzungssprache in den Spieloptionen",
        type_racer: "Tipp-Duell",
        type_racer_desct: "Geben Sie die gegebenen Wörter so schnell wie möglich ein",
        cannot_kick_game_started: "Du kannst einen Spieler nicht ausschließen, nachdem das Spiel begonnen hat.",
        default: "Standard",
        language: "Sprache",
        game_mode: "Spielmodus",
        length_error: "Der Raumname muss zwischen 3 und 32 Zeichen lang sein.",
        room_title: "Raumtitel",
        save: "Speichern",
        room_title_desct: "Der Raumtitel wird in der Raumliste angezeigt. (Bitte wählen Sie sorgfältig, das Wählen von unangemessenen Namen führt zu einem Verbot.)",
        level_too_low: "Sie müssen mindestens Level 20 erreichen, um den Raumtitel zu ändern.",
        news: "Nachrichten",
        rp: "RP",
        casual: "Normal",
        mode: "Modus",
        inactive: "Inaktiv",
        active: "Aktiv",
        rp_title: "Rangpunkte",
        rp_desct: "Wenn aktiviert, erhalten Sie Punkte für Siege und verlieren Punkte für Niederlagen.",
        on: "Aktiviert",
        off: "Deaktiviert",
        zoom: "Zoom",
        new: "Neu",
        limited_words: "Begrenzte Wortlänge",
        limited_words_desct: "Sie können nur Wörter senden, die der angegebenen Wortlänge entsprechen.",
        wpp_desct: "Wie häufig sollten die Silben sein?",
        at_least: "Mindestens",
        at_most: "Höchstens",
        reach_elo: "Erreiche {0} RP",
        report: "Melden",
        end_game: "Spiel beenden",
        unlock: "Freischalten",
        key: "Schlüssel",
        key_info: "Schlüssel können während des Spiels hinterlassen werden. Oder Sie können sie kaufen. Sie können sie verwenden, um Kisten zu entsperren.",
        discoverer: "Entdecker",
        kick: "Ausschließen",
        room_code: "Raumcode",
        room_code_copied: "Raumcode in die Zwischenablage kopiert.",
        host_transfer: "Host übertragen",
        cooldown: "Bitte verlangsamen...",
        monsters: "Monster",
        monsters_desct: "Besiege die Monster, um das Spiel zu gewinnen.",
        vegetable: "Jedes Gemüse",
        fruit: "Jede Frucht",
        short_word: "Ein Wort mit nicht mehr als 4 Buchstaben",
        long_word: "Ein Wort, das länger ist als die Buchstabenbeschränkung",
        ends_with: "Ein Wort, das mit endet",
        starts_with: "Ein Wort, das mit beginnt",
        double_letter: "Ein Wort mit doppeltem Buchstaben",
        reverse: "Geben Sie das Wort in umgekehrter Reihenfolge ein",
        aaaa: "Geben Sie AAAAA ein...",
        ranked: "Ranglistenspiel",
        auto_join: "Automatisches Beitreten nach dem Spiel",
        left_room: "{0} hat den Raum verlassen.",
        kicked: "{0} wurde aus dem Raum ausgeschlossen.",
        space_hypen: "Die Leertaste funktioniert als Bindestrich",
        search: "Suche",
        ctrl_a_deletes: "Strg+A löscht das Wort",
        disable_red_flash: "Deaktivieren Sie den roten Blitz, wenn ein falsches Wort gesendet wird",
        practice: "Üben",
        practice_desc: "Verbessern Sie Ihre Wortfähigkeiten. Wenn Sie das Wort nicht rechtzeitig beantworten, wird die richtige Antwort angezeigt.",
        words: "Wörter",
        multi_lang: "Mehrsprachig",
        multi_lang_desct: "Erlauben Sie Spielern, ihre eigene Sprache im Raum auszuwählen.",
        notification: "Benachrichtigung",
        notification_sound: "Benachrichtigungston",
        mastered: "Meisterhaft",
        "in-progress": "In Bearbeitung",
        climb: "Klettern",
        climb_desct: "Testen Sie Ihre Wortfähigkeiten: Schwieriger, je höher Sie klettern",
        never_close_keyboard: "Schließen Sie die Tastatur nie, nachdem Sie ein Wort gesendet haben",
        bonus_alphabet: "Alphabet des Herzens",
        letter_description: "Sie regenerieren ein Herz, wenn Sie alle diese Buchstaben benutzen.",
        easy: "Einfach",
        hard: "Schwer",
        increase_all: "Alle erhöhen",
        decrease_all: "Alle verringern",
        players: "Spieler",
        phobias: "Phobien",
        constellations: "Sternbilder",
        minerals: "Mineralien",
        creatures: "Kreaturen",
        foods: "Lebensmittel",
        plants: "Pflanzen",
        interjections: "Interjektionen",
        languages: "Sprachen",
        instruments: "Instrumente",
        hypens: "Bindestriche",
        apostrophes: "Apostrophe",
        longs: "Lange Wörter",
        word_not_claimed: "Niemand hat dieses Wort beansprucht.",
        match_history: "Spielverlauf",
        countries: "Länder",
        cities: "Städte",
        countries_and_cities: "Länder und Städte",
        "exp-modifiers": "Erfahrungsmodifikatoren beeinflussen, wie schnell du aufsteigst.",
        buff_scenario: "Szenario",
        buff_scenario_desct: "Spiele ein beliebiges Szenario.",
        buff_discord: "Discord-Server",
        buff_discord_desct: "Starte das Spiel über den Discord-Server von WordBomb.",
        buff_mlang: "Mehrsprachig",
        buff_mlang_desct: "Spiele mit aktiviertem Mehrsprachmodus.",
        buff_public: "In öffentlichen Räumen spielen.",
        buff_public_desct: "Spiele in öffentlichen Räumen mit mindestens 2 Spielern."
    },
    "mc-MC": {
        choose_language: "Pick your Minecraft language",
        play: "Mine",
        type_word: "Enter a word that contains the given letter",
        loading: "Generating world...",
        join_discord: "Join our Discord to see all the words you've mined so far and more!",
        needs_players: "At least 2 players\nare needed to start the adventure",
        longest_word: "Enchanted word",
        popup_title: "Creeper Alert!",
        popup_description: "This game is designed for multiplayer. Are you sure you want to survive alone?",
        discord_promotion: "Need a squad? Join our Discord and find some Minecraft buddies!",
        your_turn: "Place your block!",
        no_button: "Run Away",
        yes_button: "Mine!",
        coming_soon: "Coming to the Nether soon!",
        popular: "Most Mined",
        best_offer: "Best Trade with Villagers",
        close: "Close Chest",
        owned: "Already Crafted",
        ok: "OK",
        not_enough_gold: "Not enough gold ingots",
        not_enough_diamonds: "Not enough diamonds",
        error: "Error! Redstone Circuit Failed!",
        market: "Villager Market",
        theme: "Biome Theme",
        avatars: "Minecraft Skins",
        settings: "Game Settings",
        master_volume: "Sound Effects",
        bomb_ticking_volume: "TNT Ticking Volume",
        coin: "Emerald",
        win: "You survived the night! Time to punch more trees.",
        level: "XP Level",
        leaderboard: "Leaderboard",
        enter_code: "Enter Enchantment Code",
        redeem: "Redeem",
        redeem_code: "Enter a code to get exclusive Minecraft loot. Join our Discord for free codes!",
        already_used: "This enchantment has already been applied.",
        code_not_exist: "This code does not exist. Maybe Herobrine took it?",
        too_many_requests: "You're mining too fast! Take a break and try again later.",
        reedem_success: "Code redeemed successfully! Your XP bar is glowing!",
        success: "Success! You crafted it!",
        purchase_success: "Purchase successful! Thanks for supporting our world-building efforts.",
        support_us: "Your contribution helps us improve the game and add more mobs, skins, and biomes!",
        loading_user_data: "Loading your Minecraft inventory...",
        achievements: "Advancements🏅",
        claim: "Claim Reward",
        claimed: "Already Mined",
        in_progress: "In Progress",
        type_100_word: "Mine 100 words!",
        type_500_word: "Mine 500 words!",
        type_1000_word: "Mine 1000 words!",
        type_5000_word: "Mine 5000 words!",
        win_10_times: "Win 10 PvP battles.",
        win_50_times: "Win 50 PvP battles.",
        win_100_times: "Win 100 PvP battles.",
        win_250_times: "Win 250 PvP battles.",
        play_20_times: "Survive 20 rounds.",
        play_100_times: "Survive 100 rounds.",
        play_200_times: "Survive 200 rounds.",
        play_500_times: "Survive 500 rounds.",
        longer_word_8: "Submit a word longer than 8 blocks.",
        longer_word_12: "Submit a word longer than 12 blocks.",
        longer_word_16: "Submit a word longer than 16 blocks.",
        longer_word_24: "Submit a word longer than 24 blocks.",
        play_2_players: "Team up with 2 players.",
        play_4_players: "Team up with 4 players.",
        play_6_players: "Team up with 6 players.",
        play_8_players: "Team up with 8 players.",
        earn_1000_score: "Mine 1,000 emeralds.",
        earn_10000_score: "Mine 10,000 emeralds.",
        earn_100000_score: "Mine 100,000 emeralds.",
        earn_500000_score: "Mine 500,000 emeralds.",
        earn_1000000_score: "Mine 1,000,000 emeralds.",
        unlock_theme_3: "Unlock 3 new biomes.",
        unlock_theme_5: "Unlock 5 new biomes.",
        unlock_theme_10: "Unlock 10 new biomes.",
        unlock_bomb_3: "Unlock 3 TNT skins.",
        unlock_bomb_5: "Unlock 5 TNT skins.",
        unlock_bomb_10: "Unlock 10 TNT skins.",
        original_mode: "Survival Mode",
        original_mode_desct: "Dig up a word that contains the given letters",
        chain_word_mode: "Chain Crafting",
        chain_word_desct: "Forge a word that starts with the last letter of the previous one",
        guess_word_mode: "Mystery Chest",
        guess_word_desct: "Guess the hidden word inside the chest.",
        only_host_can_change: "Only the village chief can change settings.",
        only_host_can_start: "Only the host can start the raid.",
        leave_room: "Leave Village",
        public: "Public Village",
        private: "Private Village",
        rooms: "Realms",
        shop: "Villager Trading Post",
        backgrounds: "Minecraft Biomes",
        bombs: "TNT Skins",
        ban: "Ban",
        music_volume: "Jukebox Volume",
        chatCooldown: "Whoa! Slow down! Chat every 1 second.",
        spectate: "Invisible",
        spectators: "Invisible Players",
        room_started_info: "You will join after this round ends.",
        game_full: "The game is full! You can watch from the Nether.",
        joined_room: "{0} joined the village.",
        team_mode: "Bed Wars",
        team_error: "You need at least 1 player per faction.",
        multi: "Multi-Block Word",
        discord: "Join the Guild on Discord!",
        collected_coins: "Collected Emeralds",
        skip: "Skip",
        speed: "Tick Speed",
        difficulty: "Difficulty",
        heart: "Hearts",
        written_before: "Mined before",
        max_player: "Max Players Allowed",
        guests: "Allow Villagers",
        practice: "Creative Mode",
        practice_desc: "Practice your Minecraft vocabulary skills!",
        words: "Crafted Words",
        multi_lang: "Other Dimensions",
        bonus_alphabet: "Regeneration Potion",
        easy: "Peaceful",
        hard: "Hardcore",
        increase_all: "Level Up!",
        decrease_all: "Level Down!",
        players: "Survivors",
        ranked: "Ranked Battles",
        report: "Report",
        end_game: "End Adventure",
        match_history: "Adventure Log"
    }
},
L.localeChangeListeners = [];
var k = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
const S = [];
let x;
const T = 12674408
  , P = 7304476
  , M = 11424526
  , I = 3355443;
const A = new class {
    constructor() {
        this.listeners = []
    }
    clearListeners() {
        this.listeners = []
    }
    addListener(e) {
        this.listeners.push(e)
    }
    emit(e, t) {
        this.listeners.forEach((a => a(e, t)))
    }
}
;
function W(e, t=I) {
    S.push({
        msg: e,
        color: t
    }),
    A.emit(e, t),
    S.length > 100 && S.shift()
}
class B {
}
class N {
    static updatePlayer(e) {
        var t, a, n, o, i, s, r, d, l, c, m, u, p, h, v, g, y, b, f;
        null == N.player ? N.player = e : (N.player.avatar = null !== (t = e.avatar) && void 0 !== t ? t : N.player.avatar,
        N.player.background = null !== (a = e.background) && void 0 !== a ? a : N.player.background,
        N.player.displayName = null !== (n = e.displayName) && void 0 !== n ? n : N.player.displayName,
        N.player.diamond = null !== (o = e.diamond) && void 0 !== o ? o : N.player.diamond,
        N.player.longestWord = null !== (i = e.longestWord) && void 0 !== i ? i : N.player.longestWord,
        N.player.score = null !== (s = e.score) && void 0 !== s ? s : N.player.score,
        N.player.backgrounds = null !== (r = e.backgrounds) && void 0 !== r ? r : N.player.backgrounds,
        N.player.exp = null !== (d = e.exp) && void 0 !== d ? d : N.player.exp,
        N.player.playTime = null !== (l = e.playTime) && void 0 !== l ? l : N.player.playTime,
        N.player.win = null !== (c = e.win) && void 0 !== c ? c : N.player.win,
        N.player.wordCount = null !== (m = e.wordCount) && void 0 !== m ? m : N.player.wordCount,
        N.player.maxPlayer = null !== (u = e.maxPlayer) && void 0 !== u ? u : N.player.maxPlayer,
        N.player.reedem = null !== (p = e.reedem) && void 0 !== p ? p : N.player.reedem,
        N.player.reedemCount = null !== (h = e.reedemCount) && void 0 !== h ? h : N.player.reedemCount,
        N.player.bombs = null !== (v = e.bombs) && void 0 !== v ? v : N.player.bombs,
        N.player.bomb = null !== (g = e.bomb) && void 0 !== g ? g : N.player.bomb,
        N.player.key = null !== (y = e.key) && void 0 !== y ? y : N.player.key,
        N.player.frames = null !== (b = e.frames) && void 0 !== b ? b : N.player.frames,
        N.player.frame = null !== (f = e.frame) && void 0 !== f ? f : N.player.frame)
    }
}
function D() {
    return k(this, void 0, void 0, (function*() {
        return x || (x = yield p.commands.getSkus(),
        x.skus = x.skus.sort(( (e, t) => e.price.amount - t.price.amount))),
        x
    }
    ))
}
function R(e, t=3e3) {
    const a = document.getElementById("info");
    a && a.remove();
    var n = document.createElement("div");
    n.id = "error",
    n.classList.add("info-game-mode"),
    n.textContent = e,
    document.body.appendChild(n),
    setTimeout(( () => {
        null == n || n.remove()
    }
    ), t)
}
function j(e) {
    const t = document.getElementById("error");
    t && t.remove();
    var a = document.createElement("div");
    a.id = "error",
    a.classList.add("warning-game-mode"),
    a.textContent = e,
    document.body.appendChild(a),
    setTimeout(( () => {
        null == a || a.remove()
    }
    ), 5e3)
}
function z(e, t=3e3) {
    const a = document.getElementById("small_err");
    if (a && a.remove(),
    e) {
        var n = document.createElement("div");
        n.id = "small_err",
        n.innerHTML = e,
        n.classList.add("word-exist"),
        document.body.appendChild(n),
        setTimeout(( () => {
            null == n || n.remove()
        }
        ), t)
    }
}
function H(e, t, a=256) {
    return e && t ? t.includes("google") ? t : `https://cdn.discordapp.com/avatars/${e}/${t}.png?size=${a}` : O
}
function $(e, t) {
    t.src = e,
    t.onerror = e => {
        t.src = O
    }
}
N.chats = [],
N.playingSolo = !1,
N.__chatListenerRegistered = !1,
N.round = 0,
N.currentTitle = "",
N.dailyWordFound = !1,
N.rewarded = !1,
N.dailyWord = "",
N.playingAtWordBombServer = !1,
N.selectedCategoryIndex = 0,
N.cachedDiscoveredCount = 0,
N.cachedPlayerCount = 0;
const O = "/web/default_avatar.png";
const q = e => {
    if ("Escape" == e.key) {
        var t = document.getElementById("gm-mode-sw");
        if (t)
            return void t.remove();
        var a = document.getElementById("ms-panel");
        if (a)
            return void a.remove();
        var n = document.getElementById("hs-window");
        if (n)
            return void n.remove();
        var o = document.querySelector(".full-window");
        if (o)
            return void o.remove();
        if (document.getElementById("popup"))
            return;
        et.instance.toggleSettings()
    }
}
;
function F() {
    var e;
    if (null === (e = navigator.userAgentData) || void 0 === e ? void 0 : e.mobile)
        return !0;
    if (K())
        return !0;
    let t = !1;
    var a;
    return a = navigator.userAgent || navigator.vendor,
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substring(0, 4))) && (t = !0),
    t
}
function K() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document || navigator.platform.startsWith("iP") || navigator.platform.startsWith("Mac") && navigator.maxTouchPoints > 4
}
class V {
    static setDefaultValues() {
        V.effects = .75,
        V.musicVolume = 1,
        V.bombTickingVolume = .85,
        V.gameScale = 1,
        V.autoSwitchChat = !1,
        V.autoSpaceHypen = !F(),
        V.ctrlADeletesAll = !F(),
        V.notificationDisabled = !1,
        V.disableRedFlash = !1,
        V.notificationSoundsDisabled = !0,
        V.neverCloseKeyboardOnMobile = !1
    }
    static load() {
        if (u)
            V.setDefaultValues();
        else
            try {
                V.setDefaultValues(),
                this.localStorageAvailable() && (V.autoSpaceHypen = V.getBooleanFromLocalStorage(V.KEYS.autoSpaceHypen, !F()),
                V.ctrlADeletesAll = V.getBooleanFromLocalStorage(V.KEYS.ctrlASelectAll, !F()),
                V.disableRedFlash = V.getBooleanFromLocalStorage(V.KEYS.disableRedFlash, !1),
                V.effects = V.getNumberFromLocalStorage(V.KEYS.masterVolume, .75),
                V.musicVolume = V.getNumberFromLocalStorage(V.KEYS.musicVolume, 1),
                V.bombTickingVolume = V.getNumberFromLocalStorage(V.KEYS.bombTickingVolume, .85),
                V.gameScale = V.getNumberFromLocalStorage(V.KEYS.gameScale, 1),
                V.autoSwitchChat = V.getBooleanFromLocalStorage(V.KEYS.switchChat, !1),
                V.notificationDisabled = V.getBooleanFromLocalStorage(V.KEYS.notificationDisabled, !1),
                V.notificationSoundsDisabled = V.getBooleanFromLocalStorage(V.KEYS.notificationSoundsDisabled, !0),
                V.neverCloseKeyboardOnMobile = V.getBooleanFromLocalStorage(V.KEYS.neverCloseKeyboard, !1))
            } catch (e) {
                V.setDefaultValues()
            }
    }
    static save() {
        if (!u && this.localStorageAvailable())
            try {
                localStorage.setItem(V.KEYS.masterVolume, V.effects.toString()),
                localStorage.setItem(V.KEYS.musicVolume, V.musicVolume.toString()),
                localStorage.setItem(V.KEYS.bombTickingVolume, V.bombTickingVolume.toString()),
                localStorage.setItem(V.KEYS.gameScale, V.gameScale.toString()),
                localStorage.setItem(V.KEYS.switchChat, V.autoSwitchChat.toString()),
                localStorage.setItem(V.KEYS.autoSpaceHypen, V.autoSpaceHypen.toString()),
                localStorage.setItem(V.KEYS.ctrlASelectAll, V.ctrlADeletesAll.toString()),
                localStorage.setItem(V.KEYS.disableRedFlash, V.disableRedFlash.toString()),
                localStorage.setItem(V.KEYS.notificationDisabled, V.notificationDisabled.toString()),
                localStorage.setItem(V.KEYS.notificationSoundsDisabled, V.notificationSoundsDisabled.toString()),
                localStorage.setItem(V.KEYS.neverCloseKeyboard, V.neverCloseKeyboardOnMobile.toString())
            } catch (e) {}
    }
    static getBooleanFromLocalStorage(e, t) {
        return "true" === localStorage.getItem(e) || t
    }
    static getNumberFromLocalStorage(e, t) {
        const a = localStorage.getItem(e);
        return a ? parseFloat(a) : t
    }
    static localStorageAvailable() {
        try {
            return localStorage.setItem("test", "test"),
            localStorage.removeItem("test"),
            !0
        } catch (e) {
            return !1
        }
    }
}
V.effects = .75,
V.bombTickingVolume = .85,
V.musicVolume = 1,
V.autoSwitchChat = !1,
V.autoSpaceHypen = !1,
V.notificationDisabled = !1,
V.notificationSoundsDisabled = !0,
V.EventBus = new class {
    constructor() {
        this.events = new Map
    }
    on(e, t) {
        this.events.has(e) || this.events.set(e, new Set),
        this.events.get(e).add(t)
    }
    off(e, t) {
        this.events.has(e) && (t ? this.events.get(e).delete(t) : this.events.delete(e))
    }
    emit(e, ...t) {
        if (this.events.has(e))
            for (const a of this.events.get(e))
                a(...t)
    }
}
,
V.gameScale = 1,
V.ctrlADeletesAll = !0,
V.neverCloseKeyboardOnMobile = !1,
V.disableRedFlash = !1,
V.KEYS = {
    autoSpaceHypen: "autoSpaceHypen",
    ctrlASelectAll: "ctrlASelectAll",
    masterVolume: "masterVolume",
    musicVolume: "musicVolume",
    bombTickingVolume: "bombTickingVolume",
    gameScale: "gameScale",
    switchChat: "switchChat",
    notificationDisabled: "notificationDisabled",
    notificationSoundsDisabled: "notificationSoundsDisabled",
    disableRedFlash: "disableRedFlash",
    neverCloseKeyboard: "neverCloseKeyboard"
};
class U {
    constructor(e, t, a, n, o, i, s, r=void 0) {
        this.localizationKey = void 0,
        this.id = e,
        this.title = t,
        this.target = a,
        this.iconPath = n,
        this.rewardIconPath = o,
        this.rewardAmount = i,
        this.localizationKey = r,
        this.onCalculate = s
    }
}
class G {
    claim(e, t) {
        t.diamond += e.rewardAmount,
        this.isClaimed = !0
    }
    constructor(e, t, a) {
        this.progress = e,
        this.isClaimable = t,
        this.isClaimed = a
    }
}
class J {
    static wordAchievement(e, t) {
        var a = t.wordCount
          , n = a >= e.target;
        return new G(a,n,t.hasReedem(e.id))
    }
    static winAchievement(e, t) {
        var a = t.win
          , n = a >= e.target;
        return new G(a,n,t.hasReedem(e.id))
    }
    static playAchievement(e, t) {
        var a = t.playTime;
        return new G(a,a >= e.target,t.hasReedem(e.id))
    }
    static longerWordAchievement(e, t) {
        if (t.hasReedem(e.id))
            return new G(e.target,!0,t.hasReedem(e.id));
        var a = t.longestWord
          , n = a.length >= e.target;
        return new G(t.hasReedem(e.id) ? e.target : a.length,n,t.hasReedem(e.id))
    }
    static bombCountAchievement(e, t) {
        var a = t.bombs
          , n = 0;
        a && (n = a.split(",").length);
        var o = n >= e.target;
        return new G(n,o,t.hasReedem(e.id))
    }
    static maxPlayerAchievement(e, t) {
        var a = t.maxPlayer >= e.target;
        return new G(t.maxPlayer,a,t.hasReedem(e.id))
    }
    static unlockBackgrounAchievement(e, t) {
        var a = t.backgrounds
          , n = 0;
        a && (n = a.split(",").length);
        var o = n >= e.target;
        return new G(n,o,t.hasReedem(e.id))
    }
    static unlockDiscordCode(e, t) {
        return t.hasReedem("DISCORD") ? new G(1,!0,t.hasReedem(e.id)) : new G(0,!1,t.hasReedem(e.id))
    }
    static unlockScoreAchievement(e, t) {
        var a = t.score >= e.target;
        return new G(t.score,a,t.hasReedem(e.id))
    }
}
J.achievements = [new U("100_word","type_100_word",100,"achievements/word.png","/web/diamond.png",2,J.wordAchievement), new U("500_word","type_500_word",500,"achievements/word.png","/web/diamond.png",2,J.wordAchievement), new U("1000_word","type_1000_word",1e3,"achievements/word.png","/web/diamond.png",2,J.wordAchievement), new U("5000_word","type_5000_word",5e3,"achievements/word.png","/web/diamond.png",5,J.wordAchievement), new U("win_10","win_10_times",10,"achievements/win.png","/web/diamond.png",2,J.winAchievement), new U("win_50","win_50_times",50,"achievements/win.png","/web/diamond.png",3,J.winAchievement), new U("win_100","win_100_times",100,"achievements/win.png","/web/diamond.png",3,J.winAchievement), new U("win_250","win_250_times",250,"achievements/win.png","/web/diamond.png",5,J.winAchievement), new U("play_20","play_20_times",20,"achievements/play.png","/web/diamond.png",2,J.playAchievement), new U("play_100","play_100_times",100,"achievements/play.png","/web/diamond.png",2,J.playAchievement), new U("play_200","play_200_times",200,"achievements/play.png","/web/diamond.png",2,J.playAchievement), new U("play_500","play_500_times",500,"achievements/play.png","/web/diamond.png",3,J.playAchievement), new U("word_8","longer_word_8",8,"achievements/longer.png","/web/diamond.png",1,J.longerWordAchievement), new U("word_12","longer_word_12",12,"achievements/longer.png","/web/diamond.png",1,J.longerWordAchievement), new U("word_16","longer_word_16",16,"achievements/longer.png","/web/diamond.png",1,J.longerWordAchievement), new U("word_24","longer_word_24",24,"achievements/longer.png","/web/diamond.png",2,J.longerWordAchievement), new U("max_2","play_2_players",2,"achievements/friends.png","/web/diamond.png",2,J.maxPlayerAchievement), new U("max_4","play_4_players",4,"achievements/friends.png","/web/diamond.png",2,J.maxPlayerAchievement), new U("max_6","play_6_players",6,"achievements/friends.png","/web/diamond.png",2,J.maxPlayerAchievement), new U("max_8","play_8_players",8,"achievements/friends.png","/web/diamond.png",2,J.maxPlayerAchievement), new U("score_1000","earn_1000_score",1e3,"achievements/score.png","/web/diamond.png",2,J.unlockScoreAchievement), new U("score_10000","earn_10000_score",1e4,"achievements/score.png","/web/diamond.png",2,J.unlockScoreAchievement), new U("score_100000","earn_100000_score",1e5,"achievements/score.png","/web/diamond.png",2,J.unlockScoreAchievement), new U("score_500000","earn_500000_score",5e5,"achievements/score.png","/web/diamond.png",2,J.unlockScoreAchievement), new U("score_1000000","earn_1000000_score",1e6,"achievements/score.png","/web/diamond.png",5,J.unlockScoreAchievement), new U("theme_3","unlock_theme_3",3,"achievements/theme.png","/web/diamond.png",2,J.unlockBackgrounAchievement), new U("theme_5","unlock_theme_5",5,"achievements/theme.png","/web/diamond.png",2,J.unlockBackgrounAchievement), new U("theme_10","unlock_theme_10",10,"achievements/theme.png","/web/diamond.png",2,J.unlockBackgrounAchievement), new U("bomb_3","unlock_bomb_3",3,"achievements/bomb.png","/web/diamond.png",1,J.bombCountAchievement), new U("bomb_5","unlock_bomb_5",5,"achievements/bomb.png","/web/diamond.png",2,J.bombCountAchievement), new U("bomb_10","unlock_bomb_10",10,"achievements/bomb.png","/web/diamond.png",5,J.bombCountAchievement), new U("join_discord","enter_discord_code",1,"achievements/discord.png","/web/diamond.png",5,J.unlockDiscordCode)];
var Y = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class Z extends E {
    constructor() {
        super("achievements.html"),
        this.achievementElements = new Map
    }
    open() {
        return Y(this, void 0, void 0, (function*() {
            var e, t, a;
            yield this.load();
            var n = At.room;
            const o = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector("#achievements-close-button")
              , i = null === (t = this.container) || void 0 === t ? void 0 : t.querySelector("#achievements-title");
            this.achievementsList = null === (a = this.container) || void 0 === a ? void 0 : a.querySelector("#achievements-list"),
            i.textContent = L.getWord("achievements"),
            o.addEventListener("click", ( () => {
                var e;
                this.close(),
                null === (e = this.container) || void 0 === e || e.remove(),
                this.container = void 0
            }
            )),
            this.removeListener2 = null == n ? void 0 : n.onMessage("achievement-claimed", (e => {
                this.updateAchievement(e.id, e.result)
            }
            )),
            this.removeListener = null == n ? void 0 : n.onMessage("achievement-progress", this.createAchievement.bind(this)),
            this.populateAchievements(J.achievements)
        }
        ))
    }
    createAchievement(e) {
        var t;
        const a = document.createElement("div");
        a.className = "achievements-item";
        const n = e.result
          , o = e.id
          , i = J.achievements.find((e => e.id === o));
        if (!i)
            return;
        let s = n.progress;
        n.progress > i.target && (n.progress = i.target),
        a.innerHTML = `\n            <div class="achievements-item-img">\n                <img src="${i.iconPath}" alt="${i.title}" class="achievements-icon">\n            </div>\n            <div class="achievement-progress">\n                <div class="progress-bar-text">${null != i.localizationKey ? L.getWordParams(i.localizationKey, i.target) : L.getWord(i.title)}\n                </div>\n                <div class="progress-bar-value">\n                    ${s}<span class="progress-bar-value-percent">/${i.target}</span>\n                </div>\n                <div class="progress-bar">\n                    <div class="progress-bar-fill" style="width: ${n.progress / i.target * 100}%;"></div>\n                </div>\n            </div>\n            <div class="achievement-reward">\n                <img src="${i.rewardIconPath}" alt="reward" class="achievement-reward-icon">\n                <div class="achievement-reward-text">${i.rewardAmount}</div>\n            </div>\n            <div class="achievement-claim">\n                <button class="close-button achievement-claim-button ${n.isClaimed ? "claimed" : n.isClaimable ? "active" : "disabled"}">\n                    ${n.isClaimed ? L.getWord("claimed") : n.isClaimable ? L.getWord("claim") : L.getWord("in_progress")}\n                </button>\n            </div>\n        `;
        a.querySelector(".achievement-claim-button").onclick = () => {
            n.isClaimable && this.claimAchievement(o)
        }
        ,
        this.achievementElements.set(o, a),
        null === (t = this.achievementsList) || void 0 === t || t.appendChild(a)
    }
    populateAchievements(e) {
        e.forEach((e => {
            var t;
            null === (t = At.room) || void 0 === t || t.send("achievement-progress", {
                id: e.id
            })
        }
        ))
    }
    updateAchievement(e, t) {
        const a = this.achievementElements.get(e);
        if (a) {
            const n = J.achievements.find((t => t.id === e));
            if (!n)
                return;
            const o = a.querySelector(".progress-bar-fill")
              , i = a.querySelector(".progress-bar-value")
              , s = a.querySelector(".achievement-claim-button");
            let d = t.progress;
            d > n.target && (d = n.target),
            o.style.width = d / n.target * 100 + "%",
            i.innerHTML = `${d}<span class="progress-bar-value-percent">/${n.target}</span>`,
            s.textContent = t.isClaimed ? L.getWord("claimed") : t.isClaimable ? L.getWord("claim") : L.getWord("in_progress"),
            s.disabled = !t.isClaimable,
            s.classList.toggle("active", t.isClaimable && !t.isClaimed),
            t.isClaimed && (s.classList.add("claimed"),
            r.play("unlocked", {
                volume: .12 * V.effects
            }),
            r.play("diamond", {
                volume: .4 * V.effects
            }))
        }
    }
    claimAchievement(e) {
        At.room.send("claim-achievement", {
            id: e
        })
    }
}
var X = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class Q extends E {
    constructor(e, t, a) {
        super("message.html"),
        this.message = a,
        this.title = t,
        Q.instance && Q.instance.close(),
        Q.instance = this
    }
    open(e) {
        return X(this, void 0, void 0, (function*() {
            var e, t, a;
            yield this.load();
            const n = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector("#no-button")
              , o = null === (t = this.container) || void 0 === t ? void 0 : t.querySelector("#popup-title")
              , i = null === (a = this.container) || void 0 === a ? void 0 : a.querySelector("#popup-description");
            n.textContent = L.getWord("ok"),
            i.textContent = this.message,
            o.textContent = this.title,
            n.addEventListener("click", this.onYesClicked.bind(this)),
            this.keyEvent = e => {
                "Escape" !== e.key && "Enter" !== e.key || this.close()
            }
            ,
            document.addEventListener("keydown", this.keyEvent)
        }
        ))
    }
    onYesClicked() {
        this.onSubmit && this.onSubmit(),
        this.close()
    }
}
class ee {
}
class te {
    constructor() {
        this.monstersHolder = null,
        this.monster = new ee,
        this.died = !0
    }
    getMonster() {
        var e;
        return null === (e = this.monster) || void 0 === e ? void 0 : e.element
    }
    static getStateFromString(e) {
        switch (e) {
        case "word":
            return 0;
        case "typing":
            return 5;
        case "starts_with":
            return 10;
        case "ends_with":
            return 9
        }
        return -1
    }
    setState(e) {
        this.died && e.health > 0 && this.spawn(e.name, e.health, e.oinfo),
        this.monster && (this.setHealth(e.health),
        this.setLevel(e.level),
        this.setInfo(e.oinfo),
        this.setMonster(e.name)),
        te.monsterMode = te.getStateFromString(e.name),
        te.currentMonster = e.name,
        te.currentDefition = e.def
    }
    setMonster(e) {
        this.monster.element && (this.monster.element.src = `/monsters/${e}.png`)
    }
    setInfo(e) {
        var t;
        null === (t = this.oinfoElement) || void 0 === t || t.remove(),
        this.oinfoElement = null,
        e && (this.oinfoElement = document.createElement("div"),
        this.oinfoElement.classList.add("ga-monster-oinfo"),
        this.oinfoElement.classList.add("fade-in"),
        this.monster.container.appendChild(this.oinfoElement),
        this.oinfoElement.innerText = e)
    }
    initializeMonstersHolder() {
        if (!this.monstersHolder) {
            this.monstersHolder = document.createElement("div"),
            this.monstersHolder.classList.add("ga-monsters-holder");
            const e = document.getElementById("ga-container");
            if (!e)
                throw new Error("Game container not found!");
            e.appendChild(this.monstersHolder)
        }
    }
    setLevel(e) {
        var t = document.createElement("span");
        t.classList.add("ga-monster-level"),
        t.innerText = e + 1 + " lvl",
        this.monster.container.appendChild(t)
    }
    spawn(e, t=100, a) {
        var n;
        this.initializeMonstersHolder(),
        this.died = !1;
        const o = document.createElement("div");
        o.classList.add("ga-monster-container");
        const i = document.createElement("img");
        i.id = "monster",
        i.src = `/monsters/${e}.png`,
        i.classList.add("ga-monster"),
        i.classList.add("ga-monster-appear"),
        setTimeout(( () => {
            i.classList.remove("ga-monster-appear")
        }
        ), 1e3);
        const s = document.createElement("div");
        s.classList.add("ga-health-bar-container");
        const r = document.createElement("div");
        r.classList.add("ga-health-bar"),
        r.style.width = `${t}%`,
        s.appendChild(r),
        o.appendChild(i),
        o.appendChild(s),
        null === (n = this.monstersHolder) || void 0 === n || n.appendChild(o),
        this.monster = new ee,
        this.monster = {
            container: o,
            element: i,
            healthBar: r,
            healthBarContainer: s,
            health: t
        }
    }
    destroy() {
        var e;
        null === (e = this.monstersHolder) || void 0 === e || e.remove(),
        this.monstersHolder = null,
        te.monsterMode = void 0
    }
    kill() {
        var e;
        if (!this.died) {
            this.died = !0;
            var t = this.monster.element
              , a = this.monster.container;
            null === (e = this.oinfoElement) || void 0 === e || e.classList.add("fade-out"),
            setTimeout(( () => {
                t.classList.add("ga-monster-die"),
                setTimeout(( () => {
                    a.remove()
                }
                ), 1e3)
            }
            ), 600),
            setTimeout(( () => {
                r.play("monster_die", {
                    volume: .15,
                    speed: 1.5
                })
            }
            ), 1500)
        }
    }
    setHealth(e) {
        e < 0 && (e = 0),
        this.monster.health = e,
        setTimeout(( () => {
            this.monster && (this.monster.healthBar.style.width = `${this.monster.health}%`)
        }
        ), 600)
    }
}
te.monsterMode = void 0;
var ae = function(e, t, a, n) {
    var o, i = arguments.length, s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, a, n);
    else
        for (var r = e.length - 1; r >= 0; r--)
            (o = e[r]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, a, s) : o(t, a)) || s);
    return i > 3 && s && Object.defineProperty(t, a, s),
    s
}
  , ne = function(e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
};
class oe {
    constructor(e, t, a) {
        this.name = e,
        this.locale = t,
        this.flag = a
    }
}
class ie {
    constructor(e, t, a, n) {
        this.id = e,
        this.name = t,
        this.description = a,
        this.locked = n
    }
}
class se {
}
class re extends se {
    constructor(e, t, a, n) {
        super(),
        this.id = e,
        this.unlocked = t,
        this.price = a,
        this.diamondPrice = n
    }
}
class de extends se {
    constructor(e, t, a, n, o=-93, i=-3, s=7) {
        super(),
        this.id = e,
        this.unlocked = t,
        this.price = a,
        this.diamondPrice = n,
        this.top = o,
        this.left = i,
        this.width = s
    }
}
class le extends se {
    constructor(e, t, a, n, o=!1, i="none") {
        super(),
        this.tiled = !1,
        this.credits = null,
        this.id = e,
        this.unlocked = t,
        this.price = a,
        this.diamondPrice = n,
        this.tiled = o,
        this.credits = i
    }
}
class ce {
    static getFrameFromExp(e) {
        var t = this.getLevelFromExp(e);
        return t < 10 ? "frame_bronze" : t < 35 ? "frame_aqua" : t < 45 ? "frame_silver" : t < 50 ? "frame_gold" : t < 60 ? "frame_diamond" : "frame_plat"
    }
    static getBackgrounds(e) {
        var t = ce.backgrounds.map((e => new le(e.id,e.unlocked,e.price,e.diamondPrice,e.tiled,e.credits)));
        return t.forEach((t => {
            var a = e.split(",");
            t.unlocked = void 0 !== a.find((e => parseInt(e) == t.id))
        }
        )),
        t
    }
    static getFrames(e) {
        var t = ce.frames.map((e => new re(e.id,e.unlocked,e.price,e.diamondPrice)));
        return t.forEach((t => {
            var a = e.split(",");
            t.unlocked = void 0 !== a.find((e => parseInt(e) == t.id))
        }
        )),
        t
    }
    static getBombs(e) {
        var t = ce.bombs.map((e => new de(e.id,e.unlocked,e.price,e.diamondPrice)));
        return t.forEach((t => {
            var a = e.split(",");
            t.unlocked = void 0 !== a.find((e => parseInt(e) == t.id))
        }
        )),
        t
    }
    static getOwnedBombs() {
        var e;
        return null === (e = N.player) || void 0 === e ? void 0 : e.bombs.split(",").map((e => parseInt(e)))
    }
    static getOwnedFrames() {
        var e;
        return (null === (e = N.player) || void 0 === e ? void 0 : e.frames) ? N.player.frames.split(",").map((e => {
            const t = parseInt(e);
            return isNaN(t) ? null : t
        }
        )).filter((e => null !== e)) : []
    }
    static getBackground(e) {
        return ce.backgrounds.find((t => t.id == e))
    }
    static getLevelFromExp(e) {
        let t = 1
          , a = 600;
        for (; e >= a && t < 99999; )
            t++,
            a += Math.floor(600 * Math.pow(1.1, t - 1));
        return t
    }
    static getExpForLevel(e) {
        let t = 0;
        for (let a = 1; a < e; a++)
            t += Math.floor(600 * Math.pow(1.1, a - 1));
        return t
    }
    static getStartingTimeFromSpeed(e) {
        const t = this.speeds.indexOf(e);
        return -1 !== t ? ce.startingTimes[t] : -1
    }
    static isKeyAllowed(e, t) {
        var a = e.toLocaleUpperCase(t);
        const n = ce.allowedAlphabetsByLocale[t];
        return !!n && (n.includes(a) || n.includes(e))
    }
    static getLocaleByName(e) {
        return this.languages.findIndex((t => t.locale === e))
    }
    static getLanguages() {
        return ce.languages
    }
    static getDifficulties() {
        return [{
            id: 0,
            name: "normal"
        }, {
            id: 1,
            name: "challenge"
        }]
    }
    static findIndex(e, t, a) {
        if (7 == a && (a = te.monsterMode),
        0 == a || 4 == a || 8 == a) {
            if (!e || !t)
                return -1;
            if (e.length < t.length)
                return -1;
            for (let a = 0; a <= e.length - t.length; a++) {
                let n = !0;
                for (let o = 0; o < t.length; o++)
                    if (e[a + o] !== t[o]) {
                        n = !1;
                        break
                    }
                if (n)
                    return a
            }
        } else {
            if (6 == a)
                return e.includes(t) ? e.indexOf(t) : -1;
            if (1 == a)
                return e.startsWith(t) ? 0 : -1;
            if (5 == a)
                return t.startsWith(e) ? 0 : -1;
            if (9 == a)
                return e.endsWith(t) ? e.length - t.length : -1;
            if (10 == a)
                return e.startsWith(t) ? 0 : -1
        }
        return -1
    }
    static calculate_correct_reward(e, t, a, n) {
        return e ? (t || (t = 1),
        a ? Math.min(10, t * e.length) : 1 == n ? e.length * t + e.length : 2 == n ? e.length * t + 2 : e.length * t) : 0
    }
    static calculateWordPrice(e, t) {
        const a = e.length + 2 * (e.split("-").length - 1) + 3 * (e.split("'").length - 1);
        let n = 0;
        return n = a < 5 ? 500 : Math.round(2e3 * Math.pow(1.11, a - 5)),
        n *= t,
        Math.round(n)
    }
}
ce.gameModes = [new ie(0,"original_mode","original_mode_desct",!1), new ie(7,"monsters","monsters_desct",!1), new ie(8,"climb","climb_desct",!1), new ie(1,"chain_word_mode","chain_word_desct",!1), new ie(2,"guess_word_mode","guess_word_desct",!1), new ie(5,"type_racer","type_racer_desct",!1)],
ce.languages = [new oe("English","en-US","EN"), new oe("Portuguese","pt-BR","BR"), new oe("Turkish","tr-TR","TR"), new oe("French","fr-FR","FR"), new oe("Spanish","es-ES","ES"), new oe("Tagalog","tl-TL","TL"), new oe("German","de-DE","DE"), new oe("Italian","it-IT","IT"), new oe("Indonesian","id-ID","ID"), new oe("Swedish","sv-SE","SV"), new oe("Minecraft","mc-MC","MC")],
ce.allowedAlphabetsByLocale = {
    "en-US": "ABCDEFGHIJKLMNOPQRSTUVWXYZ'-",
    "pt-BR": "ABCDEFGHIJKLMNOPQRSTUVWXYZ'-",
    "tr-TR": "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ'-",
    "fr-FR": "ABCDEFGHIJKLMNOPQRSTUVWXYZ'-",
    "es-ES": "ABCDEFGHIJKLMNOPQRSTUVWXYZ'-",
    "tl-TL": "ABCDEFGHIJKLMNOPQRSTUVWXYZ'-",
    "de-DE": "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß'-",
    "it-IT": "ABCDEFGHIJKLMNOPQRSTUVWXYZ'-",
    "id-ID": "ABCDEFGHIJKLMNOPQRSTUVWXYZ'-",
    "sv-SE": "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ-",
    "mc-MC": "ABCDEFGHIJKLMNOPQRSTUVWXYZ!-'"
},
ce.startingTimes = [17, 13, 11, 9, 6],
ce.speeds = [.5, 1, 1.5, 2, 3],
ce.backgrounds = [new le(0,!0,0,0,!1,"HUMAN"), new le(1,!0,0,0,!1,"revere1992"), new le(2,!1,75e3,50,!1,"revere1992"), new le(3,!1,25e3,25,!1,"HUMAN"), new le(4,!1,1e5,50,!1,"AI"), new le(5,!1,75e3,50,!1,"HUMAN"), new le(6,!1,25e3,25,!1,"revere1992"), new le(7,!1,1e5,50,!1,"HUMAN"), new le(8,!1,1e5,50,!1,"AI"), new le(9,!1,1e5,50,!1,"HUMAN"), new le(10,!1,15e4,50,!0,"AI"), new le(11,!1,15e4,50,!0,"HUMAN"), new le(12,!1,2e5,50,!0,"HUMAN"), new le(13,!1,1e5,50,!1,"AI"), new le(14,!1,25e3,50,!1,"AI"), new le(15,!1,25e3,50,!1,"revere1992"), new le(16,!1,1e5,50,!1,"AI"), new le(17,!1,25e3,50,!1,"AI"), new le(18,!1,5e4,75,!1,"revere1992"), new le(19,!1,325e3,75,!0,"AI"), new le(20,!1,25e4,75,!0,"AI"), new le(21,!1,75e3,75,!0,"AI"), new le(22,!1,1e5,75,!1,"AI"), new le(23,!1,1e5,75,!1,"AI"), new le(24,!1,75e3,75,!1,"revere1992"), new le(25,!1,3e5,75,!0,"AI"), new le(26,!1,75e3,75,!1,"revere1992"), new le(27,!1,1e5,75,!1,"AI"), new le(28,!1,1e5,75,!1,"AI"), new le(29,!1,5e4,75,!1,"AI"), new le(30,!1,1e5,75,!1,"AI"), new le(31,!1,1e5,75,!1,"AI"), new le(32,!1,1e5,75,!1,"AI"), new le(33,!1,1e5,75,!1,"AI"), new le(34,!1,1e5,75,!1,"AI"), new le(35,!1,1e5,75,!1,"AI"), new le(36,!1,1e5,75,!1,"AI"), new le(37,!1,1e5,75,!1,"AI"), new le(38,!1,1e5,75,!1,"AI"), new le(39,!1,1e5,75,!1,"AI"), new le(40,!1,1e5,75,!1,"AI"), new le(98,!0,1e5,75,!1,"HUMAN")],
ce.bombs = [new de(0,!0,1e3,5), new de(1,!1,5e3,10), new de(2,!1,1e4,10), new de(3,!1,1e4,10), new de(4,!1,5e4,20), new de(5,!1,5e4,20), new de(6,!1,25e3,15), new de(7,!1,1e5,30), new de(8,!1,25e4,50), new de(9,!1,15e4,40), new de(10,!1,2e5,40), new de(11,!1,2e5,40), new de(12,!1,25e4,50), new de(13,!1,25e4,50), new de(14,!1,75e4,100), new de(15,!1,25e4,50), new de(16,!1,3e5,50), new de(17,!1,35e4,50), new de(18,!1,35e4,50), new de(19,!1,25e4,35), new de(20,!1,5e4,20), new de(21,!1,25e4,50), new de(22,!1,25e4,50), new de(23,!1,475e3,65), new de(24,!1,15e4,50), new de(25,!1,3e5,50), new de(26,!1,15e4,50), new de(27,!1,2e5,50), new de(28,!1,475e3,65), new de(29,!1,35e4,50), new de(30,!1,25e4,50), new de(31,!1,2e5,50), new de(32,!1,35e4,50), new de(33,!1,5e5,75), new de(34,!1,7e5,100), new de(35,!1,3e5,50), new de(36,!1,5e5,75), new de(37,!1,7e5,100), new de(38,!1,5e5,75), new de(39,!1,6e5,75), new de(40,!1,7e5,100), new de(41,!1,3e5,50), new de(42,!1,7e5,100,-80,-70), new de(43,!1,5e5,75,-107,11), new de(44,!1,5e5,75,-100,11), new de(45,!1,65e4,75,-95,-1), new de(46,!1,65e4,75,-90,0), new de(47,!1,65e4,75,-92,20), new de(48,!1,4e5,50,-60,9), new de(49,!1,6e5,75,-87,8), new de(50,!1,5e4,25), new de(51,!1,2e5,50), new de(52,!1,5e5,70,-106,-27), new de(53,!1,5e5,80,-106,-11), new de(54,!1,4e5,50), new de(55,!1,5e5,100,-85,-8), new de(56,!1,2e5,50), new de(57,!1,65e4,100), new de(58,!1,1e5,50), new de(59,!1,15e4,50), new de(60,!1,25e4,50,-90,-8), new de(61,!1,25e4,50), new de(62,!1,25e4,50), new de(63,!1,5e5,100,-95,-27), new de(64,!1,25e4,50), new de(65,!1,65e4,100,-108,-27), new de(66,!1,7e5,100,-85,-15), new de(67,!1,55e4,50), new de(68,!1,15e4,50), new de(69,!1,15e4,50), new de(70,!1,1e5,50), new de(71,!1,1e5,50,-110,-10), new de(72,!1,1e5,50,-92,-29), new de(73,!1,1e5,50,-98,8), new de(74,!1,1e5,50,-98,-4), new de(75,!1,1e5,50,-101,-3), new de(76,!1,1e5,50,-95,-2), new de(77,!1,1e5,50,-91,18), new de(78,!1,1e5,50,-90,24), new de(79,!1,1e5,50,-110,-10), new de(80,!1,1e5,50,-112,-8), new de(81,!1,1e5,50,-98,3), new de(82,!1,1e5,50,-90,-35,9), new de(83,!1,1e5,50,-98,-3), new de(84,!1,1e5,50,-110,-16), new de(85,!1,1e5,50,-110,-13), new de(86,!1,1e5,50,-108,-3), new de(87,!1,1e5,50,-108,-2), new de(88,!1,1e5,50,-90,-24), new de(89,!1,1e5,50,-100,-30), new de(90,!1,1e5,50), new de(91,!1,1e5,50,-108,-32), new de(92,!1,1e5,50,-110,-29), new de(93,!1,1e5,50,-110,-29), new de(94,!1,1e5,50,-110,-29), new de(95,!1,1e5,50,-110,-29), new de(96,!1,1e5,50,-110,-17), new de(97,!1,1e5,50,-90,-3), new de(98,!1,1e5,50,-90,-3), new de(99,!1,1e5,50,-93,-3), new de(100,!1,1e5,50,-50,10), new de(101,!1,1e5,50,-115,-2), new de(102,!1,1e5,50,-110,-30), new de(103,!1,1e5,50,-95,-7), new de(104,!1,1e5,50,-93,-6), new de(105,!1,1e5,50,-110,-2), new de(106,!1,1e5,50,-92,18), new de(107,!1,1e5,50,-105,-10), new de(108,!1,1e5,50,-103,-15), new de(109,!1,1e5,50,-93,8), new de(110,!1,1e5,50,-100,2), new de(111,!1,1e5,50,-100,2), new de(112,!1,1e5,50,-104,-5), new de(113,!1,1e5,50,-105,-15), new de(114,!1,1e5,50,-86,5), new de(115,!1,1e5,50,-70,10), new de(116,!1,1e5,50,-95,18), new de(117,!1,1e5,50,-123,18), new de(118,!1,1e5,50,-90,-2), new de(119,!1,1e5,50,-88,10), new de(120,!1,1e5,50,-110,-27,9), new de(121,!1,1e5,50,-100,8), new de(122,!1,1e5,50,-110,-25), new de(123,!1,1e5,50,-110,-50,8), new de(124,!1,1e5,50,-120,-60), new de(125,!1,1e5,50,-95,-15,11), new de(126,!1,1e5,50,-50,20,9), new de(127,!1,1e5,50,-115,-20), new de(128,!1,1e5,50,-105,2), new de(129,!1,1e5,50,-100,-20,8), new de(130,!1,1e5,100), new de(131,!1,1e5,100), new de(132,!1,1e5,50,-86,5)],
ce.frames = [new re(0,!1,5e5,500), new re(1,!1,5e5,500), new re(2,!1,5e5,500), new re(3,!1,5e5,500), new re(4,!1,5e5,500), new re(5,!1,5e5,500), new re(6,!1,5e5,500), new re(7,!1,5e5,500), new re(8,!1,5e5,500), new re(9,!1,5e5,250), new re(10,!1,5e5,500), new re(11,!1,5e5,500), new re(12,!1,5e5,500), new re(13,!1,5e5,500), new re(14,!1,5e5,500), new re(15,!1,5e5,500), new re(16,!1,5e5,500), new re(17,!1,5e5,500), new re(18,!1,1e6,750), new re(19,!1,6e5,600)],
ce.formatNumber = (e, t="en-US") => {
    if (null == e)
        return "0";
    const a = "string" == typeof e ? parseFloat(e) : e;
    return isNaN(a) ? "0" : a.toLocaleString(t, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    })
}
,
ce.monsters = [{
    id: "0",
    name: "word"
}, {
    id: "1",
    name: "typing"
}, {
    id: "2",
    name: "vegetable"
}, {
    id: "3",
    name: "fruit"
}, {
    id: "4",
    name: "long_word"
}, {
    id: "5",
    name: "short_word"
}, {
    id: "6",
    name: "ends_with"
}, {
    id: "7",
    name: "starts_with"
}, {
    id: "8",
    name: "poop"
}, {
    id: "9",
    name: "double_letter"
}, {
    id: "10",
    name: "reverse"
}, {
    id: "11",
    name: "aaaa"
}];
class me extends d.Schema {
    constructor() {
        super(...arguments),
        this.combo = 1,
        this.spectating = !1,
        this.bomb = 0,
        this.frame = -1,
        this.dc = !1,
        this.type = 0,
        this.lang = "en-US"
    }
}
ae([d.type("string"), ne("design:type", String)], me.prototype, "session_id", void 0),
ae([d.type("string"), ne("design:type", String)], me.prototype, "auth_id", void 0),
ae([d.type("string"), ne("design:type", String)], me.prototype, "username", void 0),
ae([d.type("string"), ne("design:type", String)], me.prototype, "avatar", void 0),
ae([d.type("number"), ne("design:type", Number)], me.prototype, "heart", void 0),
ae([d.type("boolean"), ne("design:type", Boolean)], me.prototype, "eliminated", void 0),
ae([d.type("number"), ne("design:type", Number)], me.prototype, "combo", void 0),
ae([d.type("boolean"), ne("design:type", Boolean)], me.prototype, "spectating", void 0),
ae([d.type("number"), ne("design:type", Number)], me.prototype, "bomb", void 0),
ae([d.type("number"), ne("design:type", Number)], me.prototype, "frame", void 0),
ae([d.type("boolean"), ne("design:type", Boolean)], me.prototype, "dc", void 0),
ae([d.type("number"), ne("design:type", Number)], me.prototype, "type", void 0),
ae([d.type("string"), ne("design:type", String)], me.prototype, "lang", void 0);
class ue extends d.Schema {
    constructor() {
        super(...arguments),
        this.players = new d.MapSchema,
        this.word = "",
        this.time = 0,
        this.started = !1,
        this.maxTime = 12,
        this.speed = 1,
        this.background = 0,
        this.mode = 0,
        this.locked = !1,
        this.diff = 0,
        this.heart = 2,
        this.maxp = -1,
        this.wpp = -1,
        this.plength = -1,
        this.wpp_s = 0,
        this.monsters = "0,1,2,3,4,5,6,7,8,9,10,11,12",
        this.mlang = !1,
        this.sc = 0
    }
}
ae([d.type({
    map: me
}), ne("design:type", Object)], ue.prototype, "players", void 0),
ae([d.type("string"), ne("design:type", String)], ue.prototype, "currentPlayerSessionId", void 0),
ae([d.type("string"), ne("design:type", String)], ue.prototype, "word", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "time", void 0),
ae([d.type("boolean"), ne("design:type", Boolean)], ue.prototype, "started", void 0),
ae([d.type("string"), ne("design:type", String)], ue.prototype, "letter", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "solves", void 0),
ae([d.type("string"), ne("design:type", String)], ue.prototype, "locale", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "maxTime", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "speed", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "background", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "mode", void 0),
ae([d.type("boolean"), ne("design:type", Boolean)], ue.prototype, "locked", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "diff", void 0),
ae([d.type("string"), ne("design:type", String)], ue.prototype, "host", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "heart", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "maxp", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "wpp", void 0),
ae([d.type("number"), ne("design:type", Object)], ue.prototype, "plength", void 0),
ae([d.type("number"), ne("design:type", Object)], ue.prototype, "wpp_s", void 0),
ae([d.type("string"), ne("design:type", String)], ue.prototype, "monsters", void 0),
ae([d.type("boolean"), ne("design:type", Boolean)], ue.prototype, "guests", void 0),
ae([d.type("boolean"), ne("design:type", Boolean)], ue.prototype, "mlang", void 0),
ae([d.type("number"), ne("design:type", Number)], ue.prototype, "sc", void 0);
const pe = [{
    icon: "/web/coin.png",
    value: "500",
    type: "coin"
}, {
    icon: "/web/diamond.png",
    value: "5",
    type: "diamond"
}, {
    icon: "/web/diamond.png",
    value: "5",
    type: "diamond"
}, {
    icon: "/web/coin.png",
    value: "5000",
    type: "coin"
}, {
    icon: "/web/diamond.png",
    value: "5",
    type: "diamond"
}, {
    icon: "/web/diamond.png",
    value: "5",
    type: "diamond"
}, {
    icon: "/web/diamond.png",
    value: "10",
    type: "diamond"
}]
  , he = new Map(["1295761199597621269", "1300460267007639575", "1332203256008409148", "1362241618396188783", "1350184683710709790"].map((e => [e, !0])))
  , ve = [{
    theme: "adventure",
    bombs: [1, 16, 17, 18, 23, 28, 50, 54, 62, 70],
    key: 1
}, {
    theme: "animals",
    bombs: [33, 35, 36, 37, 38, 39, 40, 41, 45, 46, 47, 48, 71, 72, 96, 101],
    key: 1
}, {
    theme: "colors",
    bombs: [5, 6, 8, 10, 11, 12, 22, 31, 32, 98, 99],
    key: 1
}, {
    theme: "cute",
    bombs: [4, 19, 25, 58, 59, 60, 109, 115, 119],
    key: 1
}, {
    theme: "explosive",
    bombs: [2, 3, 97, 104, 105],
    key: 1
}, {
    theme: "food",
    bombs: [13, 21, 26, 30, 73, 74, 75, 76, 77, 78, 108, 116],
    key: 1
}, {
    theme: "girly",
    bombs: [15, 20, 51, 55, 56, 57, 63, 64, 79, 102, 111],
    key: 2
}, {
    theme: "luxury",
    bombs: [14, 80, 81, 82, 83, 84, 85, 86, 87, 88, 91, 112, 113, 130],
    key: 3
}, {
    theme: "horror",
    bombs: [7, 29, 43, 44, 49, 66, 67, 69, 106, 107, 110, 117, 118],
    key: 2
}, {
    theme: "weirder",
    bombs: [9, 24, 27, 34, 42, 53, 61, 65, 68, 89, 90, 93, 100, 114, 52],
    key: 2
}, {
    theme: "instruments",
    bombs: [120, 121, 122, 123, 124, 125, 126, 127, 128, 129],
    key: 3
}]
  , ge = [{
    id: 0,
    amount: 1,
    price: 75
}, {
    id: 1,
    amount: 3,
    price: 200
}, {
    id: 2,
    amount: 5,
    price: 325
}, {
    id: 3,
    amount: 10,
    price: 600
}, {
    id: 4,
    amount: 15,
    price: 750
}];
function ye(e) {
    const t = e.getBoundingClientRect()
      , a = V.gameScale || 1;
    return new DOMRect(t.x / a,t.y / a,t.width / a,t.height / a)
}
const be = {
    options: [{
        option: ["random"]
    }, {
        option: ["sub-1", "sub-2", "sub-3", "sub-4", "sub-5", "sub-6", "sub-7", "sub-8"]
    }]
}
  , fe = [{
    id: 0,
    name: "no-fail"
}, {
    id: 1,
    name: "win-heart-gain",
    params: {
        count: 3
    }
}, {
    id: 2,
    name: "win-on-streak",
    params: {
        count: 20
    }
}, {
    id: 3,
    name: "loose-heart-on-submit",
    params: {
        length: 6,
        isShorter: !1,
        hurt: !0
    }
}, {
    id: 4,
    name: "loose-on-wrong-submit",
    params: {
        count: 3
    }
}, {
    id: 5,
    name: "single-prompt",
    params: {
        prompt: "",
        random: !0
    }
}, {
    id: 6,
    name: "submit-limitation-word",
    params: {
        targetWord: "AB",
        includes: !1
    }
}, {
    id: 7,
    name: "submit-word-win",
    params: {
        word: "WORD",
        includes: !0,
        count: 1
    }
}, {
    id: 8,
    name: "win-diamond-drop",
    params: {
        count: 3
    }
}, {
    id: 9,
    name: "win-key-drop",
    params: {
        count: 1
    }
}, {
    id: 10,
    name: "category-scenario",
    params: {
        category: "hypens",
        hurt: !1
    },
    restriction: {
        category: {
            "en-US": ["phobias", "constellations", "minerals", "creatures", "foods", "plants", "interjections", "languages", "instruments", "hypens", "apostrophes", "longs", "periodic"],
            "es-ES": ["phobias", "minerals", "creatures", "foods", "chemicals", "ethnonyms", "diseases", "adverbs", "hypens", "longs"],
            "fr-FR": ["phobias", "constellations", "hypens", "longs"],
            "de-DE": ["phobias", "constellations", "minerals", "countries", "cities", "hypens", "longs"],
            "pt-BR": ["hypens", "longs"],
            "id-ID": ["minerals", "languages", "hypens", "apostrophes", "longs"],
            "tl-TL": ["plants", "hypens"]
        }
    }
}, {
    id: 11,
    name: "all-syllables",
    visible: !1
}]
  , we = [{
    id: 0,
    name: "custom-scenario"
}, {
    id: 1,
    name: "no-fail-preset",
    scenarios: [{
        id: 0,
        params: {}
    }],
    settings: {
        diff: 0,
        health: 1,
        speed: 1.5,
        wpp: -1,
        wpp_s: 0
    }
}, {
    id: 2,
    name: "single-prompt-preset",
    scenarios: [{
        id: 5,
        params: {
            prompt: "",
            random: !0
        }
    }],
    settings: {
        diff: 0,
        health: 1,
        speed: 1,
        wpp: -1,
        wpp_s: 0
    }
}, {
    id: 3,
    name: "only-three-mistake-preset",
    scenarios: [{
        id: 4,
        params: {
            count: 3
        }
    }],
    settings: {
        diff: 0,
        health: 2,
        speed: 1.5,
        wpp: -1,
        wpp_s: 0
    }
}, {
    id: 4,
    name: "long-word-preset",
    scenarios: [{
        id: 3,
        params: {
            length: 8,
            isShorter: !1,
            hurt: !1
        }
    }],
    settings: {
        diff: 0,
        health: 2,
        speed: 1,
        wpp: -1,
        wpp_s: 0
    }
}, {
    id: 5,
    name: "all-syllables-preset",
    scenarios: [{
        id: 11,
        params: {}
    }],
    settings: {
        diff: 0,
        health: 3,
        speed: 1,
        wpp: -1,
        wpp_s: 0
    }
}]
  , _e = [{
    name: "phobias",
    languages: ["en-US", "es-ES", "fr-FR", "de-DE"]
}, {
    name: "constellations",
    languages: ["en-US", "de-DE", "fr-FR", "id-ID"]
}, {
    name: "minerals",
    languages: ["en-US", "es-ES", "de-DE", "id-ID"]
}, {
    name: "creatures",
    languages: ["en-US", "es-ES"]
}, {
    name: "foods",
    languages: ["en-US", "es-ES"]
}, {
    name: "countries",
    languages: ["de-DE"]
}, {
    name: "cities",
    languages: ["de-DE"]
}, {
    name: "chemicals",
    languages: ["es-ES"]
}, {
    name: "plants",
    languages: ["en-US", "tl-TL"]
}, {
    name: "interjections",
    languages: ["en-US"]
}, {
    name: "languages",
    languages: ["en-US", "id-ID"]
}, {
    name: "instruments",
    languages: ["en-US"]
}, {
    name: "ethnonyms",
    languages: ["es-ES"]
}, {
    name: "diseases",
    languages: ["es-ES"]
}, {
    name: "adverbs",
    languages: ["es-ES"]
}, {
    name: "periodic",
    languages: ["en-US"]
}, {
    name: "hypens",
    languages: ["en-US", "es-ES", "fr-FR", "de-DE", "pt-BR", "sv-SE", "id-ID", "tl-TL"]
}, {
    name: "apostrophes",
    languages: ["en-US", "id-ID"]
}, {
    name: "longs",
    languages: ["en-US", "es-ES", "fr-FR", "de-DE", "pt-BR", "id-ID"]
}];
var Ce = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class Ee {
    constructor(e) {
        this.lastMessageTime = 0,
        this.messageCooldown = 20,
        this.isNearBottom = !0,
        this.SCROLL_THRESHOLD = 100,
        this.channel = "room",
        Ee.instance = this,
        this.content = e,
        this.chatContainer = document.createElement("div"),
        this.chatContainer.id = "chat-container",
        this.input = document.createElement("input"),
        this.input.id = "chat-input",
        this.input.autocomplete = "off",
        this.initChat(),
        this.input.value = Ee.lastInputValue
    }
    initChat() {
        this.chatContainer.addEventListener("scroll", ( () => {
            const {scrollHeight: e, scrollTop: t, clientHeight: a} = this.chatContainer;
            this.isNearBottom = e - t - a <= this.SCROLL_THRESHOLD
        }
        )),
        this.input.type = "text",
        this.input.placeholder = "Type a message...",
        this.input.addEventListener("keydown", (e => {
            "Enter" === e.key && (this.sendMessage(this.input.value),
            this.input.value = "")
        }
        )),
        this.input.addEventListener("focus", ( () => {
            Ee.isInputActive = !0
        }
        )),
        this.input.addEventListener("blur", ( () => {
            Ee.isInputActive = !1
        }
        ));
        const e = document.createElement("button");
        e.id = "chat-button",
        e.innerText = "Send",
        e.addEventListener("click", ( () => {
            this.sendMessage(this.input.value),
            this.input.value = ""
        }
        ));
        var t = document.createElement("div");
        t.id = "chat-button-container";
        var a = document.createElement("img");
        a.classList.add("chat-switch");
        var n = V.autoSwitchChat ? "chat_auto_enabled" : "chat_auto_disabled";
        a.src = `/web/${n}.png`,
        a.addEventListener("click", ( () => {
            V.autoSwitchChat = !V.autoSwitchChat,
            n = V.autoSwitchChat ? "chat_auto_enabled" : "chat_auto_disabled",
            a.src = `/web/${n}.png`,
            z("Auto switch chat " + (V.autoSwitchChat ? "enabled" : "disabled"))
        }
        )),
        t.appendChild(this.input),
        t.appendChild(e),
        this.content.appendChild(a),
        this.content.appendChild(this.chatContainer),
        this.content.appendChild(t),
        this.renderChats()
    }
    scrollToBottomIfNeeded() {
        this.isNearBottom && (this.chatContainer.scrollTop = this.chatContainer.scrollHeight)
    }
    renderChats() {
        "room" == this.channel && (this.chatContainer.innerHTML = "",
        N.chats.forEach((e => {
            const t = this.createChatDiv(e);
            this.chatContainer.appendChild(t)
        }
        )),
        setTimeout(( () => {
            this.chatContainer.scrollTop = this.chatContainer.scrollHeight,
            this.isNearBottom = !0
        }
        ), 10))
    }
    createChatDiv(e) {
        const t = document.createElement("div");
        t.classList.add("chat-element"),
        e.id != N.player.id ? t.classList.add("chat-remote") : t.classList.add("chat-locale");
        const a = document.createElement("img");
        a.classList.add("chat-avatar"),
        $(H(e.id, e.avatar, 128), a),
        a.alt = e.displayName,
        a.onclick = () => Ce(this, void 0, void 0, (function*() {
            yield xe.showPlayerProfile(e.id)
        }
        ));
        const n = document.createElement("div")
          , o = document.createElement("strong");
        o.style.flex = "1",
        o.innerText = e.displayName;
        const i = document.createElement("p");
        i.innerText = e.message,
        i.style.margin = "5px 0",
        i.style.wordBreak = "break-word",
        i.style.overflowWrap = "break-word",
        e.time || (e.time = Date.now());
        var s = new Date(e.time)
          , r = `${s.getHours().toString().padStart(2, "0")}:${s.getMinutes().toString().padStart(2, "0")}`;
        const d = document.createElement("span");
        return d.classList.add("chat-time"),
        d.innerText = r,
        t.appendChild(d),
        n.appendChild(o),
        n.appendChild(i),
        t.appendChild(a),
        t.appendChild(n),
        "[$joined$]" == e.message && e.system && (o.remove(),
        t.classList.add("operation"),
        o.innerText = "WordBomb",
        i.innerText = L.getWord("joined_room").replace("{0}", e.displayName),
        a.src = "/bomb.png"),
        "[$left$]" == e.message && e.system && (o.remove(),
        t.classList.add("operation"),
        o.innerText = "WordBomb",
        i.innerText = L.getWord("left_room").replace("{0}", e.displayName),
        a.src = "/bomb.png"),
        "[$kicked$]" == e.message && e.system && (o.remove(),
        t.classList.add("operation"),
        o.innerText = "WordBomb",
        i.innerText = L.getWord("kicked").replace("{0}", e.displayName),
        a.src = "/bomb.png"),
        t
    }
    clearChat(e) {
        this.renderChats()
    }
    sendMessage(e) {
        var t, a, n, o;
        if ("" === e.trim())
            return;
        const i = Date.now();
        if (i - this.lastMessageTime < this.messageCooldown)
            return new Q(( () => {}
            ),L.getWord("error"),L.getWord("chatCooldown")).open(null),
            this.input.disabled = !0,
            void setTimeout(( () => {
                this.input.disabled = !1
            }
            ), 100);
        this.lastMessageTime = i;
        const s = {
            avatar: N.player.avatar,
            displayName: (null === (t = N.player) || void 0 === t ? void 0 : t.displayName) || (null === (a = N.player) || void 0 === a ? void 0 : a.username),
            message: e.trim(),
            id: N.player.id,
            system: !1,
            time: Date.now()
        };
        N.chats.length > 50 && N.chats.shift();
        const r = s.message.slice(0, 255);
        s.message = r;
        const d = this.createChatDiv(s);
        this.chatContainer.appendChild(d),
        null === (n = N.currentRoom) || void 0 === n || n.send("chat", {
            message: r,
            channel: this.channel
        });
        var l = null === (o = N.currentRoom) || void 0 === o ? void 0 : o.onMessage("cr", ( () => {
            l(),
            l = null
        }
        ));
        setTimeout(( () => {
            l && (d.classList.add("chat-dc"),
            l())
        }
        ), 5e3),
        "room" == this.channel && N.chats.push(s),
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight,
        this.isNearBottom = !0
    }
    receiveMessage(e) {
        const t = this.createChatDiv(e);
        this.chatContainer.appendChild(t),
        this.scrollToBottomIfNeeded()
    }
    clearMessages() {
        this.chatContainer.innerHTML = ""
    }
    addMessage(e) {
        const t = {
            id: e.id,
            displayName: e.displayName,
            avatar: e.avatar,
            message: e.message,
            system: !1,
            time: e.time
        };
        this.receiveMessage(t),
        this.scrollToBottomIfNeeded()
    }
    addSystemMessage(e) {
        z(e)
    }
}
Ee.isInputActive = !1,
Ee.lastInputValue = "";
const Le = {
    "en-US": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 0,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 0,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 0,
            "'": 0,
            "-": 0
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 1,
            "-": 1
        }
    },
    "pt-BR": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 0,
            X: 0,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 0,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 0,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 0,
            Z: 1,
            "'": 0,
            "-": 0
        }
    },
    "it-IT": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 0,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 0,
            Y: 1,
            Z: 1,
            "'": 1,
            "-": 1
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        }
    },
    "tr-TR": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            "Ç": 0,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            "Ğ": 1,
            H: 1,
            I: 1,
            "İ": 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            "Ö": 0,
            P: 1,
            R: 1,
            S: 1,
            "Ş": 1,
            T: 1,
            U: 1,
            "Ü": 1,
            V: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            "Ç": 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            "Ğ": 1,
            H: 1,
            I: 1,
            "İ": 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            "Ö": 1,
            P: 1,
            R: 1,
            S: 1,
            "Ş": 1,
            T: 1,
            U: 1,
            "Ü": 1,
            V: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            "Ç": 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            "Ğ": 1,
            H: 1,
            I: 1,
            "İ": 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            "Ö": 1,
            P: 1,
            R: 1,
            S: 1,
            "Ş": 1,
            T: 1,
            U: 1,
            "Ü": 1,
            V: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 1
        }
    },
    "fr-FR": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 0,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 0,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 0,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 1,
            "-": 1
        }
    },
    "es-ES": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 0,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 0,
            X: 0,
            Y: 1,
            Z: 0,
            "'": 0,
            "-": 0
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 0,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 0,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        }
    },
    "tl-TL": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 0,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 0,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 0,
            "'": 0,
            "-": 1
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 1,
            "-": 1
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        }
    },
    "de-DE": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 0,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 0,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 0,
            Y: 0,
            Z: 1,
            "'": 0,
            "-": 0
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 0,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 0,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 0
        }
    },
    "sv-SE": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "-": 0
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "-": 0
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "-": 0
        }
    },
    "id-ID": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 0,
            X: 0,
            Y: 1,
            Z: 0,
            "'": 0,
            "-": 0
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 0,
            Y: 1,
            Z: 0,
            "'": 0,
            "-": 0
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 0,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 1
        }
    },
    "mc-MC": {
        easy: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 0,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 0,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 0,
            "'": 0,
            "-": 1
        },
        normal: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 0,
            "-": 1
        },
        hard: {
            A: 1,
            B: 1,
            C: 1,
            D: 1,
            E: 1,
            F: 1,
            G: 1,
            H: 1,
            I: 1,
            J: 1,
            K: 1,
            L: 1,
            M: 1,
            N: 1,
            O: 1,
            P: 1,
            Q: 1,
            R: 1,
            S: 1,
            T: 1,
            U: 1,
            V: 1,
            W: 1,
            X: 1,
            Y: 1,
            Z: 1,
            "'": 1,
            "-": 1
        }
    }
};
var ke = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
function Se() {
    const e = document.createElement("div");
    e.classList.add("loading-div");
    var t = document.createElement("div");
    t.classList.add("lds-ring");
    for (let n = 0; n < 4; n++) {
        var a = document.createElement("div");
        t.appendChild(a)
    }
    return e.appendChild(t),
    e
}
class xe {
    static openBuffsWindow() {
        var e = document.createElement("div");
        e.classList.add("full-window", "buffs-window"),
        document.body.appendChild(e);
        var t = xe.createTopRightCornerCloseButton();
        t.addEventListener("click", ( () => {
            e.remove()
        }
        )),
        e.appendChild(t);
        var a = document.createElement("div");
        a.classList.add("buffs-title"),
        a.textContent = "Experience Modifiers",
        e.appendChild(a);
        var n = document.createElement("div");
        n.classList.add("buffs-container"),
        e.appendChild(n);
        [{
            icon: "🧩",
            title: "buff_scenario",
            description: "buff_scenario_desct",
            modifier: "+15% exp",
            isEnabled: () => 0 != At.room.state.sc
        }, {
            icon: "🎮",
            title: "buff_discord",
            description: "buff_discord_desct",
            modifier: "+15% exp",
            isEnabled: () => N.playingAtWordBombServer
        }, {
            icon: "🌐",
            title: "buff_mlang",
            description: "buff_mlang_desct",
            modifier: "+15% exp",
            isEnabled: () => At.room.state.mlang
        }, {
            icon: "🔒",
            title: "buff_public",
            description: "buff_public_desct",
            modifier: "+15% exp",
            isEnabled: () => {
                var e, t, a, n, o;
                return 0 == (null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.locked) && (null === (o = null === (n = null === (a = At.room) || void 0 === a ? void 0 : a.state) || void 0 === n ? void 0 : n.players) || void 0 === o ? void 0 : o.size) >= 2
            }
        }].forEach((e => {
            n.appendChild((e => {
                const t = document.createElement("div");
                t.classList.add("buff-item"),
                e.isEnabled() || t.classList.add("buff-disabled");
                const a = document.createElement("div");
                a.classList.add("buff-icon"),
                a.textContent = e.icon,
                t.appendChild(a);
                const n = document.createElement("div");
                n.classList.add("buff-info");
                const o = document.createElement("div");
                o.classList.add("buff-title"),
                o.textContent = L.getWord(e.title),
                n.appendChild(o);
                const i = document.createElement("div");
                i.classList.add("buff-description"),
                i.textContent = L.getWord(e.description),
                n.appendChild(i),
                t.appendChild(n);
                const s = document.createElement("div");
                return s.classList.add("buff-modifier"),
                s.textContent = e.modifier,
                e.isEnabled() || s.classList.add("inactive"),
                t.appendChild(s),
                t
            }
            )(e))
        }
        ));
        var o = document.createElement("div");
        o.classList.add("buffs-info-section"),
        o.textContent = L.getWord("exp-modifiers"),
        e.appendChild(o)
    }
    static globalChatWindow() {
        return ke(this, void 0, void 0, (function*() {
            var e, t = document.getElementById("global-chat-window");
            t && t.remove();
            var a = xe.createFloatingWindow("70vh");
            a.classList.add("global-chat"),
            a.id = "global-chat-window";
            var n = xe.createTopRightCornerCloseButton();
            a.appendChild(n),
            n.addEventListener("click", ( () => {
                var e;
                a.remove(),
                null === (e = N.currentRoom) || void 0 === e || e.send("leave-channel")
            }
            )),
            this.addDragging(a);
            var o = document.createElement("div");
            o.classList.add("tab-container"),
            a.appendChild(o);
            var i = document.createElement("div");
            i.classList.add("chat-area");
            var s = new Ee(i);
            s.channel = this.savedChannel;
            let r = !1;
            const d = e => {
                var t, a;
                null === (t = N.currentRoom) || void 0 === t || t.send("join-channel", e);
                var n = null === (a = N.currentRoom) || void 0 === a ? void 0 : a.onMessage("joined-channel", (e => ke(this, void 0, void 0, (function*() {
                    n();
                    try {
                        const t = yield v.http.post("/chat", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                channel: e
                            })
                        });
                        t.data && t.data.history && (s.clearMessages(),
                        t.data.history.forEach((e => {
                            s.addMessage(e)
                        }
                        )))
                    } catch (t) {
                        s.addSystemMessage(t.toString())
                    }
                }
                ))))
            }
            ;
            d(this.savedChannel),
            ["mlang", "fr-FR", "de-DE", "es-ES"].forEach((e => {
                var t, a = document.createElement("div");
                a.classList.add("tab"),
                o.appendChild(a),
                e == this.savedChannel && a.classList.add("active-tab");
                var n = null === (t = ce.getLanguages().find((t => t.locale == e))) || void 0 === t ? void 0 : t.flag;
                null == n && (n = e);
                var i = document.createElement("img");
                i.src = `/flag/${n}.png`,
                i.classList.add("tab-flag"),
                a.appendChild(i),
                a.addEventListener("click", ( () => {
                    r || e === this.savedChannel || (r = !0,
                    a.style.opacity = "0.7",
                    setTimeout(( () => {
                        r = !1,
                        o.querySelectorAll(".tab").forEach((e => e.style.opacity = "1"))
                    }
                    ), N.player.id.toString().length < 10 ? 500 : 1e3),
                    s.channel = e,
                    o.querySelectorAll(".tab").forEach((e => e.classList.remove("active-tab"))),
                    a.classList.add("active-tab"),
                    this.savedChannel = e,
                    d(e))
                }
                ))
            }
            )),
            a.appendChild(i),
            document.body.appendChild(a),
            N.player.id.toString().length < 10 && (null === (e = a.querySelector("#chat-button-container")) || void 0 === e || e.remove())
        }
        ))
    }
    static drawTrade(e) {
        return ke(this, void 0, void 0, (function*() {
            var t;
            if (e.innerHTML = "",
            (null === (t = N.player) || void 0 === t ? void 0 : t.id.toString().length) < 10)
                return void (e.innerHTML = "<p>You must be logged in to view this window</p>");
            const a = document.createElement("div");
            a.classList.add("lobby-tabs"),
            e.appendChild(a);
            const n = document.createElement("div");
            n.classList.add("lobby-tab", "active"),
            n.textContent = "Home",
            a.appendChild(n);
            const o = document.createElement("div");
            o.classList.add("lobby-tab"),
            o.textContent = "Clans";
            const i = document.createElement("div");
            i.classList.add("lobby-tab"),
            i.textContent = "Your Words",
            a.appendChild(i);
            const s = document.createElement("div");
            s.classList.add("lobby-tab"),
            s.textContent = "Discoveries",
            a.appendChild(s);
            const d = document.createElement("div");
            d.classList.add("lobby-tab"),
            d.textContent = "Marketplace",
            a.appendChild(d);
            const l = document.createElement("div");
            l.classList.add("lobby-tab"),
            l.textContent = "Shop History",
            a.appendChild(l);
            const c = document.createElement("div");
            c.classList.add("lobby-tab"),
            c.textContent = "Stock Exchange",
            a.appendChild(c);
            const m = document.createElement("div");
            m.classList.add("lobby-tab-content"),
            e.appendChild(m);
            const u = e => {
                if (e.classList.contains("active"))
                    return;
                a.querySelectorAll(".lobby-tab").forEach((e => {
                    e.classList.remove("active"),
                    e.style.pointerEvents = "none"
                }
                )),
                e.classList.add("active"),
                m.innerHTML = "";
                const t = () => {
                    a.querySelectorAll(".lobby-tab").forEach((e => {
                        e.style.pointerEvents = "auto"
                    }
                    ))
                }
                ;
                e === n ? y().finally(t) : e === s ? h().finally(t) : e === c ? b().finally(t) : e === i ? p().finally(t) : e == d ? g().finally(t) : e == l ? w().finally(t) : e == o && f().finally(t)
            }
            ;
            i.addEventListener("click", ( () => u(i))),
            s.addEventListener("click", ( () => u(s))),
            d.addEventListener("click", ( () => u(d))),
            l.addEventListener("click", ( () => u(l))),
            c.addEventListener("click", ( () => u(c))),
            n.addEventListener("click", ( () => u(n))),
            o.addEventListener("click", ( () => u(o)));
            const p = () => ke(this, void 0, void 0, (function*() {
                m.innerHTML = "";
                const e = document.createElement("div");
                e.classList.add("tabs-container"),
                m.appendChild(e);
                const t = document.createElement("div");
                t.classList.add("tab", "active-tab"),
                t.textContent = "Your Words",
                e.appendChild(t);
                const a = document.createElement("div");
                a.classList.add("tab"),
                a.textContent = "Craft",
                e.appendChild(a);
                const n = document.createElement("div");
                n.classList.add("words-content-container"),
                m.appendChild(n);
                const o = () => ke(this, void 0, void 0, (function*() {
                    t.classList.add("active-tab"),
                    a.classList.remove("active-tab"),
                    n.innerHTML = "";
                    var e = document.createElement("div");
                    e.textContent = "Craft new words from your syllables. Syllables drop while playing the game",
                    e.classList.add("info-text"),
                    n.appendChild(e);
                    const o = Se();
                    n.appendChild(o);
                    const i = document.createElement("div");
                    i.classList.add("search-sort-container"),
                    n.appendChild(i);
                    const s = document.createElement("input");
                    s.setAttribute("type", "text"),
                    s.setAttribute("placeholder", "Search for a word..."),
                    s.classList.add("search-input", "wb-input"),
                    i.appendChild(s);
                    const r = document.createElement("select");
                    r.classList.add("language-dropdown", "wb-input");
                    const d = document.createElement("option");
                    d.value = "all",
                    d.textContent = "All Languages",
                    r.appendChild(d),
                    ce.getLanguages().forEach((e => {
                        const t = document.createElement("option");
                        t.value = e.locale,
                        t.textContent = e.name,
                        r.appendChild(t)
                    }
                    )),
                    i.appendChild(r);
                    const l = document.createElement("select");
                    l.classList.add("sort-dropdown", "wb-input");
                    [{
                        value: "word",
                        text: "Sort by Word (A-Z)"
                    }, {
                        value: "word-desc",
                        text: "Sort by Word (Z-A)"
                    }, {
                        value: "claims",
                        text: "Sort by Claims (Low to High)"
                    }, {
                        value: "claims-desc",
                        text: "Sort by Claims (High to Low)"
                    }].forEach((e => {
                        const t = document.createElement("option");
                        t.value = e.value,
                        t.textContent = e.text,
                        l.appendChild(t)
                    }
                    )),
                    i.appendChild(l);
                    const c = document.createElement("div");
                    c.classList.add("discovery-container"),
                    n.appendChild(c);
                    const m = document.createElement("div");
                    m.classList.add("pagination-container"),
                    n.appendChild(m);
                    try {
                        const e = yield v.http.post("/words", {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        o.remove();
                        const t = e.data;
                        if (t.rewards) {
                            var u = document.createElement("div");
                            u.classList.add("rewards-container");
                            var p = document.createElement("button");
                            p.classList.add("rewards-button", "wb-button"),
                            p.textContent = "Collect " + t.rewards.todayReward + " coins",
                            p.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                                var e, a, n;
                                p.textContent = "Collecting...",
                                p.disabled = !0;
                                try {
                                    const i = yield v.http.post("/collect-word-rewards", {
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                    if (null === (e = i.data) || void 0 === e ? void 0 : e.success) {
                                        p.textContent = "Collected!",
                                        p.disabled = !0;
                                        var o = (null === (a = N.player) || void 0 === a ? void 0 : a.score) || 0;
                                        o += t.rewards.todayReward,
                                        N.player.score = o,
                                        document.getElementById("coin").textContent = ce.formatNumber(o),
                                        setTimeout(( () => {
                                            u.remove()
                                        }
                                        ), 2e3)
                                    } else
                                        z(null === (n = i.data) || void 0 === n ? void 0 : n.error)
                                } catch (i) {
                                    p.textContent = "Error!",
                                    p.disabled = !1,
                                    z(i.toString())
                                }
                            }
                            ))));
                            var h = document.createElement("img");
                            h.src = "/web/coin.png",
                            h.classList.add("reward-icon"),
                            p.appendChild(h),
                            u.appendChild(p),
                            n.prepend(u)
                        }
                        if (!t.words || 0 === t.words.length)
                            return void (c.innerHTML = "<p>You do not have any words. Play the game to drop words.</p>");
                        const a = 50;
                        let i = 1
                          , d = [...t.words]
                          , g = "claims-desc"
                          , y = "all";
                        const b = e => {
                            switch (g = e,
                            e) {
                            case "word":
                            default:
                                d.sort(( (e, t) => e.word.localeCompare(t.word)));
                                break;
                            case "word-desc":
                                d.sort(( (e, t) => t.word.localeCompare(e.word)));
                                break;
                            case "claims":
                                d.sort(( (e, t) => (e.claimCount || 0) - (t.claimCount || 0)));
                                break;
                            case "claims-desc":
                                d.sort(( (e, t) => (t.claimCount || 0) - (e.claimCount || 0)))
                            }
                            i = 1,
                            w()
                        }
                          , f = e => {
                            y = e,
                            d = t.words.filter((t => "all" === e || t.locales.includes(e))),
                            b(g)
                        }
                          , w = () => {
                            if (c.innerHTML = "",
                            0 === d.length)
                                return c.innerHTML = "<p>No matching words found</p>",
                                void (m.style.display = "none");
                            const e = Math.ceil(d.length / a)
                              , t = (i - 1) * a
                              , n = Math.min(t + a, d.length);
                            d.slice(t, n).forEach((e => {
                                var t;
                                const a = document.createElement("div");
                                a.classList.add("discovery-item");
                                var n = document.createElement("span");
                                n.classList.add("discovery-level"),
                                n.textContent = e.level.toString(),
                                a.appendChild(n);
                                var o = document.createElement("div");
                                o.classList.add("flag-container");
                                const i = document.createElement("div");
                                i.classList.add("visible-flags");
                                const s = document.createElement("div");
                                s.classList.add("hover-flags"),
                                s.style.display = "none";
                                for (let c = 0; c < 1; c++) {
                                    const a = e.locales[c]
                                      , n = document.createElement("img")
                                      , o = (null === (t = ce.getLanguages().find((e => e.locale === a))) || void 0 === t ? void 0 : t.flag) || "unknown";
                                    n.src = `/flag/${o}.png`,
                                    n.classList.add("discovery-flag");
                                    const r = n.cloneNode(!0);
                                    i.appendChild(r),
                                    s.appendChild(n)
                                }
                                if (e.locales.length > 1) {
                                    const t = document.createElement("div");
                                    t.classList.add("flag-count"),
                                    t.textContent = "+" + (e.locales.length - 1),
                                    i.appendChild(t)
                                }
                                o.appendChild(i),
                                o.appendChild(s),
                                a.appendChild(o);
                                const r = document.createElement("span");
                                var d = document.createElement("span");
                                if (d.classList.add("discovery-text"),
                                d.textContent = e.word,
                                r.appendChild(d),
                                r.classList.add("discovery-word"),
                                a.appendChild(r),
                                a.id = `owner-${e.word}`,
                                e.claimCount > 0) {
                                    const t = document.createElement("div");
                                    t.classList.add("discovery-claims"),
                                    t.textContent = `👤${e.claimCount}`,
                                    a.appendChild(t),
                                    t.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                                        xe.showWordDetails(e.word, e.locales)
                                    }
                                    ))))
                                }
                                var l = document.createElement("div");
                                l.classList.add("daily-income"),
                                l.textContent = `${ce.calculateWordPrice(e.word, 1).toString()}💰`,
                                r.appendChild(l);
                                const m = document.createElement("button");
                                m.classList.add("discovery-sell", "wb-button"),
                                m.textContent = "💰",
                                m.addEventListener("click", ( () => {
                                    xe.openSellDiscoveryWindow(e.word)
                                }
                                )),
                                a.appendChild(m);
                                var u = document.createElement("button");
                                u.classList.add("discovery-destroy", "wb-button"),
                                u.textContent = "✂️",
                                u.addEventListener("click", ( () => {
                                    var t = xe.createFloatingWindow();
                                    t.classList.add("confirm-window");
                                    var a = document.createElement("div");
                                    a.classList.add("confirm-text"),
                                    a.textContent = `Are you sure you want to explode ${e.word} into its syllables?`,
                                    t.appendChild(a);
                                    var o = document.createElement("button");
                                    o.classList.add("confirm-button", "wb-button"),
                                    o.textContent = "Confirm";
                                    var i = xe.createTopRightCornerCloseButton();
                                    t.appendChild(i),
                                    i.addEventListener("click", ( () => {
                                        t.remove()
                                    }
                                    )),
                                    t.appendChild(o),
                                    o.addEventListener("click", ( () => {
                                        t.remove(),
                                        xe.showEnhancedDestroyAnimation(n, e.word)
                                    }
                                    )),
                                    document.body.appendChild(t)
                                }
                                )),
                                a.appendChild(u),
                                c.appendChild(a)
                            }
                            )),
                            _(e)
                        }
                          , _ = e => {
                            if (m.innerHTML = "",
                            e <= 1)
                                return void (m.style.display = "none");
                            m.style.display = "flex";
                            const t = document.createElement("button");
                            t.classList.add("pagination-btn"),
                            t.textContent = "←",
                            t.disabled = 1 === i,
                            t.addEventListener("click", ( () => {
                                i > 1 && (i--,
                                w())
                            }
                            )),
                            m.appendChild(t);
                            const a = document.createElement("span");
                            a.classList.add("pagination-info"),
                            a.textContent = `${i} / ${e}`,
                            m.appendChild(a);
                            const n = document.createElement("button");
                            n.classList.add("pagination-btn"),
                            n.textContent = "→",
                            n.disabled = i === e,
                            n.addEventListener("click", ( () => {
                                i < e && (i++,
                                w())
                            }
                            )),
                            m.appendChild(n)
                        }
                        ;
                        s.addEventListener("input", (e => {
                            const a = e.target.value.toLowerCase();
                            d = t.words.filter((e => e.word.toLowerCase().includes(a) && ("all" === y || e.locales.includes(y)))),
                            b(g)
                        }
                        )),
                        r.addEventListener("change", (e => {
                            f(e.target.value)
                        }
                        )),
                        l.addEventListener("change", (e => {
                            b(e.target.value)
                        }
                        )),
                        b("claims-desc")
                    } catch (g) {
                        o.remove(),
                        c.innerHTML = g.toString(),
                        m.style.display = "none"
                    }
                }
                ))
                  , i = () => ke(this, void 0, void 0, (function*() {
                    t.classList.remove("active-tab"),
                    a.classList.add("active-tab"),
                    n.innerHTML = "";
                    var e = document.createElement("div");
                    e.textContent = "Craft new words. Syllables drop while playing the game.",
                    e.classList.add("info-text"),
                    n.appendChild(e);
                    const o = document.createElement("div");
                    o.classList.add("craft-section");
                    const s = document.createElement("div");
                    s.classList.add("word-composer-container");
                    const d = document.createElement("div");
                    d.classList.add("word-display"),
                    s.appendChild(d);
                    const l = document.createElement("button");
                    l.classList.add("clear-button", "wb-button"),
                    l.textContent = "Clear",
                    l.addEventListener("click", ( () => {
                        p = [],
                        y(),
                        b()
                    }
                    )),
                    s.appendChild(l),
                    o.appendChild(s);
                    const c = document.createElement("button");
                    c.classList.add("craft-button", "wb-button"),
                    c.textContent = "Craft Word",
                    c.disabled = !0,
                    o.appendChild(c);
                    const m = document.createElement("div");
                    m.classList.add("craft-result"),
                    o.appendChild(m),
                    n.appendChild(o);
                    const u = Se();
                    n.appendChild(u);
                    let p = []
                      , h = {}
                      , g = {};
                    const y = () => {
                        if (d.innerHTML = "",
                        0 === p.length) {
                            const t = document.createElement("span");
                            return t.classList.add("word-display-placeholder"),
                            t.textContent = "Click syllables below to compose a word",
                            d.appendChild(t),
                            c.disabled = !0,
                            e.textContent = "Craft new words. Syllables drop while playing the game.",
                            void w.querySelectorAll(".syllable-destroy").forEach((e => {
                                e.style.display = "block"
                            }
                            ))
                        }
                        e.textContent = ce.calculateWordPrice(p.join(""), 1).toString() + " coins",
                        w.querySelectorAll(".syllable-destroy").forEach((e => {
                            e.style.display = "none"
                        }
                        )),
                        p.forEach(( (e, t) => {
                            const a = document.createElement("span");
                            a.classList.add("composed-syllable"),
                            a.textContent = e,
                            a.addEventListener("click", ( () => {
                                p.splice(t, 1),
                                y(),
                                b()
                            }
                            )),
                            d.appendChild(a)
                        }
                        )),
                        c.disabled = 0 === p.length
                    }
                      , b = () => {
                        Object.keys(h).forEach((e => {
                            h[e] = g[e] || 0
                        }
                        )),
                        p.forEach((e => {
                            void 0 !== h[e] && h[e]--
                        }
                        ));
                        const e = null == w ? void 0 : w.querySelectorAll(".syllable-item");
                        e && e.forEach((e => {
                            var t;
                            const a = (null === (t = e.querySelector(".syllable-text")) || void 0 === t ? void 0 : t.textContent) || ""
                              , n = e.querySelector(".syllable-count");
                            if (n) {
                                const t = h[a] || 0;
                                n.textContent = `${t}`,
                                t <= 0 ? (e.classList.add("depleted"),
                                e.style.pointerEvents = "none") : (e.classList.remove("depleted"),
                                e.style.pointerEvents = "auto")
                            }
                        }
                        ))
                    }
                      , f = (e, t=[]) => {
                        const a = t.length > 0 ? t : void 0 !== p ? p : e.split("")
                          , n = document.createElement("div");
                        n.className = "craft-overlay",
                        document.body.appendChild(n);
                        const o = document.createElement("div");
                        o.className = "craft-container",
                        n.appendChild(o);
                        const s = a.map(( (e, t) => {
                            const a = document.createElement("div");
                            a.className = "craft-syllable",
                            a.textContent = e,
                            a.style.opacity = "0";
                            const n = [{
                                x: "-80%",
                                y: "-80%"
                            }, {
                                x: "80%",
                                y: "-80%"
                            }, {
                                x: "-80%",
                                y: "80%"
                            }, {
                                x: "80%",
                                y: "80%"
                            }]
                              , i = n[t % n.length];
                            return a.style.transform = `translate(${i.x}, ${i.y})`,
                            o.appendChild(a),
                            a
                        }
                        ));
                        let d = 100;
                        s.forEach(( (e, t) => {
                            setTimeout(( () => {
                                e.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out",
                                e.style.transform = "translate(0, 0)",
                                e.style.opacity = "1"
                            }
                            ), d),
                            d += 300
                        }
                        )),
                        setTimeout(( () => {
                            s.forEach((e => {
                                e.style.transition = "opacity 0.6s ease-out",
                                e.style.opacity = "0"
                            }
                            )),
                            setTimeout(( () => {
                                s.forEach((e => e.remove()));
                                const t = document.createElement("div");
                                t.className = "craft-final-word",
                                t.textContent = e,
                                t.style.opacity = "0",
                                t.style.transform = "scale(0.8)",
                                o.appendChild(t),
                                function(e, t) {
                                    for (let a = 0; a < t; a++) {
                                        const t = document.createElement("div");
                                        t.className = "craft-particle";
                                        const a = 10 * Math.random() + 5;
                                        t.style.width = `${a}px`,
                                        t.style.height = `${a}px`,
                                        t.style.left = "50%",
                                        t.style.top = "50%";
                                        const n = 360 * Math.random()
                                          , o = 100 * Math.random() + 50
                                          , i = Math.cos(n * Math.PI / 180) * o
                                          , s = Math.sin(n * Math.PI / 180) * o;
                                        e.appendChild(t),
                                        t.offsetWidth,
                                        t.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out",
                                        t.style.transform = `translate(${i}px, ${s}px)`,
                                        t.style.opacity = "0",
                                        setTimeout(( () => {
                                            t.parentNode && t.parentNode.removeChild(t)
                                        }
                                        ), 1500)
                                    }
                                }(o, 12),
                                void 0 !== r && r.exists("diamond") && r.play("diamond"),
                                setTimeout(( () => {
                                    t.style.transition = "opacity 0.6s ease-out, transform 0.8s ease-out",
                                    t.style.opacity = "1",
                                    t.style.transform = "scale(1)",
                                    setTimeout(( () => {
                                        const e = document.createElement("div");
                                        e.className = "craft-success-message",
                                        e.textContent = "Word Crafted Successfully!",
                                        e.style.opacity = "0",
                                        o.appendChild(e),
                                        setTimeout(( () => {
                                            e.style.transition = "opacity 0.5s ease-out",
                                            e.style.opacity = "1"
                                        }
                                        ), 50);
                                        const t = document.createElement("button");
                                        t.className = "craft-continue-button wb-button",
                                        t.textContent = "Continue",
                                        t.style.opacity = "0",
                                        t.addEventListener("click", ( () => {
                                            n.style.transition = "opacity 0.5s ease-out",
                                            n.style.opacity = "0",
                                            setTimeout(( () => {
                                                n.remove(),
                                                "function" == typeof i && i()
                                            }
                                            ), 500)
                                        }
                                        )),
                                        o.appendChild(t),
                                        setTimeout(( () => {
                                            t.style.transition = "opacity 0.5s ease-out",
                                            t.style.opacity = "1"
                                        }
                                        ), 200)
                                    }
                                    ), 500)
                                }
                                ), 50)
                            }
                            ), 600)
                        }
                        ), d + 500)
                    }
                    ;
                    let w;
                    try {
                        const e = yield v.http.post("/syllables", {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        if (u.remove(),
                        g = e.data,
                        !g || 0 === Object.keys(g).length) {
                            const e = document.createElement("div");
                            return e.classList.add("empty-syllables"),
                            e.textContent = "You don't have any syllables yet. Explode words to collect syllables!",
                            void n.appendChild(e)
                        }
                        h = Object.assign({}, g);
                        const t = document.createElement("div");
                        t.classList.add("syllable-search-container");
                        const a = document.createElement("input");
                        a.type = "text",
                        a.placeholder = "Search syllables...",
                        a.classList.add("search-input", "wb-input"),
                        t.appendChild(a),
                        n.appendChild(t),
                        w = document.createElement("div"),
                        w.classList.add("syllables-grid"),
                        n.appendChild(w);
                        const o = Object.entries(g).sort(( ([,e], [,t]) => t - e))
                          , i = (e="") => {
                            w.innerHTML = "";
                            const t = e ? o.filter(( ([t]) => t.toLowerCase().includes(e.toLowerCase()))) : o;
                            if (0 === t.length) {
                                const e = document.createElement("div");
                                return e.classList.add("no-syllables-found"),
                                e.textContent = "No syllables match your search",
                                void w.appendChild(e)
                            }
                            const a = (e, t, n=!1) => {
                                const o = document.createElement("div");
                                o.classList.add("syllable-item"),
                                o.id = e,
                                n && (o.classList.add("flash-red"),
                                setTimeout(( () => {
                                    null == o || o.classList.remove("flash-red")
                                }
                                ), 1e3));
                                const i = document.createElement("div");
                                i.classList.add("syllable-text"),
                                i.textContent = e,
                                o.appendChild(i);
                                const s = document.createElement("div");
                                if (s.classList.add("syllable-count"),
                                s.textContent = `${t}`,
                                o.appendChild(s),
                                e.length >= 3) {
                                    var r = document.createElement("button");
                                    r.classList.add("syllable-destroy", "wb-button"),
                                    r.textContent = "✂️",
                                    r.addEventListener("click", (t => {
                                        t.stopPropagation();
                                        var n = xe.createFloatingWindow();
                                        n.classList.add("confirm-window");
                                        var o = document.createElement("div");
                                        o.classList.add("confirm-text"),
                                        o.textContent = `Are you sure you want to cut ${e}?`,
                                        n.appendChild(o);
                                        var i = document.createElement("button");
                                        i.classList.add("confirm-button", "wb-button"),
                                        i.textContent = "Confirm",
                                        n.appendChild(i);
                                        var s = xe.createTopRightCornerCloseButton();
                                        n.appendChild(s),
                                        s.addEventListener("click", ( () => {
                                            n.remove()
                                        }
                                        )),
                                        i.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                                            var t, o, i, s;
                                            n.remove();
                                            try {
                                                var r = yield v.http.post("/cut-syllable", {
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify({
                                                        syllable: e
                                                    })
                                                });
                                                if (null === (t = r.data) || void 0 === t ? void 0 : t.success) {
                                                    var d = null === (o = r.data) || void 0 === o ? void 0 : o.letter;
                                                    g[e] && (g[e]--,
                                                    h[e]--,
                                                    g[e] <= 0 && (delete g[e],
                                                    delete h[e])),
                                                    g[d] ? g[d]++ : g[d] = 1,
                                                    h[d] ? h[d]++ : h[d] = 1,
                                                    null === (i = document.getElementById(d)) || void 0 === i || i.remove(),
                                                    a(d, null === (s = r.data) || void 0 === s ? void 0 : s.count, !0);
                                                    var l = document.getElementById(e);
                                                    if (l) {
                                                        var c = parseInt(l.querySelector(".syllable-count").textContent);
                                                        --c <= 0 ? l.remove() : (l.querySelector(".syllable-count").textContent = `${c}`,
                                                        l.classList.add("flash-red"),
                                                        setTimeout(( () => {
                                                            null == l || l.classList.remove("flash-red")
                                                        }
                                                        ), 1e3))
                                                    }
                                                    b()
                                                } else
                                                    j("Something went wrong. Please try again.")
                                            } catch (m) {
                                                j(m.toString())
                                            }
                                        }
                                        )))),
                                        document.body.appendChild(n)
                                    }
                                    )),
                                    o.appendChild(r)
                                }
                                h[e] <= 0 && (o.classList.add("depleted"),
                                o.style.pointerEvents = "none"),
                                o.addEventListener("click", ( () => {
                                    h[e] > 0 && (o.classList.add("pop-effect"),
                                    setTimeout(( () => {
                                        o.classList.remove("pop-effect")
                                    }
                                    ), 300),
                                    p.push(e),
                                    y(),
                                    b())
                                }
                                )),
                                w.appendChild(o)
                            }
                            ;
                            t.forEach(( ([e,t]) => {
                                a(e, t)
                            }
                            ))
                        }
                        ;
                        i(),
                        a.addEventListener("input", (e => {
                            const t = e.target.value;
                            i(t),
                            b()
                        }
                        )),
                        y(),
                        c.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                            var e, t, a;
                            if (0 !== p.length) {
                                c.disabled = !0,
                                c.textContent = "Crafting...";
                                try {
                                    const n = yield v.http.post("/craft-word", {
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            syllables: p
                                        })
                                    });
                                    (null === (e = n.data) || void 0 === e ? void 0 : e.success) ? f(null === (t = n.data) || void 0 === t ? void 0 : t.word) : (m.textContent = (null === (a = n.data) || void 0 === a ? void 0 : a.message) || "Failed to craft word",
                                    m.classList.add("craft-impossible"),
                                    c.disabled = !1,
                                    c.textContent = "Craft Word",
                                    setTimeout(( () => {
                                        m.textContent = "",
                                        m.classList.remove("craft-impossible")
                                    }
                                    ), 3e3))
                                } catch (n) {
                                    m.textContent = n + "",
                                    m.classList.add("craft-impossible"),
                                    c.disabled = !1,
                                    c.textContent = "Craft Word"
                                }
                            }
                        }
                        ))))
                    } catch (_) {
                        u.remove(),
                        n.innerHTML = "<p>Failed to load syllables. Please try again later.</p>"
                    }
                }
                ));
                t.addEventListener("click", o),
                a.addEventListener("click", i),
                o()
            }
            ))
              , h = () => ke(this, void 0, void 0, (function*() {
                m.innerHTML = "";
                const e = Se();
                m.appendChild(e);
                const t = document.createElement("div");
                t.classList.add("search-sort-container"),
                m.appendChild(t);
                const a = document.createElement("input");
                a.setAttribute("type", "text"),
                a.setAttribute("placeholder", "Search for a discovery..."),
                a.classList.add("search-input", "wb-input"),
                t.appendChild(a);
                const n = document.createElement("select");
                n.classList.add("language-dropdown", "wb-input");
                const o = document.createElement("option");
                o.value = "all",
                o.textContent = "All Languages",
                n.appendChild(o),
                ce.getLanguages().forEach((e => {
                    const t = document.createElement("option");
                    t.value = e.locale,
                    t.textContent = e.name,
                    n.appendChild(t)
                }
                )),
                t.appendChild(n);
                const i = document.createElement("select");
                i.classList.add("sort-dropdown", "wb-input");
                [{
                    value: "word",
                    text: "Sort by Word (A-Z)"
                }, {
                    value: "word-desc",
                    text: "Sort by Word (Z-A)"
                }, {
                    value: "claims",
                    text: "Sort by Claims (Low to High)"
                }, {
                    value: "claims-desc",
                    text: "Sort by Claims (High to Low)"
                }].forEach((e => {
                    const t = document.createElement("option");
                    t.value = e.value,
                    t.textContent = e.text,
                    i.appendChild(t)
                }
                )),
                t.appendChild(i);
                const s = document.createElement("div");
                s.classList.add("discovery-container"),
                m.appendChild(s);
                const r = document.createElement("div");
                r.classList.add("pagination-container"),
                m.appendChild(r);
                try {
                    const t = yield v.http.post("/discoveries", {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    e.remove();
                    const o = t.data;
                    if (!o || 0 === o.length)
                        return void (s.innerHTML = "<p>No discoveries found</p>");
                    const d = 50;
                    let l = 1
                      , c = [...o]
                      , m = "claims-desc"
                      , u = "all";
                    const p = e => {
                        switch (m = e,
                        e) {
                        case "word":
                        default:
                            c.sort(( (e, t) => e.word.localeCompare(t.word)));
                            break;
                        case "word-desc":
                            c.sort(( (e, t) => t.word.localeCompare(e.word)));
                            break;
                        case "claims":
                            c.sort(( (e, t) => (e.claimsCount || 0) - (t.claimsCount || 0)));
                            break;
                        case "claims-desc":
                            c.sort(( (e, t) => (t.claimsCount || 0) - (e.claimsCount || 0)));
                            break;
                        case "rewards-desc":
                            c.sort(( (e, t) => (t.rewards || 0) - (e.rewards || 0)))
                        }
                        l = 1,
                        g()
                    }
                      , h = e => {
                        u = e,
                        c = o.filter((t => "all" === e || t.locale === e)),
                        p(m)
                    }
                      , g = () => {
                        if (s.innerHTML = "",
                        0 === c.length)
                            return s.innerHTML = "<p>No matching discoveries found</p>",
                            void (r.style.display = "none");
                        const e = Math.ceil(c.length / d)
                          , t = (l - 1) * d
                          , a = Math.min(t + d, c.length);
                        c.slice(t, a).forEach((e => {
                            var t;
                            const a = document.createElement("div");
                            a.classList.add("discovery-item");
                            const n = document.createElement("img")
                              , o = (null === (t = ce.getLanguages().find((t => t.locale === e.locale))) || void 0 === t ? void 0 : t.flag) || "unknown";
                            n.src = `/flag/${o}.png`,
                            n.classList.add("discovery-flag"),
                            a.appendChild(n);
                            const i = document.createElement("span");
                            var r = document.createElement("span");
                            if (r.classList.add("discovery-text"),
                            r.textContent = e.word,
                            i.appendChild(r),
                            i.classList.add("discovery-word"),
                            a.appendChild(i),
                            a.id = `discovery-${e.word}-${e.locale}`,
                            e.claimsCount > 0) {
                                const t = document.createElement("div");
                                t.classList.add("discovery-claims"),
                                t.textContent = `👤${e.claimsCount}`,
                                a.appendChild(t),
                                t.addEventListener("click", ( () => {
                                    xe.showClaimerWindow(e.word, e.locale)
                                }
                                ))
                            }
                            s.appendChild(a)
                        }
                        )),
                        y(e)
                    }
                      , y = e => {
                        if (r.innerHTML = "",
                        e <= 1)
                            return void (r.style.display = "none");
                        r.style.display = "flex";
                        const t = document.createElement("button");
                        t.classList.add("pagination-btn"),
                        t.textContent = "←",
                        t.disabled = 1 === l,
                        t.addEventListener("click", ( () => {
                            l > 1 && (l--,
                            g())
                        }
                        )),
                        r.appendChild(t);
                        const a = document.createElement("span");
                        a.classList.add("pagination-info"),
                        a.textContent = `${l} / ${e}`,
                        r.appendChild(a);
                        const n = document.createElement("button");
                        n.classList.add("pagination-btn"),
                        n.textContent = "→",
                        n.disabled = l === e,
                        n.addEventListener("click", ( () => {
                            l < e && (l++,
                            g())
                        }
                        )),
                        r.appendChild(n)
                    }
                    ;
                    a.addEventListener("input", (e => {
                        const t = e.target.value.toLowerCase();
                        c = o.filter((e => e.word.toLowerCase().includes(t) && ("all" === u || e.locale === u))),
                        p(m)
                    }
                    )),
                    n.addEventListener("change", (e => {
                        h(e.target.value)
                    }
                    )),
                    i.addEventListener("change", (e => {
                        p(e.target.value)
                    }
                    )),
                    p("claims-desc")
                } catch (d) {
                    e.remove(),
                    s.innerHTML = d.toString(),
                    r.style.display = "none"
                }
            }
            ))
              , g = () => ke(this, void 0, void 0, (function*() {
                m.innerHTML = "";
                const e = Se();
                m.appendChild(e);
                try {
                    const {data: t} = yield v.http.get("/market", {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    e.remove();
                    const a = document.createElement("div");
                    a.classList.add("market-filter-container"),
                    m.appendChild(a);
                    const n = document.createElement("input");
                    n.setAttribute("type", "text"),
                    n.setAttribute("placeholder", "Search marketplace..."),
                    n.classList.add("search-input", "wb-input"),
                    a.appendChild(n);
                    const o = document.createElement("div");
                    o.classList.add("filter-options-container"),
                    a.appendChild(o);
                    const i = document.createElement("select");
                    i.classList.add("locale-filter", "wb-input");
                    const s = document.createElement("option");
                    s.value = "all",
                    s.textContent = "All Languages",
                    i.appendChild(s);
                    const r = new Set;
                    t && t.length > 0 && t.forEach((e => {
                        e.words.forEach((e => {
                            r.add(e.locale)
                        }
                        ))
                    }
                    )),
                    Array.from(r).sort().forEach((e => {
                        const t = ce.getLanguages().find((t => t.locale === e))
                          , a = document.createElement("option");
                        a.value = e,
                        a.textContent = t ? t.name : e,
                        i.appendChild(a)
                    }
                    )),
                    o.appendChild(i);
                    const d = document.createElement("select");
                    d.classList.add("sort-dropdown", "wb-input");
                    [{
                        value: "price-asc",
                        text: "Price (Low to High)"
                    }, {
                        value: "price-desc",
                        text: "Price (High to Low)"
                    }, {
                        value: "claims-asc",
                        text: "Claims (Low to High)"
                    }, {
                        value: "claims-desc",
                        text: "Claims (High to Low)"
                    }].forEach((e => {
                        const t = document.createElement("option");
                        t.value = e.value,
                        t.textContent = e.text,
                        d.appendChild(t)
                    }
                    )),
                    o.appendChild(d);
                    const l = document.createElement("div");
                    if (l.classList.add("market-container"),
                    m.appendChild(l),
                    !t || 0 === t.length)
                        return void (l.innerHTML = "<p>No words are currently for sale</p>");
                    const c = [];
                    if (t.forEach((e => {
                        e.words.forEach((t => {
                            c.push({
                                sellerId: e._id,
                                sellerName: e.displayName || "Unknown User",
                                word: t.word,
                                locales: t.locales,
                                price: t.price,
                                priceType: t.priceType,
                                claimCount: t.claimCount || 0,
                                level: t.level || 1
                            })
                        }
                        ))
                    }
                    )),
                    c.sort(( (e, t) => e.price - t.price)),
                    0 === c.length)
                        return void (l.innerHTML = "<p>No discoveries are currently for sale</p>");
                    const u = e => {
                        if (l.innerHTML = "",
                        0 === e.length)
                            return void (l.innerHTML = "<p>No discoveries match your search criteria</p>");
                        [...e].sort(( (e, t) => {
                            var a, n, o, i;
                            return e.sellerId === (null === (a = N.player) || void 0 === a ? void 0 : a.id) && t.sellerId !== (null === (n = N.player) || void 0 === n ? void 0 : n.id) ? -1 : t.sellerId === (null === (o = N.player) || void 0 === o ? void 0 : o.id) && e.sellerId !== (null === (i = N.player) || void 0 === i ? void 0 : i.id) ? 1 : 0
                        }
                        )).forEach((e => {
                            var t, a, n, o;
                            const i = document.createElement("div");
                            i.classList.add("market-item"),
                            e.sellerId === (null === (t = N.player) || void 0 === t ? void 0 : t.id) && i.classList.add("my-listing");
                            var s = document.createElement("span");
                            s.classList.add("discovery-level"),
                            s.textContent = e.level.toString(),
                            i.appendChild(s);
                            var r = document.createElement("div");
                            r.classList.add("flag-container");
                            const d = document.createElement("div");
                            d.classList.add("visible-flags");
                            const c = document.createElement("div");
                            c.classList.add("hover-flags"),
                            c.style.display = "none";
                            for (let l = 0; l < e.locales.length; l++) {
                                const t = e.locales[l]
                                  , n = document.createElement("img")
                                  , o = (null === (a = ce.getLanguages().find((e => e.locale === t))) || void 0 === a ? void 0 : a.flag) || "unknown";
                                if (n.src = `/flag/${o}.png`,
                                n.classList.add("discovery-flag"),
                                l < 3) {
                                    const e = n.cloneNode(!0);
                                    d.appendChild(e)
                                }
                                c.appendChild(n)
                            }
                            if (e.locales.length > 3) {
                                const t = document.createElement("div");
                                t.classList.add("flag-count"),
                                t.textContent = "+" + (e.locales.length - 3),
                                d.appendChild(t)
                            }
                            r.appendChild(d),
                            r.appendChild(c),
                            i.appendChild(r);
                            const m = document.createElement("span");
                            m.classList.add("discovery-word");
                            var u = document.createElement("span");
                            u.classList.add("discovery-text"),
                            u.textContent = e.word,
                            m.appendChild(u),
                            i.appendChild(m);
                            const p = document.createElement("span");
                            p.classList.add("discovery-claims"),
                            p.textContent = `👤${e.claimCount}`,
                            i.appendChild(p),
                            p.addEventListener("click", ( () => {
                                xe.showWordDetails(e.word, e.locales)
                            }
                            ));
                            const h = document.createElement("div");
                            h.classList.add("seller-info"),
                            h.textContent = e.sellerId === (null === (n = N.player) || void 0 === n ? void 0 : n.id) ? "Seller: You" : `Seller: ${e.sellerName}`,
                            h.addEventListener("click", (t => {
                                t.stopPropagation(),
                                xe.showPlayerProfile(e.sellerId, !0)
                            }
                            )),
                            i.appendChild(h);
                            const y = document.createElement("div");
                            y.classList.add("price-container");
                            const b = document.createElement("span");
                            b.textContent = e.price.toString(),
                            y.appendChild(b);
                            const f = document.createElement("img");
                            "diamond" === e.priceType ? f.src = "/web/diamond.png" : "key" === e.priceType ? f.src = "/web/key.png" : f.src = "/web/coin.png",
                            f.classList.add("price-icon"),
                            y.appendChild(f),
                            i.appendChild(y);
                            if (e.sellerId === (null === (o = N.player) || void 0 === o ? void 0 : o.id)) {
                                const t = document.createElement("button");
                                t.classList.add("market-remove", "wb-button"),
                                t.textContent = "✕",
                                t.title = "Remove listing",
                                t.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                                    var a, n;
                                    t.textContent = "...",
                                    t.disabled = !0;
                                    try {
                                        const o = yield v.http.post("/remove-listing", {
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                word: e.word
                                            })
                                        });
                                        (null === (a = o.data) || void 0 === a ? void 0 : a.success) ? (R("Listing removed successfully!"),
                                        g()) : (j((null === (n = o.data) || void 0 === n ? void 0 : n.message) || "Failed to remove listing"),
                                        t.textContent = "✕",
                                        t.disabled = !1)
                                    } catch (o) {
                                        j("Failed to remove listing"),
                                        t.textContent = "✕",
                                        t.disabled = !1
                                    }
                                }
                                )))),
                                i.appendChild(t)
                            } else {
                                const t = document.createElement("button");
                                t.classList.add("market-buy", "wb-button"),
                                t.textContent = "Buy",
                                t.addEventListener("click", ( () => {
                                    var a;
                                    if (t.style.display = "none",
                                    (null === (a = N.player) || void 0 === a ? void 0 : a.exp) < ce.getExpForLevel(10))
                                        return void z("You need to be level 10 to buy words");
                                    const n = document.createElement("div");
                                    n.classList.add("confirm-buttons-container");
                                    const o = document.createElement("button");
                                    o.classList.add("confirm-buy", "wb-button"),
                                    o.textContent = "Confirm",
                                    o.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                                        var a, i, r, d;
                                        o.textContent = "Processing...";
                                        try {
                                            const t = yield v.http.post("/buy", {
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({
                                                    sellerId: e.sellerId,
                                                    word: e.word
                                                })
                                            });
                                            (null === (a = t.data) || void 0 === a ? void 0 : a.success) ? (R("Purchase successful!"),
                                            g(),
                                            null === (i = N.currentRoom) || void 0 === i || i.send("profile"),
                                            null === (r = N.currentRoom) || void 0 === r || r.onMessage("profile", (e => {
                                                var t, a, n;
                                                N.updatePlayer(JSON.parse(e));
                                                var o = document.getElementById("coin")
                                                  , i = document.getElementById("diamond")
                                                  , s = document.getElementById("key");
                                                o && (o.textContent = null === (t = N.player) || void 0 === t ? void 0 : t.score.toString()),
                                                i && (i.textContent = null === (a = N.player) || void 0 === a ? void 0 : a.diamond.toString()),
                                                s && (s.textContent = null === (n = N.player) || void 0 === n ? void 0 : n.key.toString())
                                            }
                                            ))) : j((null === (d = t.data) || void 0 === d ? void 0 : d.message) || "Failed to complete purchase")
                                        } catch (l) {
                                            j("Failed to complete purchase")
                                        } finally {
                                            n.remove(),
                                            t.style.display = "block"
                                        }
                                        o.disabled = !0,
                                        s.disabled = !0,
                                        o.textContent = "Processing..."
                                    }
                                    ))));
                                    const s = document.createElement("button");
                                    s.classList.add("cancel-buy", "wb-button"),
                                    s.textContent = "Cancel",
                                    s.addEventListener("click", ( () => {
                                        n.remove(),
                                        t.style.display = "block"
                                    }
                                    )),
                                    n.appendChild(o),
                                    n.appendChild(s),
                                    i.appendChild(n)
                                }
                                )),
                                i.appendChild(t)
                            }
                            l.appendChild(i)
                        }
                        ))
                    }
                      , p = () => {
                        const e = n.value.toLowerCase()
                          , t = i.value
                          , a = d.value;
                        let o = c.filter((a => {
                            const n = a.word.toLowerCase().includes(e) || a.sellerName.toLowerCase().includes(e)
                              , o = "all" === t || a.locales.includes(t);
                            return n && o
                        }
                        ));
                        switch (a) {
                        case "price-asc":
                        default:
                            o.sort(( (e, t) => e.price - t.price));
                            break;
                        case "price-desc":
                            o.sort(( (e, t) => t.price - e.price));
                            break;
                        case "claims-asc":
                            o.sort(( (e, t) => e.claimCount - t.claimCount));
                            break;
                        case "claims-desc":
                            o.sort(( (e, t) => t.claimCount - e.claimCount))
                        }
                        u(o)
                    }
                    ;
                    u(c),
                    n.addEventListener("input", p),
                    i.addEventListener("change", p),
                    d.addEventListener("change", p)
                } catch (t) {
                    e.remove(),
                    m.innerHTML = t.toString()
                }
            }
            ))
              , y = () => ke(this, void 0, void 0, (function*() {
                var e = {
                    discoveredWordCount: 0,
                    playerCount: 0
                };
                if (0 == N.cachedPlayerCount)
                    try {
                        const t = yield v.http.get("/wordbomb", {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        e = t.data,
                        N.cachedPlayerCount = e.discoveredWordCount,
                        N.cachedDiscoveredCount = e.playerCount
                    } catch (k) {
                        m.innerHTML = k.toString()
                    }
                else
                    e.discoveredWordCount = N.cachedPlayerCount,
                    e.playerCount = N.cachedDiscoveredCount;
                m.innerHTML = "";
                const t = document.createElement("div");
                t.classList.add("trade-welcome-header"),
                t.textContent = "WB Community Center",
                m.appendChild(t);
                const a = document.createElement("div");
                a.classList.add("trade-description-text"),
                a.textContent = "Discover, collect, and trade words with other players",
                m.appendChild(a);
                const n = document.createElement("div");
                n.classList.add("search-type-tabs"),
                m.appendChild(n);
                const o = document.createElement("div");
                o.classList.add("search-tab", "active"),
                o.textContent = "Search Words",
                n.appendChild(o);
                const r = document.createElement("div");
                r.classList.add("search-tab"),
                r.textContent = "Search Players",
                n.appendChild(r);
                const l = document.createElement("div");
                l.classList.add("home-search-container", "google-style-search"),
                m.appendChild(l);
                const c = document.createElement("input");
                c.classList.add("home-search-input", "wb-input"),
                c.setAttribute("type", "text"),
                c.setAttribute("placeholder", `Search for a discovery out of ${e.discoveredWordCount} discoveries...`),
                l.appendChild(c);
                const p = document.createElement("button");
                p.classList.add("home-search-button", "wb-button"),
                p.textContent = "Search",
                l.appendChild(p);
                const h = document.createElement("div");
                h.classList.add("search-results-container"),
                m.appendChild(h);
                const g = document.createElement("div");
                g.classList.add("quick-actions-container"),
                m.appendChild(g);
                const y = (e, t, a, n, o) => {
                    const i = document.createElement("div");
                    i.classList.add("action-card");
                    const s = document.createElement("div");
                    s.classList.add("action-icon"),
                    s.innerHTML = e,
                    i.appendChild(s);
                    const r = document.createElement("div");
                    r.classList.add("action-title"),
                    r.textContent = t,
                    i.appendChild(r);
                    const d = document.createElement("div");
                    d.classList.add("action-description"),
                    d.textContent = a,
                    i.appendChild(d);
                    const l = document.createElement("button");
                    return l.classList.add("action-button", "wb-button"),
                    l.textContent = n,
                    l.addEventListener("click", o),
                    i.appendChild(l),
                    i
                }
                ;
                g.appendChild(y("📚", "Your Collection", "View all words you've crafted", "View Words", ( () => u(i)))),
                g.appendChild(y("🔍", "Discoveries", "View all your discoveries", "View Discoveries", ( () => u(s)))),
                g.appendChild(y("🛒", "Marketplace", "Buy and sell words with other players", "Go to Market", ( () => u(d))));
                const b = () => ke(this, void 0, void 0, (function*() {
                    const e = c.value.trim();
                    if (!e)
                        return;
                    h.innerHTML = "";
                    const t = Se();
                    h.appendChild(t);
                    try {
                        const a = yield v.http.post("/search-words", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                query: e
                            })
                        });
                        if (t.remove(),
                        a.data && Array.isArray(a.data) && a.data.length > 0) {
                            const t = document.createElement("h3");
                            t.classList.add("results-title"),
                            t.textContent = `Search Results for "${e}"`,
                            h.appendChild(t);
                            const n = document.createElement("div");
                            n.classList.add("results-grid"),
                            a.data.forEach((e => ke(this, void 0, void 0, (function*() {
                                const t = document.createElement("div");
                                t.classList.add("word-result-item"),
                                t.addEventListener("click", ( () => {
                                    xe.showWordDetails(e.wordId, e.locales)
                                }
                                ));
                                const a = document.createElement("div");
                                a.classList.add("word-text"),
                                a.textContent = e.wordId;
                                const o = document.createElement("div");
                                o.classList.add("discoverers-container");
                                const i = ce.getLanguages();
                                e.locales && e.locales.forEach((e => {
                                    var t;
                                    const a = document.createElement("img")
                                      , n = (null === (t = i.find((t => t.locale === e))) || void 0 === t ? void 0 : t.flag) || "unknown";
                                    a.src = `/flag/${n}.png`,
                                    a.classList.add("word-flag"),
                                    o.appendChild(a)
                                }
                                ));
                                const s = document.createElement("div");
                                s.classList.add("word-claims-count"),
                                s.textContent = `👤 ${e.claimCount || 0}`,
                                t.appendChild(a),
                                t.appendChild(o),
                                t.appendChild(s),
                                n.appendChild(t)
                            }
                            )))),
                            h.appendChild(n)
                        } else {
                            const t = document.createElement("div");
                            t.classList.add("no-results-message"),
                            t.textContent = `No words found matching "${e}"`,
                            h.appendChild(t)
                        }
                    } catch (a) {
                        t.remove();
                        const e = document.createElement("div");
                        e.classList.add("error-message"),
                        e.textContent = "An error occurred while searching. Please try again later.",
                        h.appendChild(e)
                    }
                }
                ))
                  , f = () => ke(this, void 0, void 0, (function*() {
                    const e = c.value.trim();
                    if (!e)
                        return;
                    h.innerHTML = "";
                    const t = Se();
                    h.appendChild(t);
                    try {
                        const a = yield v.http.post("/search-players", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                query: e
                            })
                        });
                        if (t.remove(),
                        a.data && Array.isArray(a.data) && a.data.length > 0) {
                            const t = document.createElement("h3");
                            t.classList.add("results-title"),
                            t.textContent = `Player Results for "${e}"`,
                            h.appendChild(t);
                            const n = document.createElement("div");
                            n.classList.add("results-grid", "player-results-grid"),
                            a.data.forEach((e => {
                                const t = document.createElement("div");
                                t.classList.add("player-result-item");
                                var a = xe.getProfileDOM(e);
                                a.classList.add("player-search-content"),
                                t.appendChild(a),
                                t.addEventListener("click", ( () => {
                                    xe.showPlayerProfile(e.id, !0)
                                }
                                )),
                                n.appendChild(t)
                            }
                            )),
                            h.appendChild(n)
                        } else {
                            const t = document.createElement("div");
                            t.classList.add("no-results-message"),
                            t.textContent = `No players found matching "${e}"`,
                            h.appendChild(t)
                        }
                    } catch (a) {
                        t.remove();
                        const e = document.createElement("div");
                        e.classList.add("error-message"),
                        e.textContent = "An error occurred while searching. Please try again later.",
                        h.appendChild(e)
                    }
                }
                ));
                let w = "word";
                o.addEventListener("click", ( () => {
                    o.classList.add("active"),
                    r.classList.remove("active"),
                    w = "word",
                    c.setAttribute("placeholder", `Search for a discovery out of ${e.discoveredWordCount} discoveries...`),
                    c.value = ""
                }
                )),
                r.addEventListener("click", ( () => {
                    r.classList.add("active"),
                    o.classList.remove("active"),
                    w = "player",
                    c.setAttribute("placeholder", `Search for a player out of ${e.playerCount} players...`),
                    c.value = ""
                }
                ));
                let _ = null;
                c.addEventListener("input", ( () => {
                    _ && clearTimeout(_),
                    _ = setTimeout(( () => {
                        "word" === w ? b() : f()
                    }
                    ), 500)
                }
                )),
                p.addEventListener("click", ( () => {
                    "word" === w ? b() : f()
                }
                )),
                c.addEventListener("keydown", (e => {
                    "Enter" === e.key && (_ && clearTimeout(_),
                    "word" === w ? b() : f())
                }
                ));
                const C = document.createElement("div");
                C.classList.add("tips-container");
                const E = document.createElement("div");
                E.classList.add("tips-title"),
                E.textContent = "Tips & Info",
                C.appendChild(E);
                const L = document.createElement("ul");
                L.classList.add("tips-list");
                ["Type unique words that no one else has used to discover new ones.", "While playing the game, you can also drop syllables.", "Use these syllables to craft new words.", "You earn coins based on the length of your crafted words.", "Sell your words in the marketplace to earn diamonds."].forEach((e => {
                    const t = document.createElement("li");
                    t.classList.add("tip-item"),
                    t.textContent = e,
                    L.appendChild(t)
                }
                )),
                C.appendChild(L),
                m.appendChild(C)
            }
            ))
              , b = () => ke(this, void 0, void 0, (function*() {
                var e, t;
                m.innerHTML = "";
                const a = Se();
                m.appendChild(a);
                try {
                    let o = function(e, t, a, n, o, i, s) {
                        const r = document.createElement("div");
                        r.classList.add("exchange-card");
                        const d = document.createElement("h4");
                        d.classList.add("exchange-card-title"),
                        d.textContent = e,
                        r.appendChild(d);
                        const l = document.createElement("div");
                        l.classList.add("exchange-rate-display");
                        const c = i < .01 ? i.toFixed(4) : i.toFixed(2);
                        l.innerHTML = `\n                <div class="rate-equation">\n                    <span class="rate-value">1</span>\n                    <img src="${n}" class="currency-icon" alt="${o}">\n                    <span class="rate-equals">=</span>\n                    <span class="rate-value">${c}</span>\n                    <img src="${t}" class="currency-icon" alt="${a}">\n                </div>\n                `,
                        r.appendChild(l);
                        const m = document.createElement("div");
                        m.classList.add("exchange-form");
                        const h = document.createElement("div");
                        h.classList.add("amount-container");
                        const g = document.createElement("label");
                        g.textContent = "Amount to spend:",
                        h.appendChild(g);
                        const y = document.createElement("input");
                        y.type = "number",
                        y.min = "1",
                        y.max = s.toString(),
                        y.value = "1",
                        y.classList.add("amount-input", "wb-input"),
                        h.appendChild(y);
                        const b = document.createElement("div");
                        b.classList.add("available-amount"),
                        b.innerHTML = `\n                Available: <span class="available-value">${ce.formatNumber(s)}</span>\n                <img src="${n}" class="currency-icon-small" alt="${o}">\n                `,
                        h.appendChild(b),
                        m.appendChild(h);
                        const f = document.createElement("div");
                        f.classList.add("result-preview");
                        document.createElement("div").classList.add("fee-container"),
                        m.appendChild(f);
                        const w = document.createElement("div");
                        w.classList.add("fee-preview"),
                        w.innerHTML = `\n                <div class="fee-label">Fee (1%):</div>\n                <div class="fee-amount">\n                    <span class="fee-value">0</span>\n                    <img src="${t}" class="currency-icon-small" alt="${a}">\n                </div>\n                `,
                        m.appendChild(w),
                        f.innerHTML = `\n                <div class="you-receive">You'll receive:</div>\n                <div class="receive-amount">\n                    <span class="receive-value">0</span>\n                    <img src="${t}" class="currency-icon" alt="${a}">\n                </div>\n                `;
                        const _ = document.createElement("button");
                        _.classList.add("exchange-button", "wb-button"),
                        _.textContent = "Exchange",
                        _.disabled = s <= 0,
                        m.appendChild(_),
                        r.appendChild(m);
                        const C = () => {
                            const e = +y.value || 0
                              , t = e * i
                              , a = .01 * t
                              , n = t - a
                              , o = w.querySelector(".fee-value");
                            o && (o.textContent = ce.formatNumber(a));
                            const r = f.querySelector(".receive-value");
                            r && (r.textContent = ce.formatNumber(n)),
                            _.disabled = e <= 0 || e > s || n <= .1
                        }
                        ;
                        return y.addEventListener("input", C),
                        C(),
                        _.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                            var e, t, n, i;
                            const r = +y.value || 0;
                            if (r <= 0)
                                return void z("Please enter a valid amount");
                            if (r > s)
                                return void z(`You don't have enough ${o}s`);
                            var d = "gem" === o ? "diamond" : "coin"
                              , l = "gem" === a ? "diamond" : "coin";
                            try {
                                const a = yield v.http.post("/exchange-currency", {
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        from: d,
                                        to: l,
                                        amount: r
                                    })
                                });
                                if (!(null === (e = a.data) || void 0 === e ? void 0 : e.success))
                                    return j((null === (n = a.data) || void 0 === n ? void 0 : n.message) || "Exchange failed"),
                                    void (_.disabled = !1);
                                null === (t = N.currentRoom) || void 0 === t || t.send("profile")
                            } catch (m) {
                                return j(m.toString()),
                                void (_.disabled = !1)
                            }
                            _.disabled = !0;
                            const c = null === (i = N.currentRoom) || void 0 === i ? void 0 : i.onMessage("profile", (e => {
                                var t, a, n, o;
                                c && c(),
                                N.updatePlayer(JSON.parse(e));
                                const i = document.querySelectorAll(".available-value");
                                if (i.length >= 2) {
                                    i[0].textContent = ce.formatNumber((null === (t = N.player) || void 0 === t ? void 0 : t.diamond) || 0),
                                    i[1].textContent = ce.formatNumber((null === (a = N.player) || void 0 === a ? void 0 : a.score) || 0);
                                    const e = document.querySelectorAll(".amount-input");
                                    e.length >= 2 && (e[0].max = ((null === (n = N.player) || void 0 === n ? void 0 : n.diamond) || 0).toString(),
                                    e[1].max = ((null === (o = N.player) || void 0 === o ? void 0 : o.score) || 0).toString(),
                                    e[0].value = "1",
                                    e[1].value = "1");
                                    document.querySelectorAll(".exchange-button").forEach((e => {
                                        e.disabled = !1
                                    }
                                    ));
                                    const s = document.querySelectorAll(".receive-value");
                                    s.length >= 2 && (s[0].textContent = ce.formatNumber(.99 * p.rate),
                                    s[1].textContent = ce.formatNumber(.99 * u.rate));
                                    const r = document.querySelectorAll(".fee-value");
                                    r.length >= 2 && (r[0].textContent = ce.formatNumber(.01 * p.rate),
                                    r[1].textContent = ce.formatNumber(.01 * u.rate))
                                }
                                R("Exchange completed successfully!")
                            }
                            ))
                        }
                        )))),
                        r
                    };
                    const i = yield v.http.get("/exchange-rates", {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    a.remove();
                    const s = i.data;
                    if (!s || !s.rates || 0 === s.rates.length) {
                        const e = document.createElement("div");
                        return e.classList.add("empty-exchange-state"),
                        e.innerHTML = '\n                <div class="empty-icon">📈</div>\n                <div class="empty-text">No exchange data available</div>\n                ',
                        void m.appendChild(e)
                    }
                    const r = document.createElement("div");
                    r.classList.add("exchange-container"),
                    m.appendChild(r);
                    const d = document.createElement("h3");
                    d.classList.add("exchange-title"),
                    d.textContent = "Currency Exchange",
                    r.appendChild(d);
                    const l = document.createElement("div");
                    l.classList.add("exchange-fee-info"),
                    l.textContent = "A 1% transaction fee applies to all exchanges",
                    r.appendChild(l);
                    const c = document.createElement("div");
                    c.classList.add("exchange-cards-container"),
                    r.appendChild(c);
                    const u = s.rates.find((e => "coin" === e.from && "diamond" === e.to))
                      , p = s.rates.find((e => "diamond" === e.from && "coin" === e.to))
                      , h = o("Buy Coins with Gems", "/web/coin.png", "coin", "/web/diamond.png", "gem", p.rate, (null === (e = N.player) || void 0 === e ? void 0 : e.diamond) || 0);
                    c.appendChild(h);
                    const g = o("Buy Gems with Coins", "/web/diamond.png", "gem", "/web/coin.png", "coin", u.rate, (null === (t = N.player) || void 0 === t ? void 0 : t.score) || 0);
                    c.appendChild(g);
                    const y = document.createElement("div");
                    y.classList.add("transaction-history-container"),
                    r.appendChild(y);
                    try {
                        const e = yield v.http.get("/transaction-history", {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        if (e.data && e.data.length > 0) {
                            const t = document.createElement("h3");
                            t.classList.add("exchange-title"),
                            t.textContent = "Recent Transactions",
                            y.appendChild(t);
                            const a = document.createElement("div");
                            a.classList.add("transaction-history-table");
                            const n = document.createElement("div");
                            n.classList.add("history-row", "header-row"),
                            n.innerHTML = '\n                            <div class="history-cell">User</div>\n                            <div class="history-cell">From</div>\n                            <div class="history-cell">To</div>\n                            <div class="history-cell">Date</div>\n                        ',
                            a.appendChild(n),
                            e.data.forEach((e => {
                                const t = 1e3 * parseInt(e._id.substring(0, 8), 16)
                                  , n = new Date(t)
                                  , o = (new Date).getTime() - n.getTime()
                                  , i = Math.floor(o / 1e3)
                                  , s = Math.floor(i / 60)
                                  , r = Math.floor(s / 60)
                                  , d = Math.floor(r / 24);
                                let l;
                                l = d > 30 ? n.toLocaleDateString() : d > 0 ? 1 === d ? "1 day ago" : `${d} days ago` : r > 0 ? 1 === r ? "1 hour ago" : `${r} hours ago` : s > 0 ? 1 === s ? "1 minute ago" : `${s} minutes ago` : "just now";
                                const c = document.createElement("div");
                                c.classList.add("history-row");
                                const m = document.createElement("div");
                                m.classList.add("history-cell", "user-cell"),
                                m.innerHTML = `\n                                <img src="${H(e.userId, e.avatar, 24)}" class="user-avatar" />\n                                <span>${e.displayName}</span>\n                            `,
                                m.addEventListener("click", ( () => {
                                    xe.showPlayerProfile(e.userId, !0)
                                }
                                )),
                                c.appendChild(m);
                                const u = document.createElement("div");
                                u.classList.add("history-cell", "currency-cell"),
                                u.innerHTML = `\n                                <span>${ce.formatNumber(e.from_amount)}</span>\n                                <img src="/web/${"diamond" === e.from ? "diamond" : "coin"}.png" class="currency-icon-small" />\n                            `,
                                c.appendChild(u);
                                const p = document.createElement("div");
                                p.classList.add("history-cell", "currency-cell"),
                                p.innerHTML = `\n                                <span>${ce.formatNumber(e.to_amount)}</span>\n                                <img src="/web/${"diamond" === e.to ? "diamond" : "coin"}.png" class="currency-icon-small" />\n                            `,
                                c.appendChild(p);
                                const h = document.createElement("div");
                                h.classList.add("history-cell"),
                                h.textContent = l,
                                c.appendChild(h),
                                a.appendChild(c)
                            }
                            )),
                            y.appendChild(a)
                        } else {
                            const e = document.createElement("div");
                            e.classList.add("empty-history"),
                            e.innerHTML = '\n                            <div class="empty-icon">📊</div>\n                            <div class="empty-text">No transaction history available</div>\n                        ',
                            y.appendChild(e)
                        }
                    } catch (n) {
                        const e = document.createElement("div");
                        e.classList.add("error-message"),
                        e.textContent = "Failed to load transaction history",
                        y.appendChild(e)
                    }
                } catch (n) {
                    a.remove();
                    const e = document.createElement("div");
                    e.classList.add("error-message"),
                    e.innerHTML = '\n                <div class="error-icon">⚠️</div>\n                <div class="error-text">Failed to load exchange rates</div>\n                <div class="error-subtext">Please try again later</div>\n            ',
                    m.appendChild(e)
                }
            }
            ))
              , f = () => ke(this, void 0, void 0, (function*() {
                m.innerHTML = "";
                const e = Se();
                m.appendChild(e)
            }
            ))
              , w = () => ke(this, void 0, void 0, (function*() {
                m.innerHTML = "";
                const e = Se();
                m.appendChild(e);
                try {
                    const t = yield v.http.post("/market-history", {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (e.remove(),
                    !t.data || 0 === t.data.length) {
                        const e = document.createElement("div");
                        return e.classList.add("empty-market-history"),
                        e.innerHTML = '\n                        <div class="empty-icon">📜</div>\n                        <div class="empty-text">No market history available</div>\n                    ',
                        void m.appendChild(e)
                    }
                    const a = document.createElement("div");
                    a.classList.add("market-history-container");
                    const n = document.createElement("div");
                    n.classList.add("market-history-header"),
                    n.innerHTML = '\n                    <div class="history-col word-col">Word</div>\n                    <div class="history-col seller-col">Seller</div>\n                    <div class="history-col buyer-col">Buyer</div>\n                    <div class="history-col price-col">Price</div>\n                    <div class="history-col date-col">Date</div>\n                ',
                    a.appendChild(n),
                    t.data.sort(( (e, t) => e._id && t._id ? t._id.localeCompare(e._id) : 0)),
                    t.data.forEach((e => {
                        var t;
                        const n = document.createElement("div");
                        n.classList.add("market-history-row");
                        const o = (null === (t = ce.getLanguages().find((t => t.locale === e.locale))) || void 0 === t ? void 0 : t.flag) || "unknown"
                          , i = 1e3 * parseInt(e._id.substring(0, 8), 16)
                          , s = new Date(i)
                          , r = (new Date).getTime() - s.getTime()
                          , d = Math.floor(r / 1e3)
                          , l = Math.floor(d / 60)
                          , c = Math.floor(l / 60)
                          , m = Math.floor(c / 24);
                        let u;
                        u = m > 30 ? s.toLocaleDateString() : m > 0 ? 1 === m ? "1 day ago" : `${m} days ago` : c > 0 ? 1 === c ? "1 hour ago" : `${c} hours ago` : l > 0 ? 1 === l ? "1 minute ago" : `${l} minutes ago` : "just now";
                        const p = "diamond" === e.priceType ? "/web/diamond.png" : "key" === e.priceType ? "/web/key.png" : "/web/coin.png";
                        n.innerHTML = `\n                        <div class="history-col word-col">\n                            <img src="/flag/${o}.png" class="history-flag" />\n                            <span>${e.word}</span>\n                        </div>\n                        <div class="history-col seller-col seller-profile" data-id="${e.seller.id}">\n                            <img src="${H(e.seller.id, e.seller.avatar, 24)}" class="history-avatar" />\n                            <span>${e.seller.displayName}</span>\n                        </div>\n                        <div class="history-col buyer-col buyer-profile" data-id="${e.buyer.id}">\n                            <img src="${H(e.buyer.id, e.buyer.avatar, 24)}" class="history-avatar" />\n                            <span>${e.buyer.displayName}</span>\n                        </div>\n                        <div class="history-col price-col">\n                            <span class="history-price">${e.price}</span>\n                            <img src="${p}" class="history-currency-icon" />\n                        </div>\n                        <div class="history-col date-col">${u}</div>\n                    `,
                        a.appendChild(n)
                    }
                    )),
                    a.querySelectorAll(".seller-profile, .buyer-profile").forEach((e => {
                        e.addEventListener("click", (e => {
                            const t = e.currentTarget.dataset.id;
                            t && xe.showPlayerProfile(t, !0)
                        }
                        ))
                    }
                    )),
                    m.appendChild(a)
                } catch (t) {
                    e.remove();
                    const a = document.createElement("div");
                    a.classList.add("error-message"),
                    a.textContent = "Failed to load market history. Please try again later.",
                    m.appendChild(a)
                }
            }
            ));
            y()
        }
        ))
    }
    static showWordDetails(e, t) {
        return ke(this, void 0, void 0, (function*() {
            var a, n;
            null === (a = document.querySelector(".word-details-window")) || void 0 === a || a.remove();
            const o = document.createElement("div");
            o.classList.add("floating-window", "word-details-window"),
            document.body.appendChild(o);
            const i = document.createElement("div");
            i.classList.add("word-details-title"),
            i.textContent = e,
            o.appendChild(i);
            const s = document.createElement("div");
            s.classList.add("tabs-container");
            const r = xe.createTopRightCornerCloseButton();
            r.addEventListener("click", ( () => {
                o.remove()
            }
            )),
            o.appendChild(r);
            const d = document.createElement("div");
            d.classList.add("tab-content-container"),
            o.appendChild(d);
            const l = Se();
            d.appendChild(l),
            t[0];
            const c = t => ke(this, void 0, void 0, (function*() {
                var a;
                d.innerHTML = "";
                const n = Se();
                d.appendChild(n),
                s.querySelectorAll(".tab").forEach((e => e.classList.remove("active-tab"))),
                null === (a = s.querySelector(`.tab[data-locale="${t}"]`)) || void 0 === a || a.classList.add("active-tab");
                try {
                    const a = yield v.http.post("/discoverer", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            word: e,
                            locale: t
                        })
                    })
                      , o = yield v.http.post("/claimers", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            word: e,
                            locale: t
                        })
                    });
                    n.remove();
                    const i = a.data
                      , s = o.data
                      , r = document.createElement("div");
                    if (r.classList.add("word-detail-content"),
                    i && i.discoverer) {
                        const e = document.createElement("div");
                        e.classList.add("discoverer-container");
                        const t = document.createElement("h3");
                        t.textContent = "Discovered by",
                        e.appendChild(t);
                        const a = document.createElement("div");
                        a.classList.add("discoverer-profile");
                        const n = document.createElement("img");
                        n.src = H(i.discoverer, i.avatar, 48),
                        n.classList.add("discoverer-avatar"),
                        a.appendChild(n);
                        const o = document.createElement("div");
                        o.textContent = i.displayName,
                        o.classList.add("discoverer-name"),
                        a.appendChild(o),
                        a.addEventListener("click", ( () => {
                            xe.showPlayerProfile(i.discoverer, !0)
                        }
                        )),
                        e.appendChild(a),
                        r.appendChild(e)
                    } else {
                        const e = document.createElement("div");
                        e.classList.add("no-discoverer"),
                        e.textContent = "No discoverer information found",
                        r.appendChild(e)
                    }
                    const l = document.createElement("div");
                    l.classList.add("claimers-container");
                    const c = document.createElement("h3");
                    if (c.textContent = "Recently claimed by",
                    l.appendChild(c),
                    s && s.length > 0) {
                        const e = document.createElement("div");
                        e.classList.add("claimers-grid"),
                        s.forEach((t => {
                            const a = document.createElement("div");
                            a.classList.add("claimer-item");
                            const n = document.createElement("img");
                            n.src = H(t.claimer, t.avatar, 32),
                            n.classList.add("claimer-avatar"),
                            a.appendChild(n);
                            const o = document.createElement("div");
                            o.textContent = t.displayName,
                            o.classList.add("claimer-name"),
                            a.appendChild(o),
                            a.addEventListener("click", ( () => {
                                xe.showPlayerProfile(t.claimer, !0)
                            }
                            )),
                            e.appendChild(a)
                        }
                        )),
                        l.appendChild(e)
                    } else {
                        const e = document.createElement("div");
                        e.classList.add("no-claimers"),
                        e.textContent = "No players have claimed this word yet",
                        l.appendChild(e)
                    }
                    r.appendChild(l),
                    d.appendChild(r)
                } catch (o) {
                    n.remove();
                    const e = document.createElement("div");
                    e.classList.add("error-message"),
                    e.textContent = "Error loading word details.",
                    d.appendChild(e)
                }
            }
            ));
            t.forEach((e => {
                var t;
                const a = document.createElement("div");
                a.classList.add("tab"),
                a.setAttribute("data-locale", e);
                const n = document.createElement("img")
                  , o = (null === (t = ce.getLanguages().find((t => t.locale === e))) || void 0 === t ? void 0 : t.flag) || "unknown";
                n.src = `/flag/${o}.png`,
                n.classList.add("tab-flag"),
                a.appendChild(n),
                a.addEventListener("click", ( () => {
                    c(e)
                }
                )),
                s.appendChild(a)
            }
            )),
            o.prepend(s),
            t.length > 0 && (null === (n = s.querySelector(`.tab[data-locale="${t[0]}"]`)) || void 0 === n || n.classList.add("active-tab"),
            yield c(t[0]))
        }
        ))
    }
    static openSellDiscoveryWindow(e) {
        var t = document.createElement("div");
        t.classList.add("floating-window", "sell-discovery-window"),
        document.body.appendChild(t);
        var a = xe.createTopRightCornerCloseButton();
        a.addEventListener("click", ( () => {
            t.remove()
        }
        )),
        t.appendChild(a);
        var n = document.createElement("div");
        n.classList.add("sell-discovery-content"),
        t.appendChild(n);
        const o = document.createElement("div");
        o.classList.add("discovery-word-container");
        const i = document.createElement("span");
        i.classList.add("discovery-word-large"),
        i.textContent = e,
        o.appendChild(i),
        n.appendChild(o);
        const s = document.createElement("div");
        s.classList.add("price-input-container");
        const r = document.createElement("label");
        r.textContent = "Set Price:",
        s.appendChild(r);
        const d = document.createElement("input");
        d.type = "number",
        d.min = "1",
        d.max = "100000",
        d.value = "1000",
        d.classList.add("wb-input", "price-input"),
        s.appendChild(d);
        const l = document.createElement("div");
        l.classList.add("currency-selection-container");
        let c = "coin";
        [{
            value: "coin",
            text: "Coins",
            icon: "/web/coin.png"
        }, {
            value: "diamond",
            text: "Diamonds",
            icon: "/web/diamond.png"
        }].forEach((e => {
            const t = document.createElement("div");
            t.classList.add("currency-option");
            const a = document.createElement("input");
            a.type = "radio",
            a.name = "currency-type",
            a.id = `currency-${e.value}`,
            a.value = e.value,
            "coin" === e.value && (a.checked = !0),
            a.addEventListener("change", ( () => {
                if (a.checked) {
                    c = e.value;
                    const t = s.querySelector(".price-icon");
                    t && t.remove();
                    const a = document.createElement("img");
                    a.src = e.icon,
                    a.classList.add("price-icon"),
                    s.appendChild(a),
                    "diamond" === e.value ? (d.max = "1000",
                    parseInt(d.value) > 1e3 && (d.value = "1000"),
                    parseInt(d.value) < 1 && (d.value = "1")) : (d.max = "100000",
                    parseInt(d.value) < 1e3 && (d.value = "1000"))
                }
            }
            ));
            const n = document.createElement("label");
            n.htmlFor = `currency-${e.value}`;
            const o = document.createElement("img");
            o.src = e.icon,
            o.classList.add("currency-icon"),
            n.appendChild(o);
            const i = document.createElement("span");
            i.textContent = e.text,
            n.appendChild(i),
            t.appendChild(a),
            t.appendChild(n),
            l.appendChild(t)
        }
        )),
        n.appendChild(l);
        const m = document.createElement("img");
        m.src = "/web/coin.png",
        m.classList.add("price-icon"),
        s.appendChild(m),
        n.appendChild(s);
        const u = document.createElement("p");
        u.classList.add("sell-description"),
        u.textContent = "This discovery will be available to other players in the marketplace..",
        n.appendChild(u);
        const p = document.createElement("div");
        p.classList.add("sell-button-container");
        const h = document.createElement("button");
        h.classList.add("wb-button", "cancel-button"),
        h.textContent = "Cancel",
        h.addEventListener("click", ( () => {
            t.remove()
        }
        )),
        p.appendChild(h);
        const g = document.createElement("button");
        g.classList.add("wb-button", "sell-button"),
        g.textContent = "List for Sale",
        g.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
            var a, n;
            const o = parseInt(d.value);
            if (isNaN(o) || o < 1)
                z("Please enter a valid price");
            else if ((null === (a = N.player) || void 0 === a ? void 0 : a.exp) < ce.getExpForLevel(20))
                z("You need to be level 20 to sell words.");
            else if ("diamond" === c && o > 1e4)
                z("Maximum diamond price is 10000");
            else if ("coin" === c && (o > 5e6 || o < 1e3))
                z("Minimum coin price is 1000 and maximum is 5000000");
            else {
                g.disabled = !0,
                g.textContent = "Processing...";
                try {
                    try {
                        const t = yield v.http.post("/sell", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                word: e,
                                price: o,
                                currency: c
                            })
                        });
                        if (t.statusCode && t.statusCode >= 400)
                            throw new Error((null === (n = t.data) || void 0 === n ? void 0 : n.message) || "Failed to list for sale")
                    } catch (i) {
                        throw i
                    }
                    t.remove(),
                    R("Your discovery has been listed for sale!")
                } catch (i) {
                    j("" + i),
                    g.disabled = !1,
                    g.textContent = "List for Sale"
                }
            }
        }
        )))),
        p.appendChild(g),
        n.appendChild(p)
    }
    static createPreset(e) {
        var t = document.createElement("button");
        t.classList.add("wb-button"),
        t.classList.add("sc-preset");
        var a = document.createElement("div");
        a.classList.add("sc-title"),
        a.textContent = L.getWord(e.name),
        t.appendChild(a);
        var n = document.createElement("img");
        n.src = `/scenarios/${e.name}.png`,
        n.classList.add("scenario-icon"),
        t.appendChild(n);
        var o = document.createElement("div");
        return o.classList.add("sc-description"),
        o.textContent = L.getWord(`${e.name}-desct`),
        t.appendChild(o),
        t
    }
    static openCategoriesScreen() {
        return ke(this, void 0, void 0, (function*() {
            var e = document.getElementById("categories-window");
            if (e)
                return void e.remove();
            (e = document.createElement("div")).classList.add("full-window", "categories-window"),
            e.id = "categories-window",
            document.body.appendChild(e);
            var t = document.createElement("div");
            t.classList.add("categories-title"),
            t.textContent = "Categories",
            e.appendChild(t);
            var a = document.createElement("div");
            a.classList.add("categories-description"),
            a.textContent = "Select a category to view your progress",
            t.appendChild(a);
            var n = ce.getLanguages().filter((e => "it-IT" != e.locale && "sv-SE" != e.locale && "tr-TR" != e.locale && "mc-MC" != e.locale))
              , o = document.createElement("div");
            o.classList.add("tab-container"),
            e.appendChild(o);
            const i = t => ke(this, void 0, void 0, (function*() {
                var a = e.querySelector(".categories-container");
                null == a && ((a = document.createElement("div")).classList.add("categories-container"),
                e.appendChild(a)),
                a.innerHTML = "";
                var n = Se();
                a.appendChild(n);
                try {
                    const {data: e} = yield v.http.post("/categories", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            language: t
                        })
                    });
                    a.innerHTML = "",
                    Array.isArray(e.progress) && _e.forEach((n => {
                        if (!n.languages.includes(t))
                            return;
                        const o = e.progress.find((e => e.category === n.name));
                        var s = document.createElement("div");
                        s.classList.add("category");
                        var d = document.createElement("img");
                        d.src = `/categories/${n.name}.png`,
                        d.classList.add("category-icon"),
                        s.appendChild(d);
                        var l = document.createElement("div");
                        l.classList.add("category-name"),
                        l.textContent = L.getWordLocale(n.name, t),
                        s.appendChild(l);
                        var c = document.createElement("div");
                        c.classList.add("row-flex"),
                        s.appendChild(c);
                        var m = document.createElement("div");
                        if (m.classList.add("lb-button", "wb-button"),
                        m.textContent = "🏆",
                        m.addEventListener("click", (e => {
                            e.stopPropagation(),
                            e.preventDefault(),
                            xe.openCategoryLeaderboard(t, n)
                        }
                        )),
                        c.appendChild(m),
                        !o.hasAchievement) {
                            var u = document.createElement("div");
                            u.classList.add("claim-achievement", "wb-button"),
                            u.textContent = "Claim",
                            u.addEventListener("click", (e => ke(this, void 0, void 0, (function*() {
                                e.stopPropagation(),
                                e.preventDefault();
                                try {
                                    const e = yield v.http.post("/claim-achievement", {
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            category: n.name,
                                            language: t
                                        })
                                    });
                                    if (e.data.success) {
                                        const t = document.createElement("div");
                                        t.className = "craft-overlay",
                                        document.body.appendChild(t);
                                        const a = document.createElement("div");
                                        a.className = "craft-container",
                                        t.appendChild(a);
                                        const o = document.createElement("div");
                                        o.className = "craft-syllable",
                                        o.style.opacity = "0",
                                        o.style.transform = "translate(0, -80%)";
                                        const i = document.createElement("img");
                                        i.src = `/categories/${n.name}.png`,
                                        i.className = "category-icon-large",
                                        o.appendChild(i),
                                        a.appendChild(o),
                                        setTimeout(( () => {
                                            o.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out",
                                            o.style.transform = "translate(0, 0)",
                                            o.style.opacity = "1",
                                            setTimeout(( () => {
                                                o.style.transition = "opacity 0.6s ease-out",
                                                o.style.opacity = "0",
                                                setTimeout(( () => {
                                                    o.remove();
                                                    const n = document.createElement("div");
                                                    n.className = "craft-final-word",
                                                    n.textContent = "Category Completed!",
                                                    n.style.opacity = "0",
                                                    n.style.transform = "scale(0.8)",
                                                    a.appendChild(n);
                                                    for (let e = 0; e < 12; e++) {
                                                        const e = document.createElement("div");
                                                        e.className = "craft-particle";
                                                        const t = 10 * Math.random() + 5;
                                                        e.style.width = `${t}px`,
                                                        e.style.height = `${t}px`,
                                                        e.style.left = "50%",
                                                        e.style.top = "50%";
                                                        const n = 360 * Math.random()
                                                          , o = 100 * Math.random() + 50
                                                          , i = Math.cos(n * Math.PI / 180) * o
                                                          , s = Math.sin(n * Math.PI / 180) * o;
                                                        a.appendChild(e),
                                                        e.offsetWidth,
                                                        e.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out",
                                                        e.style.transform = `translate(${i}px, ${s}px)`,
                                                        e.style.opacity = "0",
                                                        setTimeout(( () => {
                                                            e.parentNode && e.parentNode.removeChild(e)
                                                        }
                                                        ), 1500)
                                                    }
                                                    void 0 !== r && r.exists("diamond") && r.play("diamond"),
                                                    setTimeout(( () => {
                                                        n.style.transition = "opacity 0.6s ease-out, transform 0.8s ease-out",
                                                        n.style.opacity = "1",
                                                        n.style.transform = "scale(1)",
                                                        setTimeout(( () => {
                                                            const n = document.createElement("div");
                                                            n.className = "craft-success-message",
                                                            n.textContent = "Badge Unlocked!",
                                                            n.style.opacity = "0",
                                                            a.appendChild(n),
                                                            setTimeout(( () => {
                                                                n.style.transition = "opacity 0.5s ease-out",
                                                                n.style.opacity = "1"
                                                            }
                                                            ), 50);
                                                            const o = document.createElement("button");
                                                            o.className = "craft-continue-button wb-button",
                                                            o.textContent = "Continue",
                                                            o.style.opacity = "0",
                                                            o.addEventListener("click", ( () => {
                                                                t.style.transition = "opacity 0.5s ease-out",
                                                                t.style.opacity = "0",
                                                                setTimeout(( () => {
                                                                    e.data.key && (N.player.key += 1,
                                                                    xe.dropKey()),
                                                                    e.data.diamond && (N.player.diamond += e.data.diamond,
                                                                    setTimeout(( () => {
                                                                        xe.dropDiamonds()
                                                                    }
                                                                    ), 250)),
                                                                    t.remove(),
                                                                    u.remove()
                                                                }
                                                                ), 500)
                                                            }
                                                            )),
                                                            a.appendChild(o),
                                                            setTimeout(( () => {
                                                                o.style.transition = "opacity 0.5s ease-out",
                                                                o.style.opacity = "1"
                                                            }
                                                            ), 200)
                                                        }
                                                        ), 500)
                                                    }
                                                    ), 50)
                                                }
                                                ), 600)
                                            }
                                            ), 1e3)
                                        }
                                        ), 100)
                                    } else
                                        j(e.data.error)
                                } catch (a) {
                                    j("" + a)
                                }
                            }
                            )))),
                            c.appendChild(u)
                        }
                        s.appendChild(c);
                        var p = document.createElement("div");
                        p.classList.add("category-progress");
                        var h = document.createElement("div");
                        h.classList.add("progress-bar");
                        var g = document.createElement("div");
                        g.classList.add("progress-fill");
                        const y = o ? o.totalWords : 0
                          , b = o ? o.typedWordsCount : 0
                          , f = y ? b / y * 100 : 0;
                        g.style.width = `${f}%`;
                        var w = document.createElement("div");
                        w.classList.add("progress-text"),
                        w.textContent = `${b}/${y}`,
                        b >= y && (w.textContent = "Completed!"),
                        h.appendChild(g),
                        p.appendChild(h),
                        p.appendChild(w),
                        s.appendChild(p),
                        a.appendChild(s);
                        s.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                            a.innerHTML = "";
                            var e = Se();
                            a.appendChild(e);
                            try {
                                const {data: {typedWords: e, untypedWords: o, untypedLength: s}} = yield v.http.post("/category_progress", {
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        category: n.name,
                                        language: t
                                    })
                                });
                                ( (e, n, o) => {
                                    a.innerHTML = "",
                                    null == o && (o = n.length,
                                    n = n.slice(0, 10));
                                    var s = document.createElement("div");
                                    s.classList.add("back-button", "wb-button"),
                                    s.textContent = "Back",
                                    s.addEventListener("click", ( () => {
                                        i(t)
                                    }
                                    )),
                                    a.appendChild(s);
                                    var r = document.createElement("input");
                                    r.setAttribute("type", "text"),
                                    r.setAttribute("placeholder", "Search for a word..."),
                                    r.classList.add("search-input"),
                                    r.classList.add("wb-input"),
                                    a.appendChild(r);
                                    var d = document.createElement("div");
                                    d.classList.add("words-container");
                                    const l = t => {
                                        const a = e.filter((e => e.toLowerCase().includes(t.toLowerCase())))
                                          , i = n.filter((e => e.toLowerCase().includes(t.toLowerCase())));
                                        if (d.innerHTML = "",
                                        i.forEach((e => {
                                            var t = document.createElement("div");
                                            t.classList.add("word", "untyped"),
                                            t.textContent = e,
                                            d.appendChild(t)
                                        }
                                        )),
                                        a.forEach((e => {
                                            var t = document.createElement("div");
                                            t.classList.add("word", "typed"),
                                            t.textContent = e,
                                            d.appendChild(t)
                                        }
                                        )),
                                        !t && o > 0) {
                                            var s = document.createElement("div");
                                            s.classList.add("more-words"),
                                            s.textContent = "...and " + Math.max(0, o - 10) + " untyped words",
                                            d.appendChild(s)
                                        }
                                    }
                                    ;
                                    r.addEventListener("input", (e => {
                                        l(e.target.value)
                                    }
                                    )),
                                    l(""),
                                    a.appendChild(d)
                                }
                                )(e, o, s)
                            } catch (o) {
                                e.remove(),
                                a.innerHTML = "<b>Something went wrong</b>"
                            }
                        }
                        ))))
                    }
                    ))
                } catch (o) {
                    a.innerHTML = "<b>Something went wrong</b>"
                }
            }
            ));
            n.forEach(( (e, t) => {
                var a = document.createElement("div");
                a.classList.add("tab");
                var n = document.createElement("img");
                n.src = `/flag/${e.flag}.png`,
                n.classList.add("flag"),
                a.appendChild(n),
                a.addEventListener("click", ( () => {
                    i(e.locale),
                    o.querySelectorAll(".tab").forEach((e => {
                        e.classList.remove("active-tab")
                    }
                    )),
                    a.classList.add("active-tab"),
                    N.selectedCategoryIndex = t
                }
                )),
                o.appendChild(a),
                t == N.selectedCategoryIndex && (a.classList.add("active-tab"),
                i(e.locale))
            }
            ));
            var s = xe.createTopRightCornerCloseButton();
            s.addEventListener("click", ( () => {
                e.remove()
            }
            )),
            e.appendChild(s)
        }
        ))
    }
    static dropDiamonds() {
        var e, t, a = document.createElement("img");
        a.style.bottom = "0px",
        a.src = "/web/diamond.png",
        a.classList.add("key-game"),
        document.body.appendChild(a),
        r.play("diamond", {
            volume: .45 * V.effects,
            speed: .8
        }),
        setTimeout(( () => {
            a.remove()
        }
        ), 2500);
        var n = document.getElementById("diamond");
        n && (n.textContent = ce.formatNumber(null === (e = N.player) || void 0 === e ? void 0 : e.diamond) || "");
        var o = document.getElementById("diamondText");
        o && (o.querySelector(".pp-dts-item-title").textContent = ce.formatNumber(null === (t = N.player) || void 0 === t ? void 0 : t.diamond) || "")
    }
    static dropKey() {
        var e, t, a = document.createElement("img");
        a.style.bottom = "0px",
        a.src = "/web/key.png",
        a.classList.add("key-game"),
        document.body.appendChild(a),
        r.play("diamond", {
            volume: .45 * V.effects,
            speed: .8
        }),
        setTimeout(( () => {
            a.remove()
        }
        ), 2500);
        var n = document.getElementById("key");
        n && (n.textContent = ce.formatNumber(null === (e = N.player) || void 0 === e ? void 0 : e.key) || "");
        var o = document.getElementById("keyText");
        o && (o.querySelector(".pp-dts-item-title").textContent = ce.formatNumber(null === (t = N.player) || void 0 === t ? void 0 : t.key) || "")
    }
    static openPresetLeaderboard(e) {
        return ke(this, void 0, void 0, (function*() {
            var t = document.createElement("div");
            t.classList.add("full-window", "cat-lb-window"),
            document.body.appendChild(t);
            var a = document.createElement("img");
            a.src = `/scenarios/${e}.png`,
            a.classList.add("cat-lb-icon"),
            t.appendChild(a);
            var n = xe.createTopRightCornerCloseButton();
            n.addEventListener("click", ( () => {
                t.remove()
            }
            )),
            t.appendChild(n);
            var o = document.createElement("div");
            o.classList.add("wb-title"),
            o.textContent = "🏆",
            t.appendChild(o);
            var i = Se();
            t.appendChild(i);
            var s = document.createElement("div");
            s.classList.add("cat-lb-container"),
            t.appendChild(s);
            var r = e.replace(/-/g, "");
            N.currentRoom.send("leaderboard", r);
            var d = At.room.onMessage("leaderboard", (e => {
                d();
                const t = JSON.parse(e);
                i.remove(),
                t.forEach((e => {
                    const t = document.createElement("div");
                    t.classList.add("cat-lb-row"),
                    e.is_current_user && t.classList.add("cat-lb-current-user");
                    const a = H(e.id, e.avatar, 64)
                      , n = document.createTextNode(e.displayName).textContent;
                    t.innerHTML = `\n    <div class="cat-lb-avatar"><img class="lb-avatar" src="${a}"/></div>\n    <div class="cat-lb-player">${n}</div>\n    <div class="cat-lb-count">${e.score}</div>\n  `,
                    s.appendChild(t)
                }
                ))
            }
            ))
        }
        ))
    }
    static openCategoryLeaderboard(e, t) {
        return ke(this, void 0, void 0, (function*() {
            var a = document.createElement("div");
            a.classList.add("full-window", "cat-lb-window"),
            document.body.appendChild(a);
            var n = document.createElement("img");
            n.src = `/categories/${t.name}.png`,
            n.classList.add("cat-lb-icon"),
            a.appendChild(n);
            var o = xe.createTopRightCornerCloseButton();
            o.addEventListener("click", ( () => {
                a.remove()
            }
            )),
            a.appendChild(o);
            var i = document.createElement("div");
            i.classList.add("wb-title"),
            i.textContent = "🏆",
            a.appendChild(i);
            var s = Se();
            a.appendChild(s);
            var r = document.createElement("div");
            r.classList.add("cat-lb-container"),
            a.appendChild(r);
            try {
                const {data: {progress: a}} = yield v.http.post("/categorylb", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        category: t.name,
                        language: e
                    })
                });
                if (s.remove(),
                a && a.length > 0)
                    a.forEach((e => {
                        const t = document.createElement("div");
                        t.classList.add("cat-lb-row"),
                        e.is_current_user && t.classList.add("cat-lb-current-user"),
                        t.addEventListener("click", ( () => {
                            xe.showPlayerProfile(e.user_id, !0)
                        }
                        ));
                        const a = H(e.user_id, e.avatar, 64)
                          , n = document.createTextNode(e.displayName).textContent;
                        t.innerHTML = `\n    <div class="cat-lb-avatar"><img class="lb-avatar" src="${a}"/></div>\n    <div class="cat-lb-player">${n}</div>\n    <div class="cat-lb-count">${e.word_count}</div>\n  `,
                        r.appendChild(t)
                    }
                    ));
                else {
                    const e = document.createElement("div");
                    e.classList.add("cat-lb-no-data"),
                    e.textContent = "No players have typed words in this category yet.",
                    r.appendChild(e)
                }
            } catch (d) {
                s.remove();
                const e = document.createElement("div");
                e.classList.add("cat-lb-error"),
                e.textContent = "Error fetching leaderboard",
                r.appendChild(e)
            }
        }
        ))
    }
    static openScenarioScreen() {
        const e = document.createElement("div");
        e.classList.add("full-window", "scenario-window"),
        document.body.appendChild(e);
        const t = document.createElement("div");
        t.classList.add("tab-container"),
        e.appendChild(t);
        const a = document.createElement("div");
        a.classList.add("tab", "active-tab"),
        a.textContent = "Presets",
        t.appendChild(a);
        const n = document.createElement("div");
        n.classList.add("tab"),
        n.textContent = "Customize",
        t.appendChild(n);
        const o = document.createElement("div");
        o.classList.add("tab-content-container"),
        e.appendChild(o);
        var i = xe.createTopRightCornerCloseButton();
        i.addEventListener("click", ( () => {
            n.classList.contains("active-tab") && d(),
            e.remove()
        }
        )),
        e.appendChild(i);
        const s = new Map
          , r = new Map
          , d = () => {
            var e;
            const t = [];
            fe.forEach((e => {
                const a = r.get(e.id);
                if (!a)
                    return;
                const n = a.querySelector('input[type="checkbox"]');
                if (!n)
                    return;
                const o = s.get(e.id)
                  , i = !!o
                  , d = n.checked
                  , l = i !== d
                  , c = {};
                if (d) {
                    const t = a.querySelector(".inputs-container")
                      , n = null == t ? void 0 : t.querySelectorAll("input, select")
                      , i = Object.keys(e.params || {});
                    null == n || n.forEach(( (e, t) => {
                        var a;
                        const n = i[t];
                        let s;
                        s = e instanceof HTMLSelectElement ? e.value : "checkbox" === e.type ? e.checked : "number" === e.type ? parseFloat(e.value) : e.value;
                        const r = null === (a = null == o ? void 0 : o.params) || void 0 === a ? void 0 : a[n];
                        o && s !== r ? c[n] = s : o || (c[n] = s)
                    }
                    ))
                }
                (l || Object.keys(c).length > 0) && t.push({
                    id: e.id,
                    params: Object.assign({
                        enabled: d
                    }, c)
                })
            }
            )),
            t.length > 0 && (null === (e = At.room) || void 0 === e || e.send("update-scenarios", t))
        }
          , l = () => {
            d(),
            o.innerHTML = "",
            a.classList.add("active-tab"),
            n.classList.remove("active-tab");
            var e = document.createElement("div");
            e.classList.add("sc-container"),
            we.forEach((t => {
                var a, o = xe.createPreset(t);
                if (e.appendChild(o),
                0 != t.id) {
                    var i = document.createElement("div");
                    i.classList.add("lb-button", "wb-button"),
                    i.textContent = "🏆",
                    i.addEventListener("click", (e => {
                        e.stopPropagation(),
                        e.preventDefault(),
                        xe.openPresetLeaderboard(t.name)
                    }
                    )),
                    o.appendChild(i)
                }
                o.addEventListener("click", ( () => {
                    var a, i;
                    e.querySelectorAll(".sc-preset").forEach((e => {
                        e.classList.remove("selected")
                    }
                    )),
                    0 != t.id ? n.style.display = "none" : n.style.display = "block",
                    o.classList.add("selected"),
                    (null === (a = At.room) || void 0 === a ? void 0 : a.state.sc) != t.id && (null === (i = At.room) || void 0 === i || i.send("settings", {
                        key: "scenario",
                        value: t.id
                    }))
                }
                )),
                (null === (a = At.room) || void 0 === a ? void 0 : a.state.sc) == t.id && (o.classList.add("selected"),
                0 != t.id ? n.style.display = "none" : n.style.display = "block")
            }
            )),
            o.appendChild(e)
        }
        ;
        a.addEventListener("click", l),
        n.addEventListener("click", ( () => {
            var e, t;
            o.innerHTML = "",
            a.classList.remove("active-tab"),
            n.classList.add("active-tab");
            const i = fe;
            var d = document.createElement("div");
            d.classList.add("sc-container"),
            o.appendChild(d),
            r.clear();
            var l = document.createElement("div");
            l.classList.add("scenario-titles"),
            l.textContent = "Scenarios (Beta)",
            d.appendChild(l),
            i.forEach((e => {
                if (0 == e.visible)
                    return;
                const t = document.createElement("div");
                t.classList.add("scenario-container"),
                r.set(e.id, t);
                var a = document.createElement("img");
                a.src = `/scenarios/${e.name}.png`,
                a.classList.add("scenario-icon"),
                t.appendChild(a);
                var n = document.createElement("div");
                n.classList.add("sc-name"),
                n.textContent = L.getWord(`sc-${e.name}-title`),
                t.appendChild(n);
                const o = document.createElement("label");
                o.textContent = L.getWord(`sc-${e.name}`);
                const i = document.createElement("input");
                i.type = "checkbox",
                i.checked = !1,
                t.appendChild(o),
                t.appendChild(i);
                const l = document.createElement("div");
                l.classList.add("inputs-container"),
                t.appendChild(l);
                const c = () => {
                    var a;
                    if (l.innerHTML = "",
                    i.checked) {
                        o.style.display = "flex",
                        t.classList.add("expanded");
                        const n = e.params || {}
                          , i = (null === (a = s.get(e.id)) || void 0 === a ? void 0 : a.params) || {};
                        Object.keys(n).forEach((t => {
                            const a = document.createElement("div");
                            if (a.classList.add("sc-input-wrapper"),
                            e.restriction && "category" === t) {
                                const n = document.createElement("label");
                                n.textContent = t,
                                a.appendChild(n);
                                const o = document.createElement("select");
                                o.classList.add("wb-input", "sc-select");
                                const s = At.room.state.locale || "en-US"
                                  , r = e.restriction.category[s] || [];
                                if (r.length > 0)
                                    r.forEach((e => {
                                        const a = document.createElement("option");
                                        a.value = e,
                                        a.textContent = L.getWord(e),
                                        i[t] === e && (a.selected = !0),
                                        o.appendChild(a)
                                    }
                                    ));
                                else {
                                    const e = document.createElement("option");
                                    e.value = "",
                                    e.textContent = "No categories available",
                                    e.disabled = !0,
                                    e.selected = !0,
                                    o.appendChild(e),
                                    o.disabled = !0
                                }
                                a.appendChild(o)
                            } else {
                                const e = n[t]
                                  , o = void 0 !== i[t] ? i[t] : e
                                  , s = document.createElement("label");
                                s.textContent = `${t}`,
                                a.appendChild(s);
                                const r = document.createElement("input");
                                "string" == typeof e ? (r.type = "text",
                                r.value = o || "") : "number" == typeof e ? (r.type = "number",
                                r.value = (void 0 !== o ? o : 0).toString(),
                                r.min = "0",
                                r.max = "999") : "boolean" == typeof e && (r.type = "checkbox",
                                r.checked = !!o),
                                a.appendChild(r)
                            }
                            l.appendChild(a)
                        }
                        ))
                    } else
                        t.classList.remove("expanded"),
                        o.style.display = "none"
                }
                ;
                i.addEventListener("change", c),
                c(),
                d.appendChild(t)
            }
            ));
            var c = Se();
            c.id = "loading-scenarios",
            o.appendChild(c),
            null === (e = At.room) || void 0 === e || e.send("get-scenarios");
            var m = null === (t = At.room) || void 0 === t ? void 0 : t.onMessage("scenarios", (e => ke(this, void 0, void 0, (function*() {
                var t = document.getElementById("loading-scenarios");
                t && (t.remove(),
                m(),
                d.style.display = "flex",
                e && Array.isArray(e) && e.forEach((e => {
                    if (e && void 0 !== e.key) {
                        const t = e.key;
                        s.set(t, {
                            id: t,
                            params: e.params
                        });
                        const a = r.get(t);
                        if (a) {
                            const e = a.querySelector('input[type="checkbox"]');
                            if (e) {
                                e.checked = !0;
                                const t = new Event("change");
                                e.dispatchEvent(t)
                            }
                        }
                    }
                }
                )))
            }
            ))))
        }
        )),
        l()
    }
    static openLetterScreen() {
        var e = document.getElementById("letter-window");
        e && e.remove();
        var t = document.createElement("div");
        t.classList.add("full-window", "letter-window"),
        t.id = "letter-window",
        document.body.appendChild(t);
        var a = document.createElement("div");
        a.classList.add("letter-description"),
        a.textContent = L.getWord("letter_description"),
        t.appendChild(a);
        var n = xe.createTopRightCornerCloseButton();
        t.appendChild(n);
        var o = Se();
        t.appendChild(o);
        const i = []
          , s = {};
        let r = []
          , d = !1;
        var l = document.createElement("div");
        let c, m, u;
        l.classList.add("preset-container");
        var p = document.createElement("div");
        p.classList.add("bulk-action-container");
        var h = document.createElement("button");
        h.classList.add("bulk-action-button"),
        h.classList.add("wb-button"),
        h.textContent = L.getWord("increase_all"),
        p.appendChild(h);
        var v = document.createElement("button");
        v.classList.add("bulk-action-button"),
        v.classList.add("wb-button"),
        v.textContent = L.getWord("decrease_all"),
        p.appendChild(v),
        At.room.send("health-letters");
        var g = At.room.onMessage("health-letters", (e => {
            g(),
            o.remove();
            [{
                name: L.getWord("easy"),
                value: "easy"
            }, {
                name: L.getWord("normal"),
                value: "normal"
            }, {
                name: L.getWord("hard"),
                value: "hard"
            }].forEach((e => {
                var t = document.createElement("button");
                t.classList.add("preset-button"),
                t.classList.add("wb-button"),
                t.textContent = e.name,
                t.addEventListener("click", ( () => {
                    c && c(e.value)
                }
                )),
                l.appendChild(t)
            }
            )),
            t.appendChild(l),
            t.appendChild(p);
            var a = document.createElement("div");
            a.classList.add("health-locales"),
            e.forEach((e => {
                var t, n = document.createElement("div");
                n.classList.add("locale-container");
                var o = document.createElement("div");
                o.classList.add("flag-container");
                var r = null === (t = ce.getLanguages().find((t => t.locale == e.locale))) || void 0 === t ? void 0 : t.flag
                  , d = document.createElement("img");
                d.src = `/flag/${r}.png`,
                d.classList.add("flag"),
                o.appendChild(d),
                n.appendChild(o);
                var l = document.createElement("div");
                l.classList.add("letter-row"),
                e.letters.forEach(( ({letter: t, count: a}) => {
                    var n = document.createElement("div");
                    n.classList.add("letter-input-container");
                    var o = document.createElement("label");
                    o.innerText = `${t}`,
                    o.setAttribute("for", `${e.locale}-${t}`),
                    n.appendChild(o);
                    var r = document.createElement("input");
                    r.type = "number",
                    r.id = `${e.locale}-${t}`,
                    r.name = `${e.locale}-${t}`,
                    r.min = "0",
                    r.max = "99",
                    r.value = a.toString(),
                    n.appendChild(r),
                    l.appendChild(n),
                    i.push({
                        locale: e.locale,
                        letter: t,
                        input: r
                    }),
                    s[e.locale] || (s[e.locale] = {}),
                    s[e.locale][t] = a;
                    let d = null;
                    let c = r.value;
                    r.addEventListener("input", (a => {
                        d && clearTimeout(d),
                        d = setTimeout(( () => {
                            var a, n, o;
                            if ((null === (n = null === (a = At.room) || void 0 === a ? void 0 : a.state) || void 0 === n ? void 0 : n.host) != (null === (o = N.gamePlayer) || void 0 === o ? void 0 : o.session_id))
                                return z(L.getWord("only_host_can_change")),
                                void (r.value = c);
                            const i = parseInt(r.value) || 0;
                            c = r.value,
                            b(e.locale, t, i)
                        }
                        ), 250)
                    }
                    ))
                }
                )),
                n.appendChild(l),
                a.appendChild(n)
            }
            )),
            t.appendChild(a);
            let y = null;
            function b(e, t, a) {
                if (a !== s[e][t]) {
                    const n = r.findIndex((a => a.locale === e && a.letter === t));
                    -1 !== n ? r[n].count = a : r.push({
                        locale: e,
                        letter: t,
                        count: a
                    }),
                    s[e][t] = a,
                    d = !0,
                    y && clearTimeout(y),
                    y = setTimeout(( () => {
                        u && u()
                    }
                    ), 500)
                }
            }
            c = function(e) {
                var t, a, n;
                (null === (a = null === (t = At.room) || void 0 === t ? void 0 : t.state) || void 0 === a ? void 0 : a.host) == (null === (n = N.gamePlayer) || void 0 === n ? void 0 : n.session_id) ? (Object.keys(Le).forEach((t => {
                    const a = Le[t] ? Le[t][e] : null;
                    a && Object.keys(a).forEach((e => {
                        var n;
                        const o = a[e]
                          , s = null === (n = i.find((a => a.locale === t && a.letter === e))) || void 0 === n ? void 0 : n.input;
                        if (s) {
                            var r = parseInt(s.value) || 0;
                            s.value = o.toString(),
                            r !== o && (s.classList.add("changed"),
                            setTimeout(( () => {
                                s.classList.remove("changed")
                            }
                            ), 1e3)),
                            b(t, e, o)
                        }
                    }
                    ))
                }
                )),
                d && u && setTimeout(( () => {
                    u()
                }
                ), 250)) : z(L.getWord("only_host_can_change"))
            }
            ,
            m = function(e) {
                i.forEach((t => {
                    const a = parseInt(t.input.value) || 0
                      , n = Math.max(0, Math.min(99, a + e));
                    t.input.value = n.toString(),
                    b(t.locale, t.letter, n)
                }
                ))
            }
            ;
            let f = null
              , w = null
              , _ = null
              , C = null;
            const E = () => {
                var e, t, a;
                (null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.host) == (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.session_id) ? m && (m(1),
                _ = setInterval(( () => {
                    m && m(1)
                }
                ), 50)) : z(L.getWord("only_host_can_change"))
            }
              , k = () => {
                _ && clearInterval(_),
                _ = null
            }
              , S = () => {
                var e, t, a;
                (null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.host) == (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.session_id) ? m && (m(-1),
                C = setInterval(( () => {
                    m && m(-1)
                }
                ), 50)) : z(L.getWord("only_host_can_change"))
            }
              , x = () => {
                C && clearInterval(C),
                C = null
            }
              , T = () => {
                var e, t, a;
                (null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.host) == (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.session_id) && m && m(1)
            }
              , P = () => {
                var e, t, a;
                (null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.host) == (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.session_id) && m && m(-1)
            }
            ;
            h.addEventListener("mousedown", ( () => {
                f && clearTimeout(f),
                f = setTimeout(( () => {
                    E()
                }
                ), 500),
                T()
            }
            )),
            h.addEventListener("mouseup", ( () => {
                f && clearTimeout(f),
                k()
            }
            )),
            h.addEventListener("mouseleave", ( () => {
                f && clearTimeout(f),
                k()
            }
            )),
            h.addEventListener("touchstart", (e => {
                e.preventDefault(),
                f && clearTimeout(f),
                f = setTimeout(( () => {
                    E()
                }
                ), 500),
                T()
            }
            )),
            h.addEventListener("touchend", ( () => {
                f && clearTimeout(f),
                k()
            }
            )),
            h.addEventListener("touchcancel", ( () => {
                f && clearTimeout(f),
                k()
            }
            )),
            v.addEventListener("mousedown", ( () => {
                w && clearTimeout(w),
                w = setTimeout(( () => {
                    S()
                }
                ), 500),
                P()
            }
            )),
            v.addEventListener("mouseup", ( () => {
                w && clearTimeout(w),
                x()
            }
            )),
            v.addEventListener("mouseleave", ( () => {
                w && clearTimeout(w),
                x()
            }
            )),
            v.addEventListener("touchstart", (e => {
                e.preventDefault(),
                w && clearTimeout(w),
                w = setTimeout(( () => {
                    S()
                }
                ), 500),
                P()
            }
            )),
            v.addEventListener("touchend", ( () => {
                w && clearTimeout(w),
                x()
            }
            )),
            v.addEventListener("touchcancel", ( () => {
                w && clearTimeout(w),
                x()
            }
            )),
            u = function() {
                r.length > 0 && (At.room.send("health-letters-update", r),
                r = [],
                d = !1)
            }
            ,
            n.addEventListener("click", ( () => {
                d && u && u(),
                t.remove()
            }
            ))
        }
        ))
    }
    static openChatSettings() {
        var e = document.getElementById("chat-settings-window");
        e && e.remove();
        var t = xe.createFloatingWindow();
        t.classList.add("w-chat-settings"),
        t.style.paddingBottom = "20px",
        t.style.backgroundColor = "rgba(0,0,0,0.8)",
        t.style.alignItems = "center",
        document.body.appendChild(t);
        var a = xe.createTopRightCornerCloseButton();
        a.addEventListener("click", ( () => {
            t.remove()
        }
        )),
        t.appendChild(a);
        var n = document.createElement("div");
        n.classList.add("chat-settings-options");
        var o = document.createElement("div");
        o.classList.add("ds-op");
        var i = document.createElement("input");
        i.type = "checkbox",
        i.checked = !V.notificationDisabled || !1,
        i.classList.add("wb-checkbox");
        var s = document.createElement("label");
        s.textContent = L.getWord("notification"),
        o.appendChild(i),
        o.appendChild(s),
        i.addEventListener("change", (e => {
            const t = e.target;
            V.notificationDisabled = !t.checked,
            V.save()
        }
        )),
        n.appendChild(o);
        var r = document.createElement("div");
        r.classList.add("ds-op");
        var d = document.createElement("input");
        d.type = "checkbox",
        d.checked = !V.notificationSoundsDisabled || !1,
        d.classList.add("wb-checkbox");
        var l = document.createElement("label");
        l.textContent = L.getWord("notification_sound"),
        r.appendChild(d),
        r.appendChild(l),
        d.addEventListener("change", (e => {
            const t = e.target;
            V.notificationSoundsDisabled = !t.checked,
            V.save()
        }
        )),
        n.appendChild(r),
        t.appendChild(n)
    }
    static openWordScreen() {
        var e = document.getElementById("word-window");
        e && e.remove();
        var t = At.room.state.monsters.split(",")
          , a = document.createElement("div");
        a.classList.add("full-window"),
        a.classList.add("word-window"),
        a.id = "word-window",
        document.body.appendChild(a);
        var n = xe.createTopRightCornerCloseButton();
        n.addEventListener("click", ( () => {
            a.remove()
        }
        )),
        a.appendChild(n);
        const o = document.createElement("div");
        o.classList.add("options-container");
        const i = document.createElement("div");
        i.classList.add("selectable-option"),
        i.innerHTML = "random",
        i.addEventListener("click", ( () => {
            document.querySelectorAll(".selectable-option").forEach((e => {
                e.classList.remove("selected")
            }
            )),
            i.classList.add("selected")
        }
        )),
        i.classList.add("random"),
        o.appendChild(i),
        be.options[1].option.forEach((e => {
            const a = document.createElement("div");
            a.classList.add("selectable-option"),
            a.innerHTML = e,
            t.includes(e) && a.classList.add("selected"),
            a.addEventListener("click", ( () => {
                var e;
                null === (e = document.querySelector(".random.selected")) || void 0 === e || e.classList.remove("selected"),
                a.classList.toggle("selected")
            }
            )),
            o.appendChild(a)
        }
        )),
        t.includes("random") && i.classList.add("selected"),
        a.appendChild(o);
        const s = document.createElement("button");
        s.classList.add("close-button"),
        s.innerText = L.getWord("save"),
        s.addEventListener("click", ( () => {
            var e, t, n;
            if ((null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.host) != (null === (n = N.gamePlayer) || void 0 === n ? void 0 : n.session_id))
                return void j(L.getWord("only_host_can_change"));
            const o = document.querySelectorAll(".selectable-option.selected");
            if (0 === o.length)
                j("Please select an option");
            else {
                var i = Array.from(o).map((e => e.innerText)).join(",");
                At.room.send("settings", {
                    key: "typing-word",
                    value: i
                }),
                a.remove()
            }
        }
        )),
        a.appendChild(s)
    }
    static openHistoryScreen() {
        return ke(this, arguments, void 0, (function*(e=null) {
            null == e && (e = N.player.id);
            var t = document.getElementById("history-window");
            t && t.remove();
            var a = document.createElement("div");
            a.id = "history-window",
            a.classList.add("full-window", "futuristic-window");
            var n = xe.createTopRightCornerCloseButton();
            n.addEventListener("click", ( () => {
                a.remove()
            }
            )),
            a.appendChild(n);
            const o = document.createElement("h2");
            o.className = "match-history-header",
            o.textContent = "MATCH HISTORY",
            a.appendChild(o);
            const i = document.createElement("div");
            i.className = "loading-container",
            i.appendChild(Se()),
            a.appendChild(i);
            const s = document.createElement("div");
            if (s.className = "match-history-content",
            a.appendChild(s),
            document.body.appendChild(a),
            e.length < 10) {
                i.remove();
                const e = document.createElement("div");
                return e.className = "empty-state-full",
                e.innerHTML = '\n                    <div class="empty-icon">📜</div>\n                    <div class="empty-text">No match history available</div>\n                ',
                void s.appendChild(e)
            }
            try {
                const t = yield v.http.post("/matchhistory", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: e
                    })
                });
                i.remove();
                const a = t.data;
                if (0 === a.length) {
                    const e = document.createElement("div");
                    return e.className = "empty-state-full",
                    e.innerHTML = '\n                    <div class="empty-icon">📜</div>\n                    <div class="empty-text">No match history available</div>\n                ',
                    void s.appendChild(e)
                }
                this.showMatchesList(s, a, e)
            } catch (r) {
                i.remove();
                const e = document.createElement("div");
                e.className = "error-message",
                s.appendChild(e);
            }
        }
        ))
    }
    static showMatchesList(e, t, a) {
        e.innerHTML = "";
        const n = document.createElement("div");
        n.className = "matches-list",
        t.sort(( (e, t) => new Date(t.match.endTime).getTime() - new Date(e.match.endTime).getTime())),
        t.forEach(( (o, i) => {
            const s = this.createMatchListItem(o, i, a);
            s.addEventListener("click", ( () => {
                this.showMatchDetails(e, o, ( () => {
                    this.showMatchesList(e, t, a)
                }
                ), a)
            }
            )),
            n.appendChild(s)
        }
        )),
        e.appendChild(n)
    }
    static createMatchListItem(e, t, a) {
        var n;
        const o = document.createElement("div");
        o.className = "match-item";
        const i = new Date(e.match.endTime)
          , s = i.toLocaleDateString()
          , r = i.toLocaleTimeString(void 0, {
            hour: "2-digit",
            minute: "2-digit"
        })
          , d = ce.gameModes.find((t => t.id === e.match.mode));
        d ? L.getWord(d.name) : e.match.mode;
        const l = (null === (n = ce.getLanguages().find((t => t.locale === e.match.locale))) || void 0 === n ? void 0 : n.flag) || "mlang"
          , c = new Date(e.match.endTime).getTime() - new Date(e.match.startTime).getTime()
          , m = `${Math.floor(c / 6e4)}:${Math.floor(c % 6e4 / 1e3).toString().padStart(2, "0")}`
          , u = e.match.stats[a]
          , p = (null == u ? void 0 : u.correct_words) || 0
          , h = e.match.winner === a
          , v = 1 === Object.keys(e.match.stats).length
          , g = (null == u ? void 0 : u.defeated) || 0
          , y = Object.keys(e.match.stats).length
          , b = e.match.room || "" ? `<div class="match-room-id">TURN: ${e.match.turn}</div>` : "";
        return o.innerHTML = `\n            <div class="match-item-header">\n                <div class="match-date-time">${s} ${r}</div>\n                ${b}\n                ${v ? '<div class="match-result solo">SOLO</div>' : h ? '<div class="match-result win">WIN</div>' : '<div class="match-result">#' + (g + 1) + "</div>"}\n            </div>\n            <div class="match-item-details">\n                <div class="mode-icon" style="background-image: url('/gamemodes/${e.match.mode}.png')"></div>\n                <div class="match-stats">\n                    <div class="match-stat"><span class="stat-icon">👤</span>${y}</div>\n                    <div class="match-stat"><span class="stat-icon">⏱️</span>${m}</div>\n                    <div class="match-stat"><span class="stat-icon">📝</span>${p}</div>\n                    <div class="match-stat">\n                        <div class="match-locale">\n                            <img src="/flag/${l}.png" class="locale-flag" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `,
        h && o.classList.add("winner"),
        o
    }
    static showMatchDetails(e, t, a, n) {
        var o, i;
        e.innerHTML = "";
        const s = document.createElement("div");
        s.className = "match-back-button close-button",
        s.innerHTML = '<span class="back-icon">←</span> Back to Matches',
        s.addEventListener("click", a);
        const r = document.createElement("div");
        r.className = "match-details-container",
        r.appendChild(s);
        const d = document.createElement("div");
        d.className = "match-header-section";
        const l = new Date(t.match.endTime)
          , c = l.toLocaleDateString()
          , m = l.toLocaleTimeString()
          , u = document.createElement("div");
        u.className = "match-info",
        t.match.room,
        u.innerHTML = `\n            <div class="match-time-section">\n                <div class="match-date-full">${c}</div>\n                <div class="match-time-full">${m}</div>\n            </div>\n        `,
        r.appendChild(u);
        const p = document.createElement("div");
        p.className = "mode-info";
        const h = ce.gameModes.find((e => e.id === t.match.mode))
          , g = h ? L.getWord(h.name) : `Mode ${t.match.mode}`
          , y = (null === (o = ce.getLanguages().find((e => e.locale === t.match.locale))) || void 0 === o ? void 0 : o.flag) || "mlang"
          , b = new Date(t.match.endTime).getTime() - new Date(t.match.startTime).getTime()
          , f = `${Math.floor(b / 6e4)}m ${Math.floor(b % 6e4 / 1e3)}s`
          , w = void 0 !== t.match.diff ? `Difficulty: ${t.match.diff}` : ""
          , _ = void 0 !== t.match.speed ? `Speed: ${t.match.speed}x` : ""
          , C = t.match.scenario ? `Scenario: ${t.match.scenario}` : "";
        var E = (null === (i = ce.getLanguages().find((e => e.locale === t.match.locale))) || void 0 === i ? void 0 : i.name) || "Multi Language";
        p.innerHTML = `\n            <div class="mode-name-full">\n                <div class="mode-text">Turn ${t.match.turn}</div>\n            </div>\n            <div class="mode-name-full">\n                <div class="mode-icon-large" style="background-image: url('/gamemodes/${t.match.mode}.png')"></div>\n                <div class="mode-text">${g}</div>\n            </div>\n            <div class="locale-info-full">\n                <img src="/flag/${y}.png" class="locale-flag-large" />\n                <div class="locale-text">${E}</div>\n            </div>\n            <div class="match-duration-badge">\n                <div class="duration-label">DURATION</div>\n                <div class="duration-value">${f}</div>\n            </div>\n            <div class="match-settings">\n                ${w ? `<div class="setting-badge">${w}</div>` : ""}\n                ${_ ? `<div class="setting-badge">${_}</div>` : ""}\n                ${C ? `<div class="setting-badge">${C}</div>` : ""}\n                ${t.match.additional ? `<div class="setting-badge">${t.match.additional}</div>` : ""}\n            </div>\n        `,
        d.appendChild(p),
        r.appendChild(d);
        const k = t.match.winner
          , S = !!k && "0" !== k && t.players.length > 1;
        var x = void 0;
        if (S) {
            (x = document.createElement("div")).className = "winner-section";
            let e = t.match.winner;
            k === n && (e = N.player.displayName || "You"),
            x.innerHTML = `\n                <div class="winner-crown">👑</div>\n                <div class="winner-text">WINNER: ${e}</div>\n            `,
            r.appendChild(x)
        }
        const T = document.createElement("div");
        T.className = "players-stats-section";
        const P = document.createElement("div");
        P.className = "section-title",
        P.innerHTML = `\n            <span class="title-icon">👤</span>\n            <span class="title-text">PLAYERS</span>\n            <span class="title-count">${Object.keys(t.match.stats).length}</span>\n        `,
        T.appendChild(P);
        const M = document.createElement("div");
        M.className = "players-grid";
        const I = Object.values(t.match.stats)
          , A = Math.max(...I.map((e => e.correct_words)), 1)
          , W = Math.max(...I.map((e => e.wrong_words)), 1)
          , B = Math.max(...I.map((e => e.typed_words)), 1);
        Math.max(...I.map((e => e.collected_coins)), 1),
        Object.entries(t.match.stats).forEach((e => ke(this, [e], void 0, (function*([e,t]) {
            var a;
            const o = e === k
              , i = e === n
              , s = e === N.player.id;
            let r = `Player ${e.slice(-4)}`;
            var d = t.locale;
            let l = null;
            var c = (null === (a = ce.getLanguages().find((e => e.locale === d))) || void 0 === a ? void 0 : a.flag) || "mlang";
            try {
                if (e == N.player.id)
                    r = N.player.displayName || "You",
                    l = H(e, N.player.avatar, 48);
                else {
                    const t = yield v.http.post("/profile", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id: e
                        })
                    });
                    t.data && (t.data.name && (r = t.data.name),
                    t.data.avatar && (l = H(e, t.data.avatar, 48)))
                }
            } catch (E) {
                r = `Player ${e.slice(-4)}`
            }
            const m = document.createElement("div");
            m.className = `player-stats-container collapsible ${o ? "winner" : ""} ${i ? "current-user" : ""}`;
            const u = document.createElement("div");
            u.className = "player-header dropdown-toggle",
            o && x && (x.querySelector(".winner-text").textContent = `WINNER: ${r}`);
            const p = l ? `<img src="${l}" class="player-avatar" alt="avatar" />` : '<div class="player-avatar player-avatar-placeholder"></div>';
            u.innerHTML = `\n            ${p}\n            <span class="player-locale"><img src="/flag/${c}.png"/></span>\n            <span class="player-name">${r}</span>\n            <div class="player-badges">\n                ${o ? '<span class="winner-badge">👑</span>' : ""}\n                ${s ? '<span class="you-badge">YOU</span>' : ""}\n            </div>\n            <span class="toggle-indicator">▼</span>\n            `,
            m.appendChild(u);
            const h = document.createElement("div");
            h.className = "player-details-container",
            h.style.display = "none";
            const g = document.createElement("div");
            g.className = "hex-stats-grid";
            const y = (e, t, a, n, o) => {
                const i = Math.min(100, Math.max(0, t / a * 100)) || 0
                  , s = document.createElement("div");
                return s.className = "hex-stat",
                s.style.setProperty("--fill-percent", `${i}%`),
                s.style.setProperty("--stat-color", o),
                s.innerHTML = `\n                <div class="hex-background"></div>\n                <div class="hex-fill" style="clip-path: polygon(50% 0%, 100% 25%, 100% ${i}%, 50% ${i}%, 0 ${i}%, 0 25%)"></div>\n                <div class="hex-content">\n                <div class="hex-icon ${n}"></div>\n                <div class="hex-value">${t}</div>\n                <div class="hex-label">${e}</div>\n                </div>\n            `,
                s
            }
            ;
            g.appendChild(y("Correct", t.correct_words, A, "icon-correct", "#00e1ff")),
            g.appendChild(y("Wrong", t.wrong_words, W, "icon-wrong", "#ff3860")),
            g.appendChild(y("Written Before", t.typed_words, B, "icon-typed", "#ff9d3d")),
            h.appendChild(g);
            const b = document.createElement("div");
            b.className = "additional-stats";
            const f = t.correct_words + t.wrong_words
              , w = f > 0 ? t.correct_words / f * 100 : 0
              , _ = t.category ? this.createCategoryDisplay(t.category) : ""
              , C = t.diamond_dropped > 0 || t.key_dropped > 0 ? `\n            <div class="drops-section">\n                ${t.diamond_dropped > 0 ? `\n                <div class="drop-item">\n                    <img src="/web/diamond.png" class="drop-icon" />\n                    <span class="drop-count">×${t.diamond_dropped}</span>\n                </div>\n                ` : ""}\n                ${t.key_dropped > 0 ? `\n                <div class="drop-item">\n                    <img src="/web/key.png" class="drop-icon" />\n                    <span class="drop-count">×${t.key_dropped}</span>\n                </div>\n                ` : ""}\n                 ${t.collected_coins > 0 ? `\n                <div class="drop-item">\n                    <img src="/web/coin.png" class="drop-icon" />\n                    <span class="drop-count">×${t.collected_coins}</span>\n                </div>\n                ` : ""}\n            </div>\n            ` : "";
            if (b.innerHTML = `\n            <div class="stat-group">\n                <div class="stat-row">\n                <div class="stat-key">Longest Word:</div>\n                <div class="stat-value highlight">${t.longest_word || "-"}</div>\n                </div>\n                \n                <div class="stat-row">\n                <div class="stat-key">Word Efficiency:</div>\n                <div class="stat-value">${w.toFixed(1)}%</div>\n                </div>\n                <div class="progress-container">\n                <div class="progress-bar">\n                    <div class="progress-track"></div>\n                    <div class="progress-fill" style="width: ${w}%"></div>\n                </div>\n                <div class="progress-markers">\n                    <div class="marker" style="left: 3%">0%</div>\n                    <div class="marker" style="left: 50%">50%</div>\n                    <div class="marker" style="left: 97%">100%</div>\n                </div>\n                </div>\n                \n                <div class="stat-highlights">\n                <div class="highlight-item">\n                    <div class="highlight-value xp-value">+${Math.round(t.xp) || 0}</div>\n                    <div class="highlight-label">XP</div>\n                </div>\n                <div class="highlight-item">\n                    <div class="highlight-value">${t.combo || 0}×</div>\n                    <div class="highlight-label">MAX COMBO</div>\n                </div>\n                ${t.discovered > 0 ? `\n                    <div class="highlight-item discovered">\n                    <div class="highlight-value discovery-value">${t.discovered}</div>\n                    <div class="highlight-label">DISCOVERED</div>\n                    </div>\n                ` : ""}\n                ${t.claimed > 0 ? `\n                    <div class="highlight-item claimed">\n                    <div class="highlight-value claimed-value">${t.claimed}</div>\n                    <div class="highlight-label">CLAIMED</div>\n                    </div>\n                ` : ""}\n                </div>\n                ${C}\n                ${_}\n            </div>\n            `,
            t.health_lost && t.health_lost.length > 0) {
                const e = document.createElement("div");
                e.classList.add("lost-hearts-container");
                const a = document.createElement("div");
                a.textContent = "Lost Hearts",
                a.className = "lost-hearts-title",
                e.appendChild(a);
                const n = document.createElement("div");
                n.className = "lost-hearts",
                t.health_lost.forEach((e => {
                    const t = document.createElement("div");
                    t.className = "lost-heart",
                    t.textContent = `${e} ❤️`,
                    n.appendChild(t)
                }
                )),
                e.appendChild(n),
                b.appendChild(e)
            }
            h.appendChild(b),
            m.appendChild(h),
            u.addEventListener("click", ( () => {
                "none" === h.style.display ? (h.style.display = "block",
                u.querySelector(".toggle-indicator").textContent = "▲",
                m.classList.add("expanded")) : (h.style.display = "none",
                u.querySelector(".toggle-indicator").textContent = "▼",
                m.classList.remove("expanded"))
            }
            )),
            i && setTimeout(( () => {
                u.click()
            }
            ), 100),
            M.appendChild(m)
        }
        )))),
        T.appendChild(M),
        r.appendChild(T),
        e.appendChild(r)
    }
    static createCategoryDisplay(e) {
        if (!e)
            return "";
        try {
            const t = e.split(",").map((e => {
                const [t,a] = e.split(":");
                return {
                    category: t,
                    count: parseInt(a)
                }
            }
            ));
            if (0 === t.length)
                return "";
            let a = '<div class="category-container"><h3>Categories</h3><div class="category-items">';
            return t.forEach((e => {
                a += `\n                    <div class="category-item">\n                        <div class="category-name">${L.getWord(e.category)}</div>\n                        <div class="category-count">${e.count}</div>\n                    </div>\n                `
            }
            )),
            a += "</div></div>",
            a
        } catch (t) {
            return ""
        }
    }
    static openDailyShop() {
        var e = document.createElement("div");
        e.classList.add("full-window"),
        e.classList.add("daily-shop-window");
        var t = document.createElement("div");
        t.id = "daily-shop-countdown",
        t.classList.add("daily-shop-countdown"),
        t.textContent = "🚀 " + N.nextDay,
        e.appendChild(t);
        var a = setInterval(( () => {
            t.textContent = "🚀 " + N.nextDay,
            document.getElementById("daily-shop-countdown") || clearInterval(a)
        }
        ), 1e3)
          , n = xe.createTopRightCornerCloseButton();
        n.addEventListener("click", ( () => {
            e.remove()
        }
        )),
        e.appendChild(n);
        const o = document.createElement("div");
        o.classList.add("tab-container"),
        e.appendChild(o);
        const s = document.createElement("div");
        s.classList.add("tab", "active-tab"),
        s.textContent = "Daily Shop",
        o.appendChild(s);
        const r = document.createElement("div");
        r.classList.add("tab"),
        r.textContent = "Daily Rewards",
        o.appendChild(r);
        const d = document.createElement("div");
        d.classList.add("tab-content-container"),
        e.appendChild(d),
        document.body.appendChild(e);
        const l = () => {
            d.innerHTML = "",
            s.classList.add("active-tab"),
            r.classList.remove("active-tab");
            const e = Se();
            d.appendChild(e),
            c()
        }
        ;
        s.addEventListener("click", l),
        r.addEventListener("click", ( () => {
            d.innerHTML = "",
            s.classList.remove("active-tab"),
            r.classList.add("active-tab"),
            d.innerHTML = "Coming soon."
        }
        ));
        const c = () => {
            var e, t;
            null === (e = N.currentRoom) || void 0 === e || e.send("daily-shop");
            var a = null === (t = N.currentRoom) || void 0 === t ? void 0 : t.onMessage("daily-shop", (e => ke(this, void 0, void 0, (function*() {
                var t, n, o, s, r, l;
                a();
                var c = Se();
                d.innerHTML = "",
                d.appendChild(c);
                var m = yield D();
                if (null == c || c.remove(),
                F() || 0 == (null === (t = null == m ? void 0 : m.skus) || void 0 === t ? void 0 : t.length)) {
                    var u = document.createElement("div");
                    u.classList.add("g-alert"),
                    u.textContent = "This feature is not available on mobile or browser yet. Open the game in Discord Activities to claim items.",
                    d.appendChild(u)
                }
                var h, v = document.createElement("div");
                if (v.classList.add("ds-frame"),
                d.appendChild(v),
                (h = document.createElement("div")).classList.add("ds-double"),
                h.classList.add("ds-full"),
                null != e.bombs[0]) {
                    var g = null === (n = null == m ? void 0 : m.skus) || void 0 === n ? void 0 : n.find((e => "1341988850804985918" == e.id));
                    if ((y = document.createElement("div")).classList.add("ds-shop-item"),
                    (w = document.createElement("img")).src = `/bombs/${e.bombs[0]}.png`,
                    w.classList.add("bomb-anim"),
                    y.appendChild(w),
                    (b = document.createElement("img")).classList.add("shine"),
                    b.src = "/web/shine.png",
                    y.appendChild(b),
                    (_ = document.createElement("div")).classList.add("ds-desct"),
                    _.textContent = "Daily Bomb",
                    y.appendChild(_),
                    g)
                        (C = document.createElement("button")).textContent = i.formatPrice(g.price),
                        C.classList.add("daily-buy-button"),
                        C.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                            yield p.commands.startPurchase({
                                sku_id: "1341988850804985918"
                            })
                        }
                        )))),
                        y.appendChild(C);
                    h.appendChild(y)
                }
                if (null != e.bombs[1]) {
                    g = null === (o = null == m ? void 0 : m.skus) || void 0 === o ? void 0 : o.find((e => "1341990840368762961" == e.id));
                    if ((y = document.createElement("div")).classList.add("ds-shop-item"),
                    (w = document.createElement("img")).src = `/bombs/${e.bombs[1]}.png`,
                    w.classList.add("bomb-anim"),
                    y.appendChild(w),
                    (b = document.createElement("img")).classList.add("shine"),
                    b.src = "/web/shine.png",
                    y.appendChild(b),
                    (_ = document.createElement("div")).classList.add("ds-desct"),
                    _.textContent = "Daily Bomb",
                    y.appendChild(_),
                    g)
                        (C = document.createElement("button")).textContent = i.formatPrice(g.price) || "Not available",
                        C.classList.add("daily-buy-button"),
                        C.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                            yield p.commands.startPurchase({
                                sku_id: "1341990840368762961"
                            })
                        }
                        )))),
                        y.appendChild(C);
                    h.appendChild(y)
                }
                if (null != e.bombs[2]) {
                    var y, b;
                    g = null === (s = null == m ? void 0 : m.skus) || void 0 === s ? void 0 : s.find((e => "1341995678447964180" == e.id));
                    if ((y = document.createElement("div")).classList.add("ds-shop-item"),
                    (w = document.createElement("img")).src = `/bombs/${e.bombs[2]}.png`,
                    w.classList.add("bomb-anim"),
                    y.appendChild(w),
                    (b = document.createElement("img")).classList.add("shine"),
                    b.src = "/web/shine.png",
                    y.appendChild(b),
                    (_ = document.createElement("div")).classList.add("ds-desct"),
                    _.textContent = "Daily Bomb",
                    y.appendChild(_),
                    g)
                        (C = document.createElement("button")).textContent = i.formatPrice(g.price),
                        C.classList.add("daily-buy-button"),
                        C.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                            yield p.commands.startPurchase({
                                sku_id: "1341995678447964180"
                            })
                        }
                        )))),
                        y.appendChild(C);
                    h.appendChild(y)
                }
                if (v.appendChild(h),
                (h = document.createElement("div")).classList.add("ds-double"),
                e.theme) {
                    g = null === (r = null == m ? void 0 : m.skus) || void 0 === r ? void 0 : r.find((e => "1341990996820492329" == e.id));
                    var f = document.createElement("div");
                    if (f.classList.add("ds-shop-item"),
                    (w = document.createElement("img")).classList.add("full-size"),
                    w.src = `/backgrounds_small/${e.theme}.jpg`,
                    f.appendChild(w),
                    (_ = document.createElement("div")).classList.add("ds-desct"),
                    _.textContent = "Daily Theme",
                    f.appendChild(_),
                    g)
                        (C = document.createElement("button")).textContent = i.formatPrice(g.price),
                        C.classList.add("daily-buy-button"),
                        C.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                            yield p.commands.startPurchase({
                                sku_id: "1341990996820492329"
                            })
                        }
                        )))),
                        f.appendChild(C);
                    h.appendChild(f)
                }
                if (e.frame) {
                    g = null === (l = null == m ? void 0 : m.skus) || void 0 === l ? void 0 : l.find((e => "1341991094396653619" == e.id));
                    var w, _, C, E = document.createElement("div");
                    if (E.classList.add("ds-shop-item"),
                    E.classList.add("ds-shop-frame"),
                    (w = document.createElement("img")).src = `/frame_ui/${e.frame}.png`,
                    E.appendChild(w),
                    (_ = document.createElement("div")).classList.add("ds-desct"),
                    _.textContent = "Daily Frame",
                    E.appendChild(_),
                    g)
                        (C = document.createElement("button")).textContent = i.formatPrice(g.price),
                        C.classList.add("daily-buy-button"),
                        C.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                            yield p.commands.startPurchase({
                                sku_id: "1341991094396653619"
                            })
                        }
                        )))),
                        E.appendChild(C);
                    h.appendChild(E)
                }
                v.appendChild(h)
            }
            ))))
        }
        ;
        l()
    }
    static openGameModeScreen() {
        var e = document.createElement("div");
        e.classList.add("full-window"),
        e.classList.add("gm-window"),
        e.id = "gm-mode-sw",
        document.body.appendChild(e);
        var t = xe.createTopRightCornerCloseButton();
        t.addEventListener("click", ( () => {
            e.remove()
        }
        ));
        var a = document.createElement("div");
        a.classList.add("gm-container"),
        ce.gameModes.forEach((t => {
            var n, o, i, s, r;
            if (!t.locked) {
                var d = document.createElement("div");
                d.classList.add("gamemode"),
                d.id = `ms-setting-${t.id}`;
                var l = document.createElement("div");
                l.classList.add("gamemode-logo"),
                l.style.backgroundImage = `url('/gamemodes/${t.id}.png')`,
                d.appendChild(l);
                var c = document.createElement("span");
                c.classList.add("gamemode-name"),
                c.textContent = L.getWord(t.name),
                d.appendChild(c);
                var m = document.createElement("span");
                m.classList.add("gamemode-description"),
                m.textContent = L.getWord(t.description),
                d.appendChild(m),
                d.addEventListener("click", ( () => {
                    var n, o, i, s, r;
                    if ((null === (o = null === (n = At.room) || void 0 === n ? void 0 : n.state) || void 0 === o ? void 0 : o.host) == (null === (i = N.gamePlayer) || void 0 === i ? void 0 : i.session_id))
                        if (t.locked)
                            z("This game mode is locked");
                        else {
                            a.querySelectorAll(".gamemode").forEach((e => {
                                e.classList.remove("selected")
                            }
                            )),
                            d.classList.add("selected"),
                            (null === (r = null === (s = At.room) || void 0 === s ? void 0 : s.state) || void 0 === r ? void 0 : r.mode) != t.id && At.room.send("settings", {
                                mode: t.id
                            });
                            var l = document.getElementById("cm-monster");
                            if (7 == t.id) {
                                if (!l) {
                                    var c = document.createElement("button");
                                    c.id = "cm-monster",
                                    c.textContent = "⚙️",
                                    c.addEventListener("click", ( () => {
                                        xe.openMonsterScreen(),
                                        e.remove()
                                    }
                                    )),
                                    d.appendChild(c)
                                }
                            } else
                                null == l || l.remove();
                            setTimeout(( () => {
                                d.scrollIntoView({
                                    behavior: "smooth",
                                    block: "nearest"
                                })
                            }
                            ), 50)
                        }
                    else
                        z(L.getWord("only_host_can_change"))
                }
                )),
                (null === (o = null === (n = At.room) || void 0 === n ? void 0 : n.state) || void 0 === o ? void 0 : o.mode) == t.id && ((null === (s = null === (i = At.room) || void 0 === i ? void 0 : i.state) || void 0 === s ? void 0 : s.host) == (null === (r = N.gamePlayer) || void 0 === r ? void 0 : r.session_id) ? d.click() : (d.classList.add("selected"),
                setTimeout(( () => {
                    d.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    })
                }
                ), 100))),
                a.appendChild(d)
            }
        }
        )),
        e.appendChild(t),
        e.appendChild(a)
    }
    static openMonsterScreen() {
        var e, t, a = document.createElement("div");
        a.classList.add("full-window"),
        a.classList.add("monster-window"),
        a.id = "ms-panel",
        document.body.appendChild(a);
        var n = At.room.state.monsters.split(",")
          , o = xe.createTopRightCornerCloseButton();
        o.addEventListener("click", ( () => {
            a.remove()
        }
        )),
        a.appendChild(o);
        var i = document.createElement("div");
        if (i.classList.add("monster-container"),
        !(null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.monsters))
            return void z("Monsters not loaded yet. Please try again later.");
        var s = document.createElement("button");
        s.classList.add("cms-save"),
        s.textContent = L.getWord("save");
        var r = document.createElement("div");
        r.classList.add("monster-warning"),
        r.style.color = "red",
        r.textContent = "Choose at least 1 monster",
        r.style.fontSize = 0 === n.length ? "16px" : "0px";
        const d = () => {
            s.disabled = 0 === n.length,
            r.style.fontSize = 0 === n.length ? "16px" : "0px"
        }
          , l = e => {
            var t = document.createElement("div");
            t.id = e.id,
            t.classList.add("monster-div");
            var a = e.image;
            if (e.user) {
                e.image = "/monsters/user.png";
                var o = document.createElement("div");
                o.classList.add("monster-owner");
                var i = document.createElement("img");
                i.src = a,
                i.addEventListener("click", (t => {
                    t.stopPropagation(),
                    xe.showPlayerProfile(e.id, !0)
                }
                ), {
                    passive: !0
                });
                var s = document.createElement("button");
                s.classList.add("view-code"),
                s.textContent = "📜",
                s.addEventListener("click", (t => ke(this, void 0, void 0, (function*() {
                    t.stopPropagation();
                    try {
                        var a = yield v.http.post("/code/get", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                id: e.id,
                                name: e.name
                            })
                        })
                    } catch (n) {
                        return void z(n.toString())
                    }
                    xe.showCode(a.data.code)
                }
                )))),
                t.appendChild(s),
                o.appendChild(i),
                t.appendChild(o)
            }
            t.style.backgroundImage = `url(${e.image})`;
            var r = document.createElement("div");
            return r.classList.add("monster-description"),
            r.textContent = `${e.name}`,
            t.appendChild(r),
            t.addEventListener("click", ( () => {
                var a, o, i;
                if ((null === (o = null === (a = At.room) || void 0 === a ? void 0 : a.state) || void 0 === o ? void 0 : o.host) == (null === (i = N.gamePlayer) || void 0 === i ? void 0 : i.session_id)) {
                    if (e.user) {
                        var s = e.id + ":" + e.name;
                        n.includes(s) ? (n = n.filter((e => e !== s)),
                        t.classList.remove("selected")) : (n.push(s),
                        t.classList.add("selected"))
                    } else
                        t.classList.contains("selected") ? (t.classList.remove("selected"),
                        n.splice(n.indexOf(e.id), 1)) : (t.classList.add("selected"),
                        n.push(e.id));
                    d()
                } else
                    z(L.getWord("only_host_can_change"))
            }
            )),
            n.includes(e.id) && t.classList.add("selected"),
            e.user && n.includes(e.id + ":" + e.name) && t.classList.add("selected"),
            t
        }
        ;
        ce.monsters.forEach((e => {
            var t = {
                name: e.name,
                id: e.id,
                user: !1,
                image: "/monsters/" + e.name + ".png"
            };
            i.appendChild(l(t))
        }
        )),
        s.addEventListener("click", ( () => {
            a.remove();
            var e = n.join(",");
            At.room.send("settings", {
                key: "monsters",
                value: e
            })
        }
        ));
        var c = document.createElement("button");
        c.classList.add("clear-all-button"),
        c.textContent = "🗑️",
        c.addEventListener("click", ( () => {
            var e, t, o;
            (null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.host) == (null === (o = N.gamePlayer) || void 0 === o ? void 0 : o.session_id) ? (a.querySelectorAll(".monster-div").forEach((e => {
                e.classList.remove("selected")
            }
            )),
            n = [],
            d()) : z(L.getWord("only_host_can_change"))
        }
        ));
        var m = document.createElement("div");
        m.classList.add("cmsbtn-ct"),
        m.appendChild(s),
        m.appendChild(c),
        a.appendChild(m),
        a.appendChild(r),
        a.appendChild(i);
        ( () => {
            ke(this, void 0, void 0, (function*() {
                var e;
                null === (e = document.getElementById("user-content-span")) || void 0 === e || e.remove();
                var t = document.createElement("span");
                t.id = "user-content-span",
                t.textContent = "Created By Players",
                t.classList.add("user-content-span"),
                i.appendChild(t);
                var a = document.createElement("div");
                a.classList.add("monster-container"),
                a.classList.add("user-content");
                try {
                    var n = yield v.http.get("/code/browse", {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    n && n.data && n.data.forEach((e => {
                        var t = {
                            name: e.name,
                            id: e.id,
                            user: !0,
                            image: H(e.id, e.avatar, 32)
                        };
                        a.appendChild(l(t))
                    }
                    ))
                } catch (o) {}
                i.appendChild(a)
            }
            ))
        }
        )(),
        d();
        var u = document.createElement("div");
        u.classList.add("monster-options"),
        a.appendChild(u);
        var p = document.createElement("div");
        p.classList.add("create-monster-btn"),
        p.classList.add("close-button");
        var h = document.createElement("div");
        h.classList.add("monster-dsc"),
        h.textContent = "Create Your Monster",
        p.appendChild(h),
        p.addEventListener("click", ( () => {
            a.remove(),
            xe.openCodingWindow()
        }
        )),
        u.appendChild(p)
    }
    static showCode(e) {
        var t = document.createElement("div");
        t.classList.add("full-window"),
        t.classList.add("code-window");
        var a = xe.createTopRightCornerCloseButton();
        a.addEventListener("click", ( () => {
            t.remove()
        }
        )),
        t.appendChild(a);
        var n = document.createElement("textarea");
        n.classList.add("code-area"),
        n.value = e,
        t.appendChild(n),
        n.readOnly = !0,
        document.body.appendChild(t)
    }
    static openCodingWindow() {
        return ke(this, void 0, void 0, (function*() {
            var e, t = document.createElement("div");
            t.classList.add("full-window"),
            document.body.appendChild(t);
            var a = xe.createTopRightCornerCloseButton();
            t.appendChild(a);
            var n = document.createElement("div");
            n.classList.add("code-desct"),
            n.textContent = "Javascript | 1mb file size | 5 mb memory | max 5 ms execution time for each function",
            t.appendChild(n);
            var o = document.createElement("div");
            o.classList.add("name-public");
            var i = document.createElement("div");
            i.style.display = "flex",
            i.style.gap = "10px",
            i.style.alignItems = "center";
            var s = document.createElement("select");
            s.classList.add("wb-input"),
            i.appendChild(s);
            var r = document.createElement("input");
            r.classList.add("wb-input"),
            r.placeholder = "Code name",
            i.appendChild(r),
            o.appendChild(i);
            var d = document.createElement("input");
            d.type = "checkbox",
            d.classList.add("wb-checkbox"),
            d.id = "code-public";
            var l = document.createElement("label");
            l.htmlFor = "code-public",
            l.textContent = "Public",
            o.appendChild(d),
            o.appendChild(l),
            t.appendChild(o);
            var c = document.createElement("textarea");
            c.id = "code-area",
            c.classList.add("code-js"),
            c.value = "",
            c.spellcheck = !1,
            t.appendChild(c);
            let m, u = "";
            const p = () => ke(this, void 0, void 0, (function*() {
                if ("create" === s.value)
                    r.value = "",
                    c.value = '\nvar damage = 20;\nvar gameLocale = "";\n\n//en-US, pt-BR, it-IT,tr-TR, fr-FR, es-ES, tl-TL, de-DE, sv-SE,id-ID\nfunction init(locale) {\n    gameLocale = locale;\n    caresAboutBeingTypedBefore(true); \n    timeMultiplier(0.5); // 0.5x speed  (0.1 - 1.0)\n    damageOnSubmit(false); // do not damage player on submit\n    damageOnTimer(true); // damage player on timer hits 0\n    description("My Example Monster"); \n    title("Cute Monster");\n}\n                \nfunction onLevelUp(level) {\n    damage--;\n}\nfunction getPrompt() {\n    // also getRandomPrompt() returns a random word from the dictionary\n    var emojis = ["😊", "🔥", "💥", "🎮"];\n    return emojis[Math.floor(Math.random() * emojis.length)] + " " + gameLocale;\n}\nfunction onCorrect(typed) {\n    setDamage(typed.length*damage);\n}\nfunction isCorrect(word,prompt) {\n    return hasWord(word); // Accept any word in the dictionary\n}\n',
                    u = "New Monster";
                else {
                    r.value = s.value,
                    u = s.value;
                    try {
                        const e = yield v.http.post("/code/get", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                name: s.value
                            })
                        });
                        e && e.data && (c.value = e.data.code,
                        d.checked = e.data.privacy || !1,
                        xe.lastTab = s.selectedIndex)
                    } catch (e) {
                        R(e.toString())
                    }
                }
            }
            ));
            if (yield v.http.get("/code/name", {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((e => ke(this, void 0, void 0, (function*() {
                e && e.data && e.data.names.length > 0 && (e.data.names.forEach((e => {
                    var t = document.createElement("option");
                    t.value = e,
                    t.textContent = e,
                    s.appendChild(t)
                }
                )),
                s.value = e.data.names[xe.lastTab],
                r.value = s.value,
                u = s.value),
                (!e || !e.data || e.data.names.length < 3) && (m = document.createElement("option"),
                m.value = "create",
                m.textContent = "Create New",
                s.appendChild(m),
                e && e.data && 0 !== e.data.names.length || (s.value = "create",
                r.value = "",
                c.value = "",
                u = "")),
                yield p()
            }
            )))).catch((e => {
                R(e.toString()),
                m = document.createElement("option"),
                m.value = "create",
                m.textContent = "Create New",
                s.appendChild(m),
                s.value = "create"
            }
            )),
            s.addEventListener("change", ( () => ke(this, void 0, void 0, (function*() {
                yield p()
            }
            )))),
            r.addEventListener("change", ( () => {
                if ("create" !== s.value) {
                    const e = s.querySelector(`option[value="${u}"]`);
                    e && (e.textContent = r.value)
                }
            }
            )),
            (null === (e = N.player) || void 0 === e ? void 0 : e.id.length) > 10) {
                var h = document.createElement("button");
                h.classList.add("code-save-btn"),
                h.textContent = "Save",
                h.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                    const e = r.value.trim();
                    if (!e)
                        return void R("Please enter a name for your code");
                    h.innerText = "⌛";
                    const t = c.value
                      , a = new Blob([c.value]).size;
                    try {
                        const n = {
                            code: t,
                            privacy: d.checked,
                            name: e
                        };
                        if ("create" !== s.value && u && (n.oldName = u),
                        yield v.http.post("/code/set", {
                            body: JSON.stringify(n),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }),
                        At.room.send("settings", {
                            key: "monsters",
                            value: N.player.id + ":" + e
                        }),
                        "create" === s.value) {
                            const t = document.createElement("option");
                            t.value = e,
                            t.textContent = e,
                            m && m.parentNode ? s.insertBefore(t, m) : s.appendChild(t),
                            s.value = e,
                            u = e;
                            Array.from(s.querySelectorAll("option")).filter((e => "create" !== e.value)).length >= 3 && m && m.parentNode && s.removeChild(m)
                        } else if (u && u !== e) {
                            const t = s.querySelector(`option[value="${u}"]`);
                            t && (t.value = e,
                            t.textContent = e,
                            u = e)
                        }
                        R("Code saved successfully! " + a + " bytes")
                    } catch (n) {
                        R(n.toString())
                    }
                    h.innerText = "Save"
                }
                )))),
                t.appendChild(h)
            } else {
                var g = document.createElement("div");
                g.textContent = "You need to login to save your code",
                g.classList.add("g-alert"),
                t.appendChild(g)
            }
            a.addEventListener("click", ( () => {
                t.remove(),
                this.openMonsterScreen()
            }
            ))
        }
        ))
    }
    static createDailyWord(e, t) {
        const a = document.createElement("div");
        a.id = "daily-word",
        a.classList.add("daily-container");
        const n = document.createElement("div");
        n.classList.add("daily-desct"),
        n.textContent = "Find the word of the day!",
        a.appendChild(n);
        const o = document.createElement("div");
        o.classList.add("daily-word"),
        o.classList.add("shine-button");
        const i = document.createElement("span");
        return i.textContent = e,
        i.classList.add("daily-word-text"),
        o.appendChild(i),
        a.appendChild(o),
        a
    }
    static createDesct(e) {
        const t = document.createElement("div");
        return t.classList.add("g-desct"),
        t.textContent = e,
        t
    }
    static createTitle(e) {
        const t = document.createElement("span");
        return t.classList.add("g-title"),
        t.textContent = e,
        t
    }
    static createAlert(e) {
        const t = document.createElement("div");
        return t.classList.add("g-alert"),
        t.textContent = e,
        t
    }
    static createChatBubble() {
        const e = document.createElement("span");
        return e.id = "chat-notification",
        e
    }
    static createFloatingWindow(e="50%") {
        var t = document.createElement("div");
        return t.classList.add("floating-window"),
        t.id = "movable",
        t.style.height = e,
        t
    }
    static createInput() {
        var e = document.createElement("input");
        return e.classList.add("cw-input"),
        e
    }
    static createButton() {
        var e = document.createElement("button");
        return e.classList.add("wb-button"),
        e
    }
    static createTopRightCornerCloseButton() {
        var e = document.createElement("button");
        return e.classList.add("window-close-button"),
        e
    }
    static createLogWindow() {
        var e = document.getElementById("logs-window");
        e && e.remove();
        var t = xe.createFloatingWindow();
        t.id = "logs-window",
        document.body.appendChild(t);
        var a = this.createTopRightCornerCloseButton();
        a.addEventListener("click", ( () => {
            null == t || t.remove()
        }
        )),
        t.appendChild(a),
        xe.addDragging(t);
        var n = document.createElement("div");
        n.classList.add("cw");
        var o = this.createInput();
        t.appendChild(o),
        o.addEventListener("blur", ( () => {
            Ee.isInputActive = !1
        }
        )),
        o.addEventListener("focus", ( () => {
            Ee.isInputActive = !0
        }
        ));
        var i = this.createButton();
        i.textContent = L.getWord("search"),
        i.addEventListener("click", ( () => {
            var e, t, a = o.value;
            if (a) {
                var n = N.currentRoom;
                if (n)
                    try {
                        let o = function(e) {
                            return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        };
                        var s = n.state.locale;
                        (null === (e = At.room) || void 0 === e ? void 0 : e.state.mlang) && (s = null === (t = N.gamePlayer) || void 0 === t ? void 0 : t.lang),
                        a = a.toLocaleUpperCase(s),
                        "tr-TR" != s && "sv-SE" != s && (a = o(a)),
                        n.send("check-word", {
                            word: a
                        })
                    } catch (r) {
                        W("Error: Report Code (#425): " + r, M)
                    }
            }
            i.style.visibility = "hidden",
            setTimeout(( () => {
                i && (i.style.visibility = "visible")
            }
            ), 3e3)
        }
        )),
        o.addEventListener("keydown", (e => {
            if ("Enter" === e.key) {
                if ("hidden" === i.style.visibility)
                    return;
                i.click()
            }
        }
        )),
        n.appendChild(o),
        n.appendChild(i),
        t.appendChild(n);
        var s = document.createElement("div");
        s.id = "log-container",
        s.classList.add("log-container");
        const r = (e, t) => {
            const a = document.createElement("div");
            a.classList.add("log");
            const n = document.createElement("span");
            if (n.classList.add("log-text"),
            n.textContent = e,
            a.appendChild(n),
            a.style.background = "#" + t.toString(16).padStart(6, "0"),
            s.prepend(a),
            t === P) {
                const t = document.createElement("button");
                t.classList.add("log-search"),
                t.textContent = "🔍",
                a.appendChild(t);
                const n = e.split(":")[1].trim();
                t.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                    var e = document.getElementById("log-container");
                    t.innerText = "⌛",
                    e.style.pointerEvents = "none";
                    try {
                        const {data: e} = yield v.http.post("/meaning", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                word: n
                            })
                        });
                        var a = e.word;
                        e.meaning.includes(a) || (e.meaning = `${a}: ${e.meaning}`),
                        r(e.meaning, M)
                    } catch (o) {}
                    (e = document.getElementById("log-container")) && (e.style.pointerEvents = "auto",
                    t && (t.innerText = "✅",
                    e.scrollTop = 0))
                }
                ))))
            }
        }
        ;
        for (let d = 0; d < S.length; d++)
            r(S[d].msg, S[d].color);
        return A.clearListeners(),
        A.addListener(( (e, t) => {
            document.getElementById("logs-window") ? r(e, t) : A.clearListeners()
        }
        )),
        t.appendChild(s),
        t
    }
    static createPanel() {
        var e = document.createElement("div");
        return e.style.top = "45%",
        e.style.minHeight = "80%",
        e.classList.add("panel"),
        e
    }
    static showPlayerProfile(e) {
        return ke(this, arguments, void 0, (function*(e, t=!1) {
            var a = N.currentRoom
              , n = document.createElement("div");
            n.classList.add("floating-window"),
            n.style.backgroundColor = "rgba(0, 0, 0, 0.5)",
            n.style.zIndex = "9999";
            var o = Se();
            n.appendChild(o),
            document.body.appendChild(n),
            null == a || a.send("req-profile", e);
            var i = null == a ? void 0 : a.onMessage("res-profile", (o => ke(this, void 0, void 0, (function*() {
                var s, r, d;
                i(),
                n.remove();
                var l = JSON.parse(o)
                  , c = xe.open(l);
                const m = (null === (s = N.gamePlayer) || void 0 === s ? void 0 : s.session_id) == (null === (r = a.state) || void 0 === r ? void 0 : r.host)
                  , u = (null === (d = N.gamePlayer) || void 0 === d ? void 0 : d.auth_id) == e;
                var p;
                if (!t) {
                    u || ((p = document.createElement("div")).classList.add("pfp-options"),
                    c.appendChild(p));
                    const t = (e, t, a) => {
                        var n = document.createElement("button");
                        n.innerHTML = e,
                        n.classList.add("close-button"),
                        n.classList.add("pfp-option");
                        var o = document.createElement("img");
                        o.src = t,
                        n.appendChild(o),
                        p.appendChild(n),
                        n.addEventListener("click", a, {
                            passive: !0
                        })
                    }
                    ;
                    N.gamePlayer && (u || t(L.getWord("report"), "/web/report.png", ( () => {
                        xe.createReportWindow(l),
                        null == c || c.remove()
                    }
                    )),
                    m && !u && (t(L.getWord("ban"), "/web/ban.png", ( () => {
                        var t;
                        null === (t = N.currentRoom) || void 0 === t || t.send("kick", {
                            id: e,
                            ban: !0
                        }),
                        null == c || c.remove()
                    }
                    )),
                    t(L.getWord("kick"), "/web/kick.png", ( () => {
                        var t;
                        null === (t = N.currentRoom) || void 0 === t || t.send("kick", {
                            id: e,
                            ban: !1
                        }),
                        null == c || c.remove()
                    }
                    )),
                    t(L.getWord("host_transfer"), "/web/host_icon.png", ( () => {
                        var t;
                        null === (t = N.currentRoom) || void 0 === t || t.send("host", {
                            id: e
                        }),
                        null == c || c.remove()
                    }
                    ))))
                }
                if (l.achivements && 0 != l.achivements.length) {
                    var h = document.createElement("div");
                    h.classList.add("pfp-section");
                    var v = document.createElement("div");
                    v.classList.add("pfp-achivements-title"),
                    v.textContent = L.getWord("completed_categories"),
                    h.appendChild(v);
                    var g = document.createElement("div");
                    g.classList.add("pfp-achivements"),
                    g.classList.add("row-flex"),
                    l.achivements.forEach((e => {
                        var t, a = document.createElement("div");
                        a.classList.add("pfp-achivements-item"),
                        g.appendChild(a),
                        a.textContent = e.count.toString();
                        var n = document.createElement("div");
                        n.classList.add("pfp-achivements-name"),
                        n.textContent = L.getWord(e.achievement),
                        a.appendChild(n);
                        var o = document.createElement("img");
                        o.classList.add("pfp-achivements-flag"),
                        o.src = "/flag/" + (null === (t = ce.getLanguages().find((t => t.locale === e.locale))) || void 0 === t ? void 0 : t.flag) + ".png",
                        a.appendChild(o);
                        var i = document.createElement("img");
                        i.classList.add("pfp-achivements-cat"),
                        i.src = "/categories/" + e.achievement + ".png",
                        a.appendChild(i)
                    }
                    )),
                    h.appendChild(g),
                    c.appendChild(h)
                }
                var y = document.createElement("div");
                y.classList.add("pfp-buttons");
                var b = document.createElement("button");
                b.classList.add("close-button"),
                b.classList.add("pfp-details"),
                b.textContent = "🔍",
                b.addEventListener("click", ( () => {
                    b.style.pointerEvents = "none",
                    b.textContent = "⌛";
                    var t = Se();
                    t.classList.add("full-loading-div"),
                    t.style.transform = "translate(-50%, -50%)",
                    t.style.zIndex = "9999",
                    c.appendChild(t),
                    N.currentRoom.send("req-details", e);
                    const a = N.currentRoom.onMessage("res-details", (e => {
                        a(),
                        null == t || t.remove();
                        var n = xe.createProfileDetails(e.words, e.bombs);
                        null == c || c.appendChild(n),
                        b.style.pointerEvents = "auto",
                        b.textContent = "🔍"
                    }
                    ))
                }
                )),
                y.appendChild(b);
                var f = document.createElement("div");
                f.classList.add("pfp-id"),
                f.textContent = e,
                f.addEventListener("click", ( () => {
                    navigator.clipboard.writeText(e).then(( () => {
                        R("Copied to clipboard")
                    }
                    )).catch((e => {}
                    ))
                }
                )),
                c.appendChild(y),
                c.appendChild(f)
            }
            ))));
            setTimeout(( () => {
                document.body.contains(n) && (n.remove(),
                z("Failed to load profile. Please try again."))
            }
            ), 5e3)
        }
        ))
    }
    static createProfileDetails(e, t) {
        var a;
        if (0 === e.length) {
            (n = document.createElement("div")).classList.add("profile-details"),
            n.textContent = "No words discovered yet"
        } else {
            var n;
            (n = document.createElement("div")).classList.add("profile-details");
            var o = document.createElement("button");
            o.classList.add("pfp-details"),
            o.classList.add("close-button"),
            o.classList.add("pfp-details-close"),
            o.textContent = "▼",
            o.addEventListener("click", ( () => {
                n.remove()
            }
            )),
            n.appendChild(o);
            for (const t of e) {
                var i = document.createElement("div");
                i.classList.add("profile-detail");
                var s = document.createElement("img");
                s.classList.add("dt-locale-img"),
                s.src = "/flag/" + (null === (a = ce.getLanguages().find((e => e.locale === t.locale))) || void 0 === a ? void 0 : a.flag) + ".png",
                i.appendChild(s);
                var r = document.createElement("div");
                r.classList.add("dt-word"),
                r.textContent = t.word,
                i.appendChild(r);
                var d = document.createElement("div");
                d.classList.add("dt-claims"),
                d.textContent = t.count + " " + L.getWord("players"),
                i.appendChild(d),
                n.appendChild(i),
                i.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                    this.showClaimerWindow(t.word, t.locale)
                }
                ))))
            }
        }
        return n
    }
    static createMarket(e, t) {
        return ke(this, void 0, void 0, (function*() {
            const a = Se();
            t.appendChild(a);
            const n = document.createElement("div");
            n.id = "shop-dom",
            n.classList.add("shop-container"),
            n.appendChild(xe.createSupportUsContent()),
            t.appendChild(n),
            n.prepend(xe.createCodeReedemContent());
            const o = t.querySelector(".redeem");
            if (o && o.addEventListener("click", ( () => {
                var a;
                if (null == t)
                    return;
                const n = t.querySelector(".code-input-container");
                if (!n)
                    return;
                const o = n.querySelector("input");
                if (o && o.value.trim()) {
                    if ((null === (a = N.player) || void 0 === a ? void 0 : a.exp) < ce.getExpForLevel(10))
                        return void j(L.getWord("not_enough_exp"));
                    e.send("reedem", {
                        code: o.value
                    }),
                    o.value = ""
                }
            }
            )),
            !u) {
                var s = document.createElement("div");
                return s.innerText = "Shop is only available on Discord. Open the game in Discord to access the shop.",
                s.style.textAlign = "center",
                s.style.marginTop = "10px",
                n.prepend(s),
                void a.remove()
            }
            var r = yield D();
            if (a.remove(),
            !document.getElementById("shop-dom"))
                return;
            let d = [];
            const l = [50, 125, 250, 750];
            let c = 0;
            var m = ["1341988850804985918", "1341990840368762961", "1341995678447964180", "1341990996820492329", "1341991094396653619"];
            for (const e of r.skus) {
                if (3 !== e.type || 4 != e.flags)
                    continue;
                if (m.includes(e.id))
                    continue;
                const t = i.formatPrice(e.price)
                  , a = 3 === c
                  , n = 1 === c;
                d.push({
                    imgSrc: `web/gems${c + 1}.png`,
                    gems: l[c],
                    price: t,
                    bestOffer: a,
                    popular: n,
                    sku: e
                }),
                c++
            }
            d.forEach((e => {
                const t = document.createElement("div");
                t.classList.add("shop-pack");
                const a = document.createElement("img");
                a.src = e.imgSrc;
                const o = document.createElement("h2");
                o.textContent = `${e.gems}💎`;
                const i = document.createElement("button");
                if (i.textContent = e.price,
                e.bestOffer) {
                    t.classList.add("bestoffer");
                    const e = document.createElement("div");
                    e.classList.add("shop-pack-seller", "bestoffer"),
                    e.textContent = L.getWord("best_offer"),
                    t.appendChild(e)
                }
                if (e.popular) {
                    t.classList.add("special");
                    const e = document.createElement("div");
                    e.classList.add("shop-pack-seller", "special"),
                    e.textContent = L.getWord("popular"),
                    t.appendChild(e),
                    i.classList.add("special")
                }
                i.classList.add("close-button"),
                t.appendChild(a),
                t.appendChild(o),
                t.appendChild(i),
                i.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
                    yield xe.buySku(e.sku)
                }
                )))),
                n.prepend(t)
            }
            ))
        }
        ))
    }
    static createCodeReedemContent() {
        var e = document.createElement("div");
        e.classList.add("code-input-container");
        var t = document.createElement("div");
        t.classList.add("shop-code");
        var a = document.createElement("div");
        a.classList.add("shop-code-text"),
        a.textContent = L.getWord("redeem_code"),
        e.appendChild(a);
        var n = document.createElement("input");
        n.placeholder = L.getWord("enter_code"),
        t.appendChild(n);
        var o = document.createElement("button");
        return o.classList.add("close-button"),
        o.classList.add("redeem"),
        o.textContent = L.getWord("redeem"),
        t.appendChild(o),
        e.appendChild(t),
        e
    }
    static createSupportUsContent() {
        var e = document.createElement("div");
        e.classList.add("code-input-container");
        var t = document.createElement("div");
        return t.classList.add("shop-code-text"),
        t.textContent = L.getWord("support_us"),
        e.appendChild(t),
        e
    }
    static buySku(e) {
        return ke(this, void 0, void 0, (function*() {
            if (F()) {
                var t = new Q(( () => {}
                ),L.getWord("error"),L.getWord("shop_not_supported_on_mobile"));
                yield t.open(null)
            } else
                yield p.commands.startPurchase({
                    sku_id: e.id
                })
        }
        ))
    }
    static updateShopButtonContainer(e, t) {
        if (e.innerHTML = "",
        t.unlocked) {
            let t = document.createElement("button");
            t.classList.add("close-button", "owned"),
            e.appendChild(t),
            t.textContent = L.getWord("owned")
        } else {
            if (t.price > 0) {
                let a = document.createElement("button");
                a.classList.add("close-button", "buycoin"),
                a.textContent = (new Intl.NumberFormat).format(t.price),
                e.appendChild(a);
                let n = document.createElement("img");
                n.src = "/web/coin.png",
                n.alt = "coin",
                a.appendChild(n)
            }
            if (t.diamondPrice > 0) {
                let a = document.createElement("button");
                a.classList.add("close-button", "buydiamond"),
                a.textContent = t.diamondPrice.toString(),
                e.appendChild(a);
                let n = document.createElement("img");
                n.src = "/web/diamond.png",
                n.alt = "diamond",
                a.appendChild(n)
            }
        }
    }
    static createKeyWindow(e, t) {
        t.innerHTML = "";
        var a = document.createElement("div");
        a.classList.add("key-info"),
        a.textContent = L.getWord("key_info"),
        t.appendChild(a);
        var n = document.createElement("div");
        n.classList.add("key-container"),
        ge.forEach((t => {
            var a = document.createElement("div");
            a.classList.add("key-item");
            var o = document.createElement("img");
            o.src = "/web/key.png",
            o.classList.add("key-image"),
            a.appendChild(o);
            var i = document.createElement("span");
            i.textContent = "x" + t.amount.toString(),
            i.classList.add("key-count"),
            a.appendChild(i);
            var s = document.createElement("div");
            s.classList.add("key-price-container");
            var d = document.createElement("img");
            d.src = "/web/diamond.png",
            d.classList.add("key-price-image");
            var l = document.createElement("span");
            l.textContent = t.price.toString(),
            l.classList.add("key-price"),
            s.appendChild(d),
            s.appendChild(l),
            a.appendChild(s),
            s.addEventListener("click", ( () => {
                n.querySelectorAll(".key-price-container").forEach((e => {
                    var t = e;
                    t.style.pointerEvents = "none",
                    setTimeout(( () => {
                        t && t.style && (t.style.pointerEvents = "auto")
                    }
                    ), 1e3)
                }
                )),
                e.send("buy-key", {
                    id: t.id
                });
                var o = e.onMessage("profile", ( () => ke(this, void 0, void 0, (function*() {
                    o();
                    var e = [];
                    for (let o = 0; o < t.amount; o++) {
                        var n = 1 + .1 * o;
                        yield r.play("key", {
                            volume: .2 * V.effects,
                            speed: n
                        }),
                        yield new Promise((e => setTimeout(e, 100)));
                        var i = document.createElement("img");
                        e.push(i),
                        i.src = "/web/key.png",
                        i.classList.add("key-image"),
                        document.body.appendChild(i);
                        var s = ye(a);
                        i.style.position = "absolute",
                        i.style.top = s.top + "px",
                        i.style.left = s.width / 2 + s.left + "px",
                        i.style.zIndex = "1000",
                        i.style.transition = "all 1s",
                        i.style.width = "40px",
                        i.style.height = "40px",
                        i.classList.add("key-image-fall");
                        var d = document.getElementById("lobby-property-key");
                        d || (d = document.getElementById("keyText"));
                        var l = ye(d);
                        l && (i.style.top = l.top + "px",
                        i.style.left = l.left + l.width / 2 + "px",
                        i.style.width = "20px",
                        i.style.height = "20px",
                        i.style.opacity = "0")
                    }
                    yield new Promise((e => setTimeout(e, 1e3))),
                    e.forEach(( (e, t) => {
                        e.remove()
                    }
                    ))
                }
                ))))
                  , i = e.onMessage("popup", (e => {
                    o(),
                    i()
                }
                ))
            }
            )),
            n.appendChild(a)
        }
        )),
        t.appendChild(n)
    }
    static createFrames(e, t) {
        t.innerHTML = "";
        const a = document.createElement("div");
        a.classList.add("shop-container");
        var n = ce.getFrames(N.player.frames);
        n.sort(( (e, t) => e.price - t.price)),
        n.forEach((e => {
            const t = document.createElement("div");
            t.classList.add("item-pack"),
            t.id = "frame-" + e.id;
            const n = document.createElement("img");
            n.classList.add("frame-image-cs"),
            n.src = "/frame_ui/" + e.id + ".png",
            t.appendChild(n);
            var o = document.createElement("div");
            o.classList.add("shop-button-container"),
            this.updateShopButtonContainer(o, e),
            t.appendChild(o),
            a.appendChild(t)
        }
        )),
        t.appendChild(a),
        null == a || a.querySelectorAll(".close-button").forEach((t => {
            t.addEventListener("click", ( () => {
                var a, n;
                const o = null === (a = t.parentElement) || void 0 === a ? void 0 : a.parentElement;
                if (o.classList.contains("item-pack")) {
                    const a = null === (n = o.querySelector("img").src.split("/").pop()) || void 0 === n ? void 0 : n.split(".")[0];
                    null != a && (t.classList.contains("buycoin") ? this.onBuyFrame(e, parseInt(a), "coin") : t.classList.contains("buydiamond") && this.onBuyFrame(e, parseInt(a), "diamond"))
                }
            }
            ))
        }
        ))
    }
    static createBombs(e, t) {
        t.innerHTML = "";
        const a = document.createElement("div");
        if (a.classList.add("shop-container"),
        null != N.player) {
            var n = document.createElement("div");
            n.classList.add("bomb-boxes"),
            ve.forEach((o => {
                const i = document.createElement("div");
                i.classList.add("bomb-box"),
                i.id = "bomb-" + o.theme;
                const s = document.createElement("img");
                s.classList.add("bomb-image"),
                s.src = "/boxs/" + o.theme + ".png",
                i.appendChild(s);
                const r = document.createElement("div");
                r.classList.add("bomb-name"),
                r.textContent = "",
                i.appendChild(r),
                i.addEventListener("click", ( () => {
                    a.innerHTML = "";
                    var n = document.createElement("button");
                    n.classList.add("sh-back");
                    var i = document.createElement("img");
                    i.src = "/web/back.png",
                    i.alt = "back",
                    n.appendChild(i),
                    a.appendChild(n),
                    n.addEventListener("click", ( () => {
                        a.innerHTML = "",
                        this.createBombs(e, t)
                    }
                    ));
                    const s = document.createElement("img");
                    s.src = "/boxs/" + o.theme + ".png",
                    s.classList.add("bomb-box-title"),
                    a.appendChild(s);
                    const r = document.createElement("div");
                    r.classList.add("sh-bombs");
                    var d = document.createElement("button");
                    d.classList.add("sh-unlock"),
                    a.appendChild(d);
                    var l = document.createElement("span");
                    l.textContent = o.key.toString(),
                    l.classList.add("sh-key-count");
                    var c = document.createElement("img");
                    c.src = "/web/key.png",
                    c.classList.add("sh-key"),
                    l.appendChild(c),
                    d.addEventListener("click", ( () => {
                        var n;
                        null === (n = N.currentRoom) || void 0 === n || n.send("unlock-chest", {
                            box: o.theme
                        }),
                        a.innerHTML = "",
                        this.createBombs(e, t)
                    }
                    )),
                    d.appendChild(l);
                    var m = document.createElement("div");
                    m.classList.add("sh-info"),
                    m.textContent = "This chest contains these bombs",
                    a.appendChild(m),
                    o.bombs.forEach((e => {
                        var t = document.createElement("img");
                        t.src = "/bombs/" + e + ".png",
                        t.classList.add("sh-bomb"),
                        r.appendChild(t),
                        ce.getOwnedBombs().find((t => t == e)) && t.classList.add("sh-bomb-owned")
                    }
                    )),
                    a.appendChild(r)
                }
                )),
                n.appendChild(i)
            }
            )),
            a.appendChild(n),
            t.appendChild(a)
        }
    }
    static createBackground(e, t) {
        const a = document.createElement("div");
        a.classList.add("shop-container");
        var n = document.createElement("div");
        if (n.classList.add("shop-info"),
        n.textContent = "Share your art with us on Discord if you'd like to see it featured in WordBomb!",
        t.appendChild(n),
        null != N.player) {
            var o = ce.getBackgrounds(N.player.backgrounds);
            (o = o.sort(( (e, t) => e.price - t.price))).forEach((e => {
                if (98 == e.id)
                    return;
                const n = document.createElement("div");
                n.classList.add("item-pack"),
                n.id = "background-" + e.id;
                var o = document.createElement("div");
                o.classList.add("item-credit"),
                o.textContent = e.credits,
                n.appendChild(o),
                "AI" != e.credits && "HUMAN" != e.credits && o.classList.add("artist"),
                o.addEventListener("click", ( () => {
                    if (!u && "revere1992" == e.credits) {
                        window.open("https://www.instagram.com/revere1992", "_blank")
                    }
                }
                ));
                const i = document.createElement("img");
                i.classList.add("background-image"),
                i.src = "backgrounds_small/" + e.id + ".jpg";
                var s = document.createElement("div");
                if (s.classList.add("shop-button-container"),
                this.updateShopButtonContainer(s, e),
                n.appendChild(i),
                e.tiled) {
                    const e = document.createElement("div");
                    e.classList.add("tiled"),
                    e.textContent = "🔥",
                    n.appendChild(e)
                }
                n.appendChild(s),
                a.appendChild(n),
                t && t.appendChild(a)
            }
            )),
            null == a || a.querySelectorAll(".close-button").forEach((t => {
                t.addEventListener("click", ( () => {
                    var a, n;
                    const o = null === (a = t.parentElement) || void 0 === a ? void 0 : a.parentElement;
                    if (o.classList.contains("item-pack")) {
                        const a = null === (n = o.querySelector("img").src.split("/").pop()) || void 0 === n ? void 0 : n.split(".")[0];
                        null != a && (t.classList.contains("buycoin") ? this.onBuyBackground(e, parseInt(a), "coin") : t.classList.contains("buydiamond") && this.onBuyBackground(e, parseInt(a), "diamond"))
                    }
                }
                ))
            }
            ))
        }
    }
    static onBuyBackground(e, t, a) {
        e.send("buy-background", {
            id: t,
            buyMethod: a
        })
    }
    static onBuyFrame(e, t, a) {
        e.send("buy-frame", {
            id: t,
            buyMethod: a
        })
    }
    static getProfileDOM(e) {
        var t, a, n;
        const o = document.createElement("div");
        o.id = "lobby-content-profile",
        o.className = "lobby-content";
        const i = document.createElement("div");
        i.className = "profile-level",
        i.textContent = `${ce.getLevelFromExp(null == e ? void 0 : e.exp)}Lv`,
        o.appendChild(i);
        const s = document.createElement("div");
        s.className = "lobby-profile",
        o.appendChild(s);
        const r = document.createElement("img");
        r.id = "avatar",
        r.className = "lobby-list-avatar";
        $(H(null == e ? void 0 : e.id, null == e ? void 0 : e.avatar, 128), r),
        s.appendChild(r),
        r.addEventListener("click", ( () => ke(this, void 0, void 0, (function*() {
            yield xe.showPlayerProfile(null == e ? void 0 : e.id)
        }
        ))));
        const d = document.createElement("span");
        d.className = "lobby-player-property-name";
        const l = document.createElement("span");
        l.id = "display-name",
        l.textContent = null == e ? void 0 : e.displayName;
        const c = document.createElement("span");
        c.id = "longest-word",
        c.className = "property",
        c.textContent = null == e ? void 0 : e.longestWord,
        d.appendChild(l),
        d.appendChild(c),
        s.appendChild(d);
        const m = document.createElement("span");
        m.className = "profile-bomb";
        const u = document.createElement("img");
        u.src = `bombs/${null == e ? void 0 : e.bomb}.png`,
        u.alt = "bomb",
        u.className = "bomb",
        m.appendChild(u),
        s.appendChild(m);
        const p = document.createElement("div");
        p.className = "lobby-properties",
        o.appendChild(p);
        const h = document.createElement("span");
        h.id = "lobby-property-coin",
        h.className = "lobby-player-property";
        const v = document.createElement("img");
        v.src = "/web/coin.png";
        const g = document.createElement("span");
        g.id = "coin",
        g.textContent = ce.formatNumber(null == e ? void 0 : e.score),
        h.appendChild(v),
        h.appendChild(g),
        p.appendChild(h);
        const y = document.createElement("span");
        y.id = "lobby-property-win",
        y.className = "lobby-player-property";
        const b = document.createElement("img");
        b.src = "/web/crown.png";
        const f = document.createElement("span");
        f.id = "win",
        f.textContent = null === (t = null == e ? void 0 : e.win) || void 0 === t ? void 0 : t.toString(),
        y.appendChild(b),
        y.appendChild(f),
        p.appendChild(y);
        const w = document.createElement("span");
        w.id = "lobby-property-streak",
        w.className = "lobby-player-property";
        const _ = document.createElement("span");
        if (_.id = "rank",
        _.textContent = "🔥" + (null === (a = null == e ? void 0 : e.longestStreak) || void 0 === a ? void 0 : a.toString()),
        w.appendChild(_),
        p.appendChild(w),
        null != (null == e ? void 0 : e.diamond)) {
            const t = document.createElement("span");
            t.id = "lobby-property-diamond",
            t.className = "lobby-player-property";
            const a = document.createElement("img");
            a.src = "/web/diamond.png";
            const n = document.createElement("span");
            n.id = "diamond",
            n.textContent = ce.formatNumber(null == e ? void 0 : e.diamond),
            t.appendChild(a),
            t.appendChild(n),
            p.appendChild(t)
        }
        if (null != (null == e ? void 0 : e.key)) {
            const t = document.createElement("span");
            t.id = "lobby-property-key",
            t.className = "lobby-player-property";
            const a = document.createElement("img");
            a.src = "/web/key.png";
            const o = document.createElement("span");
            o.id = "key",
            o.textContent = null === (n = null == e ? void 0 : e.key) || void 0 === n ? void 0 : n.toString(),
            t.appendChild(a),
            t.appendChild(o),
            p.appendChild(t)
        }
        return o
    }
    static open(e) {
        var t, a;
        null === (t = document.getElementById("player-info")) || void 0 === t || t.remove();
        const n = document.createElement("div");
        this.addDragging(n),
        n.id = "player-info",
        n.style.display = "flex",
        n.style.flexDirection = "column",
        n.classList.add("floating-window", "fw-profile"),
        n.style.width = "100%",
        n.appendChild(this.getProfileDOM(e)),
        document.body.appendChild(n);
        var o = document.createElement("button");
        o.classList.add("close-button"),
        o.classList.add("pfp-option"),
        o.innerHTML = L.getWord("match_history");
        var i = document.createElement("img");
        i.src = "/web/history.png",
        o.appendChild(i),
        null == n || n.appendChild(o),
        o.addEventListener("click", ( () => {
            xe.openHistoryScreen(e.id)
        }
        ));
        const s = document.createElement("div");
        s.classList.add("player-background"),
        s.style.backgroundImage = `url(backgrounds_small/${e.background}.jpg)`,
        s.style.zIndex = "-1",
        n.appendChild(s);
        const r = xe.createTopRightCornerCloseButton();
        r.addEventListener("click", ( () => {
            n.remove()
        }
        )),
        n.appendChild(r);
        const d = {
            1: {
                classes: ["discord-member"],
                text: "Discord Member",
                border: "discord-border"
            },
            2: {
                classes: ["contributer"],
                text: "Contributed to WordBomb",
                border: "contributer-border"
            },
            3: {
                classes: [],
                text: "Verified as legit by the moderators.",
                border: "trusted-border"
            },
            4: {
                classes: ["language-moderator"],
                text: "Language Moderator",
                border: "lang-mod-border"
            },
            5: {
                classes: ["game-moderator"],
                text: "Game Moderator",
                border: "game-mod-border"
            },
            6: {
                classes: ["discord-booster"],
                text: "Server Booster",
                border: "boster-border"
            },
            7: {
                classes: ["supporter"],
                text: "Supporter",
                border: "supporter-border"
            },
            8: {
                classes: ["potato"],
                text: "Potato 🥔",
                border: "potato-border"
            },
            10: {
                classes: ["game-developer"],
                text: "Developer",
                border: "developer-border"
            }
        }[e.type];
        if (d) {
            const e = document.createElement("div");
            e.classList.add("vf-parent");
            const t = document.createElement("span");
            t.classList.add("verified", ...d.classes),
            t.textContent = d.text;
            var l = document.createElement("img");
            l.src = "/bomb.png",
            l.classList.add("verified-icon"),
            t.appendChild(l),
            e.appendChild(t),
            n.appendChild(e),
            n.classList.add(d.border)
        }
        if (n.querySelector("#avatar").style.pointerEvents = "none",
        e.id == (null === (a = N.player) || void 0 === a ? void 0 : a.id) && e.id.length > 10 && At.room) {
            const e = ce.getOwnedFrames();
            if (e.length > 0) {
                e.push(-1),
                e.sort(( (e, t) => e - t));
                const t = document.createElement("div");
                t.classList.add("frame-container"),
                e.forEach((e => {
                    const a = document.createElement("img");
                    a.src = `/frame_ui/${-1 == e ? "none" : e}.png`,
                    a.classList.add("frame-image"),
                    e == N.player.frame && a.classList.add("selected"),
                    a.addEventListener("click", ( () => {
                        var n;
                        t.querySelectorAll(".frame-image").forEach((e => {
                            e.classList.remove("selected")
                        }
                        )),
                        a.classList.add("selected"),
                        null === (n = N.currentRoom) || void 0 === n || n.send("set-frame", {
                            frame: e
                        })
                    }
                    )),
                    t.appendChild(a)
                }
                )),
                n.appendChild(t)
            }
            const t = document.createElement("img");
            t.src = "/web/edit.png",
            t.classList.add("edit-pfp"),
            t.alt = "edit",
            n.appendChild(t),
            t.addEventListener("click", ( () => {
                n.remove(),
                this.showProfileEdit()
            }
            ))
        }
        return n
    }
    static showProfileEdit() {
        var e, t, a = xe.createFloatingWindow();
        a.classList.add("profile-edit-window");
        var n = xe.createTopRightCornerCloseButton();
        a.appendChild(n),
        n.addEventListener("click", ( () => {
            a.remove()
        }
        )),
        this.addDragging(a);
        var o = document.createElement("div");
        o.textContent = L.getWord("display_name"),
        o.classList.add("pf-label"),
        a.appendChild(o);
        var i = document.createElement("input");
        i.placeholder = L.getWord("display_name"),
        i.value = null === (e = N.player) || void 0 === e ? void 0 : e.displayName,
        i.classList.add("wb-input"),
        a.appendChild(i);
        var s = document.createElement("div");
        s.textContent = L.getWord("status_word"),
        s.classList.add("pf-label"),
        a.appendChild(s);
        var r = document.createElement("div");
        r.textContent = L.getWord("status_word_desct"),
        a.appendChild(r),
        r.classList.add("pf-desc");
        var d = document.createElement("input");
        d.placeholder = L.getWord("status_word"),
        d.classList.add("wb-input"),
        d.value = null === (t = N.player) || void 0 === t ? void 0 : t.longestWord,
        a.appendChild(d);
        var l = document.createElement("button");
        l.classList.add("close-button"),
        l.classList.add("wb-button");
        var c = document.createElement("div");
        c.classList.add("diamond-cost-wrapper");
        var m = document.createElement("img");
        m.src = "/web/coin.png",
        m.classList.add("diamond-cost");
        var u = document.createElement("span");
        u.textContent = "5000",
        u.classList.add("diamond-cost-text"),
        c.appendChild(m),
        c.appendChild(u),
        l.appendChild(c);
        var p = document.createTextNode(L.getWord("save"));
        l.appendChild(p),
        l.addEventListener("click", ( () => {
            var e;
            null === (e = N.currentRoom) || void 0 === e || e.send("update-profile", {
                displayName: i.value,
                longestWord: d.value.toLocaleUpperCase()
            }),
            a.remove()
        }
        )),
        a.appendChild(l),
        document.body.appendChild(a)
    }
    static addDragging(e) {
        let t = 0
          , a = 0
          , n = !1;
        const o = () => V.gameScale || 1
          , i = (t, a) => {
            const n = ye(e)
              , i = o()
              , s = n.left * i
              , r = n.top * i
              , d = n.right * i
              , l = n.bottom * i;
            return t <= s + 16 || t >= d - 16 || a <= r + 16 || a >= l - 16
        }
        ;
        e.addEventListener("mousedown", (s => {
            if (!i(s.clientX, s.clientY))
                return;
            n = !0;
            const r = o();
            t = (s.clientX - e.offsetLeft * r) / r,
            a = (s.clientY - e.offsetTop * r) / r,
            e.style.cursor = "grabbing"
        }
        )),
        document.addEventListener("mousemove", (i => {
            if (!n)
                return;
            const s = o();
            e.style.left = i.clientX / s - t + "px",
            e.style.top = i.clientY / s - a + "px"
        }
        )),
        document.addEventListener("mouseup", (t => {
            n = !1,
            e.style.cursor = i(t.clientX, t.clientY) ? "grab" : "default"
        }
        )),
        e.addEventListener("touchstart", (s => {
            const r = s.touches[0];
            if (!i(r.clientX, r.clientY))
                return;
            n = !0;
            const d = o();
            t = (r.clientX - e.offsetLeft * d) / d,
            a = (r.clientY - e.offsetTop * d) / d
        }
        ), {
            passive: !0
        }),
        document.addEventListener("touchmove", (i => {
            if (!n)
                return;
            const s = i.touches[0]
              , r = o();
            e.style.left = s.clientX / r - t + "px",
            e.style.top = s.clientY / r - a + "px"
        }
        )),
        document.addEventListener("touchend", ( () => {
            n = !1
        }
        )),
        e.addEventListener("mousemove", (t => {
            e.style.cursor = i(t.clientX, t.clientY) ? "grab" : "default"
        }
        ))
    }
    static createReportWindow(e) {
        var t = xe.createFloatingWindow("70%");
        t.style.alignItems = "center",
        t.classList.add("report-window");
        var a = xe.createTopRightCornerCloseButton();
        t.appendChild(a),
        a.addEventListener("click", ( () => {
            t.remove()
        }
        ));
        var n = document.createElement("img");
        n.src = H(e.id, e.avatar, 256),
        n.classList.add("report-avatar"),
        t.appendChild(n);
        var o = document.createElement("div");
        o.innerText = e.username,
        o.classList.add("report-name"),
        t.appendChild(o);
        var i = document.createElement("div");
        i.innerHTML = "Chat history",
        i.classList.add("report-chat-history"),
        t.appendChild(i);
        var s = document.createElement("textarea");
        s.classList.add("wb-rb-textarea"),
        s.readOnly = !0;
        var r = [];
        N.chats.forEach((t => {
            var a;
            t.id != e.id && t.id != (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.auth_id) || r.push(`${t.displayName}:${t.message}`)
        }
        )),
        r.reverse(),
        s.value = r.join("\n"),
        t.appendChild(s),
        t.appendChild(document.createElement("br"));
        var d = document.createElement("textarea");
        d.classList.add("wb-rb-textarea"),
        d.placeholder = "Optional notes & reason",
        t.appendChild(d);
        var l = document.createElement("button");
        l.innerHTML = "Report",
        l.classList.add("close-button"),
        l.onclick = () => {
            var a, n = [], o = [];
            N.chats.forEach((t => {
                var a;
                t.id == (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.auth_id) && n.push(`${t.id}:${t.message}`),
                t.id == e.id && o.push(`${t.id}:${t.message}`)
            }
            )),
            n = n.slice(-6);
            var i = [...(o = o.slice(-6)).reverse(), ...n.reverse()].join("\n");
            null === (a = N.currentRoom) || void 0 === a || a.send("report", {
                id: e.id,
                reason: d.value,
                chat: i
            }),
            z("Thank you for your report. We will review it as soon as possible.", 5e3),
            t.remove()
        }
        ,
        t.appendChild(l),
        document.body.appendChild(t)
    }
    static createSettingPanel() {
        var e, t, a, n, o, i, s, r = xe.createFloatingWindow();
        r.id = "setting-panel",
        r.style.width = "85vw",
        r.style.height = "auto",
        r.style.paddingBottom = "20px",
        r.style.backgroundColor = "rgba(0,0,0,0.8)",
        r.style.alignItems = "center";
        var d = document.createElement("h2");
        d.id = "settings-title",
        r.appendChild(d),
        d.textContent = L.getWord("settings");
        var l = xe.createTopRightCornerCloseButton();
        r.appendChild(l),
        l.addEventListener("click", ( () => {
            null == r || r.remove(),
            r = null
        }
        ));
        var c = document.createElement("div")
          , m = document.createElement("label");
        c.style.width = "80%",
        m.textContent = L.getWord("master_volume"),
        c.appendChild(m);
        var h = document.createElement("input");
        h.type = "range",
        h.id = "masterVolume",
        h.min = "0",
        h.max = "100",
        h.value = "100",
        c.appendChild(h),
        r.appendChild(c);
        var v = document.createElement("div")
          , g = document.createElement("label");
        v.style.width = "80%",
        g.textContent = L.getWord("bomb_ticking_volume"),
        v.appendChild(g);
        var y = document.createElement("input");
        y.type = "range",
        y.id = "bombTickingVolume",
        y.min = "0",
        y.max = "100",
        y.value = "100",
        v.appendChild(y),
        r.appendChild(v);
        var b = document.createElement("div");
        b.style.width = "80%",
        b.style.marginBottom = "5px";
        var f = document.createElement("label");
        f.textContent = L.getWord("music_volume"),
        b.appendChild(f);
        var w = document.createElement("input");
        w.type = "range",
        w.id = "musicVolume",
        w.min = "0",
        w.max = "100",
        w.value = "100",
        b.appendChild(w),
        r.appendChild(b);
        var _ = document.createElement("div");
        _.classList.add("space-setting");
        var C = document.createElement("input");
        C.type = "checkbox",
        C.checked = V.autoSpaceHypen || !1,
        C.classList.add("space-hypen-checkbox");
        var E = document.createElement("label");
        if (E.textContent = L.getWord("space_hypen"),
        _.appendChild(C),
        _.appendChild(E),
        C.addEventListener("change", (e => {
            const t = e.target;
            V.autoSpaceHypen = t.checked,
            V.save()
        }
        )),
        r.appendChild(_),
        !F()) {
            var k = document.createElement("div");
            k.classList.add("space-setting"),
            (P = document.createElement("input")).type = "checkbox",
            P.checked = V.ctrlADeletesAll || !1,
            P.classList.add("space-hypen-checkbox"),
            (M = document.createElement("label")).textContent = L.getWord("ctrl_a_deletes"),
            k.appendChild(P),
            k.appendChild(M),
            P.addEventListener("change", (e => {
                const t = e.target;
                V.ctrlADeletesAll = t.checked,
                V.save()
            }
            )),
            r.appendChild(k)
        }
        if (F()) {
            var S = document.createElement("div");
            S.classList.add("space-setting");
            var x = document.createElement("input");
            x.type = "checkbox",
            x.checked = V.neverCloseKeyboardOnMobile || !1,
            x.classList.add("space-hypen-checkbox");
            var T = document.createElement("label");
            T.textContent = L.getWord("never_close_keyboard"),
            S.appendChild(x),
            S.appendChild(T),
            x.addEventListener("change", (e => {
                const t = e.target;
                V.neverCloseKeyboardOnMobile = t.checked,
                V.save()
            }
            )),
            r.appendChild(S)
        }
        var P, M, I = document.createElement("div");
        I.classList.add("space-setting"),
        (P = document.createElement("input")).type = "checkbox",
        P.checked = V.disableRedFlash || !1,
        P.classList.add("space-hypen-checkbox"),
        (M = document.createElement("label")).textContent = L.getWord("disable_red_flash"),
        I.appendChild(P),
        I.appendChild(M),
        P.addEventListener("change", (e => {
            const t = e.target;
            V.disableRedFlash = t.checked,
            V.save()
        }
        )),
        r.appendChild(I),
        (R = document.createElement("span")).classList.add("divider"),
        r.appendChild(R);
        var A = document.createElement("div")
          , W = document.createElement("label");
        A.style.width = "80%",
        W.textContent = L.getWord("zoom"),
        A.appendChild(W);
        var B = document.createElement("input");
        B.type = "range",
        B.id = "gameScale",
        B.min = "50";
        var D = 150;
        F() && (D = 120),
        B.max = D.toString(),
        B.value = "100",
        A.appendChild(B),
        r.appendChild(A),
        B.addEventListener("input", (e => {
            try {
                const t = e.target
                  , a = parseInt(t.value) / 100;
                document.body.style.zoom = `${a}`,
                V.gameScale = a;
                const n = new Event("resize");
                window.dispatchEvent(n)
            } catch (t) {}
        }
        )),
        B.value = (100 * (V.gameScale || 1)).toString();
        var R, j = document.createElement("button");
        j.textContent = L.getWord("discord"),
        j.id = "joinDiscord",
        j.classList.add("dcjeffect"),
        j.style.width = "80%",
        j.style.background = "#5965f2",
        j.classList.add("close-button"),
        (R = document.createElement("span")).classList.add("divider"),
        r.appendChild(R);
        var z = document.createElement("button");
        z.textContent = L.getWord("leave_room"),
        z.id = "leaveButton",
        z.style.marginTop = "20px",
        z.style.width = "80%",
        z.classList.add("close-button"),
        r.appendChild(z);
        var H = document.createElement("span");
        return H.style.width = "80%",
        H.style.textAlign = "center",
        H.style.padding = "10px",
        H.textContent = L.getWord("join_discord"),
        r.appendChild(H),
        r.appendChild(j),
        h.addEventListener("input", (e => {
            const t = e.target
              , a = parseFloat(t.value);
            V.effects = a / 100,
            V.EventBus.emit("masterVolume", V.effects)
        }
        )),
        y.addEventListener("input", (e => {
            const t = e.target
              , a = parseFloat(t.value);
            V.bombTickingVolume = a / 100,
            V.EventBus.emit("bombTickingVolume", V.bombTickingVolume)
        }
        )),
        w.addEventListener("input", (e => {
            const t = e.target
              , a = parseFloat(t.value);
            V.musicVolume = a / 100,
            V.EventBus.emit("musicVolume", V.musicVolume)
        }
        )),
        h.value = (100 * V.effects).toString(),
        y.value = (100 * V.bombTickingVolume).toString(),
        w.value = (100 * V.musicVolume).toString(),
        N.round <= 16 && (null === (e = N.currentRoom) || void 0 === e ? void 0 : e.state.started) && (null === (t = N.currentRoom) || void 0 === t ? void 0 : t.state.host) == (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.session_id) || (null === (o = null === (n = At.room) || void 0 === n ? void 0 : n.state) || void 0 === o ? void 0 : o.started) && N.playingSolo && (null === (i = N.currentRoom) || void 0 === i ? void 0 : i.state.host) == (null === (s = N.gamePlayer) || void 0 === s ? void 0 : s.session_id) ? z.textContent = L.getWord("end_game") : z.textContent = L.getWord("leave_room"),
        z.addEventListener("click", ( () => {
            var e, t, a, n, o, i, s;
            (null === (e = N.currentRoom) || void 0 === e ? void 0 : e.state.started) ? (null === (a = N.currentRoom) || void 0 === a ? void 0 : a.state.host) == (null === (n = N.gamePlayer) || void 0 === n ? void 0 : n.session_id) ? N.round <= 16 || N.playingSolo ? (null === (o = N.currentRoom) || void 0 === o || o.send("end"),
            l.click()) : null === (i = N.currentRoom) || void 0 === i || i.leave(!0) : null === (s = N.currentRoom) || void 0 === s || s.leave(!0) : null === (t = N.currentRoom) || void 0 === t || t.leave(!0)
        }
        )),
        j.addEventListener("click", ( () => {
            u ? p.commands.openExternalLink({
                url: "https://discord.gg/mBu9j75zjS"
            }) : window.open("https://discord.gg/mBu9j75zjS", "_blank")
        }
        )),
        r
    }
    static showClaimerWindow(e, t) {
        return ke(this, void 0, void 0, (function*() {
            var a = {
                word: e,
                locale: t
            }
              , n = document.getElementById("claimers-window");
            n && n.remove();
            const o = xe.createFloatingWindow();
            o.classList.add("claimers-window"),
            o.id = "claimers-window",
            document.body.appendChild(o);
            var i = Se();
            o.appendChild(i);
            const s = xe.createTopRightCornerCloseButton();
            s.addEventListener("click", ( () => {
                o.remove()
            }
            )),
            o.appendChild(s);
            try {
                const e = yield v.http.post("/claimers", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        word: a.word,
                        locale: a.locale
                    })
                });
                if (i.remove(),
                e.data && Array.isArray(e.data)) {
                    const t = e.data
                      , n = document.createElement("div");
                    n.classList.add("claimers-title"),
                    n.textContent = `Claimers ${a.word}`,
                    o.appendChild(n);
                    var r = document.createElement("div");
                    r.textContent = "Showing the last 50 players who claimed this word.",
                    r.classList.add("claimers-description"),
                    o.appendChild(r);
                    const i = document.createElement("div");
                    if (i.classList.add("claimers-container"),
                    0 === t.length) {
                        const e = document.createElement("div");
                        e.classList.add("empty-claimers"),
                        e.textContent = "No players have claimed this word yet.",
                        i.appendChild(e)
                    } else
                        t.forEach((e => {
                            const t = document.createElement("div");
                            t.classList.add("claimer-item");
                            const a = document.createElement("img");
                            a.src = H(e.claimer, e.avatar, 32),
                            a.classList.add("claimer-avatar"),
                            t.appendChild(a);
                            const n = document.createElement("div");
                            n.classList.add("claimer-name"),
                            n.textContent = e.displayName,
                            t.appendChild(n),
                            t.addEventListener("click", ( () => {
                                xe.showPlayerProfile(e.claimer, !0)
                            }
                            )),
                            i.appendChild(t)
                        }
                        ));
                    o.appendChild(i)
                }
            } catch (l) {
                i.remove();
                var d = document.createElement("span");
                d.textContent = l.toString(),
                o.appendChild(d)
            }
        }
        ))
    }
    static showEnhancedDestroyAnimation(e, t) {
        const a = document.createElement("div");
        a.classList.add("fullscreen-destruction-overlay"),
        document.body.appendChild(a);
        const n = document.createElement("div");
        n.classList.add("fullscreen-animation-container"),
        n.classList.add("mobile-friendly-container"),
        a.appendChild(n);
        const o = document.createElement("div");
        if (o.classList.add("word-to-destroy"),
        o.textContent = t,
        t.length > 8) {
            const e = Math.max(16, 32 - (t.length - 8) * (1 + .03 * t.length));
            o.style.fontSize = `${e}px`,
            t.length > 20 && (o.style.wordBreak = "break-word",
            o.style.hyphens = "auto",
            o.style.maxWidth = "90%",
            o.style.textAlign = "center")
        }
        n.appendChild(o),
        setTimeout(( () => {
            a.classList.add("active"),
            setTimeout(( () => ke(this, void 0, void 0, (function*() {
                o.classList.add("word-shaking");
                const i = t.split("");
                o.innerHTML = "",
                i.forEach(( (e, t) => {
                    const a = document.createElement("span");
                    if (a.textContent = e,
                    a.classList.add("letter"),
                    a.style.setProperty("--delay", .1 * t + "s"),
                    o.appendChild(a),
                    t < i.length - 1) {
                        const e = document.createElement("span");
                        e.classList.add("crack"),
                        e.style.setProperty("--delay", .1 * t + .05 + "s"),
                        o.appendChild(e)
                    }
                }
                ));
                var s = yield r.play("clock", {
                    loop: !0,
                    speed: 1.5,
                    volume: .5 * V.effects
                });
                setTimeout(( () => ke(this, void 0, void 0, (function*() {
                    var i, d;
                    try {
                        const l = yield v.http.post("/destroy-word", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                word: t
                            })
                        });
                        if (s.stop(),
                        null === (i = l.data) || void 0 === i ? void 0 : i.success) {
                            o.remove();
                            const i = document.createElement("div");
                            i.classList.add("explosion-effect"),
                            n.appendChild(i),
                            r.play("explosion", {
                                volume: .25
                            }),
                            o.classList.add("clock"),
                            setTimeout(( () => {
                                o.style.opacity = "0",
                                i.style.opacity = "0";
                                const s = l.data.syllables || []
                                  , d = document.createElement("div");
                                d.classList.add("syllable-container"),
                                n.appendChild(d);
                                const c = .95 * window.innerWidth;
                                Math.min(c / Math.max(1, s.length), 70);
                                d.style.position = "relative",
                                d.style.margin = "0 auto",
                                d.style.height = "150px",
                                d.style.display = "flex",
                                d.style.justifyContent = "space-between",
                                d.style.alignItems = "center",
                                s.forEach(( (e, t) => {
                                    const a = document.createElement("div");
                                    a.classList.add("dynamic-syllable");
                                    const n = document.createElement("span");
                                    if (n.textContent = e,
                                    n.classList.add("syllable-text"),
                                    a.appendChild(n),
                                    e.length > 3) {
                                        const t = Math.max(10, 18 - 1.5 * (e.length - 3));
                                        n.style.fontSize = `${t}px`
                                    }
                                    const o = document.createElement("div");
                                    o.classList.add("syllable-glow"),
                                    a.appendChild(o),
                                    d.appendChild(a);
                                    const i = s.length
                                      , l = Math.ceil(i / 5)
                                      , c = t < i - (i % 5 || 5) ? 5 : i % 5 || 5
                                      , m = Math.floor(t / 5)
                                      , u = t % 5 * (100 / c) + 50 / c
                                      , p = 50 + 50 * (m - (l - 1) / 2);
                                    a.style.position = "absolute",
                                    a.style.left = `${u}%`,
                                    a.style.top = `${p}%`,
                                    a.style.transform = "translate(-50%, -50%) scale(0.1)",
                                    a.style.opacity = "0",
                                    l > 1 && (d.style.height = 150 + 60 * (l - 1) + "px"),
                                    setTimeout(( () => {
                                        a.style.transition = "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                        a.style.opacity = "1",
                                        a.style.transform = "translate(-50%, -50%) scale(1)",
                                        r.play("unlocked", {
                                            volume: .3 + t / i * .3
                                        })
                                    }
                                    ), 300 + 150 * t)
                                }
                                )),
                                setTimeout(( () => {
                                    const o = document.createElement("button");
                                    o.classList.add("collect-syllables-btn", "wb-button"),
                                    o.textContent = "Collect Syllables",
                                    n.appendChild(o),
                                    o.addEventListener("click", ( () => {
                                        o.remove();
                                        const i = document.querySelectorAll(".dynamic-syllable");
                                        r.play("diamond", {
                                            volume: .5,
                                            speed: 1.4
                                        }),
                                        i.forEach(( (e, t) => {
                                            setTimeout(( () => {
                                                e.classList.add("syllable-collecting"),
                                                e.style.transition = "all 0.7s cubic-bezier(0.19, 1, 0.22, 1)",
                                                e.style.left = "50%",
                                                e.style.top = "50%",
                                                e.style.opacity = "0",
                                                e.style.transform = "translate(-50%, -50%) scale(0.2)",
                                                r.play("coin", {
                                                    volume: .3
                                                })
                                            }
                                            ), 100 * t)
                                        }
                                        )),
                                        setTimeout(( () => {
                                            const o = document.createElement("div");
                                            o.classList.add("success-message"),
                                            o.innerHTML = "<span>✨ Syllables Collected! ✨</span>",
                                            n.appendChild(o),
                                            r.play("diamond", {
                                                volume: .7,
                                                speed: 1.4
                                            }),
                                            setTimeout(( () => {
                                                const n = document.getElementById(`owner-${t}`);
                                                var o = parseInt(e.textContent || "0", 10);
                                                --o <= 0 ? n && n.remove() : e.textContent = o.toString(),
                                                a.classList.add("fade-out-normal"),
                                                setTimeout(( () => {
                                                    a.remove()
                                                }
                                                ), 500)
                                            }
                                            ), 1e3)
                                        }
                                        ), 100 * i.length + 700)
                                    }
                                    ))
                                }
                                ), 150 * s.length + 1e3)
                            }
                            ), 1e3)
                        } else
                            j((null === (d = l.data) || void 0 === d ? void 0 : d.message) || "Failed to destroy discovery"),
                            a.remove()
                    } catch (l) {
                        j("Failed to destroy discovery"),
                        a.remove(),
                        null == s || s.stop()
                    }
                }
                ))), 2e3)
            }
            ))), 100)
        }
        ), 50)
    }
}
xe.savedChannel = "mlang",
xe.lastTab = 0;
var Te = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
function Pe(e) {
    var t = "info" != e.title ? L.getWord(e.title) : e.title
      , a = "info" != e.title ? L.getWord(e.message) : e.message;
    new Q(( () => {}
    ),t,a).open(null)
}
function Me(e) {
    var t = e.box
      , a = e.bomb;
    r.play("unlock", {
        volume: .3 * V.effects
    });
    var n = document.createElement("div");
    n.classList.add("chest-unlocking");
    var o = document.createElement("img");
    o.src = "/web/shine.png",
    o.classList.add("chest-unlock-glow"),
    n.appendChild(o);
    var i = document.createElement("img");
    i.src = `/boxs/${t}.png`,
    i.classList.add("chest-unlock-chest"),
    setTimeout(( () => Te(this, void 0, void 0, (function*() {
        i.classList.add("chest-unlock-chest-open"),
        i.style.position = "absolute";
        var t = yield r.play("clock", {
            loop: !0,
            speed: 1.5,
            volume: .5 * V.effects
        });
        setTimeout(( () => {
            o.remove(),
            t.stop(),
            r.play("explosion", {
                volume: .1 * V.effects
            });
            var s = document.createElement("div");
            s.classList.add("chest-explosion"),
            n.appendChild(s),
            i.style.visibility = "hidden";
            var d = document.createElement("img")
              , l = "bombs";
            null != e.frame && (l = "frame"),
            "frame" == l ? (d.src = `/frame_ui/${e.frame}.png`,
            d.classList.add("chest-unlock-frame")) : (d.src = `/${l}/${a}.png`,
            d.classList.add("chest-unlock-bomb")),
            n.appendChild(d),
            setTimeout(( () => {
                r.play("success", {
                    volume: .2 * V.effects
                }),
                s.remove(),
                setTimeout(( () => {
                    null == n || n.remove()
                }
                ), 2500)
            }
            ), 1e3)
        }
        ), 3e3)
    }
    ))), 200),
    n.appendChild(i),
    document.body.appendChild(n)
}
function Ie(e) {
    if (e.success) {
        if ("background" == e.type) {
            var t = document.getElementById("background-" + e.id);
            if (t) {
                if (null == (s = t.querySelector(".shop-button-container")))
                    return;
                var a = ce.backgrounds.find((t => t.id == e.id));
                null != a && xe.updateShopButtonContainer(s, new le(a.id,!0,a.price,a.diamondPrice,a.tiled))
            }
        } else if ("bomb" == e.type) {
            var n = document.getElementById("bomb-" + e.id);
            if (n) {
                if (null == (s = n.querySelector(".shop-button-container")))
                    return;
                var o = ce.bombs.find((t => t.id == e.id));
                null != o && xe.updateShopButtonContainer(s, new de(o.id,!0,o.price,o.diamondPrice))
            }
        } else if ("frame" == e.type) {
            var i = document.getElementById("frame-" + e.id);
            if (i) {
                var s;
                if (null == (s = i.querySelector(".shop-button-container")))
                    return;
                var r = ce.frames.find((t => t.id == e.id));
                null != r && xe.updateShopButtonContainer(s, new de(r.id,!0,r.price,r.diamondPrice))
            }
        }
    } else {
        var d = "diamond" == e.buyMethod ? L.getWord("not_enough_diamonds") : L.getWord("not_enough_gold");
        new Q(( () => {}
        ),L.getWord("error"),d).open(null)
    }
}
var Ae = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class We extends E {
    constructor(e) {
        super("dailyrewards.html"),
        this.rewardWrapper = null,
        this.finalClaimBtn = null,
        this.currentDay = e + 1
    }
    load() {
        const e = Object.create(null, {
            load: {
                get: () => super.load
            }
        });
        return Ae(this, void 0, void 0, (function*() {
            var t, a;
            yield e.load.call(this),
            this.rewardWrapper = null === (t = this.container) || void 0 === t ? void 0 : t.querySelector("#rewardWrapper"),
            this.finalClaimBtn = null === (a = this.container) || void 0 === a ? void 0 : a.querySelector("#finalClaimBtn"),
            this.currentDay = this.currentDay,
            this.generateRewardItems(7),
            this.initialize()
        }
        ))
    }
    initialize() {
        this.updateRewardItems(),
        this.addFinalClaimListener()
    }
    generateRewardItems(e) {
        if (!this.rewardWrapper)
            return;
        const t = pe;
        for (let a = 1; a <= e; a++) {
            const e = t[a - 1]
              , n = document.createElement("div");
            n.className = "reward-item",
            a !== this.currentDay && n.classList.add("inactive"),
            n.innerHTML = `\n                <img src="${e.icon}" alt="Reward Icon" class="reward-icon">\n                <span>Day ${a}</span>\n                <div class="reward-value">${e.value}</div>\n            `,
            this.rewardWrapper.appendChild(n)
        }
    }
    updateRewardItems() {
        var e;
        (null === (e = this.rewardWrapper) || void 0 === e ? void 0 : e.querySelectorAll(".reward-item")).forEach(( (e, t) => {
            t + 1 === this.currentDay ? (e.classList.remove("inactive"),
            this.scrollToReward(e)) : e.classList.add("inactive")
        }
        ))
    }
    scrollToReward(e) {
        setTimeout(( () => {
            e.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
        ), 300)
    }
    addFinalClaimListener() {
        this.finalClaimBtn && this.finalClaimBtn.addEventListener("click", ( () => this.claimFinalReward()))
    }
    claimFinalReward() {
        var e, t, a, n;
        null === (e = this.rewardWrapper) || void 0 === e || e.querySelectorAll(".reward-item"),
        null === (t = this.finalClaimBtn) || void 0 === t || t.setAttribute("disabled", "true"),
        null === (a = this.container) || void 0 === a || a.querySelector(".overlay").classList.remove("active"),
        null === (n = N.currentRoom) || void 0 === n || n.send("claim-daily"),
        r.play("coin", {
            volume: 1 * V.effects
        }),
        setTimeout(( () => {
            this.close()
        }
        ), 1e3)
    }
}
var Be = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class Ne extends E {
    constructor(e, t, a) {
        super("unlockeditem.html"),
        this.type = e,
        this.value = t,
        this.index = a
    }
    open() {
        return Be(this, void 0, void 0, (function*() {
            var e, t;
            if (yield this.load(),
            "theme" == this.type)
                (a = document.createElement("span")).classList.add("unlocked-item-theme"),
                a.style.background = `url(/backgrounds_small/${this.index}.png)`,
                null === (e = this.container.querySelector(".unlocked-item")) || void 0 === e || e.appendChild(a);
            else if ("bomb" == this.type) {
                var a;
                (a = document.createElement("span")).classList.add("unlocked-item-bomb"),
                a.style.backgroundImage = `url(/bombs/${this.index}.png)`,
                null === (t = this.container.querySelector(".unlocked-item")) || void 0 === t || t.appendChild(a)
            }
            setTimeout(( () => {
                this.close()
            }
            ), 2500),
            setTimeout(( () => {
                var e, t;
                null === (t = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector(".overlay")) || void 0 === t || t.classList.remove("active")
            }
            ), 1500)
        }
        ))
    }
}
var De = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class Re {
    constructor() {
        this.allRooms = []
    }
    checkDiscordParticipants() {
        return De(this, void 0, void 0, (function*() {
            if (u) {
                var e = (yield p.commands.getInstanceConnectedParticipants()).participants.map((e => e.id));
                e.length > 0 && this.lobby.send("participants", e)
            } else {
                const e = new URLSearchParams(window.location.search).get("participants");
                e && this.lobby.send("participants", e.split(","))
            }
        }
        ))
    }
    joinLobby() {
        return De(this, void 0, void 0, (function*() {
            try {
                this.lobby = yield v.joinOrCreate("lobby"),
                N.currentRoom = this.lobby,
                this.lobby.onMessage("+", (e => {
                    var t;
                    if (null == (e = e[1]).metadata)
                        return;
                    const a = this.allRooms.findIndex((t => t.roomId === e.roomId));
                    -1 !== a ? this.allRooms[a] = e : this.allRooms.push(e),
                    null === (t = this.roomsUpdated) || void 0 === t || t.call(this, this.allRooms)
                }
                )),
                this.lobby.onMessage("participants", (e => {
                    var t;
                    Re.sameVoiceRooms = e,
                    null === (t = null == $e ? void 0 : $e.instance) || void 0 === t || t.refreshVoiceElements()
                }
                )),
                this.lobby.onMessage("-", (e => {
                    var t;
                    this.allRooms = this.allRooms.filter((t => t.roomId !== e)),
                    null === (t = this.roomsUpdated) || void 0 === t || t.call(this, this.allRooms)
                }
                )),
                this.lobby.onMessage("rooms", (e => {
                    var t;
                    this.allRooms = e,
                    null === (t = this.roomsUpdated) || void 0 === t || t.call(this, this.allRooms)
                }
                )),
                this.lobby.onMessage("popup", Pe.bind(this)),
                this.lobby.onLeave((e => {
                    this.onLeave(e)
                }
                )),
                this.lobby.onMessage("diamond-spawn", (e => {
                    xe.dropDiamonds()
                }
                )),
                this.lobby.onMessage("word-spawn", this.onWordEarned.bind(this)),
                this.lobby.onMessage("item-unlocked", (e => {
                    Ie(e)
                }
                )),
                this.lobby.onMessage("unlock-chest", Me.bind(this)),
                this.lobby.onMessage("daily", (e => De(this, void 0, void 0, (function*() {
                    this.dailyRewardsPanel = new We(e),
                    yield this.dailyRewardsPanel.load()
                }
                )))),
                this.lobby.onMessage("server-message", (e => {
                    e.msg;
                    j(e.msg)
                }
                )),
                this.lobby.onMessage("new-item", (e => {
                    var t = e.type
                      , a = e.value
                      , n = e.index;
                    "theme" == t || "bomb" == t ? new Ne(t,a,n).open() : r.play("diamond", {
                        volume: 1 * V.effects
                    })
                }
                )),
                this.lobby.onMessage("chat", (e => {
                    var t;
                    null === (t = Ee.instance) || void 0 === t || t.addMessage(e)
                }
                )),
                setInterval(( () => {
                    this.checkDiscordParticipants()
                }
                ), 4e3),
                setTimeout(( () => {
                    this.checkDiscordParticipants()
                }
                ), 400)
            } catch (e) {
                this.onLeave(2356)
            }
            this.lobby && (yield this.initLobbyPanel())
        }
        ))
    }
    onWordEarned(e) {
        const t = e.syllables
          , a = innerWidth / 2
          , n = innerHeight - 20;
        if (r.play("unlocked", {
            volume: .7 * V.effects
        }),
        1 === t.length) {
            const e = document.createElement("span");
            e.classList.add("word-game"),
            e.textContent = t[0],
            e.style.position = "absolute",
            e.style.top = n + "px",
            e.style.left = a + "px",
            document.body.appendChild(e),
            r.play("diamond", {
                volume: .7 * V.effects,
                speed: .8
            }),
            setTimeout(( () => {
                e.remove()
            }
            ), 4e3)
        } else {
            const e = 30
              , o = 2 * Math.PI / t.length;
            for (let i = 0; i < t.length; i++) {
                const s = i * o
                  , r = a + e * Math.cos(s)
                  , d = n + e * Math.sin(s)
                  , l = document.createElement("span");
                l.classList.add("word-game"),
                l.textContent = t[i],
                l.style.position = "absolute",
                l.style.top = d + "px",
                l.style.left = r + "px",
                document.body.appendChild(l),
                setTimeout(( () => {
                    l.remove()
                }
                ), 4e3)
            }
        }
    }
    initLobbyPanel() {
        return De(this, void 0, void 0, (function*() {
            this.lobbyPanel = new Ye(this),
            yield this.lobbyPanel.open(this.lobby),
            this.chatElement = document.createElement("div"),
            this.chatElement.classList.add("chat-button");
            var e = document.createElement("img");
            e.src = "/web/chat.png",
            e.classList.add("chat-icon"),
            this.chatElement.appendChild(e),
            document.body.appendChild(this.chatElement),
            this.chatElement.addEventListener("click", ( () => {
                var e = document.getElementById("global-chat-window");
                e ? e.remove() : xe.globalChatWindow()
            }
            ))
        }
        ))
    }
    destroy() {
        var e, t;
        null === (e = this.lobbyPanel) || void 0 === e || e.close(),
        this.lobby && this.lobby.connection.isOpen && this.lobby.leave(!0),
        this.dailyRewardsPanel && this.dailyRewardsPanel.close(),
        Re.sameVoiceRooms = [],
        null === (t = this.chatElement) || void 0 === t || t.remove(),
        Ee.instance = null
    }
}
Re.sameVoiceRooms = [];
var je = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class ze extends E {
    constructor(e) {
        super("wordle.html"),
        this.currentRow = 0,
        this.currentCol = 0,
        this.WORD_LENGTH = 5,
        this.MAX_ATTEMPTS = 6,
        this.targetWord = "",
        this.correct_color = "rgb(106, 170, 100)",
        this.wrong_placement_color = "rgb(201, 180, 88)",
        this.wrong_color = "rgb(58, 58, 60)",
        this.submissionAwaiting = !1,
        this.isGameEnded = !1,
        this.targetWord = e,
        null != ze.instance && ze.instance.close(),
        ze.instance = this
    }
    open(e) {
        return je(this, void 0, void 0, (function*() {
            var t, a;
            yield this.load(),
            this.room = e,
            this.languages = Array.from((null === (t = this.container) || void 0 === t ? void 0 : t.querySelectorAll(".wrld-lang-ico")) || []),
            this.tryAgainButton = null === (a = this.container) || void 0 === a ? void 0 : a.querySelector("#try-again"),
            this.setupKeyboardEvents(),
            this.setupCloseButton(),
            this.updateProgress(),
            this.removeListener2 = e.onMessage("daily-wrong-guess", (e => {
                this.shakeCurrentRow(),
                z("Not a valid word"),
                this.submissionAwaiting = !1
            }
            )),
            this.removeListener = this.room.onMessage("guess-response", (e => {
                const t = JSON.parse(e)
                  , a = t.guesses
                  , n = a[a.length - 1];
                n && this.updateCellColors(n, t.word),
                this.currentRow = a.length,
                this.currentCol = 0,
                this.submissionAwaiting = !1,
                0 != t.end && this.gameEnded(t)
            }
            )),
            this.tryAgainButton.addEventListener("click", ( () => je(this, void 0, void 0, (function*() {
                this.room.send("daily-try-again"),
                this.close();
                var t = e.onMessage("wordle-reset", (a => {
                    if (t(),
                    a.result) {
                        new ze(this.targetWord).open(e)
                    }
                }
                ))
            }
            ))));
            const n = e => {
                "Escape" == e.key && this.close()
            }
            ;
            document.removeEventListener("keydown", n),
            document.addEventListener("keydown", n)
        }
        ))
    }
    shakeCurrentRow() {
        var e;
        if (this.isAnimating)
            return;
        const t = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector(`.wrld-grid .wrld-cell:nth-child(${this.currentRow + 1})`);
        t && (this.isAnimating = !0,
        t.classList.add("shake-row"),
        setTimeout(( () => {
            t.classList.remove("shake-row"),
            this.isAnimating = !1
        }
        ), 500))
    }
    resetCells() {
        var e;
        (null === (e = this.container) || void 0 === e ? void 0 : e.querySelectorAll(".wrld-cell-item")).forEach((e => {
            e.textContent = "",
            e.style.backgroundColor = "#121213",
            e.style.color = "white"
        }
        ))
    }
    updateProgress() {
        this.resetCells(),
        this.room.send("daily-word");
        var e = this.room.onMessage("daily-word", (t => {
            e();
            const a = JSON.parse(t);
            this.targetWord = a.word;
            const n = a.guesses;
            for (let e = 0; e < n.length; e++) {
                this.currentRow = e;
                const t = n[e];
                for (let e = 0; e < this.WORD_LENGTH; e++)
                    this.addLetter(t[e]);
                this.updateCellColors(t, this.targetWord),
                this.currentCol = 0
            }
            this.currentRow = n.length,
            this.currentCol = 0,
            0 != a.end && this.gameEnded(a)
        }
        ))
    }
    gameEnded(e) {
        var t, a, n, o, i;
        (this.isGameEnded = !0,
        e.word == e.guesses[e.guesses.length - 1]) ? (N.dailyWord = e.word,
        N.dailyWordFound = !0,
        N.player.diamond += 5,
        document.getElementById("diamond").textContent = ce.formatNumber(N.player.diamond),
        null === (t = $e.instance) || void 0 === t || t.updateTodaysWord(e.word)) : this.tryAgainButton.classList.remove("hidden");
        null === (n = null === (a = this.container) || void 0 === a ? void 0 : a.querySelector(".keyboard")) || void 0 === n || n.classList.add("hidden");
        var s = document.createElement("div");
        s.classList.add("wrld-duration"),
        s.textContent = `Duration: ${(e.end - e.start) / 1e3} seconds`,
        null === (i = null === (o = this.container) || void 0 === o ? void 0 : o.querySelector(".wrld")) || void 0 === i || i.appendChild(s)
    }
    setupKeyboardEvents() {
        var e;
        this.inputHandler = e => {
            var t;
            e.preventDefault(),
            this.submissionAwaiting || (null === (t = this.container) || void 0 === t ? void 0 : t.isConnected) && (this.isGameEnded || ("Enter" === e.key ? this.handleKeyInput("enter") : "Backspace" === e.key ? this.handleKeyInput("⌫") : /^[a-zA-Z]$/.test(e.key) && this.handleKeyInput(e.key.toLowerCase())))
        }
        ,
        this.keyboardHandler = e => {
            var t;
            if (e.preventDefault(),
            this.submissionAwaiting)
                return;
            const a = e.target;
            a.classList.contains("key") && this.handleKeyInput((null === (t = a.textContent) || void 0 === t ? void 0 : t.toLowerCase()) || "")
        }
        ;
        const t = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector(".keyboard");
        null == t || t.removeEventListener("click", this.keyboardHandler),
        null == t || t.addEventListener("click", this.keyboardHandler),
        document.removeEventListener("keydown", this.inputHandler),
        document.addEventListener("keydown", this.inputHandler),
        this.inputHandler = this.inputHandler,
        this.keyboardHandler = this.keyboardHandler
    }
    removeKeyboardEvents() {
        var e;
        const t = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector(".keyboard");
        null == t || t.removeEventListener("click", this.keyboardHandler),
        document.removeEventListener("keydown", this.inputHandler)
    }
    setupCloseButton() {
        var e;
        const t = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector(".window-close-wordle");
        null == t || t.addEventListener("click", ( () => {
            this.close()
        }
        ))
    }
    handleKeyInput(e) {
        this.currentRow >= this.MAX_ATTEMPTS || ("enter" === e ? this.submitGuess() : "⌫" === e ? this.deleteLetter() : /^[a-z]$/.test(e) && this.addLetter(e))
    }
    addLetter(e) {
        if (this.currentCol >= this.WORD_LENGTH)
            return;
        const t = this.getCellElement(this.currentRow, this.currentCol);
        t && (t.textContent = e.toLocaleUpperCase("en-US"),
        this.currentCol++)
    }
    deleteLetter() {
        if (this.currentCol <= 0)
            return;
        this.currentCol--;
        const e = this.getCellElement(this.currentRow, this.currentCol);
        e && (e.textContent = "")
    }
    submitGuess() {
        var e;
        if (this.currentCol !== this.WORD_LENGTH || this.submissionAwaiting)
            return;
        let t = "";
        for (let a = 0; a < this.WORD_LENGTH; a++) {
            const n = this.getCellElement(this.currentRow, a);
            t += (null === (e = null == n ? void 0 : n.textContent) || void 0 === e ? void 0 : e.toLowerCase()) || ""
        }
        this.submissionAwaiting = !0,
        this.room.send("guess-daily", {
            guess: t.toLocaleUpperCase("en-US")
        })
    }
    updateCellColors(e, t) {
        const a = e.toUpperCase().split("")
          , n = t.toUpperCase().split("")
          , o = Array(this.WORD_LENGTH).fill(!1)
          , i = Array(this.WORD_LENGTH).fill(!1);
        for (let s = 0; s < this.WORD_LENGTH; s++) {
            const e = this.getCellElement(this.currentRow, s);
            e && (a[s] === n[s] ? (e.style.backgroundColor = this.correct_color,
            e.style.color = "white",
            o[s] = !0,
            i[s] = !0) : (e.style.backgroundColor = this.wrong_color,
            e.style.color = "white"))
        }
        for (let s = 0; s < this.WORD_LENGTH; s++) {
            if (i[s])
                continue;
            const e = this.getCellElement(this.currentRow, s);
            if (!e)
                continue;
            const t = a[s];
            for (let a = 0; a < this.WORD_LENGTH; a++)
                if (!o[a] && t === n[a]) {
                    e.style.backgroundColor = this.wrong_placement_color,
                    e.style.color = "white",
                    o[a] = !0;
                    break
                }
        }
        for (let s = 0; s < this.WORD_LENGTH; s++) {
            const e = this.getCellElement(this.currentRow, s);
            this.updateKeyboardColor(a[s], (null == e ? void 0 : e.style.backgroundColor) || "")
        }
    }
    updateKeyboardColor(e, t) {
        var a;
        if ("enter" === e || "backspace" === e)
            return;
        const n = null === (a = this.container) || void 0 === a ? void 0 : a.querySelector(`.key[data-key="${e.toLowerCase()}"]`);
        if (n) {
            const e = n.style.backgroundColor;
            t === this.correct_color ? e !== this.correct_color && (n.style.backgroundColor = this.correct_color) : t === this.wrong_placement_color ? e !== this.correct_color && e !== this.wrong_placement_color && (n.style.backgroundColor = this.wrong_placement_color) : t === this.wrong_color && e !== this.correct_color && e !== this.wrong_placement_color && (n.style.backgroundColor = this.wrong_color)
        }
    }
    getCellElement(e, t) {
        var a;
        return (null === (a = this.container) || void 0 === a ? void 0 : a.querySelector(`.wrld-grid .wrld-cell:nth-child(${e + 1}) .wrld-cell-item:nth-child(${t + 1})`)) || null
    }
    close() {
        super.close(),
        this.removeKeyboardEvents()
    }
}
var He = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class $e {
    constructor(e) {
        this.roomElements = new Map,
        this.privateRoomElements = new Map,
        this.voiceMembers = new Map,
        this.menu = e,
        e.roomsUpdated = this.updateRoomList.bind(this),
        this.initProfile(),
        this.updateRoomList(e.allRooms),
        $e.instance = this
    }
    initProfile() {
        var e = document.getElementById("tab-content");
        if (null != e) {
            e.appendChild(this.getDOM()),
            this.createButton && this.createButton.addEventListener("click", ( () => He(this, void 0, void 0, (function*() {
                this.createButton.remove(),
                this.createRoom()
            }
            )))),
            this.menu.lobby.send("daily-check");
            var t = this.menu.lobby.onMessage("daily-result", (e => {
                t(),
                null != e.rewarded && (N.rewarded = e.rewarded,
                e.rewarded) || (e.guessed ? (N.dailyWord = e.word,
                N.dailyWordFound = !0,
                this.updateTodaysWord(e.word)) : (N.dailyWordFound = !1,
                this.updateTodaysWord("* * * * *")))
            }
            ))
        }
    }
    updateTodaysWord(e) {
        var t = document.getElementById("tab-content")
          , a = document.getElementById("daily-word");
        if (null != a && a.remove(),
        N.dailyWordFound)
            null == a || a.remove();
        else {
            var n = xe.createDailyWord(e, N.dailyWordFound);
            if (!N.dailyWordFound)
                n.querySelector(".daily-word").addEventListener("click", ( () => He(this, void 0, void 0, (function*() {
                    var t = new ze(e);
                    return yield t.open(this.menu.lobby),
                    t
                }
                ))));
            t.prepend(n),
            N.dailyWordFound && n.classList.add("daily-word-ok")
        }
    }
    createVoiceRoomElement(e) {
        var t, a, n, o, i, s, r, d;
        const l = document.createElement("div");
        if (l.className = "lobby-list-item",
        l.classList.add("voice-room"),
        null === (t = this.lobbyListPanel) || void 0 === t || t.prepend(l),
        !e.metadata)
            return;
        const c = H(null === (a = e.metadata) || void 0 === a ? void 0 : a.auth_id, null === (n = e.metadata) || void 0 === n ? void 0 : n.avatar, 128)
          , m = document.createElement("img");
        m.classList.add("lobby-list-avatar"),
        $(c, m),
        l.appendChild(m);
        const u = document.createElement("span");
        u.className = "lobby-list-name",
        u.textContent = e.metadata.name || "Error",
        l.appendChild(u);
        const p = document.createElement("div");
        p.className = "lobby-roles",
        l.appendChild(p);
        const h = document.createElement("span");
        h.className = "lobby-list-role",
        0 == (null === (o = e.metadata) || void 0 === o ? void 0 : o.sc) ? h.textContent = L.getWord(e.metadata.mode) : h.textContent = L.getWord("scenarios"),
        p.appendChild(h);
        const v = document.createElement("span");
        v.className = "lobby-list-role",
        v.textContent = `${e.clients}/32`,
        p.appendChild(v);
        const g = ce.getDifficulties().find((t => t.id == e.metadata.diff)) || ce.getDifficulties()[0];
        if ((null === (i = e.metadata) || void 0 === i ? void 0 : i.wpp) && 0 == (null === (s = e.metadata) || void 0 === s ? void 0 : s.sc) && -1 != e.metadata.wpp) {
            const t = document.createElement("span");
            t.className = "lobby-list-role",
            t.textContent = `${e.metadata.wpp} WPP`,
            p.appendChild(t)
        }
        if (null === (r = e.metadata) || void 0 === r ? void 0 : r.ranked) {
            const e = document.createElement("span");
            e.className = "lobby-list-role ranked",
            e.textContent = `${L.getWord("ranked")}`,
            p.appendChild(e)
        }
        if (0 !== g.id) {
            const e = document.createElement("span");
            e.className = "lobby-list-role ranked",
            e.textContent = L.getWord(g.name),
            p.appendChild(e)
        }
        if (null === (d = e.metadata) || void 0 === d ? void 0 : d.started) {
            const e = document.createElement("span");
            e.className = "lobby-list-role started",
            e.textContent = "Playing",
            p.appendChild(e),
            l.classList.add("lobby-playing")
        } else
            l.classList.remove("lobby-playing");
        const y = ce.getLanguages().find((t => t.locale == e.metadata.language));
        if (y) {
            const t = document.createElement("span");
            t.className = "lobby-list-role";
            const a = document.createElement("img");
            e.metadata.mlang ? (a.src = "/web/mlang.png",
            a.alt = "Multi Language") : (a.src = `/flag/${y.flag}.png`,
            a.alt = `${y.name} flag`),
            t.appendChild(a),
            p.appendChild(t)
        }
        const b = document.createElement("button");
        b.className = "lobby-list-action",
        b.dataset.roomId = e.roomId,
        b.textContent = "Join",
        l.appendChild(b);
        let f = !1;
        const w = t => {
            f || (t.preventDefault(),
            f = !0,
            this.joinRoom(e.roomId),
            setTimeout(( () => {
                f = !1
            }
            ), 500))
        }
        ;
        return b.addEventListener("pointerdown", w),
        b.addEventListener("click", w),
        b.addEventListener("touchstart", w),
        l
    }
    updateRoomList(e) {
        return He(this, void 0, void 0, (function*() {
            if (this.lobbyListPanel) {
                try {
                    const t = new Set(this.roomElements.keys());
                    e.sort(( (e, t) => {
                        var a, n, o, i;
                        return (null !== (n = null === (a = t.metadata) || void 0 === a ? void 0 : a.mlang) && void 0 !== n ? n : 0) - (null !== (i = null === (o = e.metadata) || void 0 === o ? void 0 : o.mlang) && void 0 !== i ? i : 0)
                    }
                    )),
                    e.forEach((e => {
                        var a, n, o, i, s, r, d;
                        if (!e.metadata)
                            return;
                        let l = this.roomElements.get(e.roomId);
                        if (this.voiceMembers.has(e.roomId))
                            return;
                        l || (l = document.createElement("div"),
                        l.className = "lobby-list-item",
                        null === (a = this.lobbyListPanel) || void 0 === a || a.appendChild(l),
                        this.roomElements.set(e.roomId, l)),
                        l.classList.remove("voice-room"),
                        Re.sameVoiceRooms.find((t => t.roomId == e.roomId)) && l.classList.add("voice-room"),
                        t.delete(e.roomId),
                        l.innerHTML = "";
                        const c = H(null === (n = e.metadata) || void 0 === n ? void 0 : n.auth_id, null === (o = e.metadata) || void 0 === o ? void 0 : o.avatar, 128)
                          , m = document.createElement("img");
                        m.classList.add("lobby-list-avatar"),
                        $(c, m),
                        m.addEventListener("click", ( () => He(this, void 0, void 0, (function*() {
                            var t;
                            yield xe.showPlayerProfile(null === (t = e.metadata) || void 0 === t ? void 0 : t.auth_id)
                        }
                        )))),
                        l.appendChild(m);
                        const u = document.createElement("span");
                        u.className = "lobby-list-name",
                        u.textContent = e.metadata.name,
                        l.appendChild(u);
                        const p = document.createElement("div");
                        p.className = "lobby-roles",
                        l.appendChild(p);
                        const h = document.createElement("span");
                        h.className = "lobby-list-role",
                        0 == (null === (i = e.metadata) || void 0 === i ? void 0 : i.sc) ? h.textContent = L.getWord(e.metadata.mode) : h.textContent = L.getWord("scenarios"),
                        p.appendChild(h);
                        const v = document.createElement("spectate");
                        v.className = "lobby-list-spectate",
                        v.textContent = "👁️",
                        l.appendChild(v);
                        const g = document.createElement("span");
                        g.className = "lobby-list-role",
                        g.textContent = `${e.clients}/32`,
                        p.appendChild(g);
                        var y = ce.getDifficulties();
                        y.push({
                            id: 2,
                            name: "practice"
                        });
                        const b = y.find((t => t.id == e.metadata.diff)) || ce.getDifficulties()[0];
                        if ((null === (s = e.metadata) || void 0 === s ? void 0 : s.wpp) && 0 == (null === (r = e.metadata) || void 0 === r ? void 0 : r.sc) && -1 != e.metadata.wpp) {
                            const t = document.createElement("span");
                            t.className = "lobby-list-role",
                            t.textContent = `${e.metadata.wpp} WPP`,
                            p.appendChild(t)
                        }
                        if (0 !== b.id) {
                            const e = document.createElement("span");
                            e.className = "lobby-list-role ranked",
                            e.textContent = L.getWord(b.name),
                            p.appendChild(e)
                        }
                        if (null === (d = e.metadata) || void 0 === d ? void 0 : d.started) {
                            const e = document.createElement("span");
                            e.className = "lobby-list-role started",
                            e.textContent = "Playing",
                            p.appendChild(e),
                            l.classList.add("lobby-playing")
                        } else
                            l.classList.remove("lobby-playing");
                        const f = ce.getLanguages().find((t => t.locale == e.metadata.language));
                        if (f) {
                            const t = document.createElement("span");
                            t.classList.add("lobby-list-role");
                            const a = document.createElement("img");
                            e.metadata.mlang ? (a.src = "/web/mlang.png",
                            a.alt = "Multi Language",
                            t.classList.add("lobby-mlang-role"),
                            t.textContent = L.getWord("multi_lang")) : (a.src = `/flag/${f.flag}.png`,
                            a.alt = `${f.name} flag`,
                            t.textContent = ""),
                            t.appendChild(a),
                            p.appendChild(t)
                        }
                        const w = document.createElement("button");
                        w.className = "lobby-list-action",
                        w.dataset.roomId = e.roomId,
                        w.textContent = "Join",
                        l.appendChild(w);
                        let _ = !1
                          , C = !1;
                        const E = t => {
                            C || (t.preventDefault(),
                            C = !0,
                            _ = !0,
                            this.joinRoom(e.roomId),
                            setTimeout(( () => {
                                C = !1,
                                _ = !1
                            }
                            ), 500))
                        }
                        ;
                        w.addEventListener("pointerdown", E),
                        w.addEventListener("click", E),
                        w.addEventListener("touchstart", E);
                        const k = t => {
                            _ || (t.preventDefault(),
                            _ = !0,
                            C = !0,
                            this.spectate(e.roomId),
                            setTimeout(( () => {
                                _ = !1,
                                C = !1
                            }
                            ), 500))
                        }
                        ;
                        v.addEventListener("pointerdown", k),
                        v.addEventListener("click", k),
                        v.addEventListener("touchstart", k)
                    }
                    )),
                    t.forEach((e => {
                        const t = this.roomElements.get(e);
                        t && (t.remove(),
                        this.roomElements.delete(e))
                    }
                    ))
                } catch (t) {}
                this.createButton && (this.createButton.textContent = L.getWord("create_room"))
            }
        }
        ))
    }
    refreshVoiceElements() {
        this.voiceMembers.forEach((e => {
            null == e || e.remove()
        }
        )),
        this.voiceMembers.clear(),
        Re.sameVoiceRooms.forEach((e => {
            if (e.metadata && !this.roomElements.get(e.roomId) && !this.voiceMembers.has(e.roomId)) {
                var t = this.createVoiceRoomElement(e);
                this.voiceMembers.set(e.roomId, t)
            }
        }
        ))
    }
    getDOM() {
        var e = document.createElement("div")
          , t = document.createElement("div");
        t.className = "lobby-start",
        this.createButton = document.createElement("button"),
        this.createButton.className = "lobby-start-btn",
        this.createButton.textContent = L.getWord("create_room"),
        t.appendChild(this.createButton),
        e.appendChild(t);
        var a = document.createElement("div");
        a.classList.add("daily-shop-button"),
        a.classList.add("daily-shop-discord");
        var n = document.createElement("img");
        n.classList.add("daily-shop-icon"),
        n.src = "/web/discord.png",
        a.appendChild(n);
        var o = document.createElement("div");
        o.textContent = "Join!",
        a.addEventListener("click", ( () => {
            u ? p.commands.openExternalLink({
                url: "https://discord.gg/mBu9j75zjS"
            }) : window.open("https://discord.gg/mBu9j75zjS", "_blank")
        }
        )),
        a.appendChild(o),
        t.appendChild(a);
        var i = document.createElement("div");
        return i.className = "lobby-list-container",
        this.lobbyListPanel = document.createElement("div"),
        this.lobbyListPanel.className = "lobby-list",
        i.appendChild(this.lobbyListPanel),
        e.appendChild(i),
        e
    }
    spectate(e) {
        var t;
        null === (t = this.menu) || void 0 === t || t.onSpectate(e),
        clearInterval(this.interval)
    }
    joinRoom(e) {
        var t;
        null === (t = this.menu) || void 0 === t || t.onJoined(e),
        clearInterval(this.interval)
    }
    createRoom() {
        var e;
        null === (e = this.menu) || void 0 === e || e.onCreate(),
        clearInterval(this.interval)
    }
    updateCountdown() {
        const e = new Date
          , t = new Date(e);
        t.setUTCDate(t.getUTCDate() + 1),
        t.setUTCHours(0, 0, 0, 0);
        const a = t.getTime() - e.getTime()
          , n = Math.floor(a / 36e5)
          , o = Math.floor(a % 36e5 / 6e4)
          , i = Math.floor(a % 6e4 / 1e3)
          , s = n.toString().padStart(2, "0")
          , r = o.toString().padStart(2, "0")
          , d = i.toString().padStart(2, "0");
        N.nextDay = `${s}:${r}:${d}`,
        this.timeText && (this.timeText.textContent = `${s}:${r}:${d}`),
        null != document.getElementById("time-text") || clearInterval(this.interval)
    }
}
var Oe = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class qe {
    constructor(e) {
        this.currentTab = "win",
        this.currentSubTab = "solo_climb",
        this.tabContent = e,
        this.initTabs(),
        this.initProfile(this.currentTab)
    }
    initTabs() {
        var e;
        const t = document.createElement("div");
        t.id = "shop-tabs";
        [{
            tab: "win",
            icon: "/web/crown.png"
        }, {
            tab: "level",
            icon: "/web/level.png"
        }, {
            tab: "wordly",
            icon: "/web/word.png"
        }, {
            tab: "climb",
            icon: "/web/climb.png"
        }].forEach(( ({tab: e, icon: a}) => {
            const n = document.createElement("div");
            n.classList.add("shop-tab"),
            n.dataset.tab = e;
            const o = document.createElement("img");
            o.src = a,
            o.alt = e,
            o.classList.add("shop-icon"),
            n.appendChild(o),
            t.appendChild(n),
            n.addEventListener("click", ( () => this.handleTabClick(e, n)))
        }
        )),
        null === (e = this.tabContent) || void 0 === e || e.appendChild(t);
        const a = t.querySelector(`[data-tab="${this.currentTab}"]`);
        a && a.classList.add("active")
    }
    handleTabClick(e, t) {
        var a;
        if (this.currentTab === e)
            return;
        this.currentTab = e;
        const n = null === (a = this.tabContent) || void 0 === a ? void 0 : a.querySelectorAll(".shop-tab");
        null == n || n.forEach((e => e.classList.remove("active"))),
        t.classList.add("active"),
        this.highscoreList && (this.highscoreList.innerHTML = ""),
        "climb" === e && (this.currentSubTab = "solo_climb"),
        this.initProfile(e)
    }
    initProfile(e) {
        var t, a;
        const n = Se();
        if (n.id = "loading-leaderboard",
        null === (t = this.tabContent) || void 0 === t || t.appendChild(n),
        this.highscoreList || (this.highscoreList = document.createElement("div"),
        this.highscoreList.id = "highscoreList",
        this.tabContent.appendChild(this.highscoreList)),
        "climb" === e)
            this.createClimbSubTabs(),
            this.fetchLeaderboardData(this.currentSubTab);
        else {
            const t = null === (a = this.tabContent) || void 0 === a ? void 0 : a.querySelector("#climb-subtabs");
            t && t.remove(),
            this.fetchLeaderboardData(e)
        }
        this.toggleShopTabsPointerEvents(!1);
        const o = N.currentRoom.onMessage("leaderboard", (e => {
            const t = JSON.parse(e);
            this.getLeaderboardDOM(t),
            o(),
            this.toggleShopTabsPointerEvents(!0)
        }
        ))
    }
    createClimbSubTabs() {
        var e, t;
        const a = null === (e = this.tabContent) || void 0 === e ? void 0 : e.querySelector("#climb-subtabs");
        a && a.remove();
        const n = document.createElement("div");
        n.id = "climb-subtabs",
        n.style.display = "flex",
        n.style.justifyContent = "center",
        n.style.margin = "10px 0";
        [{
            id: "solo_climb",
            name: "Solo Climb"
        }, {
            id: "climb",
            name: "Climb"
        }].forEach(( ({id: e, name: t}) => {
            const a = document.createElement("div");
            a.classList.add("tab"),
            a.textContent = t,
            a.style.padding = "5px 10px",
            a.style.margin = "0 5px",
            a.style.cursor = "pointer",
            a.style.borderRadius = "5px",
            e === this.currentSubTab && (a.classList.add("active-tab"),
            a.style.backgroundColor = "#444"),
            a.addEventListener("click", ( () => {
                var t;
                if (this.currentSubTab !== e) {
                    this.currentSubTab = e;
                    n.querySelectorAll(".tab").forEach((e => {
                        e.classList.remove("active-tab"),
                        e.style.backgroundColor = ""
                    }
                    )),
                    a.classList.add("active-tab"),
                    a.style.backgroundColor = "#444",
                    this.highscoreList && (this.highscoreList.innerHTML = "");
                    const o = Se();
                    o.id = "loading-leaderboard",
                    null === (t = this.tabContent) || void 0 === t || t.appendChild(o),
                    this.toggleShopTabsPointerEvents(!1),
                    this.fetchLeaderboardData(e);
                    const i = N.currentRoom.onMessage("leaderboard", (e => {
                        const t = JSON.parse(e);
                        this.getLeaderboardDOM(t),
                        i(),
                        this.toggleShopTabsPointerEvents(!0)
                    }
                    ))
                }
            }
            )),
            n.appendChild(a)
        }
        )),
        this.highscoreList && (null === (t = this.tabContent) || void 0 === t || t.insertBefore(n, this.highscoreList))
    }
    fetchLeaderboardData(e) {
        N.currentRoom.send("leaderboard", e)
    }
    toggleShopTabsPointerEvents(e) {
        const t = document.getElementById("shop-tabs");
        t && (t.style.pointerEvents = e ? "auto" : "none");
        const a = document.getElementById("climb-subtabs");
        a && (a.style.pointerEvents = e ? "auto" : "none")
    }
    getLeaderboardDOM(e) {
        var t;
        if (null == this.tabContent)
            return;
        const a = this.tabContent.querySelector("#loading-leaderboard");
        if (a && a.remove(),
        !e || 0 === e.length) {
            const e = document.createElement("div");
            return e.textContent = "No scores available.",
            void (null === (t = this.highscoreList) || void 0 === t || t.appendChild(e))
        }
        var n = 1;
        e.forEach((e => {
            var t, a;
            const o = document.createElement("div");
            o.classList.add("highscore-entry"),
            o.style.cursor = "pointer",
            o.addEventListener("click", (t => Oe(this, void 0, void 0, (function*() {
                t.preventDefault(),
                yield xe.showPlayerProfile(e.id, !0)
            }
            ))));
            const i = document.createElement("div");
            i.classList.add("highscore-entry-background"),
            i.style.backgroundImage = `url('backgrounds_small/${e.background}.jpg')`,
            o.appendChild(i);
            const s = document.createElement("img");
            if (s.style.position = "absolute",
            s.style.width = "auto",
            s.style.height = "64px",
            s.style.right = "3px",
            s.style.bottom = "4px",
            s.src = `/bombs/${e.bomb}.png`,
            o.appendChild(s),
            n < 4) {
                var r = document.createElement("img");
                r.classList.add("hs-placement"),
                o.appendChild(r);
                r.src = "/web/" + ["firstplace", "secondplace", "thirdplace"][n - 1] + ".png"
            }
            if (n++,
            "level" == this.currentTab) {
                var d = document.createElement("div");
                d.classList.add("ld-rp"),
                d.textContent = ce.getLevelFromExp(e.exp).toString() + "LV",
                (l = document.createElement("img")).src = "/web/level.png",
                l.width = 20,
                l.height = 20,
                d.appendChild(l),
                o.appendChild(d)
            }
            if ("win" == this.currentTab) {
                var l, c = document.createElement("div");
                c.classList.add("ld-rp"),
                c.textContent = e.win.toString(),
                (l = document.createElement("img")).src = "/web/crown.png",
                l.width = 20,
                l.height = 20,
                c.appendChild(l),
                o.appendChild(c)
            }
            if ("wordly" == this.currentTab) {
                var m = document.createElement("div");
                m.classList.add("ld-rp"),
                o.appendChild(m);
                var u = document.createElement("div");
                u.textContent = `in ${e.score} guesses  ${Math.floor(e.win)}s`,
                m.appendChild(u)
            }
            if ("climb" == this.currentTab) {
                var p = document.createElement("div");
                p.classList.add("ld-rp");
                var h = "";
                e.win = Math.floor(e.win),
                null != e.win && (h += e.win + "s "),
                p.textContent = h + e.score + " WPP",
                o.appendChild(p)
            }
            if ("scenarios" == this.currentTab) {
                var v = document.createElement("div");
                v.classList.add("ld-rp"),
                v.textContent = "Reached " + e.score.toString(),
                o.appendChild(v)
            }
            null == e.win && (e.win = 0);
            document.createElement("span").textContent = null === (t = e.win) || void 0 === t ? void 0 : t.toString();
            const g = document.createElement("div");
            g.style.position = "relative",
            g.classList.add("highscore-avatar");
            var y = document.createElement("img");
            y.src = `frames/${ce.getFrameFromExp(e.exp)}.png`,
            y.style.width = "140%",
            y.style.height = "140%",
            y.style.objectFit = "cover",
            y.style.position = "absolute",
            y.style.zIndex = "-1",
            y.style.top = "-9px",
            y.style.left = "-7px",
            g.appendChild(y);
            const b = document.createElement("img");
            b.style.width = "100%",
            b.style.height = "100%",
            b.style.borderRadius = "50%",
            b.style.objectFit = "cover",
            b.style.border = "2px solid #000",
            g.appendChild(b),
            $(H(e.id, e.avatar, 64), b),
            o.appendChild(g),
            null == e.username && (e.username = "Unknown");
            const f = document.createElement("div");
            f.classList.add("highscore-name");
            const w = document.createElement("div");
            w.style.marginLeft = "8px",
            w.classList.add("highscore-display-name"),
            w.textContent = e.displayName,
            f.appendChild(w);
            const _ = document.createElement("div");
            _.textContent = e.username,
            _.style.marginLeft = "8px",
            _.classList.add("highscore-actual-name"),
            f.appendChild(_),
            o.appendChild(f),
            null == e.longestWord && (e.longestWord = "");
            const C = document.createElement("div");
            C.style.marginLeft = "8px",
            C.classList.add("highscore-longest-word"),
            C.textContent = e.longestWord,
            f.appendChild(C),
            null === (a = this.highscoreList) || void 0 === a || a.appendChild(o)
        }
        ))
    }
}
var Fe = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class Ke {
    constructor(e, t) {
        this.lobby = e,
        this.panel = t,
        this.initProfile()
    }
    initProfile() {
        this.lobby.send("profile"),
        Ke.listener && (Ke.listener(),
        Ke.listener = null),
        Ke.listener = this.lobby.onMessage("profile", (e => {
            var t, a = JSON.parse(e);
            N.updatePlayer(a);
            var n = null === (t = this.panel) || void 0 === t ? void 0 : t.querySelector(".lobby-main")
              , o = this.getContent();
            n.prepend(o);
            var i = o.querySelector("#display-name");
            if (!u && (localStorage.getItem("dc_refresh") || localStorage.getItem("gc_auth"))) {
                var s = document.createElement("button");
                s.innerText = "Logout",
                s.className = "logout-button",
                s.addEventListener("click", ( () => Fe(this, void 0, void 0, (function*() {
                    if (localStorage.getItem("dc_refresh"))
                        return localStorage.removeItem("dc_refresh"),
                        void (window.location.href = "/");
                    if (localStorage.getItem("gc_auth")) {
                        localStorage.removeItem("gc_auth");
                        const {app: e} = yield y(( () => import("./firebase-4EStdJ18.js")), __vite__mapDeps([0, 1, 2, 3, 4]))
                          , t = yield y(( () => import("./firebase-CzEjhAzx.js")), __vite__mapDeps([1, 2, 3, 4]))
                          , a = t.getAuth(e);
                        yield t.signOut(a).then(( () => {
                            window.location.href = "/"
                        }
                        )).catch((e => {}
                        ))
                    }
                }
                )))),
                i.appendChild(s)
            }
        }
        ))
    }
    getContent() {
        var e, t = N.player;
        this.profile && this.profile.remove(),
        this.profile = xe.getProfileDOM(t);
        var a = null === (e = this.panel) || void 0 === e ? void 0 : e.querySelector(".player-background");
        if (a.style.backgroundImage = `url(background/${null == t ? void 0 : t.background}.jpg)`,
        null != (null == t ? void 0 : t.background)) {
            var n = ce.getBackground(null == t ? void 0 : t.background);
            if (null == n)
                return this.profile;
            a.style.backgroundRepeat = n.tiled ? "repeat" : "no-repeat"
        }
        return this.profile
    }
}
var Ve = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
const Ue = "localhost" === window.location.hostname ? "http://localhost:2567" : "https://server.wordbomb.io";
class Ge {
    constructor(e, t) {
        this.name = e,
        this.icon = t
    }
}
const Je = null != new URLSearchParams(window.location.search).get("frame_id");
class Ye extends E {
    constructor(e) {
        super("lobby.html"),
        this.tabs = [new Ge("rooms","bomb.png"), new Ge("trade","/achievements/win.png"), new Ge("leaderboard","/web/highscore.png"), new Ge("shop","/web/shop.png"), new Ge("news","/web/news.png")],
        this.tabElements = new Map,
        this.menu = e
    }
    open(e) {
        return Ve(this, void 0, void 0, (function*() {
            var e, t;
            yield this.load(),
            this.panel = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector("#lobby-panel"),
            this.tabContent = null === (t = this.container) || void 0 === t ? void 0 : t.querySelector("#tab-content"),
            this.profileDom = new Ke(this.menu.lobby,this.panel),
            this.createTabs(),
            this.switchTab(this.tabs[0]);
            var a = localStorage.getItem("dc_refresh") || localStorage.getItem("gc_auth");
            if (!Je)
                if (a)
                    ;
                else {
                    var n = document.createElement("button");
                    n.id = "login-with-discord",
                    n.innerText = "Sign in with Discord",
                    n.classList.add("close-button"),
                    n.onclick = () => Ve(this, void 0, void 0, (function*() {
                        window.location.href = `${Ue}/auth/login`
                    }
                    )),
                    n.style.background = "linear-gradient(90deg,#5965f2,#5965f2)",
                    n.style.position = "fixed",
                    n.style.bottom = "95px",
                    n.style.left = "50%",
                    n.style.maxWidth = "14em",
                    n.style.height = "3.2em",
                    n.style.transform = "translateX(-50%)",
                    n.style.zIndex = "100";
                    var o = document.createElement("img");
                    o.classList.add("google-button"),
                    o.src = "/google.png",
                    o.onclick = () => Ve(this, void 0, void 0, (function*() {
                        if (!Je)
                            try {
                                const {app: e} = yield y(( () => import("./firebase-4EStdJ18.js")), __vite__mapDeps([0, 1, 2, 3, 4]))
                                  , t = yield y(( () => import("./firebase-CzEjhAzx.js")), __vite__mapDeps([1, 2, 3, 4]))
                                  , a = new t.GoogleAuthProvider
                                  , n = yield t.signInWithPopup(t.getAuth(), a)
                                  , o = yield n.user.getIdToken()
                                  , {data: i} = yield v.http.post("/auth/glogin", {
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        idToken: o
                                    })
                                });
                                i.success ? (localStorage.setItem("gc_auth", "true"),
                                window.location.href = "/") : alert("Authentication failed.")
                            } catch (e) {}
                    }
                    )),
                    o.style.position = "fixed",
                    o.style.bottom = "28px",
                    o.style.left = "50%",
                    o.style.transform = "translateX(-50%)",
                    o.style.zIndex = "100",
                    o.style.cursor = "pointer",
                    this.panel.appendChild(o),
                    this.panel.appendChild(n)
                }
        }
        ))
    }
    switchTab(e) {
        if (this.currentTab !== e && this.tabContent)
            switch (this.tabContent.innerHTML = "",
            this.currentTab = e,
            this.tabElements.forEach(( (t, a) => {
                var n = this.tabs.find((e => e.name === a));
                t.innerHTML = `<img src="${null == n ? void 0 : n.icon}" />`,
                e.name == a && (t.innerHTML = `<img src="${n.icon}" /> ${L.getWord(n.name)}`)
            }
            )),
            e.name) {
            case "rooms":
                new $e(this.menu);
                break;
            case "leaderboard":
                new qe(this.tabContent);
                break;
            case "shop":
                new Xe(this.tabContent);
                break;
            case "trade":
                xe.drawTrade(this.tabContent);
                break;
            case "news":
                this.tabContent.innerHTML = '\n<div class="credits">\n    <p class="crd-last-patch">Last Patch: April 18, 2025</p>\n    <p class="crd-contributors-title">Credits</p>\n    Thank you all for your contributions to WordBomb!\n    <p class="crd-word-moderator">\n        <strong>Dictionary Moderator</strong>\n        <ul class="crd-word-list">\n            <li>cattos <span class="hashtag">#cattalos</span></li>\n            <li>rynamarole <span class="hashtag">#rynamarole</span></li>\n        </ul>\n    </p>\n    <p class="crd-lang-moderators">\n        <strong>Language Moderators</strong>\n    </p>\n    <ul class="crd-lang-list">\n        <li>Spanish: Lex-ico</li>\n        <li>French: revere1991 </li>\n        <li>Indonesian: jarks  </li>\n        <li>German: arcy </li>\n        <li>English: zyth </li>\n        <li>English: rynamarole </li>\n        <li>Brazilian Portuguese: Péssimo  </li>\n    </ul>\n        <p>Join our discord to be became a language moderator for other languages</p>\n    \n    <p class="crd-contributors">\n        <strong>Some of the contributors:</strong>\n    </p>\n    <ul class="crd-contributors-list">\n        <li>.ℓσneℓყ 𝄞♬</li>\n        <li>Chloé</li>\n        <li>ZIKO</li>\n        <li> Sia</li>\n        <li>Mika</li>\n        <li>AZazwinner</li>\n        <li>cotato</li>\n        <li>Mita</li>\n        <li>Maverick</li>\n        <li>vanity</li>\n        <li>Elliott0ne</li>\n        <li>cacaprout</li>\n        <li>chant</li>\n    </ul>\n    <div class="created">\n\n    <div class="crd-contributors">\n    </div>\n    <div class="crd-contributors">\n    </div>\n    <ul class="crd-contributors-list">\n        <li>Endel Dreyer (colyseus.io) </li>\n    </ul>\n    Powered by Colyseus\n    <a href="https://colyseus.io/" target="_blank">\n        <img class="colyseus-logo" src="/colyseus.png" alt="Colyseus">\n    </a>\n</div>\n</div>\n'
            }
    }
    createTabs() {
        var e, t = null === (e = this.panel) || void 0 === e ? void 0 : e.querySelector(".lobby-tabs"), a = !1;
        this.tabs.forEach((e => {
            const n = document.createElement("div");
            n.className = "lobby-tab",
            this.currentTab !== e && a || (n.classList.add("active"),
            a = !0),
            n.id = `lobby-tab-${e.name}`,
            this.tabElements.set(e.name, n),
            n.onclick = () => {
                this.switchTab(e);
                const a = t.querySelector(".lobby-tab.active");
                a && a.classList.remove("active"),
                n.classList.add("active")
            }
            ,
            t.appendChild(n)
        }
        ))
    }
}
var Ze = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class Xe {
    constructor(e) {
        this.tabs = [new Ge("market","web/gems1.png"), new Ge("theme","backgrounds_small/0.jpg"), new Ge("bombs","bombs/1.png"), new Ge("frame","/frame_ui/99.png"), new Ge("key","/web/key.png")],
        this.tabContent = e,
        this.initProfile()
    }
    initProfile() {
        this.currentTab = this.tabs[0],
        this.createTabs(),
        this.updateShopContent()
    }
    createTabs() {
        if (!this.tabContent)
            return;
        const e = document.createElement("div");
        e.id = "shop-tabs",
        this.tabs.forEach((t => {
            const a = document.createElement("div");
            var n = L.getWord(t.name);
            a.className = "shop-tab",
            a.id = t.name,
            a.innerHTML = `\n                <img src="${t.icon}" alt="${n}">\n                <div class="shop-tab-text">${n}</div>\n            `,
            a.onclick = () => {
                e.querySelectorAll(".shop-tab").forEach((e => {
                    e.classList.remove("active")
                }
                )),
                a.classList.add("active"),
                this.currentTab = t,
                this.updateShopContent()
            }
            ,
            e.appendChild(a),
            this.currentTab === t && a.classList.add("active")
        }
        )),
        this.tabContent.appendChild(e)
    }
    switchTab(e) {
        var t;
        null === (t = document.getElementById(e)) || void 0 === t || t.click()
    }
    updateShopContent() {
        return Ze(this, void 0, void 0, (function*() {
            var e;
            if (this.tabContent && (this.shopContent || (this.shopContent = document.createElement("div"),
            this.shopContent.id = "shop-content",
            null === (e = this.tabContent) || void 0 === e || e.appendChild(this.shopContent)),
            this.currentTab && (this.shopContent.innerHTML = "",
            null != N.currentRoom)))
                switch (this.currentTab.name) {
                case "market":
                    yield xe.createMarket(N.currentRoom, this.shopContent);
                    break;
                case "theme":
                    xe.createBackground(N.currentRoom, this.shopContent);
                    break;
                case "bombs":
                    xe.createBombs(N.currentRoom, this.shopContent);
                    break;
                case "frame":
                    xe.createFrames(N.currentRoom, this.shopContent);
                    break;
                case "key":
                    xe.createKeyWindow(N.currentRoom, this.shopContent)
                }
        }
        ))
    }
}
var Qe = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class et {
    hideButtons() {
        for (var e = 0; e < this.buttons.length; e++)
            e > 5 && (this.buttons[e].style.display = "none")
    }
    showButtons() {
        for (var e = 0; e < this.buttons.length; e++)
            this.buttons[e].style.display = "block"
    }
    constructor() {
        this.buttons = [],
        this.isProcessing = !1,
        et.instance = this
    }
    createButton(e, t, a=void 0) {
        this.menuButtons || (this.menuButtons = document.createElement("div"),
        this.menuButtons.id = "menu-buttons",
        document.body.appendChild(this.menuButtons));
        var n = document.createElement("button");
        n.classList.add("menu-button"),
        a && n.classList.add(a);
        var o = document.createElement("img");
        return o.src = e,
        o.width = 32,
        o.height = 32,
        n.appendChild(o),
        this.menuButtons.appendChild(n),
        n.addEventListener("click", ( () => Qe(this, void 0, void 0, (function*() {
            yield t()
        }
        )))),
        n
    }
    open() {
        return Qe(this, void 0, void 0, (function*() {
            var e, t;
            this.buttons.push(this.createButton("/web/settings.png", ( () => Qe(this, void 0, void 0, (function*() {
                yield this.toggleSettings()
            }
            )))));
            var a = this.createButton("/web/chat.png", ( () => Qe(this, void 0, void 0, (function*() {
                yield this.toggleChat()
            }
            ))));
            this.buttons.push(this.createButton("/emojis/0.png", ( () => Qe(this, void 0, void 0, (function*() {
                var e = document.getElementById("emoji-panel");
                if (e)
                    return void e.remove();
                (e = document.createElement("div")).id = "emoji-panel",
                e.classList.add("emoji-panel"),
                requestAnimationFrame(( () => {
                    e.classList.add("active")
                }
                )),
                ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach((t => {
                    var a = document.createElement("img");
                    a.classList.add("emoji"),
                    a.src = "/emojis/" + t + ".png",
                    a.onclick = () => {
                        var a;
                        null === (a = At.room) || void 0 === a || a.send("emoji", {
                            emoji: t
                        }),
                        null == e || e.remove()
                    }
                    ,
                    e.appendChild(a)
                }
                )),
                this.menuButtons.appendChild(e);
                const t = a => {
                    e.contains(a.target) || (e.remove(),
                    document.removeEventListener("pointerup", t))
                }
                ;
                document.addEventListener("pointerup", t)
            }
            ))))),
            this.buttons.push(this.createButton("/web/search.png", ( () => Qe(this, void 0, void 0, (function*() {
                xe.createLogWindow()
            }
            ))))),
            a.appendChild(xe.createChatBubble()),
            this.buttons.push(a),
            this.buttons.push(this.createButton("/web/highscore.png", ( () => Qe(this, void 0, void 0, (function*() {
                yield this.toggleHighscores()
            }
            )))));
            var n = this.createButton("/web/categories.png", ( () => Qe(this, void 0, void 0, (function*() {
                yield xe.openCategoriesScreen()
            }
            ))));
            this.buttons.push(this.createButton("/web/history.png", ( () => Qe(this, void 0, void 0, (function*() {
                xe.openHistoryScreen()
            }
            ))))),
            this.buttons.push(n),
            (null === (t = null === (e = N.player) || void 0 === e ? void 0 : e.id) || void 0 === t ? void 0 : t.toString().length) > 10 && this.buttons.push(this.createButton("/web/achivements.png", ( () => Qe(this, void 0, void 0, (function*() {
                yield this.toggleAchievements()
            }
            ))))),
            this.buttons.push(this.createButton("/web/shop.png", ( () => Qe(this, void 0, void 0, (function*() {
                yield this.toggleShop()
            }
            ))), "shine-button"));
            var o = this.createButton("/web/buffs.png", ( () => Qe(this, void 0, void 0, (function*() {
                xe.openBuffsWindow()
            }
            ))));
            o.classList.add("imp-btn"),
            this.buttons.push(o)
        }
        ))
    }
    toggleHighscores() {
        return Qe(this, void 0, void 0, (function*() {
            var e = document.getElementById("hs-window");
            if (null == e) {
                var t = document.createElement("div");
                t.id = "hs-window",
                t.classList.add("gm-window"),
                t.classList.add("full-window"),
                t.classList.add("hs-panel");
                var a = document.createElement("div");
                a.classList.add("hs-container"),
                t.appendChild(a),
                new qe(a),
                document.body.appendChild(t);
                var n = document.createElement("button");
                n.classList.add("window-close-button"),
                n.addEventListener("click", ( () => {
                    null == t || t.remove(),
                    t = null
                }
                )),
                null == t || t.appendChild(n)
            } else
                e.remove()
        }
        ))
    }
    toggleAchievements() {
        return Qe(this, void 0, void 0, (function*() {
            if (!this.isProcessing) {
                this.isProcessing = !0;
                try {
                    if (null != this.achivementPanel && void 0 !== this.achivementPanel.container)
                        return this.achivementPanel.close(),
                        this.achivementPanel.container = void 0,
                        void (this.achivementPanel = void 0);
                    this.achivementPanel = new Z,
                    yield this.achivementPanel.open()
                } catch (e) {} finally {
                    this.isProcessing = !1
                }
            }
        }
        ))
    }
    toggleChat() {
        return Qe(this, void 0, void 0, (function*() {
            var e;
            if (null != this.chatPanel)
                return this.chatPanel.remove(),
                this.chatPanel = null,
                Ee.instance = null,
                void (Ee.isInputActive = !1);
            var t = document.getElementById("chat-notification");
            null != t && (t.style.display = "none",
            t.textContent = ""),
            this.chatPanel = xe.createFloatingWindow(),
            this.chatPanel.style.height = "70%",
            this.chatPanel.style.maxHeight = "500px";
            var a = new Ee(this.chatPanel);
            document.body.appendChild(this.chatPanel),
            xe.addDragging(this.chatPanel);
            var n = document.createElement("button");
            n.classList.add("window-close-button"),
            n.onclick = () => {
                var e;
                Ee.lastInputValue = a.input.value,
                null === (e = this.chatPanel) || void 0 === e || e.remove(),
                this.chatPanel = null,
                Ee.instance = null,
                Ee.isInputActive = !1
            }
            ,
            null === (e = this.chatPanel) || void 0 === e || e.appendChild(n)
        }
        ))
    }
    toggleShop() {
        return Qe(this, arguments, void 0, (function*(e="") {
            if (null != this.shopPanel)
                return this.shopPanel.remove(),
                void (this.shopPanel = null);
            this.shopPanel = xe.createFloatingWindow("80%"),
            this.shopPanel.classList.add("shop-window");
            var t = new Xe(this.shopPanel);
            document.body.appendChild(this.shopPanel);
            var a = document.createElement("button");
            a.classList.add("window-close-button"),
            a.onclick = () => {
                var e;
                null === (e = this.shopPanel) || void 0 === e || e.remove(),
                this.shopPanel = null
            }
            ,
            this.shopPanel.appendChild(a),
            e && t.switchTab(e)
        }
        ))
    }
    toggleSettings() {
        return Qe(this, void 0, void 0, (function*() {
            var e = document.getElementById("setting-panel");
            e ? e.remove() : (this.settingsPanel = xe.createSettingPanel(),
            document.body.appendChild(this.settingsPanel))
        }
        ))
    }
    destroy() {
        if (null != this.chatPanel)
            return this.chatPanel.remove(),
            this.chatPanel = null,
            void (Ee.instance = null);
        et.instance = null,
        this.settingsPanel && (this.settingsPanel.remove(),
        this.settingsPanel = null),
        this.menuButtons && (this.menuButtons.remove(),
        this.menuButtons = null)
    }
}
const tt = [{
    key: "words",
    icon: "/web/word.png",
    title: "words",
    desct: "words_desct",
    visible: () => 5 == At.room.state.mode,
    onClick: () => {
        xe.openWordScreen()
    }
}, {
    key: "scenarios",
    icon: "/web/scenario.png",
    title: "scenarios",
    desct: "scenarios_desct",
    visible: () => 0 == At.room.state.mode,
    onClick: () => {
        xe.openScenarioScreen()
    }
}, {
    key: "multi_lang",
    icon: "/web/mlang.png",
    title: "multi_lang",
    values: [!0, !1],
    desct: "multi_lang_desct",
    visible: () => 7 != At.room.state.mode
}, {
    key: "wpp",
    icon: "/web/wpp.png",
    title: "wpp",
    values: [],
    desct: "wpp_desct",
    slider: "true",
    visible: () => 0 == At.room.state.mode && 0 == At.room.state.sc,
    content: (e, t) => {
        let a = at.CTNBackButton().outerHTML;
        return a += `\n        <div class="prompt-difficulty">\n\n            <h2>Words Per Prompt</h2>\n            <div class="wb-dropdown">\n                <select id="difficulty-level" class="wb-dropdown">\n                    <option value="0" ${0 === e ? "selected" : ""}>Default</option>\n                    <option value="1" ${1 === e ? "selected" : ""}>${L.getWord("at_least")}</option>\n                    <option value="2" ${2 === e ? "selected" : ""}>${L.getWord("at_most")}</option>\n                </select>\n                <input type="range" id="difficulty-slider" min="1" max="5000" value="${t}">\n                <input type="number" class="cw-input" id="difficulty-input" value="${t}" min="1" max="5000" step="1">\n                <span class="prompt-diff-text"></span>\n            </div>\n            <p>${L.getWord("wpp_desct")}</p>\n        </div>\n    `,
        a
    }
}, {
    key: "speed",
    icon: "/web/speed.png",
    title: "speed",
    values: ce.speeds.map((e => e)),
    desct: "speed_desct",
    visible: () => 8 != At.room.state.mode && 9 != At.room.state.mode && 0 == At.room.state.sc
}, {
    key: "difficulty",
    icon: "/web/difficulty.png",
    title: "difficulty",
    values: ["normal", "challenge"],
    desct: "difficulty_desct",
    visible: () => 2 != At.room.state.diff && -1 == At.room.state.wpp && 7 != At.room.state.mode && 8 != At.room.state.mode && 1 != At.room.state.mode && 3 != At.room.state.mode && 2 != At.room.state.mode && 6 != At.room.state.mode && 0 == At.room.state.sc && 9 != At.room.state.mode
}, {
    key: "heart",
    icon: "/web/heart.png",
    title: "heart",
    values: ["1", "2", "3"],
    desct: "heart_desct",
    visible: () => 8 != At.room.state.mode && 0 == At.room.state.sc && 9 != At.room.state.mode
}, {
    key: "bonus_alphabet",
    icon: "/web/letters.png",
    title: "bonus_alphabet",
    visible: () => 0 == At.room.state.mode && 0 == At.room.state.sc,
    onClick: () => {
        xe.openLetterScreen()
    }
}, {
    key: "max_player",
    icon: "/web/group.png",
    title: "max_player",
    values: ["no_limit", "2", "4", "6", "8", "10"],
    desct: "max_player_desct"
}, {
    key: "monsters",
    icon: "/monsters/word.png",
    title: "monsters",
    values: [],
    desct: "monsters_desct",
    onClick: () => {
        xe.openMonsterScreen()
    }
    ,
    visible: () => 7 == At.room.state.mode
}, {
    key: "practice",
    icon: "/bomb.png",
    title: "practice",
    values: ["off", "on"],
    desct: "practice_desc",
    visible: () => 0 == At.room.state.mode && 0 == At.room.state.sc
}, {
    key: "guests",
    icon: "/web/guests.png",
    title: "guests",
    values: [!0, !1],
    desct: "guests_desct",
    visible: () => 9 != At.room.state.mode
}];
class at {
    close() {
        this.container.parentElement.remove()
    }
    constructor(e) {
        this.container = document.createElement("div"),
        this.container.classList.add("container-settings"),
        e.appendChild(this.container);
        var t = xe.createTopRightCornerCloseButton();
        t.onclick = e => {
            e.stopPropagation(),
            this.close()
        }
        ,
        e.appendChild(t),
        this.init()
    }
    handleSettingChange(e, t) {
        At.room && ("no_limit" == t && (t = "-1"),
        At.room.send("settings", {
            key: e,
            value: t
        }),
        this.container.innerHTML = "",
        this.container.appendChild(Se()))
    }
    sendWpp(e) {
        At.room.send("settings", {
            key: "wpp",
            value: e
        })
    }
    init() {
        if (!this.dontRefresh && At.room && (this.container.innerHTML = "",
        this.dontRefresh = !1,
        tt.forEach((e => {
            if (!e.visible || e.visible()) {
                e.values = e.values;
                var t = this.createCTNValueItem(L.getWord(e.key), e.icon, function(e, t) {
                    switch (e) {
                    case "guests":
                        return t.guests ? L.getWord("allowed") : L.getWord("not_allowed");
                    case "speed":
                        return t.speed + "x";
                    case "difficulty":
                        return L.getWord(ce.getDifficulties().find((e => e.id == t.diff)).name);
                    case "heart":
                        return t.heart.toString();
                    case "max_player":
                        return -1 == t.maxp ? L.getWord("no_limit") : t.maxp.toString();
                    case "wpp":
                        return -1 == t.wpp ? L.getWord("default") : 1 == t.wpp_s ? L.getWord("at_least") + ` ${t.wpp} wpp` : 2 == t.wpp_s ? L.getWord("at_most") + ` ${t.wpp} wpp` : `ERROR ${t.wpp.toString()} wpp`;
                    case "practice":
                        return 2 == t.diff ? L.getWord("on") : L.getWord("off");
                    case "multi_lang":
                        return 1 == t.mlang ? L.getWord("on") : L.getWord("off")
                    }
                    return ""
                }(e.key, At.room.state));
                e.onClick && t.addEventListener("click", (t => {
                    t.stopPropagation(),
                    e.onClick(),
                    this.close()
                }
                )),
                e.content ? t.onclick = t => {
                    var a;
                    this.dontRefresh = !0,
                    t.stopPropagation(),
                    this.container.innerHTML = e.content(At.room.state.wpp_s, At.room.state.wpp),
                    null === (a = this.container.querySelector(".wb-cnt-back")) || void 0 === a || a.addEventListener("click", ( () => {
                        this.dontRefresh = !1,
                        this.init()
                    }
                    ));
                    const n = document.getElementById("difficulty-slider")
                      , o = document.getElementById("difficulty-input")
                      , i = document.getElementById("difficulty-level")
                      , s = () => {
                        "0" === i.value ? (n.style.display = "none",
                        o.style.display = "none") : (n.style.display = "block",
                        o.style.display = "block")
                    }
                    ;
                    n && o && i && (s(),
                    i.addEventListener("change", ( () => {
                        var e = i.value;
                        s(),
                        At.room.send("settings", {
                            key: "wpp_s",
                            value: e
                        });
                        var t = At.room.onMessage("st-change", ( () => {
                            t(),
                            o.value = At.room.state.wpp.toString(),
                            n.value = At.room.state.wpp.toString()
                        }
                        ))
                    }
                    )),
                    n.addEventListener("input", ( () => {
                        const e = n.value;
                        o.value = e,
                        clearTimeout(this.debounceTimer),
                        this.debounceTimer = setTimeout(( () => this.sendWpp(+o.value)), 400)
                    }
                    )),
                    o.addEventListener("input", ( () => {
                        const e = o.value;
                        n.value = e,
                        o.value = e,
                        clearTimeout(this.debounceTimer),
                        this.debounceTimer = setTimeout(( () => this.sendWpp(+n.value)), 400)
                    }
                    )))
                }
                : e.onClick || t.addEventListener("click", (t => {
                    if (At.room.state.host == N.gamePlayer.session_id) {
                        t.stopPropagation(),
                        this.container.innerHTML = "";
                        var a = at.CTNBackButton();
                        a.onclick = e => {
                            e.stopPropagation(),
                            this.init()
                        }
                        ,
                        this.container.appendChild(a);
                        var n = document.createElement("span");
                        n.classList.add("wb-cnt-title"),
                        n.textContent = L.getWord(e.title);
                        var o = document.createElement("span");
                        o.classList.add("wb-cnt-desct"),
                        o.textContent = L.getWord(e.desct),
                        this.container.appendChild(n),
                        this.container.appendChild(o),
                        e.values.forEach((t => {
                            var a = this.createCTNITem(function(e, t) {
                                switch (e) {
                                case "speed":
                                    return t + "x";
                                case "difficulty":
                                    return L.getWord(ce.getDifficulties().find((e => e.name == t)).name + "");
                                case "heart":
                                    return parseInt(t) + "";
                                case "max_player":
                                    return "no_limit" == t ? L.getWord("no_limit") : t;
                                case "wpp":
                                    return -1 == parseInt(t) ? L.getWord("default") : `${t}`;
                                case "rp":
                                case "practice":
                                    return "on" == t ? L.getWord("on") : L.getWord("off");
                                case "guests":
                                    return "true" == t ? L.getWord("allowed") : L.getWord("not_allowed");
                                case "multi_lang":
                                    return "true" == t ? L.getWord("on") + '<span class="ct-extra">+🔥Exp</span>' : L.getWord("off")
                                }
                                return ""
                            }(e.key, t.toString()));
                            a.onclick = a => {
                                a.stopPropagation(),
                                this.init(),
                                this.handleSettingChange(e.key, t.toString())
                            }
                            ,
                            this.container.appendChild(a)
                        }
                        ))
                    }
                }
                )),
                this.container.appendChild(t)
            }
        }
        )),
        this.container)) {
            this.container.addEventListener("click", (e => {
                e.stopPropagation()
            }
            ));
            const e = t => {
                this.container.contains(t.target) || (this.close(),
                document.removeEventListener("pointerdown", e))
            }
            ;
            document.addEventListener("pointerdown", e)
        }
    }
    createCTNITem(e) {
        var t = document.createElement("div");
        t.classList.add("wb-cnt-item"),
        t.id = "settings-" + e;
        var a = document.createElement("div");
        a.classList.add("wb-cnt-context");
        var n = document.createElement("span");
        return n.innerHTML = e,
        n.classList.add("wb-cnt-text"),
        a.appendChild(n),
        t.appendChild(a),
        t
    }
    static CTNBackButton() {
        var e = document.createElement("div");
        e.classList.add("wb-cnt-item"),
        e.classList.add("wb-cnt-back");
        var t = document.createElement("div");
        t.classList.add("wb-cnt-context"),
        t.textContent = L.getWord("back");
        var a = document.createElement("img");
        return a.src = "/web/back.png",
        a.alt = "Back",
        t.appendChild(a),
        e.appendChild(t),
        e
    }
    createCTNValueItem(e, t, a) {
        var n = document.createElement("div");
        n.classList.add("wb-cnt-item");
        var o = document.createElement("div");
        o.classList.add("wb-cnt-context");
        var i = document.createElement("img");
        i.src = t;
        var s = document.createElement("span");
        s.innerHTML = e,
        s.classList.add("wb-cnt-text"),
        o.appendChild(i),
        o.appendChild(s);
        var r = document.createElement("div");
        return r.classList.add("wb-cnt-value"),
        r.innerHTML = a,
        n.appendChild(o),
        n.appendChild(r),
        n
    }
}
var nt = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class ot extends E {
    constructor() {
        super("navigation.html"),
        this.isProcessing = !1
    }
    open() {
        return nt(this, void 0, void 0, (function*() {
            var e, t, a, n, o, i, s, r, d;
            yield this.load();
            var l = At.room;
            const c = document.getElementById("navigation-languages");
            (null === (e = this.container) || void 0 === e ? void 0 : e.querySelector("#navigation-settings")).addEventListener("click", ( () => nt(this, void 0, void 0, (function*() {
                var e = document.getElementById("nav-container-settings");
                if (e)
                    return e.remove(),
                    void this.gameSettingsDOM;
                (e = document.createElement("div")).id = "nav-container-settings",
                document.body.appendChild(e),
                this.gameSettingsDOM = new at(e)
            }
            ))));
            const m = ce.getLanguages()
              , h = m[ce.getLocaleByName(l.state.locale)]
              , v = null == c ? void 0 : c.querySelector("img");
            (null === (t = this.container) || void 0 === t ? void 0 : t.querySelector("#gamemode-container")).addEventListener("click", ( () => nt(this, void 0, void 0, (function*() {
                xe.openGameModeScreen()
            }
            ))));
            (null === (a = this.container) || void 0 === a ? void 0 : a.querySelector("#room-lock-container")).onclick = () => {
                this.onToggleRoomLock && this.onToggleRoomLock()
            }
            ;
            (null === (n = this.container) || void 0 === n ? void 0 : n.querySelector("#room-spectator")).addEventListener("click", ( () => {
                var e;
                null === (e = this.onSpectateToggle) || void 0 === e || e.call(this)
            }
            ));
            const g = null === (o = this.container) || void 0 === o ? void 0 : o.querySelector("#room-invite");
            !u || F() ? g.style.display = "none" : g.addEventListener("click", ( () => nt(this, void 0, void 0, (function*() {
                yield p.commands.openInviteDialog()
            }
            ))));
            (null === (i = this.container) || void 0 === i ? void 0 : i.querySelector("#room-edit")).addEventListener("click", ( () => {
                var e;
                if (!document.getElementById("room-edit-window")) {
                    var t = (null === (e = N.gamePlayer) || void 0 === e ? void 0 : e.session_id) == l.state.host
                      , a = xe.createFloatingWindow("min-content");
                    a.id = "room-edit-window";
                    var n = xe.createTitle(L.getWord("room_title"));
                    if (a.appendChild(n),
                    t) {
                        var o = xe.createDesct(L.getWord("room_title_desct"));
                        a.appendChild(o)
                    }
                    var i = xe.createInput();
                    if (i.value = N.currentTitle,
                    a.appendChild(i),
                    t) {
                        var s = xe.createButton();
                        s.textContent = L.getWord("save"),
                        s.addEventListener("click", ( () => {
                            var e = i.value;
                            if (e.length < 3 || e.length > 32) {
                                var t = xe.createAlert(L.getWord("length_error"));
                                return a.appendChild(t),
                                void setTimeout(( () => {
                                    null == t || t.remove()
                                }
                                ), 2e3)
                            }
                            At.room.send("title", {
                                title: e
                            }),
                            a.remove()
                        }
                        )),
                        a.appendChild(s)
                    } else
                        i.disabled = !0;
                    var r = xe.createTopRightCornerCloseButton();
                    r.addEventListener("click", ( () => {
                        a.remove()
                    }
                    )),
                    a.appendChild(r),
                    document.body.appendChild(a)
                }
            }
            )),
            h && v && (v.src = `flag/${h.flag}.png`);
            for (let u of m)
                this.addLanguageIcon(u.flag + ".png", u.name, u.locale, c);
            for (let u of ce.speeds)
                this.addSpeed(u);
            this.updateBombs(),
            this.updateBackgrounds(),
            this.setBackground(l.state.background, !0),
            this.setSpectate((null === (s = N.gamePlayer) || void 0 === s ? void 0 : s.spectating) || !1),
            this.setBomb(null === (r = N.gamePlayer) || void 0 === r ? void 0 : r.bomb, !0),
            this.setLocale(h.locale, !0),
            this.setGameMode(l.state.mode),
            this.setLocked(l.state.locked);
            var y = null === (d = this.container) || void 0 === d ? void 0 : d.querySelector("#room-leave");
            F() ? y.addEventListener("touchstart", ( () => {
                l.leave(!0)
            }
            )) : y.addEventListener("click", ( () => {
                l.leave(!0)
            }
            )),
            l.state.mlang ? this.hideLanguagePanel() : this.showLanguagePanel()
        }
        ))
    }
    updateBombs() {
        var e = N.player;
        if (null == e)
            return;
        var t = null == e ? void 0 : e.bombs;
        const a = document.querySelector("#nav-container-bomb ul");
        if (!a)
            return;
        a.querySelectorAll("li").forEach((e => e.remove()));
        var n = ce.bombs.map((e => new de(e.id,e.unlocked,e.price,e.diamondPrice)));
        (n = n.sort(( (e, t) => e.price - t.price))).forEach((e => {
            var a = t.split(",");
            e.unlocked = void 0 !== a.find((t => parseInt(t) == e.id)),
            e.unlocked && this.addBomb(e)
        }
        ));
        const o = document.createElement("li")
          , i = document.createElement("img");
        i.src = "/web/add.png",
        i.classList.add("nav-add-icon"),
        o.addEventListener("click", ( () => nt(this, void 0, void 0, (function*() {
            et.instance && (yield et.instance.toggleShop("bombs"))
        }
        )))),
        o.appendChild(i),
        a.appendChild(o)
    }
    updateBackgrounds() {
        var e = N.player;
        if (null == e)
            return;
        var t = null == e ? void 0 : e.backgrounds;
        const a = document.querySelector("#nav-container-background ul");
        if (!a)
            return;
        a.querySelectorAll("li").forEach((e => e.remove()));
        var n = ce.backgrounds.map((e => new le(e.id,e.unlocked,e.price,e.diamondPrice)));
        (n = n.sort(( (e, t) => e.price - t.price))).forEach((e => {
            var a = t.split(",");
            e.unlocked = void 0 !== a.find((t => parseInt(t) == e.id)),
            e.unlocked && this.addBackground(e)
        }
        )),
        this.addBackground({
            id: 98,
            unlocked: !0,
            price: 0,
            diamondPrice: 0,
            tiled: !1
        });
        const o = document.createElement("li")
          , i = document.createElement("img");
        i.src = "/web/add.png",
        i.classList.add("nav-add-icon"),
        o.addEventListener("click", ( () => nt(this, void 0, void 0, (function*() {
            et.instance && (yield et.instance.toggleShop("theme"))
        }
        )))),
        o.appendChild(i),
        a.appendChild(o)
    }
    setLocked(e) {
        var t, a, n = null === (t = this.container) || void 0 === t ? void 0 : t.querySelector("#room-lock-text");
        n && (n.textContent = e ? L.getWord("private") : L.getWord("public"));
        var o = null === (a = this.container) || void 0 === a ? void 0 : a.querySelector("#room-lock-image");
        o && (o.src = e ? "web/lock_icon.png" : "web/unlock_icon.png")
    }
    addBackground(e) {
        const t = document.querySelector("#nav-container-background ul");
        if (!t)
            return;
        const a = document.createElement("li")
          , n = document.createElement("img");
        if (n.src = `backgrounds_small/${e.id}.jpg`,
        n.alt = e.id.toString(),
        n.classList.add("background-icon"),
        a.appendChild(n),
        e.unlocked)
            a.onclick = () => this.setBackground(e.id, !1);
        else {
            var o = document.createElement("img");
            o.src = "/web/lock_icon.png",
            o.alt = "Locked",
            o.classList.add("background-icon-lock"),
            a.appendChild(o)
        }
        t.appendChild(a)
    }
    addBomb(e) {
        const t = document.querySelector("#nav-container-bomb ul");
        if (!t)
            return;
        const a = document.createElement("li")
          , n = document.createElement("img");
        if (n.src = `bombs/${e.id}.png`,
        n.alt = e.id.toString(),
        n.classList.add("nav-bomb-icon"),
        a.appendChild(n),
        e.unlocked)
            a.onclick = () => this.setBomb(e.id, !1);
        else {
            var o = document.createElement("img");
            o.src = "/web/lock_icon.png",
            o.alt = "Locked",
            o.classList.add("bomb-icon-lock"),
            a.appendChild(o)
        }
        t.appendChild(a)
    }
    setBackgroundOwner(e) {
        if (e) {
            var t, a = document.getElementById("background-owner");
            if (a)
                (t = a.querySelector(".bck-owner")) && $(H(e.auth_id, e.avatar, 64), t);
            else
                (a = document.createElement("div")).id = "background-owner",
                (t = document.createElement("img")).classList.add("bck-owner"),
                $(H(e.auth_id, e.avatar, 64), t),
                a.appendChild(t),
                document.getElementById("background-container").appendChild(a)
        }
    }
    setBackground(e, t) {
        const a = ce.backgrounds.find((t => t.id === e));
        if (!a)
            return void (document.getElementById("navigation-background").style.display = "none");
        document.getElementById("navigation-background").style.display = "block";
        const n = document.getElementById("background-selected-image");
        n && (n.src = `backgrounds_small/${a.id}.jpg`);
        const o = document.querySelector("#nav-container-background ul");
        o && this.selectedBackground && this.selectedBackground.classList.remove("selected");
        const i = Array.from((null == o ? void 0 : o.querySelectorAll("img")) || []).find((e => e.alt === a.id.toString()));
        i && (i.classList.add("selected"),
        this.selectedBackground = i),
        this.onBackgroundChange && !t && this.onBackgroundChange(e)
    }
    setBomb(e, t) {
        const a = ce.bombs.find((t => t.id === e));
        if (!a)
            return;
        const n = document.getElementById("background-selected-bomb");
        n && (n.src = `/bombs/${a.id}.png`);
        const o = document.querySelector("#nav-container-bomb ul");
        o && this.selectedBomb && this.selectedBomb.classList.remove("selected");
        const i = Array.from((null == o ? void 0 : o.querySelectorAll("img")) || []).find((e => e.alt === a.id.toString()));
        i && (i.classList.add("selected"),
        this.selectedBomb = i),
        this.onBombChange && !t && this.onBombChange(e)
    }
    addSpeed(e) {
        const t = document.querySelector("#nav-container-speed ul");
        if (!t)
            return;
        const a = document.createElement("li");
        a.textContent = `${e}x`,
        a.onclick = () => {
            var t;
            return null === (t = this.onSpeedChange) || void 0 === t ? void 0 : t.call(this, e)
        }
        ,
        t.appendChild(a)
    }
    setGameMode(e) {
        var t;
        (null === (t = this.container) || void 0 === t ? void 0 : t.querySelector("#background-selected-gamemode")).src = `gamemodes/${e}.png`
    }
    addLanguageIcon(e, t, a, n) {
        const o = document.querySelector("#nav-container-language ul");
        if (!o)
            return;
        const i = document.createElement("li")
          , s = document.createElement("img");
        s.src = `flag/${e}`,
        s.alt = t,
        s.classList.add("language-icon"),
        i.onclick = () => {
            var e;
            null === (e = this.onLanguageChange) || void 0 === e || e.call(this, a)
        }
        ,
        i.appendChild(s),
        o.appendChild(i)
    }
    setSpectate(e) {
        var t, a, n = null === (t = this.container) || void 0 === t ? void 0 : t.querySelector("#room-spectate-image");
        const o = null === (a = this.container) || void 0 === a ? void 0 : a.querySelector("#room-spectate-text");
        e ? (n.src = "web/play.png",
        o.textContent = L.getWord("play")) : (n.src = "web/spectate.png",
        o.textContent = L.getWord("spectate"))
    }
    setLocale(e, t) {
        var a, n;
        const o = ce.getLanguages().find((t => t.locale === e));
        if (!o)
            return;
        if (At.room && At.room.state) {
            var i = null === (a = this.container) || void 0 === a ? void 0 : a.querySelector("#room-lock-text");
            i && (i.textContent = At.room.state.locked ? L.getWordLocale("private", o.locale) : L.getWordLocale("public", o.locale))
        }
        var s = N.gamePlayer;
        const r = null === (n = this.container) || void 0 === n ? void 0 : n.querySelector("#room-spectate-text");
        s.spectating ? r.textContent = L.getWordLocale("play", e) : r.textContent = L.getWordLocale("spectate", e);
        const d = document.getElementById("navigation-languages")
          , l = null == d ? void 0 : d.querySelector("img");
        l && (l.src = `flag/${o.flag}.png`);
        const c = document.querySelector("#nav-container-language ul");
        c && this.selectedLanguageIcon && this.selectedLanguageIcon.classList.remove("selected");
        const m = Array.from((null == c ? void 0 : c.querySelectorAll("img")) || []).find((e => e.alt === o.name));
        m && (m.classList.add("selected"),
        this.selectedLanguageIcon = m),
        this.onLanguageChange && !t && this.onLanguageChange(e)
    }
    showLanguagePanel() {
        var e, t = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector("#navigation-languages");
        t && (t.style.display = "flex")
    }
    hideLanguagePanel() {
        var e, t = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector("#navigation-languages");
        t && (t.style.display = "none")
    }
}
var it = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class st {
    constructor(e, t, a) {
        this.currentCombo = 0,
        this.player = t,
        this.isLocal = a,
        this.container = e,
        this.element = this.createPlayerElement(),
        this.disconnect(t.dc),
        At.room.state.mlang && this.showLanguage()
    }
    spawnedSomething() {
        this.element.style.animation = "spwn 1s",
        setTimeout(( () => {
            this.element.style.animation = ""
        }
        ), 1e3)
    }
    onClicked() {
        return it(this, void 0, void 0, (function*() {
            yield xe.showPlayerProfile(this.player.auth_id)
        }
        ))
    }
    setDisplayName(e) {
        this.displayName.innerText = e
    }
    createPlayerElement() {
        const e = document.createElement("div");
        e.classList.add("po-person-wrapper");
        const t = window.innerWidth / 2
          , a = window.innerHeight / 2;
        e.style.transform = `translate(${t}px, ${a}px)`,
        this.avatarHolder = document.createElement("div"),
        this.avatarHolder.classList.add("po-avatar-holder"),
        this.avatar = this.avatarHolder;
        const n = document.createElement("img");
        if ($(H(this.player.auth_id, this.player.avatar, 256), n),
        n.classList.add("po-avatar"),
        n.addEventListener("click", this.onClicked.bind(this)),
        n.style.border = this.isLocal ? "2px solid #ffbf56" : "2px solid #333333",
        this.displayName = document.createElement("div"),
        this.displayName.innerText = this.player.username,
        this.displayName.classList.add("po-name"),
        this.displayName.style.color = function(e, t) {
            if (!e)
                return "#ffffff";
            switch (t) {
            case 0:
                return "#fff";
            case 1:
                return "#c4c9ff";
            case 2:
                return "#ffaa5e";
            case 3:
                return "#00fc00";
            case 4:
                return "#15e8bd";
            case 5:
                return "#e51e63";
            case 6:
                return "#c626d4";
            case 7:
                return "gold";
            case 8:
                return "#ba8c5f";
            case 10:
                return "#ff0000";
            default:
                return "#ffffff"
            }
        }(this.player.auth_id, this.player.type),
        this.heartContainer = document.createElement("div"),
        this.heartContainer.classList.add("po-heart-container"),
        this.lastWrittenWord = document.createElement("div"),
        this.lastWrittenWord.classList.add("po-last-text"),
        this.player.type > 0) {
            var o = document.createElement("img");
            o.src = `/member_icons/${this.player.type}.png`,
            o.classList.add("po-trusted"),
            this.avatarHolder.appendChild(o)
        }
        if (-1 != this.player.frame) {
            var i = document.createElement("img");
            i.classList.add("po-holder"),
            i.src = `/frame/${this.player.frame}.png`,
            this.avatarHolder.appendChild(i)
        }
        return e.appendChild(this.displayName),
        this.avatarHolder.appendChild(n),
        this.avatarHolder.appendChild(this.heartContainer),
        e.appendChild(this.avatarHolder),
        e.appendChild(this.lastWrittenWord),
        this.container.appendChild(e),
        e
    }
    setFrame(e) {
        var t = this.avatarHolder.querySelector(".po-holder");
        -1 != e ? (t || ((t = document.createElement("img")).classList.add("po-holder"),
        this.avatarHolder.appendChild(t)),
        t.src = `/frame/${e}.png`) : t && t.remove()
    }
    disconnect(e) {
        e ? (this.element.style.filter = "grayscale(100%)",
        this.lastWrittenWord.innerText = "⏳⏳⏳") : (this.element.style.filter = "none",
        this.lastWrittenWord.innerText = "")
    }
    health_increased() {
        return it(this, void 0, void 0, (function*() {
            const e = document.createElement("img");
            e.src = "/heart.png",
            e.classList.add("heart-increased"),
            this.avatar.appendChild(e),
            setTimeout(( () => {
                null == e || e.remove()
            }
            ), 2e3),
            r.play("newheart", {
                volume: .08 * V.effects
            })
        }
        ))
    }
    setHeart(e) {
        this.heartContainer.innerHTML = "";
        for (let t = 0; t < e; t++) {
            const e = document.createElement("img");
            e.src = "/heart.png",
            e.classList.add("po-heart"),
            this.heartContainer.appendChild(e)
        }
        this.eliminate(0 === e)
    }
    spawnEmoji(e) {
        return it(this, void 0, void 0, (function*() {
            const t = .5 * Math.random() + .5;
            yield r.play("emoji", {
                volume: .01 * V.effects,
                speed: t
            });
            var a = this.element.querySelector(".po-avatar-holder")
              , n = document.createElement("img");
            n.src = `/emojis/${e}.png`,
            n.classList.add("po-emoji"),
            null == a || a.appendChild(n),
            setTimeout(( () => {
                n.remove()
            }
            ), 3e3)
        }
        ))
    }
    destroy() {
        this.element.remove()
    }
    setCombo(e) {
        this.comboText || (this.comboText = document.createElement("div"),
        this.comboText.classList.add("po-combo-text"),
        this.comboText.innerText = this.player.combo + "x",
        this.avatarHolder.appendChild(this.comboText)),
        e >= 6 ? this.comboImage || (this.comboImage = document.createElement("img"),
        this.comboImage.src = "/web/combo.gif",
        this.comboImage.classList.add("po-combo-gif"),
        this.avatarHolder.appendChild(this.comboImage),
        this.isLocal && r.play("combo-6", {
            volume: .1 * V.effects
        })) : this.comboImage && (this.comboImage.remove(),
        this.comboImage = null),
        e != this.currentCombo && (this.currentCombo = e,
        this.comboText.innerText = `${e}x`,
        this.comboText.style.animation = "small-shake 0.5s forwards",
        setTimeout(( () => {
            this.comboText.style.animation = ""
        }
        ), 500))
    }
    eliminate(e) {
        this.element.style.opacity = e ? "0.5" : "1"
    }
    setHost() {
        st.hostIndicator && st.hostIndicator.remove();
        const e = document.createElement("div");
        e.classList.add("po-host-indicator"),
        this.avatar.appendChild(e),
        st.hostIndicator = e
    }
    wrong_shake() {
        this.avatar.style.animation = "pl-wrong-small 0.2s",
        setTimeout(( () => {
            this.avatar.style.animation = "none"
        }
        ), 200)
    }
    shake() {
        this.avatar.style.animation = "pl-wrong 0.7s",
        setTimeout(( () => {
            this.avatar.style.animation = "none"
        }
        ), 700)
    }
    explode() {
        r.play("explosion", {
            volume: .05 * V.effects
        });
        var e = document.createElement("div");
        e.classList.add("po-explosion"),
        this.avatar.appendChild(e),
        this.shake(),
        setTimeout(( () => {
            e.remove()
        }
        ), 1200)
    }
    setLastText(e) {
        this.lastWrittenWord.innerText = e
    }
    setLanguage(e) {
        if (this.language) {
            var t = ce.getLanguages().find((t => t.locale === e));
            this.language.src = `/flag/${t.flag}.png`
        }
    }
    showLanguage() {
        this.language = document.createElement("img"),
        this.language.classList.add("po-language");
        var e = ce.getLanguages().find((e => e.locale === this.player.lang));
        e && (this.language.src = `/flag/${e.flag}.png`),
        this.avatarHolder.appendChild(this.language),
        this.language.addEventListener("click", ( () => {
            var e, t;
            if (this.player.auth_id !== (null === (e = N.player) || void 0 === e ? void 0 : e.id))
                return;
            if (At.room.state.started)
                return;
            null === (t = document.getElementById("po-lang-select-menu")) || void 0 === t || t.remove();
            const a = ce.getLanguages()
              , n = document.createElement("div");
            n.classList.add("po-lang-select-menu"),
            n.id = "po-lang-select-menu",
            a.forEach(( (e, t) => {
                const a = document.createElement("img");
                a.src = `/flag/${e.flag}.png`,
                a.classList.add("po-lang-select"),
                e.locale === this.player.lang && a.classList.add("po-lang-selected"),
                n.appendChild(a),
                a.addEventListener("click", ( () => {
                    At.room.send("lang-set", e.locale),
                    n.remove()
                }
                ))
            }
            ));
            const o = e => {
                n.contains(e.target) || (n.remove(),
                document.removeEventListener("pointerdown", o))
            }
            ;
            document.addEventListener("pointerdown", o),
            document.body.appendChild(n)
        }
        ))
    }
    hideLanguage() {
        this.language && (this.language.remove(),
        this.language = null)
    }
}
var rt = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class dt {
    constructor() {
        this.count = 0,
        this.players = new Map,
        this.CIRCLE_RADIUS = 105,
        dt.instance = this,
        this.container = document.getElementById("ga-container")
    }
    update_data() {
        const e = At.room.state.host;
        this.players.forEach((t => {
            var a = At.room.state.players.get(t.player.session_id);
            t.player = a,
            a.session_id === e && t.setHost(),
            t.setHeart(a.heart),
            t.setCombo(a.combo)
        }
        ))
    }
    redraw() {
        this.players.forEach((e => {
            e.destroy()
        }
        )),
        this.spectators && (this.spectators.remove(),
        this.spectators = null),
        this.players.clear(),
        At.room.state.players.forEach((e => this.addPlayer(e, e.session_id == At.room.sessionId))),
        this.updatePlayerPositions()
    }
    updatePlayerPositions() {
        if (!At.room)
            return void j("Something went wrong. Try restarting the game.");
        At.room.state.players.forEach((e => {
            if (this.players.has(e.session_id)) {
                const t = this.players.get(e.session_id);
                this.players.delete(e.session_id),
                this.players.set(e.session_id, t)
            }
        }
        )),
        this.count = this.players.size;
        const e = (e => {
            if (e <= 8)
                return 1;
            return Math.max(.5, 1 - .05 * (e - 8))
        }
        )(this.count)
          , t = this.CIRCLE_RADIUS * (this.count > 12 ? 1.2 : 1.1)
          , a = document.body.clientWidth / 2
          , n = document.body.clientHeight / 2
          , o = Array.from(this.players.values())
          , i = (t, a, n) => {
            t.style.transformOrigin = "center",
            t.style.transform = `translate(${a}px, ${n}px) translate(-50%, -50%) scale(${e})`
        }
        ;
        o.forEach(( (e, s) => {
            var r;
            (null === (r = e.player) || void 0 === r ? void 0 : r.session_id) == At.room.state.host && e.setHost();
            const d = e.element;
            if (1 === o.length) {
                i(d, a, n + t)
            } else if (2 === o.length) {
                i(d, a + (0 === s ? -t : t), n)
            } else {
                const e = -Math.PI / 2 + s / o.length * 2 * Math.PI
                  , r = a + t * Math.cos(e)
                  , l = n + t * Math.sin(e);
                i(d, r, l)
            }
        }
        ))
    }
    getPlayerFromId(e) {
        return this.players.get(e) || null
    }
    addPlayer(e, t, a=!1) {
        if (e.spectating)
            return void this.setSpectator(e, !0);
        if (this.players.has(e.session_id))
            return;
        const n = new st(this.container,e,t);
        this.players.set(e.session_id, n),
        this.updatePlayerPositions()
    }
    removePlayer(e) {
        e.spectating && this.removeSpectator(e);
        const t = this.players.get(e.session_id);
        if (t) {
            if (At.room.state.started)
                return void t.setHeart(0);
            t.destroy(),
            this.players.delete(e.session_id)
        }
        At.room.state.started || this.updatePlayerPositions()
    }
    destroy() {
        var e;
        this.players.forEach((e => e.destroy())),
        this.players.clear(),
        this.container.remove(),
        null === (e = this.spectators) || void 0 === e || e.remove()
    }
    setSpectator(e, t) {
        var a;
        t ? (this.players.has(e.session_id) && this.removePlayer(e),
        this.addSpectator(e)) : (this.removeSpectator(e),
        this.addPlayer(e, (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.session_id) === e.session_id))
    }
    removeSpectator(e) {
        if (null == this.spectators)
            return;
        const t = document.getElementById(e.session_id);
        t && (this.spectators.removeChild(t),
        t.remove()),
        0 == this.spectators.children.length && (this.spectators.remove(),
        this.spectators = null)
    }
    addSpectator(e) {
        var t, a;
        if (null == this.spectators) {
            var n = document.createElement("div");
            n.classList.add("spectators"),
            n.innerText = L.getWord("spectators"),
            this.spectators = n,
            document.body.appendChild(n)
        }
        if (!document.getElementById(e.session_id)) {
            var o = document.createElement("div");
            o.id = e.session_id,
            o.classList.add("spectator-profile");
            var i = document.createElement("div");
            i.classList.add("spectator-name"),
            i.style.color = (null === (t = N.gamePlayer) || void 0 === t ? void 0 : t.auth_id) == e.auth_id ? "cyan" : "white",
            i.textContent = e.username;
            var s = document.createElement("img");
            s.classList.add("spectator-image"),
            (null === (a = e.avatar) || void 0 === a ? void 0 : a.includes("google")) ? s.src = e.avatar : null != e.avatar ? s.src = "https://cdn.discordapp.com/avatars/" + e.auth_id + "/" + e.avatar + ".png?size=256" : s.src = "https://cdn.discordapp.com/embed/avatars/0.png",
            o.appendChild(i),
            o.appendChild(s),
            this.spectators.appendChild(o),
            o.addEventListener("click", ( () => rt(this, void 0, void 0, (function*() {
                xe.showPlayerProfile(e.auth_id)
            }
            ))))
        }
    }
    hideLanguages() {
        this.players.forEach((e => e.hideLanguage()))
    }
    showLanguages() {
        this.players.forEach((e => e.showLanguage()))
    }
}
class lt {
    constructor(e, t) {
        this.radius = 0,
        this.radius = t,
        this.bombContainer = e
    }
    destroy() {
        var e;
        null === (e = this.arrow) || void 0 === e || e.remove()
    }
    turn(a) {
        var n;
        if (!a)
            return;
        if (!this.bombContainer)
            return;
        var o = 500;
        let i;
        this.arrow || (this.arrow = document.createElement("img"),
        this.arrow.classList.add("ga-arrow"),
        this.arrow.src = "/arrow.png",
        this.bombContainer.container.appendChild(this.arrow),
        o = 0),
        dt.instance.players.forEach((e => {
            e.player.session_id === a.session_id && (i = e.element)
        }
        ));
        const s = ye(i)
          , r = s.left + s.width / 2
          , d = s.top + s.height / 2
          , l = ye(null === (n = this.bombContainer) || void 0 === n ? void 0 : n.container);
        if (!l)
            return;
        const c = r - (l.left + l.width / 2)
          , m = d - (l.top + l.height / 2)
          , u = Math.atan2(m, c) * (180 / Math.PI)
          , p = this.arrow.style.transform.match(/rotate\(([^)]+)\)/);
        let h = 0;
        p && (h = parseFloat(p[1]));
        let v = u - h;
        new e({
            angle: h
        }).to({
            angle: h + v
        }, o).onUpdate((e => {
            this.arrow.style.transform = `translate(-50%, -50%) rotate(${e.angle}deg)`
        }
        )).easing(t.Cubic.In).start()
    }
}
var ct = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class mt {
    destroy() {
        var e, t, a, n;
        this.time = 0,
        null === (e = this.container) || void 0 === e || e.remove(),
        null === (t = this.turn_indicator_background) || void 0 === t || t.remove(),
        null === (a = this.additionalInfo) || void 0 === a || a.remove(),
        null === (n = this.timer) || void 0 === n || n.remove(),
        this.timerInterval && clearInterval(this.timerInterval)
    }
    showFirstWord() {
        var e, t = document.createElement("div");
        t.classList.add("ls-discoverer-word"),
        t.textContent = L.getWord("discoverer"),
        null === (e = this.container) || void 0 === e || e.appendChild(t),
        setTimeout(( () => {
            null == t || t.remove()
        }
        ), 2e3)
    }
    showNewWord() {
        var e, t = document.createElement("div");
        t.classList.add("ls-new-word"),
        t.textContent = L.getWord("new"),
        null === (e = this.container) || void 0 === e || e.appendChild(t),
        setTimeout(( () => {
            null == t || t.remove()
        }
        ), 2e3)
    }
    setDuration(e, t=!0) {
        this.timer || (this.timer = document.createElement("div"),
        this.timer.classList.add("ls-timer"),
        this.container.prepend(this.timer)),
        this.time = e,
        this.timer.textContent = `${this.time.toFixed(2)}s`
    }
    constructor() {
        if (this.letters = [],
        this.spans = [],
        this.time = 0,
        this.finished = !1,
        this.container = document.createElement("div"),
        this.container.classList.add("ls-container"),
        document.body.appendChild(this.container),
        this.letter = document.createElement("div"),
        this.letter.classList.add("ls-letter"),
        this.container.appendChild(this.letter),
        this.turn_indicator = document.createElement("div"),
        this.turn_indicator.classList.add("ls-turn-indicator"),
        this.container.appendChild(this.turn_indicator),
        this.letter_container = document.createElement("div"),
        this.letter_container.classList.add("ls-word"),
        this.container.appendChild(this.letter_container),
        this.type_indicator = document.createElement("div"),
        this.type_indicator.classList.add("ls-type-indicator"),
        this.type_indicator.style.display = "none",
        this.letter_container.appendChild(this.type_indicator),
        this.turn_indicator_background = document.createElement("div"),
        this.turn_indicator_background.classList.add("ls-turn-background"),
        2 == At.room.state.diff) {
            this.practiceContainer = document.createElement("div"),
            this.practiceContainer.classList.add("ls-practice-container");
            var e = document.createElement("button");
            e.textContent = "👀",
            e.classList.add("ls-practice-button"),
            e.addEventListener("click", (t => {
                var a, n;
                e.disabled = !0,
                t.preventDefault(),
                null === (a = At.room) || void 0 === a || a.send("practice-show");
                var o = null === (n = At.room) || void 0 === n ? void 0 : n.onMessage("practice-word", (e => {
                    var t;
                    o(),
                    null === (t = At.keyboard) || void 0 === t || t.setValue(e)
                }
                ));
                e.blur(),
                setTimeout(( () => {
                    e.disabled = !1
                }
                ), 500)
            }
            ));
            var t = document.createElement("button");
            t.textContent = "⏩",
            t.classList.add("ls-practice-button"),
            t.addEventListener("click", (e => {
                var a;
                e.preventDefault(),
                null === (a = At.room) || void 0 === a || a.send("practice-next"),
                t.blur()
            }
            ));
            var a = document.createElement("button");
            a.textContent = "⏸️",
            a.classList.add("ls-practice-button"),
            a.addEventListener("click", (e => {
                var t;
                e.preventDefault(),
                null === (t = At.room) || void 0 === t || t.send("practice-pause"),
                a.blur()
            }
            )),
            this.practiceContainer.appendChild(a),
            this.practiceContainer.appendChild(e),
            this.practiceContainer.appendChild(t),
            this.container.prepend(this.practiceContainer)
        }
        document.body.appendChild(this.turn_indicator_background)
    }
    localTurn() {
        var e, t;
        this.is_local_turn = !0,
        this.turn_indicator.textContent = L.getWord("your_turn"),
        this.turn_indicator_background.style.display = "block",
        this.turn_indicator.style.paddingLeft = "9px",
        this.turn_indicator.style.paddingRight = "9px",
        this.type_indicator.style.display = "block",
        8 == (null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.mode) && (this.timerInterval && clearInterval(this.timerInterval),
        this.timerInterval = setInterval(( () => {
            this.time += .2,
            this.setDuration(this.time, !1)
        }
        ), 200))
    }
    remoteTurn() {
        var e, t;
        this.is_local_turn = !1,
        this.turn_indicator.textContent = "",
        this.turn_indicator_background.style.display = "none",
        this.turn_indicator.style.paddingLeft = "0px",
        this.turn_indicator.style.paddingRight = "0px",
        8 == (null === (t = null === (e = At.room) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.mode) && this.timerInterval && (clearInterval(this.timerInterval),
        this.timerInterval = null)
    }
    onCorrectGuess(e) {
        if (!e)
            return;
        this.letter_container.classList.remove("ls-char-combo");
        const t = document.createElement("div");
        t.classList.add("ls-gold-container"),
        Array.from(e).forEach(( (e, a) => {
            var n, o;
            const i = document.createElement("span");
            if (7 == (null === (n = At.room) || void 0 === n ? void 0 : n.state.mode)) {
                i.classList.add("ls-bomb");
                var s = At.currentPlayer;
                null != s && (i.style.backgroundImage = `url("/bombs/${s.bomb}.png")`)
            } else
                i.classList.add("ls-gold"),
                2 == (null === (o = At.room) || void 0 === o ? void 0 : o.state.diff) && i.classList.add("ls-gold-dead");
            t.appendChild(i)
        }
        )),
        this.letter_container.appendChild(t);
        var a = document.getElementById("monster");
        setTimeout(( () => {
            Array.from(t.children).forEach(( (e, n) => {
                setTimeout(( () => {
                    var o;
                    const i = 1 + n / t.children.length * .5;
                    if (7 != (null === (o = At.room) || void 0 === o ? void 0 : o.state.mode))
                        2 != At.room.state.diff && r.play("coin", {
                            volume: .15 * V.effects,
                            speed: i
                        }),
                        e.classList.add("collect-coin");
                    else {
                        r.play("bomb", {
                            volume: .1 * V.effects,
                            speed: i
                        });
                        const t = e
                          , n = t.getBoundingClientRect()
                          , o = n.width
                          , s = n.height;
                        t.style.setProperty("--start-x", `${n.left + o / 2}px`),
                        t.style.setProperty("--start-y", `${n.top + s / 2}px`),
                        t.classList.add("collect-bomb"),
                        setTimeout(( () => {
                            r.play("hit", {
                                volume: .12 * V.effects,
                                speed: i
                            }),
                            a.classList.add("monster-hit"),
                            setTimeout(( () => {
                                a.classList.remove("monster-hit")
                            }
                            ), 50)
                        }
                        ), 500)
                    }
                }
                ), 100 * n)
            }
            )),
            setTimeout(( () => {
                t.remove()
            }
            ), 1500 + 100 * e.length)
        }
        ), 50)
    }
    updateWord(e) {
        this.letters.forEach((e => {
            e.remove()
        }
        ));
        var t = At.room.state.mode
          , a = ce.findIndex(e, this.current_letter, t);
        if (e) {
            var n = 0;
            Array.from(e).forEach((t => {
                const o = document.createElement("span");
                o.classList.add("ls-char"),
                o.textContent = t,
                e.length >= 6 ? this.letter_container.classList.add("ls-char-combo") : this.letter_container.classList.remove("ls-char-combo"),
                -1 !== a && n >= a && n < a + this.current_letter.length && o.classList.add("ls-char-valid"),
                n++,
                this.letters.push(o),
                this.letter_container.appendChild(o)
            }
            )),
            this.type_indicator.style.display = "none"
        } else
            this.type_indicator.style.display = "block";
        this.is_local_turn || (this.type_indicator.style.display = "none"),
        this.typed_word = e,
        5 == At.room.state.mode && this.update_letters(),
        6 == At.room.state.mode && this.check_limit()
    }
    check_limit() {
        this.typed_word.length > this.limit && this.letters.forEach((e => {
            e.style.color = "red"
        }
        )),
        this.limitInfo.innerText = `${Math.max(0, this.limit - this.typed_word.length)}`
    }
    update_letters() {
        if ("" == this.typed_word && this.spans.forEach((e => {
            e.style.color = "white"
        }
        )),
        this.typed_word.length > this.current_letter.length)
            this.spans.forEach((e => {
                e.style.color = "red"
            }
            ));
        else
            for (let t = 0; t < this.spans.length; t++) {
                var e = this.typed_word[t];
                if (e) {
                    if (e != this.current_letter[t]) {
                        this.spans[t].style.color = "#c04217";
                        break
                    }
                    this.spans[t].style.color = "#47c66e"
                } else
                    this.spans[t].style.color = "white"
            }
    }
    setLimit(e) {
        this.limitInfo = document.createElement("div"),
        this.limitInfo.classList.add("ls-limit-info"),
        this.limitInfo.innerText = `${e}`,
        this.letter.appendChild(this.limitInfo),
        this.limit = e
    }
    setLetter(e, t) {
        var a, n;
        if ("FNSHD" == e)
            return this.letter.textContent = "XXXXX",
            void this.finishedSyllables();
        if (this.current_letter = e,
        null === (a = this.img) || void 0 === a || a.remove(),
        5 != At.room.state.mode) {
            if (8 == At.room.state.mode)
                this.additionalInfo || (this.additionalInfo = document.createElement("div"),
                this.additionalInfo.classList.add("ls-state-info"),
                this.container.appendChild(this.additionalInfo)),
                this.additionalInfo.textContent = At.room.state.wpp + " WPP";
            else if (7 == At.room.state.mode) {
                this.additionalInfo || (this.additionalInfo = document.createElement("div"),
                this.additionalInfo.classList.add("ls-state-info"),
                this.container.appendChild(this.additionalInfo));
                var o = te.currentMonster;
                "word" == o && (o = "original_mode_desct",
                this.additionalInfo.style.backgroundColor = "#158c29"),
                "typing" == o && (o = "type_racer_desct",
                this.additionalInfo.style.backgroundColor = "#23b9b7"),
                "fruit" == o || "vegetable" == o ? (this.additionalInfo.style.backgroundColor = "#abb015",
                "fruit" != e && "vegetable" != e || (e = L.getWord(o))) : "long_word" == o || "short_word" == o ? this.additionalInfo.style.backgroundColor = "#520b1e" : "poop" == o ? (o = "💩",
                this.additionalInfo.style.backgroundColor = "#47251c") : "starts_with" == o ? this.additionalInfo.style.backgroundColor = "#c75e4a" : "ends_with" == o ? this.additionalInfo.style.backgroundColor = "#011a38" : "double_letter" == o ? (e = "👀👀",
                this.additionalInfo.style.backgroundColor = "#4a444f") : "reverse" == o ? this.additionalInfo.style.backgroundColor = "#097d62" : "aaaa" == o && (this.additionalInfo.style.backgroundColor = "#a68c40"),
                this.additionalInfo.textContent = te.currentDefition || L.getWord(o)
            } else
                this.additionalInfo && (this.additionalInfo.remove(),
                this.additionalInfo = null);
            if (e.startsWith("https://"))
                return this.img = document.createElement("img"),
                this.img.classList.add("ls-letter-img"),
                this.img.src = e,
                this.img.onerror = () => {
                    this.img.remove(),
                    this.letter.textContent = "Image couldn't be loaded"
                }
                ,
                null === (n = this.letter_container.parentElement) || void 0 === n || n.appendChild(this.img),
                void (this.letter.textContent = "");
            if (e.startsWith("http://") ? this.letter.textContent = "Image links must be https" : this.letter.textContent = e,
            t) {
                var i = document.createElement("div");
                let e;
                i.classList.add("ls-wpc-info"),
                this.letter.appendChild(i),
                e = t < 1e3 ? `${t}` : t < 1e4 ? `${Math.round(t / 1e3)}K` : `${Math.floor(t / 1e3)}K`,
                i.textContent = e
            }
        } else {
            var s = this.current_letter.split(",");
            this.current_letter = s[0],
            s.length >= 1 && (this.additionalInfo || (this.additionalInfo = document.createElement("div"),
            this.additionalInfo.classList.add("ls-state-info"),
            this.container.appendChild(this.additionalInfo)),
            this.additionalInfo.textContent = s[1],
            s.length >= 2 && (this.additionalInfo.textContent += " " + s[2])),
            this.letter.innerHTML = "",
            this.spans = [];
            for (let e = 0; e < this.current_letter.length; e++) {
                var r = document.createElement("span");
                r.textContent = this.current_letter[e],
                this.letter.appendChild(r),
                this.spans.push(r)
            }
        }
    }
    finishedSyllables() {
        return ct(this, void 0, void 0, (function*() {
            if (!this.finished) {
                this.finished = !0,
                yield r.add("endofwpp", "sound/endofwpp.mp3"),
                yield r.play("endofwpp", {
                    volume: .3 * V.effects
                }),
                yield new Promise((e => setTimeout(e, 6500)));
                var e = document.createElement("div");
                e.classList.add("mc-bay");
                var t = document.createElement("img");
                t.src = "/michealbay.png",
                t.classList.add("mc-bay-img"),
                e.appendChild(t),
                setTimeout(( () => {
                    t.src = "/all.png"
                }
                ), 3e3),
                document.body.appendChild(e),
                setTimeout(( () => {
                    e.remove()
                }
                ), 6e3)
            }
        }
        ))
    }
}
class ut {
    constructor(e) {
        this.current_angle = 360,
        this.circle = e,
        this.circle.style.cssText += "\n            --progress: 360deg;\n            background: conic-gradient(\n                rgba(255, 255, 255, 0.2) var(--progress),\n                rgba(255, 255, 255, 0) var(--progress)\n            );\n        "
    }
    fill() {
        var e;
        null === (e = this.tween) || void 0 === e || e.stop(),
        this.current_angle = 360,
        this.circle.style.setProperty("--progress", "360deg")
    }
    updateProgress(t, a) {
        var n = t / a * 360;
        this.tween = new e({
            angle: this.current_angle
        }).to({
            angle: n
        }, 999).onUpdate((e => {
            this.circle.style.setProperty("--progress", `${e.angle}deg`),
            this.current_angle = e.angle
        }
        )).start()
    }
    destroy() {
        this.circle.remove()
    }
}
var pt = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class ht {
    constructor() {
        this.scaleSpeed = .01,
        this.minScale = .7,
        this.maxScale = 1,
        this.increasing = !0,
        this.local = !1,
        this.currentScale = null;
        var e = At.room;
        this.container = document.getElementById("ga-container"),
        this.bombContainer = document.createElement("div"),
        this.bombContainer.classList.add("ga-bomb-container");
        var t = document.createElement("div");
        t.classList.add("ga-circle"),
        this.container.appendChild(t),
        7 != e.state.mode && (this.bomb = document.createElement("img"),
        this.bomb.src = "/bombs/0.png",
        this.bomb.classList.add("ga-bomb"),
        this.spark = document.createElement("img"),
        this.spark.src = "/bombs/spark.png",
        this.spark.classList.add("ga-spark"),
        this.bombContainer.appendChild(this.bomb),
        this.bombContainer.appendChild(this.spark)),
        this.circle = new ut(t),
        this.container.appendChild(this.bombContainer),
        this.loadSound(),
        this.updateCircle(e.state.time)
    }
    updateCircle(e) {
        this.circle.updateProgress(e, At.room.state.maxTime)
    }
    updateScale(e) {
        var t = At.room.state.time;
        if (null == t)
            return;
        const a = this.scaleSpeed * e / (t + 4);
        ht.bombSound && (ht.bombSound.speed = this.updateBombSoundSpeed(16 - t)),
        ht.fuseSound && (ht.fuseSound.speed = this.updateBombSoundSpeed(16 - t)),
        null == this.currentScale && (this.currentScale = parseFloat(this.bombContainer.style.transform.replace(/scale\((.*?)\)/, "$1")) || 1);
        const n = this.increasing ? this.maxScale : this.minScale
          , o = n - this.currentScale;
        this.currentScale += Math.sign(o) * Math.min(Math.abs(o), a),
        Math.abs(this.currentScale - n) < .001 && (this.currentScale = n,
        this.increasing = !this.increasing),
        this.bombContainer.style.transform = `translate(-50%, -50%) scale(${this.currentScale.toFixed(3)})`
    }
    static stopSound() {
        ht.bombSound && (ht.bombSound.stop(),
        ht.bombSound.destroy(),
        ht.bombSound = void 0),
        ht.fuseSound && (ht.fuseSound.stop(),
        ht.fuseSound.destroy(),
        ht.fuseSound = void 0)
    }
    loadSound() {
        return pt(this, void 0, void 0, (function*() {
            ht.bombSound = yield r.play("clock", {
                volume: .4 * V.bombTickingVolume
            }),
            ht.bombSound.speed = 1,
            ht.bombSound.loop = !0,
            ht.fuseSound = yield r.play("fuse", {
                volume: .03 * V.bombTickingVolume
            }),
            ht.fuseSound.loop = !0,
            V.EventBus.off("bombTickingVolume"),
            V.EventBus.on("bombTickingVolume", (e => {
                this.updateVolume()
            }
            ))
        }
        ))
    }
    updateVolume() {
        ht.bombSound && (ht.bombSound.volume = V.bombTickingVolume * (this.local ? .4 : .3)),
        ht.fuseSound && (ht.fuseSound.volume = V.bombTickingVolume * (this.local ? .06 : .03))
    }
    onLocalTurn() {
        ht.bombSound && (ht.bombSound.volume = .4 * V.bombTickingVolume),
        ht.fuseSound && (ht.fuseSound.volume = .06 * V.bombTickingVolume),
        this.local = !0,
        At.currentPlayer ? this.setBomb(At.currentPlayer.bomb) : this.setBomb(0)
    }
    onRemoteTurn() {
        ht.bombSound && (ht.bombSound.volume = .3 * V.bombTickingVolume),
        ht.fuseSound && (ht.fuseSound.volume = .03 * V.bombTickingVolume),
        this.local = !1,
        At.currentPlayer && this.setBomb(At.currentPlayer.bomb)
    }
    setBomb(e) {
        var t, a;
        if (7 != (null === (a = null === (t = At.room) || void 0 === t ? void 0 : t.state) || void 0 === a ? void 0 : a.mode)) {
            e || (e = 0);
            var n = ce.bombs.find((t => t.id == e));
            this.bomb.src = "/bombs/" + e + ".png",
            this.bomb.style.width = `${n.width}em`,
            this.left == n.left && this.top == n.top || (this.spark.style.left = n.left + "px",
            this.spark.style.top = n.top + "px",
            this.left = n.left,
            this.top = n.top),
            this.spark.style.display = 3 == e ? "none" : "block"
        }
    }
    destroy() {
        this.circle.destroy(),
        this.bombContainer.remove()
    }
    updateBombSoundSpeed(e) {
        return 1 + (e = Math.max(0, Math.min(e, 16))) / 16 * (1.6 - 1)
    }
}
var vt = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class gt {
    showFirstWord() {
        this.letterContainer.showFirstWord()
    }
    showNewWord() {
        this.letterContainer.showNewWord()
    }
    constructor() {
        this.maxTime = 0,
        this.isLocalTurn = !1,
        this.notes = ["do", "re", "mi", "fa", "so", "la", "si", "do2"],
        this.lastSoundTime = 0,
        this.soundCooldown = 60,
        At.room,
        this.letterContainer = new mt,
        V.EventBus.off("musicVolume"),
        V.EventBus.on("musicVolume", (e => {
            this.gameEndSound && (this.gameEndSound.volume = .042 * e)
        }
        ))
    }
    setMaxTime(e) {
        this.maxTime = e
    }
    start() {
        var e, t;
        this.bomb || (this.bomb = new ht),
        this.arrow || (this.arrow = new lt(this.bomb,0));
        var a = document.getElementById("spectator-btn");
        if (a && a.remove(),
        (null === (e = N.gamePlayer) || void 0 === e ? void 0 : e.spectating) && -1 === (null === (t = N.gamePlayer) || void 0 === t ? void 0 : t.heart)) {
            this.spectating = document.createElement("div"),
            this.spectating.id = "spectator-btn",
            this.spectating.classList.add("spectate");
            const e = document.createElement("div");
            e.classList.add("spectate-text");
            let t = !0;
            const a = document.createElement("span");
            a.classList.add("toggle-pill"),
            this.spectating.appendChild(e),
            this.spectating.appendChild(a);
            const n = () => {
                e.textContent = L.getWord("auto_join"),
                a.textContent = t ? L.getWord("on") : L.getWord("off")
            }
            ;
            n(),
            this.spectating.addEventListener("click", ( () => {
                t = !t,
                At.room.send("spectate"),
                this.spectating.style.display = "none",
                setTimeout(( () => {
                    this.spectating.style.display = "flex"
                }
                ), 300),
                n(),
                t ? a.classList.remove("off") : a.classList.add("off")
            }
            )),
            document.body.appendChild(this.spectating)
        }
    }
    update(e) {
        null != this.bomb && this.bomb.updateScale(e)
    }
    onTimeChange(t) {
        return vt(this, void 0, void 0, (function*() {
            var a, n, o, i, s, d, l, c, m, u, p, h, v, g, y, b = t;
            t /= this.maxTime,
            null === (a = this.bomb) || void 0 === a || a.updateCircle(b),
            t < .25 ? (null === (o = null === (n = this.bomb) || void 0 === n ? void 0 : n.bombContainer) || void 0 === o || o.classList.add("ga-bomb-filter"),
            null === (s = null === (i = this.monster) || void 0 === i ? void 0 : i.getMonster()) || void 0 === s || s.classList.add("ga-bomb-filter")) : (null === (l = null === (d = this.bomb) || void 0 === d ? void 0 : d.bombContainer) || void 0 === l || l.classList.remove("ga-bomb-filter"),
            null === (m = null === (c = this.monster) || void 0 === c ? void 0 : c.getMonster()) || void 0 === m || m.classList.remove("ga-bomb-filter"));
            var f = 7 == (null === (p = null === (u = At.room) || void 0 === u ? void 0 : u.state) || void 0 === p ? void 0 : p.mode) ? 4 : 6
              , w = 7 == (null === (v = null === (h = At.room) || void 0 === h ? void 0 : h.state) || void 0 === v ? void 0 : v.mode) ? 2 : 3;
            if (null == this.gameEndSound && this.maxTime <= f) {
                var _ = !1
                  , C = 0;
                At.room.state.players.forEach((e => {
                    e.heart > 1 && (_ = !0),
                    e.eliminated || C++
                }
                )),
                (!_ || this.maxTime <= 4) && C <= 3 && (this.gameEndSound = yield r.play("gameends", {
                    volume: 0
                }),
                this.gameEndSound.loop = !0,
                new e({
                    volume: 0
                }).to({
                    volume: .042 * V.musicVolume
                }, 5e3).onUpdate((e => {
                    this.gameEndSound && (this.gameEndSound.volume = e.volume)
                }
                )).start())
            }
            b < w && this.isLocalTurn ? this.tensionSound || (this.tensionSound = yield r.play("tensionrising", {
                volume: 0
            }),
            this.tensionSound.loop = !0,
            new e({
                volume: 0
            }).to({
                volume: .065 * V.bombTickingVolume
            }, 1e3).onUpdate((e => {
                this.tensionSound && (this.tensionSound.volume = e.volume)
            }
            )).start()) : this.tensionSound && (null === (g = this.tensionSound) || void 0 === g || g.stop(),
            null === (y = this.tensionSound) || void 0 === y || y.destroy(),
            this.tensionSound = void 0)
        }
        ))
    }
    stop() {
        var e, t, a, n, o, i, s, r, d;
        ht.stopSound(),
        null === (e = this.tensionSound) || void 0 === e || e.stop(),
        null === (t = this.tensionSound) || void 0 === t || t.destroy(),
        null === (a = this.gameEndSound) || void 0 === a || a.stop(),
        null === (n = this.gameEndSound) || void 0 === n || n.destroy(),
        null === (o = this.bomb) || void 0 === o || o.destroy(),
        null === (i = this.arrow) || void 0 === i || i.destroy(),
        null === (s = this.letterContainer) || void 0 === s || s.destroy(),
        this.bomb = void 0,
        this.arrow = void 0,
        null === (r = this.monster) || void 0 === r || r.destroy(),
        null === (d = this.spectating) || void 0 === d || d.remove()
    }
    onLocalTurn() {
        var e;
        this.isLocalTurn = !0,
        null === (e = this.bomb) || void 0 === e || e.onLocalTurn(),
        this.letterContainer.localTurn()
    }
    onRemoteTurn() {
        var e;
        this.isLocalTurn = !1,
        null === (e = this.bomb) || void 0 === e || e.onRemoteTurn(),
        this.letterContainer.remoteTurn()
    }
    onLocalCorrectGuess(e) {
        var t;
        const a = e.length;
        let n = Math.min(1.1, Math.max(.5, .5 + a / 10));
        r.play("success", {
            volume: .12 * V.effects,
            speed: n
        }),
        null === (t = this.letterContainer) || void 0 === t || t.onCorrectGuess(e)
    }
    setLetter(e, t=0) {
        this.letterContainer.setLetter(e, t)
    }
    setLimit(e) {
        this.letterContainer.setLimit(e)
    }
    changeTurn(e) {
        var t;
        null === (t = this.arrow) || void 0 === t || t.turn(e)
    }
    updateWord(e) {
        const t = Date.now();
        if (0 !== e.length && t - this.lastSoundTime > this.soundCooldown) {
            const a = e.length <= this.notes.length ? this.notes[e.length - 1] : this.notes[this.notes.length - 1];
            r.play(a, {
                volume: .1 * V.effects
            }),
            this.lastSoundTime = t
        }
        this.letterContainer.updateWord(e)
    }
}
var yt = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class bt {
    playSound() {
        return yt(this, void 0, void 0, (function*() {
            var e;
            0 == (null === (e = At.room) || void 0 === e ? void 0 : e.state.sc) ? this.sound = yield r.play("countdown", {
                volume: .5 * V.effects
            }) : this.sound = yield r.play("countdown-6", {
                volume: .4 * V.effects
            })
        }
        ))
    }
    constructor() {
        var e, t, a;
        if (this.bar_speed = .2,
        this.container = document.createElement("div"),
        this.container.id = "cs-container",
        this.container.classList.add("cs-container"),
        document.querySelectorAll(".full-window").forEach((e => {
            e.remove()
        }
        )),
        this.playSound(),
        At.room.state && 4 == At.room.state.mode) {
            var n = document.createElement("img");
            n.src = "/web/versus.png",
            this.container.appendChild(n)
        }
        var o = ce.gameModes.find((e => e.id == At.room.state.mode));
        this.countdownText = document.createElement("div"),
        this.countdownText.classList.add("cs-countdown-text");
        o = ce.gameModes.find((e => e.id == At.room.state.mode));
        var i = L.getWord(null !== (e = null == o ? void 0 : o.description) && void 0 !== e ? e : "type_word")
          , s = document.createElement("div");
        s.classList.add("cs-mode-title"),
        s.innerText = L.getWord(null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : ""),
        this.container.appendChild(s);
        var r = document.createElement("div");
        r.classList.add("cs-mode-info"),
        r.innerText = i;
        var d = document.createElement("div");
        d.classList.add("cs-prop");
        var l = ce.getDifficulties();
        l.push({
            id: 2,
            name: "practice"
        }),
        d.innerText = L.getWord("difficulty") + ": " + L.getWord(null === (a = l.find((e => e.id == At.room.state.diff))) || void 0 === a ? void 0 : a.name);
        var c = document.createElement("div");
        if (c.classList.add("cs-prop"),
        c.innerText = L.getWord("speed") + " " + At.room.state.speed + "x",
        0 != At.room.state.sc) {
            var m = we.find((e => e.id == At.room.state.sc))
              , u = xe.createPreset(m);
            u.style.transform = "scale(1.25)",
            this.container.appendChild(u),
            s.style.display = "none",
            d.style.display = "none",
            c.style.display = "none"
        }
        var p = document.createElement("div");
        p.classList.add("cs-prop"),
        p.classList.add("lg-prop");
        var h = new Set;
        if (At.room.state.mlang)
            p.classList.add("lg-prop"),
            At.room.state.players.forEach((e => {
                if (!e.spectating && !h.has(e.lang)) {
                    h.add(e.lang);
                    var t = document.createElement("img");
                    t.src = "/flag/" + ce.getLanguages().find((t => t.locale == e.lang)).flag + ".png",
                    p.appendChild(t)
                }
            }
            ));
        else {
            var v = document.createElement("img");
            v.src = "/flag/" + ce.getLanguages().find((e => e.locale == At.room.state.locale)).flag + ".png",
            p.appendChild(v)
        }
        if (this.container.appendChild(this.countdownText),
        this.container.appendChild(r),
        this.container.appendChild(d),
        this.container.appendChild(c),
        this.container.appendChild(p),
        -1 != At.room.state.wpp) {
            var g = document.createElement("div");
            g.classList.add("cs-prop"),
            g.innerText = L.getWord("wpp") + ": " + (1 == At.room.state.wpp_s ? L.getWord("at_least") : L.getWord("at_most")),
            g.innerText += " " + At.room.state.wpp,
            this.container.appendChild(g)
        }
        document.body.appendChild(this.container)
    }
    destroy() {
        var e;
        this.interval && clearInterval(this.interval),
        this.sound && (null === (e = this.sound) || void 0 === e || e.stop()),
        this.container.remove()
    }
    start(e) {
        this.countdownText.innerText = e.toString(),
        this.interval = setInterval(( () => {
            e--,
            this.countdownText.innerText = e.toString(),
            e <= 0 && clearInterval(this.interval)
        }
        ), 1e3)
    }
}
var ft = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class wt {
    constructor() {
        this.updateListener(),
        this.create_ui()
    }
    updateListener() {
        At.room.send("profile"),
        At.room.onMessage("profile", this.update_ui.bind(this))
    }
    destroy() {
        this.ui.remove(),
        this.ui = null
    }
    create_ui() {
        var e;
        const t = document.createElement("div");
        t.className = "pp-ctx",
        this.levelCircle = document.createElement("div"),
        this.levelCircle.className = "pp-ctx-slider";
        const a = document.createElement("div");
        a.className = "pp-ctx-avatar",
        this.avatarImg = document.createElement("img"),
        this.avatarImg.src = "/avatars/a0.png",
        a.appendChild(this.avatarImg),
        null != (null === (e = N.player) || void 0 === e ? void 0 : e.exp) && (this.xpContainer = document.createElement("div"),
        this.xpContainer.className = "xp-container",
        a.appendChild(this.xpContainer)),
        a.addEventListener("click", ( () => ft(this, void 0, void 0, (function*() {
            var e;
            yield xe.showPlayerProfile(null === (e = N.player) || void 0 === e ? void 0 : e.id)
        }
        ))));
        const n = document.createElement("div");
        n.className = "pp-ctx-av-title",
        this.levelText = document.createElement("span"),
        this.levelText.className = "pp-ctx-win-title",
        this.levelText.textContent = "Error",
        n.appendChild(this.levelText),
        this.levelCircle.appendChild(a),
        this.levelCircle.appendChild(n);
        const o = document.createElement("div");
        o.className = "pp-dts";
        [{
            imgSrc: "",
            text: "",
            objectKey: "longestText"
        }, {
            imgSrc: "/web/coin.png",
            text: "",
            objectKey: "coinText"
        }, {
            imgSrc: "/web/diamond.png",
            text: "",
            objectKey: "diamondText"
        }, {
            imgSrc: "/web/crown.png",
            text: "",
            objectKey: "crownText"
        }, {
            imgSrc: "/web/key.png",
            text: "",
            objectKey: "keyText"
        }].forEach((e => {
            const t = document.createElement("div");
            t.className = "pp-dts-item",
            t.id = e.objectKey;
            const a = document.createElement("span");
            if (a.className = "pp-dts-item-title",
            a.textContent = e.text,
            e.text.length > 12 && (a.style.fontSize = "14px",
            a.style.fontWeight = "400"),
            e.text.length > 16 && (a.style.fontSize = "11px"),
            this[e.objectKey] = a,
            e.imgSrc) {
                const a = document.createElement("img");
                a.src = e.imgSrc,
                t.appendChild(a)
            }
            t.appendChild(a),
            o.appendChild(t)
        }
        )),
        t.appendChild(this.levelCircle),
        t.appendChild(o),
        document.body.appendChild(t),
        this.ui = t
    }
    update_ui(e) {
        var t, a;
        if (e = JSON.parse(e),
        N.updatePlayer(e),
        this.ui || this.create_ui(),
        null != e.score && (this.coinText.textContent = ce.formatNumber(e.score)),
        null != e.win && (this.crownText.textContent = ce.formatNumber(e.win)),
        null != e.diamond && (this.diamondText.textContent = ce.formatNumber(e.diamond)),
        e.longestWord && (this.longestText.textContent = e.longestWord),
        null != e.key && (this.keyText.textContent = e.key),
        null != e.exp) {
            this.levelText.textContent = ce.getLevelFromExp(e.exp) + " lvl";
            const t = ce.getLevelFromExp(e.exp)
              , a = ce.getExpForLevel(t)
              , n = ce.getExpForLevel(t + 1)
              , o = (e.exp - a) / (n - a)
              , i = 360 * o;
            this.xpContainer.textContent = (100 * o).toFixed(2) + "%",
            requestAnimationFrame(( () => {
                this.levelCircle.style.setProperty("--progress", `${i}deg`)
            }
            ))
        }
        $(H(null === (t = N.player) || void 0 === t ? void 0 : t.id, null === (a = N.player) || void 0 === a ? void 0 : a.avatar, 128), this.avatarImg)
    }
}
class _t {
    constructor(e) {
        this.onSubmit = () => {}
        ,
        this.onWordUpdate = () => {}
        ,
        this.soloMode = !1,
        this.localWord = "",
        this.localPlayer = e
    }
    setSoloMode(e) {
        this.soloMode = e
    }
}
const Ct = {
    A: "A",
    "Ⓐ": "A",
    "Ａ": "A",
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ầ": "A",
    "Ấ": "A",
    "Ẫ": "A",
    "Ẩ": "A",
    "Ã": "A",
    "Ā": "A",
    "Ă": "A",
    "Ằ": "A",
    "Ắ": "A",
    "Ẵ": "A",
    "Ẳ": "A",
    "Ȧ": "A",
    "Ǡ": "A",
    "Ä": "A",
    "Ǟ": "A",
    "Ả": "A",
    "Å": "A",
    "Ǻ": "A",
    "Ǎ": "A",
    "Ȁ": "A",
    "Ȃ": "A",
    "Ạ": "A",
    "Ậ": "A",
    "Ặ": "A",
    "Ḁ": "A",
    "Ą": "A",
    "Ⱥ": "A",
    "Ɐ": "A",
    "Ꜳ": "AA",
    "Æ": "AE",
    "Ǽ": "AE",
    "Ǣ": "AE",
    "Ꜵ": "AO",
    "Ꜷ": "AU",
    "Ꜹ": "AV",
    "Ꜻ": "AV",
    "Ꜽ": "AY",
    B: "B",
    "Ⓑ": "B",
    "Ｂ": "B",
    "Ḃ": "B",
    "Ḅ": "B",
    "Ḇ": "B",
    "Ƀ": "B",
    "Ƃ": "B",
    "Ɓ": "B",
    C: "C",
    "Ⓒ": "C",
    "Ｃ": "C",
    "Ć": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "Ç": "C",
    "Ḉ": "C",
    "Ƈ": "C",
    "Ȼ": "C",
    "Ꜿ": "C",
    D: "D",
    "Ⓓ": "D",
    "Ｄ": "D",
    "Ḋ": "D",
    "Ď": "D",
    "Ḍ": "D",
    "Ḑ": "D",
    "Ḓ": "D",
    "Ḏ": "D",
    "Đ": "D",
    "Ƌ": "D",
    "Ɗ": "D",
    "Ɖ": "D",
    "Ꝺ": "D",
    "Ǳ": "DZ",
    "Ǆ": "DZ",
    "ǲ": "Dz",
    "ǅ": "Dz",
    E: "E",
    "Ⓔ": "E",
    "Ｅ": "E",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ề": "E",
    "Ế": "E",
    "Ễ": "E",
    "Ể": "E",
    "Ẽ": "E",
    "Ē": "E",
    "Ḕ": "E",
    "Ḗ": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ë": "E",
    "Ẻ": "E",
    "Ě": "E",
    "Ȅ": "E",
    "Ȇ": "E",
    "Ẹ": "E",
    "Ệ": "E",
    "Ȩ": "E",
    "Ḝ": "E",
    "Ę": "E",
    "Ḙ": "E",
    "Ḛ": "E",
    "Ɛ": "E",
    "Ǝ": "E",
    F: "F",
    "Ⓕ": "F",
    "Ｆ": "F",
    "Ḟ": "F",
    "Ƒ": "F",
    "Ꝼ": "F",
    G: "G",
    "Ⓖ": "G",
    "Ｇ": "G",
    "Ǵ": "G",
    "Ĝ": "G",
    "Ḡ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ǧ": "G",
    "Ģ": "G",
    "Ǥ": "G",
    "Ɠ": "G",
    "Ꞡ": "G",
    "Ᵹ": "G",
    "Ꝿ": "G",
    H: "H",
    "Ⓗ": "H",
    "Ｈ": "H",
    "Ĥ": "H",
    "Ḣ": "H",
    "Ḧ": "H",
    "Ȟ": "H",
    "Ḥ": "H",
    "Ḩ": "H",
    "Ḫ": "H",
    "Ħ": "H",
    "Ⱨ": "H",
    "Ⱶ": "H",
    "Ɥ": "H",
    I: "I",
    "Ⓘ": "I",
    "Ｉ": "I",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "İ": "I",
    "Ï": "I",
    "Ḯ": "I",
    "Ỉ": "I",
    "Ǐ": "I",
    "Ȉ": "I",
    "Ȋ": "I",
    "Ị": "I",
    "Į": "I",
    "Ḭ": "I",
    "Ɨ": "I",
    J: "J",
    "Ⓙ": "J",
    "Ｊ": "J",
    "Ĵ": "J",
    "Ɉ": "J",
    K: "K",
    "Ⓚ": "K",
    "Ｋ": "K",
    "Ḱ": "K",
    "Ǩ": "K",
    "Ḳ": "K",
    "Ķ": "K",
    "Ḵ": "K",
    "Ƙ": "K",
    "Ⱪ": "K",
    "Ꝁ": "K",
    "Ꝃ": "K",
    "Ꝅ": "K",
    "Ꞣ": "K",
    L: "L",
    "Ⓛ": "L",
    "Ｌ": "L",
    "Ŀ": "L",
    "Ĺ": "L",
    "Ľ": "L",
    "Ḷ": "L",
    "Ḹ": "L",
    "Ļ": "L",
    "Ḽ": "L",
    "Ḻ": "L",
    "Ł": "L",
    "Ƚ": "L",
    "Ɫ": "L",
    "Ⱡ": "L",
    "Ꝉ": "L",
    "Ꝇ": "L",
    "Ꞁ": "L",
    "Ǉ": "LJ",
    "ǈ": "Lj",
    M: "M",
    "Ⓜ": "M",
    "Ｍ": "M",
    "Ḿ": "M",
    "Ṁ": "M",
    "Ṃ": "M",
    "Ɱ": "M",
    "Ɯ": "M",
    N: "N",
    "Ⓝ": "N",
    "Ｎ": "N",
    "Ǹ": "N",
    "Ń": "N",
    "Ñ": "N",
    "Ṅ": "N",
    "Ň": "N",
    "Ṇ": "N",
    "Ņ": "N",
    "Ṋ": "N",
    "Ṉ": "N",
    "Ƞ": "N",
    "Ɲ": "N",
    "Ꞑ": "N",
    "Ꞥ": "N",
    "Ǌ": "NJ",
    "ǋ": "Nj",
    O: "O",
    "Ⓞ": "O",
    "Ｏ": "O",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Ồ": "O",
    "Ố": "O",
    "Ỗ": "O",
    "Ổ": "O",
    "Õ": "O",
    "Ṍ": "O",
    "Ȭ": "O",
    "Ṏ": "O",
    "Ō": "O",
    "Ṑ": "O",
    "Ṓ": "O",
    "Ŏ": "O",
    "Ȯ": "O",
    "Ȱ": "O",
    "Ö": "O",
    "Ȫ": "O",
    "Ỏ": "O",
    "Ő": "O",
    "Ǒ": "O",
    "Ȍ": "O",
    "Ȏ": "O",
    "Ơ": "O",
    "Ờ": "O",
    "Ớ": "O",
    "Ỡ": "O",
    "Ở": "O",
    "Ợ": "O",
    "Ọ": "O",
    "Ộ": "O",
    "Ǫ": "O",
    "Ǭ": "O",
    "Ø": "O",
    "Ǿ": "O",
    "Ɔ": "O",
    "Ɵ": "O",
    "Ꝋ": "O",
    "Ꝍ": "O",
    "Œ": "OE",
    "ɶ": "OE",
    "Ƣ": "OI",
    "Ꝏ": "OO",
    "Ȣ": "OU",
    P: "P",
    "Ⓟ": "P",
    "Ｐ": "P",
    "Ṕ": "P",
    "Ṗ": "P",
    "Ƥ": "P",
    "Ᵽ": "P",
    "Ꝑ": "P",
    "Ꝓ": "P",
    "Ꝕ": "P",
    Q: "Q",
    "Ⓠ": "Q",
    "Ｑ": "Q",
    "Ꝗ": "Q",
    "Ꝙ": "Q",
    "Ɋ": "Q",
    R: "R",
    "Ⓡ": "R",
    "Ｒ": "R",
    "Ŕ": "R",
    "Ṙ": "R",
    "Ř": "R",
    "Ȑ": "R",
    "Ȓ": "R",
    "Ṛ": "R",
    "Ṝ": "R",
    "Ŗ": "R",
    "Ṟ": "R",
    "Ɍ": "R",
    "Ɽ": "R",
    "Ꝛ": "R",
    "Ꞧ": "R",
    "Ꞃ": "R",
    S: "S",
    "Ⓢ": "S",
    "Ｓ": "S",
    "ẞ": "S",
    "Ś": "S",
    "Ṥ": "S",
    "Ŝ": "S",
    "Ṡ": "S",
    "Š": "S",
    "Ṧ": "S",
    "Ṣ": "S",
    "Ṩ": "S",
    "Ș": "S",
    "Ş": "S",
    "Ȿ": "S",
    "Ꞩ": "S",
    "Ꞅ": "S",
    T: "T",
    "Ⓣ": "T",
    "Ｔ": "T",
    "Ṫ": "T",
    "Ť": "T",
    "Ṭ": "T",
    "Ț": "T",
    "Ţ": "T",
    "Ṱ": "T",
    "Ṯ": "T",
    "Ŧ": "T",
    "Ƭ": "T",
    "Ʈ": "T",
    "Ⱦ": "T",
    "Ꞇ": "T",
    "Ꜩ": "TZ",
    U: "U",
    "Ⓤ": "U",
    "Ｕ": "U",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ũ": "U",
    "Ṹ": "U",
    "Ū": "U",
    "Ṻ": "U",
    "Ŭ": "U",
    "Ü": "U",
    "Ǜ": "U",
    "Ǘ": "U",
    "Ǖ": "U",
    "Ǚ": "U",
    "Ủ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ǔ": "U",
    "Ȕ": "U",
    "Ȗ": "U",
    "Ư": "U",
    "Ừ": "U",
    "Ứ": "U",
    "Ữ": "U",
    "Ử": "U",
    "Ự": "U",
    "Ụ": "U",
    "Ṳ": "U",
    "Ų": "U",
    "Ṷ": "U",
    "Ṵ": "U",
    "Ʉ": "U",
    V: "V",
    "Ⓥ": "V",
    "Ｖ": "V",
    "Ṽ": "V",
    "Ṿ": "V",
    "Ʋ": "V",
    "Ꝟ": "V",
    "Ʌ": "V",
    "Ꝡ": "VY",
    W: "W",
    "Ⓦ": "W",
    "Ｗ": "W",
    "Ẁ": "W",
    "Ẃ": "W",
    "Ŵ": "W",
    "Ẇ": "W",
    "Ẅ": "W",
    "Ẉ": "W",
    "Ⱳ": "W",
    X: "X",
    "Ⓧ": "X",
    "Ｘ": "X",
    "Ẋ": "X",
    "Ẍ": "X",
    Y: "Y",
    "Ⓨ": "Y",
    "Ｙ": "Y",
    "Ỳ": "Y",
    "Ý": "Y",
    "Ŷ": "Y",
    "Ỹ": "Y",
    "Ȳ": "Y",
    "Ẏ": "Y",
    "Ÿ": "Y",
    "Ỷ": "Y",
    "Ỵ": "Y",
    "Ƴ": "Y",
    "Ɏ": "Y",
    "Ỿ": "Y",
    Z: "Z",
    "Ⓩ": "Z",
    "Ｚ": "Z",
    "Ź": "Z",
    "Ẑ": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "Ẓ": "Z",
    "Ẕ": "Z",
    "Ƶ": "Z",
    "Ȥ": "Z",
    "Ɀ": "Z",
    "Ⱬ": "Z",
    "Ꝣ": "Z",
    a: "a",
    "ⓐ": "a",
    "ａ": "a",
    "ẚ": "a",
    "à": "a",
    "á": "a",
    "â": "a",
    "ầ": "a",
    "ấ": "a",
    "ẫ": "a",
    "ẩ": "a",
    "ã": "a",
    "ā": "a",
    "ă": "a",
    "ằ": "a",
    "ắ": "a",
    "ẵ": "a",
    "ẳ": "a",
    "ȧ": "a",
    "ǡ": "a",
    "ä": "a",
    "ǟ": "a",
    "ả": "a",
    "å": "a",
    "ǻ": "a",
    "ǎ": "a",
    "ȁ": "a",
    "ȃ": "a",
    "ạ": "a",
    "ậ": "a",
    "ặ": "a",
    "ḁ": "a",
    "ą": "a",
    "ⱥ": "a",
    "ɐ": "a",
    "ꜳ": "aa",
    "æ": "ae",
    "ǽ": "ae",
    "ǣ": "ae",
    "ꜵ": "ao",
    "ꜷ": "au",
    "ꜹ": "av",
    "ꜻ": "av",
    "ꜽ": "ay",
    b: "b",
    "ⓑ": "b",
    "ｂ": "b",
    "ḃ": "b",
    "ḅ": "b",
    "ḇ": "b",
    "ƀ": "b",
    "ƃ": "b",
    "ɓ": "b",
    c: "c",
    "ⓒ": "c",
    "ｃ": "c",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "ç": "c",
    "ḉ": "c",
    "ƈ": "c",
    "ȼ": "c",
    "ꜿ": "c",
    "ↄ": "c",
    d: "d",
    "ⓓ": "d",
    "ｄ": "d",
    "ḋ": "d",
    "ď": "d",
    "ḍ": "d",
    "ḑ": "d",
    "ḓ": "d",
    "ḏ": "d",
    "đ": "d",
    "ƌ": "d",
    "ɖ": "d",
    "ɗ": "d",
    "ꝺ": "d",
    "ǳ": "dz",
    "ǆ": "dz",
    e: "e",
    "ⓔ": "e",
    "ｅ": "e",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ề": "e",
    "ế": "e",
    "ễ": "e",
    "ể": "e",
    "ẽ": "e",
    "ē": "e",
    "ḕ": "e",
    "ḗ": "e",
    "ĕ": "e",
    "ė": "e",
    "ë": "e",
    "ẻ": "e",
    "ě": "e",
    "ȅ": "e",
    "ȇ": "e",
    "ẹ": "e",
    "ệ": "e",
    "ȩ": "e",
    "ḝ": "e",
    "ę": "e",
    "ḙ": "e",
    "ḛ": "e",
    "ɇ": "e",
    "ɛ": "e",
    "ǝ": "e",
    f: "f",
    "ⓕ": "f",
    "ｆ": "f",
    "ḟ": "f",
    "ƒ": "f",
    "ꝼ": "f",
    g: "g",
    "ⓖ": "g",
    "ｇ": "g",
    "ǵ": "g",
    "ĝ": "g",
    "ḡ": "g",
    "ğ": "g",
    "ġ": "g",
    "ǧ": "g",
    "ģ": "g",
    "ǥ": "g",
    "ɠ": "g",
    "ꞡ": "g",
    "ᵹ": "g",
    "ꝿ": "g",
    h: "h",
    "ⓗ": "h",
    "ｈ": "h",
    "ĥ": "h",
    "ḣ": "h",
    "ḧ": "h",
    "ȟ": "h",
    "ḥ": "h",
    "ḩ": "h",
    "ḫ": "h",
    "ẖ": "h",
    "ħ": "h",
    "ⱨ": "h",
    "ⱶ": "h",
    "ɥ": "h",
    "ƕ": "hv",
    i: "i",
    "ⓘ": "i",
    "ｉ": "i",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "ï": "i",
    "ḯ": "i",
    "ỉ": "i",
    "ǐ": "i",
    "ȉ": "i",
    "ȋ": "i",
    "ị": "i",
    "į": "i",
    "ḭ": "i",
    "ɨ": "i",
    "ı": "i",
    j: "j",
    "ⓙ": "j",
    "ｊ": "j",
    "ĵ": "j",
    "ǰ": "j",
    "ɉ": "j",
    k: "k",
    "ⓚ": "k",
    "ｋ": "k",
    "ḱ": "k",
    "ǩ": "k",
    "ḳ": "k",
    "ķ": "k",
    "ḵ": "k",
    "ƙ": "k",
    "ⱪ": "k",
    "ꝁ": "k",
    "ꝃ": "k",
    "ꝅ": "k",
    "ꞣ": "k",
    l: "l",
    "ⓛ": "l",
    "ｌ": "l",
    "ŀ": "l",
    "ĺ": "l",
    "ľ": "l",
    "ḷ": "l",
    "ḹ": "l",
    "ļ": "l",
    "ḽ": "l",
    "ḻ": "l",
    "ſ": "l",
    "ł": "l",
    "ƚ": "l",
    "ɫ": "l",
    "ⱡ": "l",
    "ꝉ": "l",
    "ꞁ": "l",
    "ꝇ": "l",
    "ǉ": "lj",
    m: "m",
    "ⓜ": "m",
    "ｍ": "m",
    "ḿ": "m",
    "ṁ": "m",
    "ṃ": "m",
    "ɱ": "m",
    "ɯ": "m",
    n: "n",
    "ⓝ": "n",
    "ｎ": "n",
    "ǹ": "n",
    "ń": "n",
    "ñ": "n",
    "ṅ": "n",
    "ň": "n",
    "ṇ": "n",
    "ņ": "n",
    "ṋ": "n",
    "ṉ": "n",
    "ƞ": "n",
    "ɲ": "n",
    "ŉ": "n",
    "ꞑ": "n",
    "ꞥ": "n",
    "ǌ": "nj",
    o: "o",
    "ⓞ": "o",
    "ｏ": "o",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "ồ": "o",
    "ố": "o",
    "ỗ": "o",
    "ổ": "o",
    "õ": "o",
    "ṍ": "o",
    "ȭ": "o",
    "ṏ": "o",
    "ō": "o",
    "ṑ": "o",
    "ṓ": "o",
    "ŏ": "o",
    "ȯ": "o",
    "ȱ": "o",
    "ö": "o",
    "ȫ": "o",
    "ỏ": "o",
    "ő": "o",
    "ǒ": "o",
    "ȍ": "o",
    "ȏ": "o",
    "ơ": "o",
    "ờ": "o",
    "ớ": "o",
    "ỡ": "o",
    "ở": "o",
    "ợ": "o",
    "ọ": "o",
    "ộ": "o",
    "ǫ": "o",
    "ǭ": "o",
    "ø": "o",
    "ǿ": "o",
    "ɔ": "o",
    "ꝋ": "o",
    "ꝍ": "o",
    "ɵ": "o",
    "œ": "oe",
    "ꟹ": "oe",
    "ƣ": "oi",
    "ȣ": "ou",
    "ꝏ": "oo",
    p: "p",
    "ⓟ": "p",
    "ｐ": "p",
    "ṕ": "p",
    "ṗ": "p",
    "ƥ": "p",
    "ᵽ": "p",
    "ꝑ": "p",
    "ꝓ": "p",
    "ꝕ": "p",
    q: "q",
    "ⓠ": "q",
    "ｑ": "q",
    "ɋ": "q",
    "ꝗ": "q",
    "ꝙ": "q",
    r: "r",
    "ⓡ": "r",
    "ｒ": "r",
    "ŕ": "r",
    "ṙ": "r",
    "ř": "r",
    "ȑ": "r",
    "ȓ": "r",
    "ṛ": "r",
    "ṝ": "r",
    "ŗ": "r",
    "ṟ": "r",
    "ɍ": "r",
    "ɽ": "r",
    "ꝛ": "r",
    "ꞧ": "r",
    "ꞃ": "r",
    s: "s",
    "ⓢ": "s",
    "ｓ": "s",
    "ß": "ss",
    "ś": "s",
    "ṥ": "s",
    "ŝ": "s",
    "ṡ": "s",
    "š": "s",
    "ṧ": "s",
    "ṣ": "s",
    "ṩ": "s",
    "ș": "s",
    "ş": "s",
    "ȿ": "s",
    "ꞩ": "s",
    "ꞅ": "s",
    "ẛ": "s",
    t: "t",
    "ⓣ": "t",
    "ｔ": "t",
    "ṫ": "t",
    "ẗ": "t",
    "ť": "t",
    "ṭ": "t",
    "ț": "t",
    "ţ": "t",
    "ṱ": "t",
    "ṯ": "t",
    "ŧ": "t",
    "ƭ": "t",
    "ʈ": "t",
    "ⱦ": "t",
    "ꞇ": "t",
    "ꜩ": "tz",
    u: "u",
    "ⓤ": "u",
    "ｕ": "u",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ũ": "u",
    "ṹ": "u",
    "ū": "u",
    "ṻ": "u",
    "ŭ": "u",
    "ü": "u",
    "ǜ": "u",
    "ǘ": "u",
    "ǖ": "u",
    "ǚ": "u",
    "ủ": "u",
    "ů": "u",
    "ű": "u",
    "ǔ": "u",
    "ȕ": "u",
    "ȗ": "u",
    "ư": "u",
    "ừ": "u",
    "ứ": "u",
    "ữ": "u",
    "ử": "u",
    "ự": "u",
    "ụ": "u",
    "ṳ": "u",
    "ų": "u",
    "ṷ": "u",
    "ṵ": "u",
    "ʉ": "u",
    v: "v",
    "ⓥ": "v",
    "ｖ": "v",
    "ṽ": "v",
    "ṿ": "v",
    "ʋ": "v",
    "ꝟ": "v",
    "ʌ": "v",
    "ꝡ": "vy",
    w: "w",
    "ⓦ": "w",
    "ｗ": "w",
    "ẁ": "w",
    "ẃ": "w",
    "ŵ": "w",
    "ẇ": "w",
    "ẅ": "w",
    "ẘ": "w",
    "ẉ": "w",
    "ⱳ": "w",
    x: "x",
    "ⓧ": "x",
    "ｘ": "x",
    "ẋ": "x",
    "ẍ": "x",
    y: "y",
    "ⓨ": "y",
    "ｙ": "y",
    "ỳ": "y",
    "ý": "y",
    "ŷ": "y",
    "ỹ": "y",
    "ȳ": "y",
    "ẏ": "y",
    "ÿ": "y",
    "ỷ": "y",
    "ẙ": "y",
    "ỵ": "y",
    "ƴ": "y",
    "ɏ": "y",
    "ỿ": "y",
    z: "z",
    "ⓩ": "z",
    "ｚ": "z",
    "ź": "z",
    "ẑ": "z",
    "ż": "z",
    "ž": "z",
    "ẓ": "z",
    "ẕ": "z",
    "ƶ": "z",
    "ȥ": "z",
    "ɀ": "z",
    "ⱬ": "z",
    "ꝣ": "z"
};
class Et extends _t {
    constructor(e, t) {
        super(e),
        this.mobileInput = t
    }
    init() {
        this.mobileInput.oninput = e => this.handleInputEvent(e),
        this.keydownEvent = e => {
            Ee.isInputActive || ("Escape" == e.key && (e.preventDefault(),
            this.showKeyboard()),
            "Enter" === e.key && (e.preventDefault(),
            this.onSendWord()),
            V.autoSpaceHypen && " " === e.key && (e.preventDefault(),
            this.mobileInput.value += "-",
            this.localWord += "-",
            this.onWordUpdate(this.localWord)))
        }
        ,
        window.addEventListener("keydown", this.keydownEvent)
    }
    showKeyboard() {
        K() ? this.mobileInput.focus() : setTimeout(( () => {
            this.mobileInput.focus()
        }
        ), 300)
    }
    hideKeyboard() {
        this.mobileInput.blur()
    }
    destroy() {
        this.keydownEvent && window.removeEventListener("keydown", this.keydownEvent),
        this.inputEvent && this.mobileInput.removeEventListener("keydown", this.inputEvent),
        this.mobileInput && (this.mobileInput.oninput = null,
        this.mobileInput.blur()),
        this.keyboardButton && this.keyboardButton.remove()
    }
    handleInputEvent(e) {
        e.preventDefault();
        const t = e.target;
        if (null == t)
            return;
        this.mobileInput.value.endsWith(" ") && (V.autoSpaceHypen ? this.mobileInput.value = this.mobileInput.value.slice(0, -1) + "-" : this.mobileInput.value = this.mobileInput.value.slice(0, -1));
        let a = t.value.split("").map((e => {
            var t, a;
            if (ce.isKeyAllowed(e, null === (t = N.gamePlayer) || void 0 === t ? void 0 : t.lang))
                return e;
            {
                z(e);
                const t = Ct[e] || "";
                return ce.isKeyAllowed(t, null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.lang) ? t : ""
            }
        }
        )).join("");
        this.localWord = a,
        t.value = this.localWord,
        this.onWordUpdate(this.localWord)
    }
    onSendWord() {
        this.onSubmit(this.localWord.trim()),
        this.localWord = "",
        this.mobileInput.value = ""
    }
    onLocalTurn() {
        this.localWord = "",
        this.mobileInput.value = "",
        this.showKeyboard(),
        this.showKeyboardButton()
    }
    gameEnd() {
        this.localWord = "",
        this.mobileInput.value = "",
        this.hideKeyboard(),
        this.hideKeyboardButton(),
        this.onWordUpdate("")
    }
    onRemoteTurn() {
        this.localWord = "",
        this.mobileInput.value = "",
        V.neverCloseKeyboardOnMobile || this.hideKeyboard(),
        this.hideKeyboardButton()
    }
    afterCorrectGuess() {
        this.soloMode || V.neverCloseKeyboardOnMobile || this.hideKeyboard()
    }
    afterWrongGuess() {
        this.localWord = "",
        this.mobileInput.value = "",
        this.showKeyboard()
    }
    showKeyboardButton() {
        this.hideKeyboardButton(),
        this.keyboardButton || (this.keyboardButton = document.createElement("div"),
        this.keyboardButton.classList.add("keyboard-button"),
        this.keyboardButton.addEventListener("click", (e => {
            e.preventDefault(),
            this.showKeyboard()
        }
        )),
        document.body.appendChild(this.keyboardButton)),
        this.keyboardButton.style.display = "block"
    }
    hideKeyboardButton() {
        null != this.keyboardButton && (this.keyboardButton.style.display = "none")
    }
    setValue(e) {
        this.localWord = e,
        this.mobileInput.value = e
    }
}
class Lt extends _t {
    destroy() {
        this.event && window.removeEventListener("keydown", this.event)
    }
    constructor(e) {
        super(e)
    }
    init() {
        this.event = e => this.handleKeyDown(e),
        window.addEventListener("keydown", this.event)
    }
    handleKeyDown(e) {
        var t, a, n = At.room.state;
        if (n.currentPlayerSessionId != this.localPlayer.session_id)
            return;
        if (!n.started)
            return;
        if (Ee.isInputActive)
            return;
        const o = e.key;
        if ("'" === o && e.preventDefault(),
        (e.ctrlKey || e.metaKey || e.altKey) && "Backspace" === o)
            return e.preventDefault(),
            this.localWord = "",
            void this.onWordUpdate(this.localWord);
        if ((e.ctrlKey || e.metaKey || e.altKey) && "Delete" === o)
            return e.preventDefault(),
            this.localWord = "",
            void this.onWordUpdate(this.localWord);
        if (V.ctrlADeletesAll && (e.ctrlKey || e.metaKey || e.altKey) && "a" == o)
            return e.preventDefault(),
            this.localWord = "",
            void this.onWordUpdate(this.localWord);
        if ("Enter" === o)
            this.onSubmit(this.localWord),
            this.localWord = "";
        else if (" " === o)
            V.autoSpaceHypen && (this.localWord += "-",
            this.onWordUpdate(this.localWord));
        else if ("Backspace" === o)
            this.localWord.length > 0 && (this.localWord = this.localWord.slice(0, -1),
            this.onWordUpdate(this.localWord));
        else if (1 === o.length) {
            let e = o;
            if (!ce.isKeyAllowed(e, null === (t = N.gamePlayer) || void 0 === t ? void 0 : t.lang) && (e = Ct[e] || "",
            !ce.isKeyAllowed(e, null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.lang)))
                return;
            this.localWord += e,
            this.localWord = this.localWord.slice(0, 40),
            this.onWordUpdate(this.localWord)
        }
    }
    gameEnd() {
        this.localWord = ""
    }
    onLocalTurn() {
        this.localWord = ""
    }
    onRemoteTurn() {
        this.localWord = ""
    }
    afterCorrectGuess() {
        this.localWord = ""
    }
    afterWrongGuess() {}
    onResize() {}
    setValue(e) {
        this.localWord = e,
        this.onWordUpdate(e)
    }
}
var kt = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class St extends E {
    constructor() {
        super("winner.html")
    }
    open() {
        return kt(this, void 0, void 0, (function*() {
            yield this.load()
        }
        ))
    }
    show(e) {
        return kt(this, void 0, void 0, (function*() {
            var t, a, n, o, i;
            const s = e[0];
            var d = "winner"
              , l = .11;
            s.player.id != N.player.id && (1e3 * Math.random() <= 10 && (d = "looser",
            l = .45));
            (r.play(d, {
                volume: V.musicVolume * l
            }),
            N.round > 10) || (null === (t = this.container) || void 0 === t ? void 0 : t.querySelector("#winner-crown")).remove();
            (null === (a = this.container) || void 0 === a ? void 0 : a.querySelector("#first-place-name")).textContent = s.player.name;
            const c = null === (n = this.container) || void 0 === n ? void 0 : n.querySelector("#first-place-avatar");
            $(H(s.player.id, s.player.avatar, 128), c);
            const m = null === (o = this.container) || void 0 === o ? void 0 : o.querySelector(".apbase");
            m.innerHTML = "";
            const u = [];
            s.elo && u.push({
                title: L.getWord("rp"),
                value: s.elo.toString() + (s.eloDiff > 0 ? " (+" + s.eloDiff + ")" : "(" + s.eloDiff + ")")
            }),
            s.reached_wpp && u.push({
                title: L.getWord("wpp"),
                value: s.reached_wpp.toString()
            }),
            s.longest_word && u.push({
                title: L.getWord("longest_word"),
                value: s.longest_word
            }),
            s.collected_coins > 0 && u.push({
                title: L.getWord("collected_coins"),
                value: s.collected_coins.toString()
            }),
            s.correct_words > 0 && (u.push({
                title: L.getWord("correct_words"),
                value: s.correct_words.toString()
            }),
            u.push({
                title: L.getWord("wrong_words"),
                value: s.wrong_words.toString()
            })),
            u.forEach((e => {
                const t = document.createElement("div");
                t.className = "apinfo";
                const a = document.createElement("span");
                a.className = "appinfo-title",
                a.textContent = e.title;
                const n = document.createElement("span");
                n.className = "appinfo-value",
                n.textContent = e.value,
                t.append(a, n),
                m.appendChild(t)
            }
            ));
            const p = null === (i = this.container) || void 0 === i ? void 0 : i.querySelector("#winner-additional");
            p.innerHTML = "",
            e.slice(1, 3).forEach(( (e, t) => {
                const a = document.createElement("div");
                a.className = "other-place";
                const n = document.createElement("div");
                n.className = "apbase";
                const o = document.createElement("img");
                o.src = 0 === t ? "/web/secondplace.png" : "/web/thirdplace.png";
                const i = document.createElement("img");
                i.className = "other-place-avatar",
                $(H(e.player.id, e.player.avatar, 128), i);
                const s = document.createElement("span");
                s.className = "line-height",
                s.textContent = e.player.name,
                n.append(o, i, s);
                const r = document.createElement("div");
                r.className = "apbase";
                const d = [];
                e.elo && d.push({
                    title: L.getWord("rp"),
                    value: e.elo.toString() + (e.eloDiff > 0 ? " (+" + e.eloDiff + ")" : "(" + e.eloDiff + ")")
                }),
                e.longest_word && d.push({
                    title: L.getWord("longest_word"),
                    value: e.longest_word
                }),
                e.collected_coins > 0 && d.push({
                    title: L.getWord("collected_coins"),
                    value: e.collected_coins.toString()
                }),
                e.correct_words > 0 && d.push({
                    title: L.getWord("correct_words"),
                    value: e.correct_words.toString()
                }),
                e.wrong_words > 0 && d.push({
                    title: L.getWord("wrong_words"),
                    value: e.wrong_words.toString()
                }),
                d.forEach((e => {
                    const t = document.createElement("div");
                    t.className = "apinfo";
                    const a = document.createElement("span");
                    a.className = "appinfo-title",
                    a.textContent = e.title;
                    const n = document.createElement("span");
                    n.className = "appinfo-value",
                    n.textContent = e.value,
                    t.append(a, n),
                    r.appendChild(t)
                }
                )),
                a.append(n, r),
                p.appendChild(a)
            }
            )),
            this.timeout = setTimeout(( () => {
                var e, t = document.createElement("div");
                t.classList.add("ws-buttons");
                var a = document.createElement("div");
                a.classList.add("close-button"),
                a.classList.add("ws-close"),
                a.textContent = L.getWord("skip"),
                a.onclick = () => {
                    this.fade(),
                    setTimeout(( () => {
                        this.onClose()
                    }
                    ), 500)
                }
                ;
                var n = document.createElement("div");
                n.classList.add("close-button"),
                n.classList.add("history-button"),
                n.textContent = "👁️️",
                n.onclick = () => {
                    xe.openHistoryScreen(),
                    this.fade(),
                    setTimeout(( () => {
                        this.onClose()
                    }
                    ), 500)
                }
                ,
                t.appendChild(a),
                t.appendChild(n),
                null === (e = this.container) || void 0 === e || e.appendChild(t)
            }
            ), 5e3)
        }
        ))
    }
    fade() {
        var e;
        null === (e = this.container) || void 0 === e || e.classList.add("fade")
    }
}
class xt {
    localeChange() {
        this.startButton.textContent = L.getWord("play")
    }
    constructor(e, t) {
        var a, n = document.getElementById("ga-container");
        this.startButton = document.createElement("button"),
        this.startButton.classList.add("start-button"),
        this.startButton.textContent = L.getWord("play"),
        "123980085836382208" == (null === (a = N.player) || void 0 === a ? void 0 : a.id) && (this.startButton.textContent = "Click for free candies"),
        this.startButton.addEventListener("click", e),
        n.appendChild(this.startButton),
        this.boundLocaleChange = this.localeChange.bind(this),
        L.addListener(this.boundLocaleChange)
    }
    destroy() {
        this.startButton.remove(),
        L.removeListener(this.boundLocaleChange)
    }
    hide() {
        this.startButton.style.display = "none"
    }
    show() {
        this.startButton.style.display = "block"
    }
}
class Tt {
    constructor() {
        this.rankedText = null,
        this.wppText = null,
        this.diffText = null,
        this.speedText = null,
        this.heartsText = null,
        this.scenarioContainer = null
    }
    destroy() {
        var e;
        null === (e = this.container) || void 0 === e || e.remove(),
        this.reset()
    }
    reset() {
        this.container = null,
        this.roomCodeText = null,
        this.modeText = null,
        this.rankedText = null,
        this.wppText = null,
        this.diffText = null,
        this.speedText = null,
        this.heartsText = null
    }
    createSpan(e, t) {
        const a = document.createElement("span");
        return a.classList.add(e),
        a.textContent = t,
        a
    }
    updateGameMode() {
        var e;
        const t = ce.gameModes.find((e => e.id == At.room.state.mode))
          , a = L.getWord(null == t ? void 0 : t.name);
        this.modeText.textContent = a,
        null === (e = this.modeText.parentElement) || void 0 === e || e.insertBefore(this.modeText, this.modeText.parentElement.firstChild)
    }
    updateWpp() {
        const e = At.room.state.wpp
          , t = 1 === At.room.state.wpp_s ? L.getWord("at_least") : L.getWord("at_most");
        -1 !== e && 0 == At.room.state.sc ? this.wppText ? this.wppText.textContent = `${t} ${e} ${L.getWord("wpp")}` : (this.wppText = this.createSpan("ri-wpp", `${t} ${e} WPP`),
        this.container.appendChild(this.wppText)) : this.wppText && (this.wppText.remove(),
        this.wppText = null)
    }
    updateSpeed() {
        const e = At.room.state.speed;
        1 !== e ? this.speedText ? this.speedText.textContent = `⏱ ${e}x` : (this.speedText = this.createSpan("ri-speed", `⏱ ${e}x`),
        this.container.appendChild(this.speedText)) : this.speedText && (this.speedText.remove(),
        this.speedText = null)
    }
    updateTurn() {
        const e = N.round;
        0 !== e ? this.turnText ? this.turnText.textContent = `🔄${e}` : (this.turnText = this.createSpan("ri-turn", `🔄${e}`),
        this.container.appendChild(this.turnText)) : this.turnText && (this.turnText.remove(),
        this.turnText = null)
    }
    updateHearts() {
        const e = At.room.state.heart;
        2 !== e ? this.heartsText ? this.heartsText.textContent = `💗 ${e}` : (this.heartsText = this.createSpan("ri-hearts", `💗 ${e}`),
        this.container.appendChild(this.heartsText)) : this.heartsText && (this.heartsText.remove(),
        this.heartsText = null)
    }
    updateDiff() {
        const e = At.room.state.diff;
        if (0 == e || this.diffText)
            0 === e && this.diffText && (this.diffText.remove(),
            this.diffText = null);
        else {
            var t = ce.getDifficulties();
            t.push({
                id: 2,
                name: "practice"
            });
            var a = t.find((t => t.id == e));
            this.diffText = this.createSpan("ri-diff", L.getWord(a.name)),
            this.container.appendChild(this.diffText)
        }
    }
    create() {
        var e;
        return this.container = document.createElement("div"),
        this.container.classList.add("ri-panel"),
        this.roomCodeText = this.createSpan("ri-code", `${null === (e = At.room) || void 0 === e ? void 0 : e.roomId}`),
        this.modeText = this.createSpan("ri-mode", ""),
        this.roomCodeText.addEventListener("click", ( () => {
            var e;
            u || navigator.clipboard.writeText("https://wordbomb.io/?room=" + (null === (e = At.room) || void 0 === e ? void 0 : e.roomId)),
            R(L.getWord("room_code_copied"))
        }
        )),
        u && (this.roomCodeText.style.display = "none"),
        this.container.appendChild(this.roomCodeText),
        this.container.appendChild(this.modeText),
        this.update(),
        this.container
    }
    update() {
        
        this.container && (this.updateWpp(),
        this.updateDiff(),
        this.updateSpeed(),
        this.updateHearts(),
        this.updateGameMode(),
        this.updateRoomCode(),
        this.updateScenario())
        
    }
    updateScenario() {
        if (this.scenarioContainer || (this.scenarioContainer = document.createElement("div"),
        this.scenarioContainer.classList.add("cs-scenario-container")),
        0 != At.room.state.sc) {
            var e = we.find((e => e.id == At.room.state.sc));
            if (e) {
                this.scenarioContainer.innerHTML = "";
                var t = document.createElement("div");
                t.classList.add("cs-mode-title"),
                t.innerText = "Scenario",
                this.scenarioContainer.appendChild(t);
                var a = document.createElement("div");
                a.classList.add("cs-scenario"),
                a.innerText = L.getWord(e.name),
                this.scenarioContainer.appendChild(a),
                this.container.appendChild(this.scenarioContainer),
                this.wppText && (this.wppText.style.display = "none"),
                this.diffText && (this.diffText.style.display = "none"),
                this.speedText && (this.speedText.style.display = "none"),
                this.heartsText && (this.heartsText.style.display = "none")
            }
        } else
            this.scenarioContainer.innerHTML = "",
            this.wppText && (this.wppText.style.display = "block"),
            this.diffText && (this.diffText.style.display = "block"),
            this.speedText && (this.speedText.style.display = "block"),
            this.heartsText && (this.heartsText.style.display = "block")
    }
    updateRoomCode() {
        var e, t;
        null === (e = this.roomCodeText.parentElement) || void 0 === e || e.insertBefore(this.roomCodeText, this.roomCodeText.parentElement.firstChild),
        this.roomCodeText.textContent = null === (t = At.room) || void 0 === t ? void 0 : t.roomId
    }
}
class Pt {
    destroy() {
        var e;
        null === (e = this.alphabet) || void 0 === e || e.remove()
    }
    constructor() {
        var e;
        this.chars = new Map,
        (null === (e = N.gamePlayer) || void 0 === e ? void 0 : e.spectating) || (this.alphabet = document.createElement("div"),
        this.alphabet.id = "a-list",
        document.body.appendChild(this.alphabet))
    }
    update(e) {
        

        
        for (const [t,a] of Object.entries(e))
            if (this.chars.has(t)) {
                const e = this.chars.get(t);
                e && (a > 0 ? (e.querySelector(".count").textContent = a.toString(),
                e.classList.add("small-changed"),
                setTimeout(( () => {
                    null == e || e.classList.remove("small-changed")
                }
                ), 500)) : (e.classList.add("a-char-active"),
                e.querySelector(".count").textContent = "0"))
            } else {
                const e = document.createElement("div");
                e.classList.add("a-char");
                const n = document.createElement("span");
                n.classList.add("letter"),
                n.textContent = t;
                const o = document.createElement("span");
                o.classList.add("count"),
                o.textContent = a.toString(),
                e.appendChild(n),
                e.appendChild(o),
                this.alphabet.appendChild(e),
                a <= 0 && (e.classList.add("a-char-active"),
                o.textContent = "0"),
                this.chars.set(t, e)
            }
    }
    reset() {
        this.alphabet.innerHTML = "",
        this.chars.clear()
    }
}
class Mt {
    constructor() {
        this.cards = [],
        this.selectedCard = null
    }
    onMatchStart() {
        var e = document.createElement("div");
        e.classList.add("bet-container"),
        e.id = "bet-container",
        document.body.appendChild(e);
        const t = document.createElement("div");
        t.classList.add("poker-cards-container"),
        document.body.appendChild(t),
        this.betState = At.room.onMessage("card-state", (e => {
            this.cards = [],
            t.innerHTML = "";
            const a = this.createCard(e.low, "♦", !0);
            a.addEventListener("click", ( () => this.handleCardClick(a))),
            t.appendChild(a),
            this.cards.push(a);
            const n = this.createCard(e.mid, "♥", !0);
            n.addEventListener("click", ( () => this.handleCardClick(n))),
            t.appendChild(n),
            this.cards.push(n);
            const o = this.createCard(e.high, "♠", !1);
            o.addEventListener("click", ( () => this.handleCardClick(o))),
            t.appendChild(o),
            this.cards.push(o);
            const i = this.createCard(e.random, "♣", !1);
            i.addEventListener("click", ( () => this.handleCardClick(i))),
            t.appendChild(i),
            this.cards.push(i)
        }
        ))
    }
    createCard(e, t, a) {
        const n = document.createElement("div");
        n.classList.add("poker-card"),
        a ? n.classList.add("red-suit") : n.classList.add("black-suit");
        const o = document.createElement("div");
        o.classList.add("card-inner"),
        o.appendChild(this.createCorner(e, t, "top-left"));
        const i = document.createElement("div");
        i.classList.add("card-value"),
        i.textContent = e;
        const s = document.createElement("div");
        return s.classList.add("card-suit"),
        s.innerHTML = t,
        o.appendChild(i),
        o.appendChild(s),
        o.appendChild(this.createCorner(e, t, "bottom-right")),
        n.appendChild(o),
        n
    }
    createCorner(e, t, a) {
        const n = document.createElement("div");
        n.classList.add("card-corner", a);
        const o = document.createElement("div");
        o.classList.add("card-value-small"),
        o.textContent = e;
        const i = document.createElement("div");
        return i.classList.add("card-suit-small"),
        i.innerHTML = t,
        n.appendChild(o),
        n.appendChild(i),
        n
    }
    handleCardClick(e) {
        this.selectedCard === e ? (e.classList.remove("card-selected"),
        e.style.position = "",
        e.style.top = "",
        e.style.left = "",
        e.style.transform = "",
        e.style.zIndex = "",
        this.selectedCard = null) : (this.selectedCard && (this.selectedCard.classList.remove("card-selected"),
        this.selectedCard.style.position = "",
        this.selectedCard.style.top = "",
        this.selectedCard.style.left = "",
        this.selectedCard.style.transform = "",
        this.selectedCard.style.zIndex = ""),
        e.classList.add("card-selected"),
        e.style.position = "fixed",
        e.style.top = "50%",
        e.style.left = "50%",
        e.style.transform = "translate(-50%, -50%) scale(1.5)",
        e.style.zIndex = "2000",
        this.selectedCard = e)
    }
    onMatchStop() {
        this.remove()
    }
    remove() {
        var e;
        const t = document.getElementById("bet-container");
        t && t.remove();
        const a = document.querySelector(".poker-cards-container");
        a && a.remove(),
        this.cards = [],
        this.selectedCard = null,
        null === (e = this.betState) || void 0 === e || e.call(this)
    }
}
var It = function(e, t, a, n) {
    return new (a || (a = Promise))((function(o, i) {
        function s(e) {
            try {
                d(n.next(e))
            } catch (t) {
                i(t)
            }
        }
        function r(e) {
            try {
                d(n.throw(e))
            } catch (t) {
                i(t)
            }
        }
        function d(e) {
            var t;
            e.done ? o(e.value) : (t = e.value,
            t instanceof a ? t : new a((function(e) {
                e(t)
            }
            ))).then(s, r)
        }
        d((n = n.apply(e, t || [])).next())
    }
    ))
};
class At {
    constructor() {
        this.localCombo = 1,
        this.mobileInput = document.getElementById("input"),
        this.backgroundOffsetX = 0
    }
    onConnected() {
        return It(this, void 0, void 0, (function*() {
            var e;
            if (N.currentRoom = At.room,
            At.room.state.listen("locale", (e => {
                var t;
                null != this.navigationPanel && (this.navigationPanel.setLocale(e, !0),
                L.setLocale(e),
                null === (t = this.roomInfoPanel) || void 0 === t || t.update())
            }
            )),
            At.room.state.listen("background", (e => {
                var t;
                null === (t = this.navigationPanel) || void 0 === t || t.setBackground(e, !0),
                this.setBackground(e)
            }
            )),
            At.room.state.listen("mlang", (e => {
                var t, a, n, o;
                e ? (null === (t = this.playerContainer) || void 0 === t || t.showLanguages(),
                null === (a = this.navigationPanel) || void 0 === a || a.hideLanguagePanel()) : (null === (n = this.playerContainer) || void 0 === n || n.hideLanguages(),
                null === (o = this.navigationPanel) || void 0 === o || o.showLanguagePanel())
            }
            )),
            At.room.state.listen("speed", (e => {
                var t;
                null != this.navigationPanel && (null === (t = this.roomInfoPanel) || void 0 === t || t.update())
            }
            )),
            At.room.state.listen("sc", (e => {
                var t;
                null === (t = this.roomInfoPanel) || void 0 === t || t.update()
            }
            )),
            At.room.state.listen("mode", (e => {
                var t;
                if (null != this.navigationPanel) {
                    var a = document.getElementById("gm-mode-sw");
                    if (a) {
                        a.querySelectorAll(".gamemode").forEach((e => e.classList.remove("selected")));
                        var n = a.querySelector("#ms-setting-" + e);
                        null == n || n.classList.add("selected"),
                        n.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest"
                        })
                    }
                    this.navigationPanel.setGameMode(e),
                    this.playerContainer.updatePlayerPositions(),
                    3 == e && R(L.getWord("translation_mode_info")),
                    null === (t = this.roomInfoPanel) || void 0 === t || t.update()
                }
            }
            )),
            At.room.state.listen("time", (e => {
                var t;
                null === (t = this.gameScreen) || void 0 === t || t.onTimeChange(e)
            }
            )),
            At.room.state.listen("locked", (e => {
                null != this.navigationPanel && (this.navigationPanel.setLocked(e),
                this.localPlayer.session_id == At.room.state.host && R(e ? L.getWord("room_private_info") : L.getWord("room_public_info")))
            }
            )),
            At.room.state.listen("word", (e => {
                null != this.localPlayer && this.localPlayer.session_id == At.room.state.currentPlayerSessionId || this.setWord(e)
            }
            )),
            At.room.onMessage("update-profile", (e => {
                this.playerContainer.getPlayerFromId(e.id).setDisplayName(e.displayName)
            }
            )),
            At.room.onLeave((e => {
                this.onLeave && this.onLeave(e, "You have left the room"),
                W(`Leaving room with code: ${e}`, M)
            }
            )),
            At.room.onError(( (e, t) => {
                j("Error code: " + e + "\n Message: " + t),
                W(`Lobby room error: ${t} ${e} report this error code to our discord server`, M)
            }
            )),
            At.room.state.listen("maxTime", (e => {
                var t;
                null === (t = this.gameScreen) || void 0 === t || t.setMaxTime(e)
            }
            )),
            At.room.state.listen("host", (e => {
                var t;
                null === (t = this.playerContainer.getPlayerFromId(e)) || void 0 === t || t.setHost()
            }
            )),
            At.room.state.listen("wpp", (e => {
                var t, a, n;
                if (null === (t = this.roomInfoPanel) || void 0 === t || t.updateWpp(),
                8 == At.room.state.mode) {
                    e < 0 && (e = 6e3);
                    const t = e / 6e3 * 100;
                    this.background.style.backgroundPosition = `center ${t}%`,
                    (null === (n = null === (a = this.gameScreen) || void 0 === a ? void 0 : a.letterContainer) || void 0 === n ? void 0 : n.additionalInfo) && (this.gameScreen.letterContainer.additionalInfo.textContent = e.toString() + " WPP")
                }
            }
            )),
            At.room.state.players.onAdd(this.onPlayerJoin.bind(this)),
            At.room.state.players.onRemove(this.onPlayerLeave.bind(this)),
            At.room.onMessage("start", this.onMatchStart.bind(this)),
            At.room.onMessage("stop", this.onMatchStop.bind(this)),
            At.room.onMessage("hurt", this.onPlayerHurt.bind(this)),
            At.room.onMessage("eliminated", this.onPlayerEliminated.bind(this)),
            At.room.onMessage("winner", this.onPlayerWin.bind(this)),
            At.room.onMessage("correct", this.onPlayerCorrectGuess.bind(this)),
            At.room.onMessage("new", this.onNewWord.bind(this)),
            At.room.onMessage("wrong", this.onPlayerWrongGuess.bind(this)),
            At.room.onMessage("countdown", this.onCountdown.bind(this)),
            At.room.onMessage("heart", this.onUpdateHeart.bind(this)),
            At.room.onMessage("title", this.onTitleChange.bind(this)),
            At.room.onMessage("unlock-chest", Me.bind(this)),
            At.room.onMessage("key", this.onKeyEarned.bind(this)),
            At.room.onMessage("word-spawn", this.onWordEarned.bind(this)),
            At.room.onMessage("item-spawn", this.onItemSpawn.bind(this)),
            At.room.onMessage("frame", this.onFrame.bind(this)),
            At.room.onMessage("lang-set", (e => {
                var t, a, n;
                null === (a = null === (t = this.playerContainer) || void 0 === t ? void 0 : t.getPlayerFromId(e.id)) || void 0 === a || a.setLanguage(e.lang),
                e.id == (null === (n = N.gamePlayer) || void 0 === n ? void 0 : n.session_id) && (N.gamePlayer.lang = e.lang)
            }
            )),
            At.room.onMessage("cat", (e => {
                var t = e.category
                  , a = document.getElementById("category-pop");
                a || ((a = document.createElement("div")).id = "category-pop",
                a.classList.add("category-pop"),
                document.body.appendChild(a));
                var n = document.createElement("img");
                n.src = `/categories/${t}.png`,
                n.classList.add("cat-game"),
                setTimeout(( () => {
                    n.style.animation = "pop-out 1s",
                    setTimeout(( () => {
                        n.remove()
                    }
                    ), 1e3)
                }
                ), 2e3),
                a.appendChild(n)
            }
            )),
            At.room.onMessage("user-letter-healths", (e => {
                this.charContainer || (this.charContainer = new Pt),
                this.charContainer.update(e)
            }
            )),
            At.room.onMessage("hint", (e => {
                !function(e, t=3e3) {
                    const a = document.getElementById("small_err");
                    if (a && a.remove(),
                    e) {
                        var n = document.createElement("div");
                        n.id = "small_err",
                        n.innerHTML = e,
                        n.classList.add("word-exist"),
                        n.classList.add("pop-inf"),
                        document.body.appendChild(n),
                        setTimeout(( () => {
                            null == n || n.remove()
                        }
                        ), t)
                    }
                }(e, 6e3)
            }
            )),
            At.room.onMessage("dc", (e => {
                var t = e.id
                  , a = e.status
                  , n = this.playerContainer.getPlayerFromId(t);
                n && n.disconnect(a)
            }
            )),
            At.room.onMessage("duration", (e => {
                var t, a;
                null === (a = null === (t = this.gameScreen) || void 0 === t ? void 0 : t.letterContainer) || void 0 === a || a.setDuration(e.duration)
            }
            )),
            At.room.onMessage("monster-state", (e => It(this, void 0, void 0, (function*() {
                for (var t, a, n, o, i = 0; !this.gameScreen && i < 20; )
                    yield new Promise((e => setTimeout(e, 50))),
                    i++;
                this.gameScreen && ((null === (t = this.gameScreen) || void 0 === t ? void 0 : t.monster) || (this.gameScreen.monster = new te),
                null === (a = this.gameScreen) || void 0 === a || a.monster.setState(e),
                e.letter && (At.room.state.currentPlayerSessionId,
                null === (n = N.gamePlayer) || void 0 === n || n.session_id,
                null === (o = this.gameScreen) || void 0 === o || o.setLetter(e.letter)))
            }
            )))),
            At.room.onMessage("monster-health", (e => {
                var t;
                null === (t = this.gameScreen) || void 0 === t || t.monster.setHealth(e)
            }
            )),
            At.room.onMessage("monster-kill", (e => {
                var t;
                null === (t = this.gameScreen) || void 0 === t || t.monster.kill()
            }
            )),
            At.room.onMessage("diamond-spawn", (e => {
                var t, a = document.createElement("img"), n = null === (t = this.playerContainer) || void 0 === t ? void 0 : t.getPlayerFromId(e.id);
                if (n) {
                    n.spawnedSomething();
                    var o = ye(n.element);
                    a.style.position = "absolute",
                    a.style.top = o.top + 30 + "px",
                    a.style.left = o.left + o.width / 2 + "px"
                }
                a.src = "/web/diamond.png",
                a.classList.add("key-game"),
                document.body.appendChild(a),
                r.play("diamond", {
                    volume: .45 * V.effects,
                    speed: .8
                }),
                setTimeout(( () => {
                    a.remove()
                }
                ), 2500)
            }
            )),
            At.room.onMessage("show_small_err", (e => {
                z(e)
            }
            )),
            At.room.onMessage("bg-change", (e => {
                var t, a = this.playerContainer.getPlayerFromId(e.id);
                null === (t = this.navigationPanel) || void 0 === t || t.setBackgroundOwner(a.player)
            }
            )),
            At.room.onMessage("turn", (e => {
                var t, a, n, o;
                N.round = e.round,
                null === (t = this.gameScreen) || void 0 === t || t.setLetter(e.letter, e.count),
                null === (a = this.roomInfoPanel) || void 0 === a || a.updateTurn(),
                e.limit && (null === (n = this.gameScreen) || void 0 === n || n.setLimit(e.limit)),
                null === (o = At.keyboard) || void 0 === o || o.setValue("");
                var i = At.room.state.players.get(e.turn);
                this.turn(i)
            }
            )),
            At.room.onMessage("st-change", (e => {
                var t, a, n;
                null === (a = null === (t = this.navigationPanel) || void 0 === t ? void 0 : t.gameSettingsDOM) || void 0 === a || a.init(),
                null === (n = this.roomInfoPanel) || void 0 === n || n.update()
            }
            )),
            At.room.onMessage("spectate", (e => {
                var t, a;
                e.id == (null === (t = N.gamePlayer) || void 0 === t ? void 0 : t.session_id) && (null === (a = this.navigationPanel) || void 0 === a || a.setSpectate(e.val));
                var n = At.room.state.players.get(e.id);
                n.spectating = e.val,
                this.playerContainer.setSpectator(n, e.val)
            }
            )),
            At.room.onMessage("item-unlocked", (e => {
                var t, a;
                Ie(e),
                null === (t = this.navigationPanel) || void 0 === t || t.updateBackgrounds(),
                null === (a = this.navigationPanel) || void 0 === a || a.updateBombs()
            }
            )),
            At.room.onMessage("chat", (e => {
                var t, a;
                "[$kicked$]" == e.message && (N.chats = N.chats.filter((t => t.id != e.id)),
                Ee.instance && Ee.instance.clearChat(e.id));
                var n = new B;
                n.avatar = e.avatar,
                n.displayName = e.displayName,
                n.id = e.id,
                n.message = e.message,
                n.system = null !== (t = e.system) && void 0 !== t && t,
                n.time = null !== (a = e.timee) && void 0 !== a ? a : Date.now(),
                N.chats.push(n),
                Ee.instance ? Ee.instance.receiveMessage(e) : (V.notificationDisabled || (this.chatNotification || (this.chatNotification = document.getElementById("chat-notification")),
                this.chatNotification && (this.chatNotification.style.display = "flex",
                this.chatNotification.innerText = "" == this.chatNotification.innerText ? "1" : (parseInt(this.chatNotification.innerText) + 1).toString())),
                V.notificationSoundsDisabled || r.play("chat", {
                    volume: .01 * V.effects
                }))
            }
            )),
            At.room.onMessage("popup", Pe.bind(this)),
            At.room.onMessage("server-message", (e => {
                var t = e.msg;
                t && (t.toString().includes("is a valid word") ? R(e.msg) : j(e.msg))
            }
            )),
            At.room.onMessage("prompt", (e => {
                W(e, I)
            }
            )),
            null === (e = this.profilePanel) || void 0 === e || e.updateListener(),
            At.room.onStateChange.once((e => {
                e.started ? this.onMatchStart() : this.createLobby(),
                N.reconnectionToken = At.room.reconnectionToken,
                this.roomInfoPanel ? this.roomInfoPanel.update() : (this.roomInfoPanel = new Tt,
                document.body.appendChild(this.roomInfoPanel.create()))
            }
            )),
            At.room.onMessage("emoji", (e => {
                try {
                    var t = e.id
                      , a = e.emoji
                      , n = Array.from(dt.instance.players.values()).find((e => e.player.session_id == t));
                    null == n || n.spawnEmoji(a)
                } catch (o) {}
            }
            )),
            At.room.onMessage("st-change", (e => {
                this.roomInfoPanel.update()
            }
            )),
            !document.getElementById("ga-container")) {
                var t = document.createElement("div");
                t.id = "ga-container",
                document.body.appendChild(t)
            }
            this.playerContainer || (this.playerContainer = new dt),
            this.settings || (this.settings = new et,
            yield this.settings.open()),
            this.profilePanel || (this.profilePanel = new wt),
            At.room && (window.history.replaceState(null, "WordBomb", `/?room=${At.room.roomId}`),
            At.room.state && (L.setLocale(At.room.state.locale),
            N.gamePlayer && N.gamePlayer.session_id && N.gamePlayer.session_id == At.room.state.host && (At.room.state.locked ? R(L.getWord("room_private_info")) : R(L.getWord("room_public_info"))),
            At.room.state.started && R(L.getWord("room_started_info"))))
        }
        ))
    }
    destroy() {
        var e, t, a, n, o;
        At.room && At.room.connection.isOpen && At.room.leave(!0),
        At.keyboard && At.keyboard.destroy(),
        this.matchStopInterval && clearInterval(this.matchStopInterval),
        null != this.countdownScreen && (this.countdownScreen.destroy(),
        this.countdownScreen = void 0),
        null != this.gameScreen && (this.gameScreen.stop(),
        this.gameScreen = void 0),
        null != this.betScreen && (this.betScreen.remove(),
        this.betScreen = void 0),
        this.background && this.background.remove(),
        null === (e = this.navigationPanel) || void 0 === e || e.close(),
        null === (t = this.settings) || void 0 === t || t.destroy(),
        null === (a = this.profilePanel) || void 0 === a || a.destroy(),
        this.playerContainer && (this.playerContainer.destroy(),
        this.playerContainer = void 0),
        this.roomInfoPanel && (this.roomInfoPanel.destroy(),
        this.roomInfoPanel = void 0),
        null === (n = this.startButton) || void 0 === n || n.destroy(),
        null === (o = this.charContainer) || void 0 === o || o.destroy(),
        document.removeEventListener("keydown", q),
        V.save()
    }
    create() {
        return It(this, void 0, void 0, (function*() {
            At.room = yield v.create("my_room", {
                wbPlayer: N.playingAtWordBombServer
            }),
            N.reconnectionToken = At.room.reconnectionToken
        }
        ))
    }
    join(e, t) {
        return It(this, void 0, void 0, (function*() {
            At.room = yield v.joinById(e, {
                spectate: t,
                wbPlayer: N.playingAtWordBombServer
            }),
            N.reconnectionToken = At.room.reconnectionToken
        }
        ))
    }
    createOrJoinRoom(e) {
        return It(this, arguments, void 0, (function*(e, t=!1) {
            try {
                e ? yield this.join(e, t) : yield this.create()
            } catch (a) {
                return this.onLeave(null == a ? void 0 : a.code, a),
                void (4212 != (null == a ? void 0 : a.code) && W(`Leave with error ${e} ${null == a ? void 0 : a.code} report this error code to our discord server`))
            }
            try {
                this.onConnected()
            } catch (a) {
                return void j("Failed to join room. \nPlease start the activity again. \nWe may be updating the game.\n" + a)
            }
        }
        ))
    }
    setBackground(e) {
        this.background || (this.background = document.createElement("div"),
        this.background.id = "background",
        document.body.appendChild(this.background));
        var t = ce.backgrounds.find((t => t.id === e));
        if (this.background.style.backgroundImage = `url('background/${e}.jpg')`,
        8 == At.room.state.mode)
            return this.background.style.backgroundPosition = "center bottom",
            this.background.style.backgroundRepeat = "no-repeat",
            this.background.style.backgroundSize = "cover",
            void (this.shouldUpdateTile = !1);
        t && (this.background.style.backgroundPosition = "center",
        t.tiled ? (this.background.style.backgroundRepeat = "repeat",
        this.background.style.backgroundSize = "auto",
        this.shouldUpdateTile = !0) : (this.background.style.backgroundRepeat = "no-repeat",
        this.background.style.backgroundSize = "cover",
        this.shouldUpdateTile = !1))
    }
    localUpdate(e) {
        var t;
        //hook render 2d event (ign)
        
        null === (t = this.gameScreen) || void 0 === t || t.update(e),
        this.shouldUpdateTile && (this.backgroundOffsetX += .002 * e,
        this.background.style.backgroundPosition = `${this.backgroundOffsetX}px 0px`)
    }
    createLobby() {
        return It(this, arguments, void 0, (function*(e=!1) {
            var t, a;
            this.startButton && (this.startButton.destroy(),
            this.startButton = void 0),
            null != this.countdownScreen && (this.countdownScreen.destroy(),
            this.countdownScreen = void 0),
            null != this.gameScreen && (this.gameScreen.stop(),
            this.gameScreen = void 0),
            null != this.betScreen && (this.betScreen.onMatchStop(),
            this.betScreen = void 0),
            null === (t = this.charContainer) || void 0 === t || t.destroy(),
            this.charContainer = null,
            this.startButton = new xt(( () => It(this, void 0, void 0, (function*() {
                var e;
                0 != (null === (e = this.playerContainer) || void 0 === e ? void 0 : e.count) ? At.room.send("start") : j(L.getWord("no_player_error"))
            }
            ))),e),
            this.navigationPanel || (this.navigationPanel = new ot,
            this.navigationPanel.onLanguageChange = e => {
                At.room.send("settings", {
                    language: e
                })
            }
            ,
            this.navigationPanel.onBackgroundChange = e => {
                At.room.send("settings", {
                    background: e
                })
            }
            ,
            this.navigationPanel.onBombChange = e => {
                At.room.send("settings", {
                    bomb: e
                })
            }
            ,
            this.navigationPanel.onSpectateToggle = () => {
                At.room.send("spectate")
            }
            ,
            this.navigationPanel.onToggleRoomLock = () => {
                At.room.send("settings", {
                    locked: !At.room.state.locked
                })
            }
            ,
            this.navigationPanel.onSpeedChange = e => {
                At.room.send("settings", {
                    speed: e
                })
            }
            ,
            this.navigationPanel.onGameModeChange = e => {
                At.room.send("settings", {
                    mode: e
                })
            }
            ,
            this.navigationPanel.onGameDifficultyChange = e => {
                At.room.send("settings", {
                    difficulty: e
                })
            }
            ,
            this.navigationPanel.onSecondaryLanguageChange = e => {
                At.room.send("settings", {
                    secondary: e
                })
            }
            ,
            yield this.navigationPanel.open(),
            null === (a = this.playerContainer) || void 0 === a || a.redraw(),
            this.settings && this.settings.showButtons(),
            document.addEventListener("keydown", q))
        }
        ))
    }
    turn(e) {
        var t, a, n, o, i, s;
        null === (n = null === (a = null === (t = this.gameScreen) || void 0 === t ? void 0 : t.bomb) || void 0 === a ? void 0 : a.circle) || void 0 === n || n.fill(),
        null === (i = null === (o = this.gameScreen) || void 0 === o ? void 0 : o.letterContainer) || void 0 === i || i.updateWord(""),
        null != e && At.currentPlayer != e && (At.currentPlayer = e,
        this.localPlayer.session_id == e.session_id ? this.onLocalPlayerTurn() : this.onRemotePlayerTurn(),
        null === (s = this.gameScreen) || void 0 === s || s.changeTurn(e),
        this.setWord(""))
    }
    onPlayerHurt(e) {
        var t, a, n, o = this.playerContainer.getPlayerFromId(e.id);
        null == o || o.explode(),
        null == o || o.setHeart(e.heart),
        null == o || o.setCombo(e.combo),
        e.id == this.localPlayer.session_id && (this.localCombo = e.combo,
        null === (n = null === (a = null === (t = this.gameScreen) || void 0 === t ? void 0 : t.bomb) || void 0 === a ? void 0 : a.circle) || void 0 === n || n.fill())
    }
    onPlayerEliminated(e) {
        var t = this.playerContainer.getPlayerFromId(e);
        null == t || t.eliminate(!0),
        null == t || t.explode()
    }
    onResize() {
        var e;
        null === (e = this.playerContainer) || void 0 === e || e.updatePlayerPositions()
    }
    onPlayerWin(e) {
        return It(this, void 0, void 0, (function*() {
            At.keyboard.gameEnd();
            var t = new St;
            yield t.open(),
            yield t.show(e);
            var a = setTimeout(( () => {
                t.fade()
            }
            ), 9500)
              , n = setTimeout(( () => {
                t.close()
            }
            ), 1e4);
            t.onClose = () => {
                clearTimeout(a),
                clearTimeout(n),
                t.close()
            }
        }
        ))
    }
    wrong_tint_background(e="rgba(255, 0, 0, 0.1)") {
        if (V.disableRedFlash)
            return;
        if (!this.background)
            return;
        if (document.getElementById("red-overlay"))
            return;
        const t = document.createElement("div");
        t.id = "red-overlay",
        t.style.backgroundColor = e,
        t.style.transition = "opacity 100ms ease-in-out",
        this.background.appendChild(t),
        setTimeout(( () => {
            t.style.opacity = "0",
            setTimeout(( () => {
                t.remove()
            }
            ), 100)
        }
        ), 100)
    }
    onFrame(e) {
        var t = e.id
          , a = e.frame
          , n = this.playerContainer.getPlayerFromId(t);
        null == n || n.setFrame(a)
    }
    onItemSpawn(e) {
        return It(this, void 0, void 0, (function*() {
            var t;
            const a = null === (t = this.playerContainer) || void 0 === t ? void 0 : t.getPlayerFromId(e.id);
            if (a) {
                yield new Promise((e => setTimeout(e, 800)));
                for (let t = 0; t < e.count; t++) {
                    const t = document.createElement("img");
                    t.style.position = "absolute",
                    t.style.top = "50%",
                    t.style.left = "50%",
                    t.src = `/web/${e.type}.png`,
                    t.classList.add("item-spawned"),
                    document.body.appendChild(t),
                    yield new Promise((e => setTimeout(e, 200)));
                    const n = ye(a.element);
                    t.style.top = n.top + 40 + "px",
                    t.style.left = n.left + n.width / 2 + "px",
                    setTimeout(( () => t.remove()), 800)
                }
                r.play("diamond", {
                    volume: .45 * V.effects,
                    speed: .8
                })
            }
        }
        ))
    }
    onWordEarned(e) {
        var t;
        const a = e.syllables
          , n = null === (t = this.playerContainer) || void 0 === t ? void 0 : t.getPlayerFromId(e.id);
        if (n) {
            n.spawnedSomething();
            const e = ye(n.element)
              , t = e.left + e.width / 2
              , o = e.top + 30;
            if (r.play("unlocked", {
                volume: .7 * V.effects
            }),
            1 === a.length) {
                const e = document.createElement("span");
                e.classList.add("word-game"),
                e.textContent = a[0],
                e.style.position = "absolute",
                e.style.top = o + "px",
                e.style.left = t + "px",
                document.body.appendChild(e),
                r.play("diamond", {
                    volume: .7 * V.effects,
                    speed: .8
                }),
                setTimeout(( () => {
                    e.remove()
                }
                ), 4e3)
            } else {
                const e = 30
                  , n = 2 * Math.PI / a.length;
                for (let i = 0; i < a.length; i++) {
                    const s = i * n
                      , r = t + e * Math.cos(s)
                      , d = o + e * Math.sin(s)
                      , l = document.createElement("span");
                    l.classList.add("word-game"),
                    l.textContent = a[i],
                    l.style.position = "absolute",
                    l.style.top = d + "px",
                    l.style.left = r + "px",
                    document.body.appendChild(l),
                    setTimeout(( () => {
                        l.remove()
                    }
                    ), 4e3)
                }
            }
        }
    }
    onKeyEarned(e) {
        var t, a = document.createElement("img"), n = null === (t = this.playerContainer) || void 0 === t ? void 0 : t.getPlayerFromId(e.id);
        if (n) {
            n.spawnedSomething();
            var o = ye(n.element);
            a.style.position = "absolute",
            a.style.top = o.top + 30 + "px",
            a.style.left = o.left + o.width / 2 + "px"
        }
        a.src = "/web/key.png",
        a.classList.add("key-game"),
        document.body.appendChild(a),
        r.play("diamond", {
            volume: .7 * V.effects,
            speed: 1.3
        }),
        setTimeout(( () => {
            a.remove()
        }
        ), 2500)
    }
    onTitleChange(e) {
        e.title && (N.currentTitle = e.title)
    }
    onUpdateHeart(e) {
        var t, a, n, o = e.id, i = e.heart, s = this.playerContainer.getPlayerFromId(o);
        s && (s.setHeart(i),
        s.health_increased(),
        null != this.localPlayer ? o == this.localPlayer.session_id && (null === (t = this.charContainer) || void 0 === t || t.reset()) : (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.session_id) == o && (null === (n = this.charContainer) || void 0 === n || n.reset()))
    }
    onPlayerWrongGuess(e) {
        if (e.id == this.localPlayer.session_id) {
            if (e.word) {
                var t = "Wrong guess";
                e.exist && (t = "Written before"),
                W(`${t}: "${e.word}"`, T)
            }
            e.exist && (t = "Written before"),
            e.exist ? (z(L.getWord("written_before")),
            this.wrong_tint_background("rgba(167, 204, 46, 0.1)"),
            r.play("writtenbefore", {
                volume: .08 * V.effects
            })) : (r.play("wrong", {
                volume: .07 * V.effects
            }),
            this.wrong_tint_background())
        }
        e.exist && e.id != this.localPlayer.session_id && z(L.getWord("written_before")),
        this.playerContainer.getPlayerFromId(e.id).wrong_shake(),
        At.room.state.currentPlayerSessionId == this.localPlayer.session_id && (At.keyboard.afterWrongGuess(),
        this.localCombo = e.combo);
        var a = this.playerContainer.getPlayerFromId(e.id);
        null == a || a.setCombo(e.combo)
    }
    onPlayerCorrectGuess(e) {
        var t;
        r.play("change_player", {
            volume: .1 * V.effects
        });
        var a = this.playerContainer.getPlayerFromId(e.id);
        a.setLastText(e.word),
        At.room.state.currentPlayerSessionId == this.localPlayer.session_id && At.keyboard.afterCorrectGuess();
        var n = this.localPlayer.session_id == At.room.state.currentPlayerSessionId;
        n && (this.localCombo = e.combo),
        (n || 7 == At.room.state.mode) && (null === (t = this.gameScreen) || void 0 === t || t.onLocalCorrectGuess(e.word)),
        W(`${a.player.username}:"${e.word}"`, P),
        null == a || a.setCombo(e.combo)
    }
    onNewWord(e) {
        var t, a;
        e.first ? null === (t = this.gameScreen) || void 0 === t || t.showFirstWord() : null === (a = this.gameScreen) || void 0 === a || a.showNewWord()
    }
    onMatchStop() {
        var e, t;
        null === (e = this.charContainer) || void 0 === e || e.destroy(),
        this.charContainer = null,
        ht.stopSound(),
        null != this.countdownScreen && (this.countdownScreen.destroy(),
        this.countdownScreen = void 0),
        null != this.gameScreen && (this.gameScreen.stop(),
        this.gameScreen = void 0),
        null != this.betScreen && (this.betScreen.onMatchStop(),
        this.betScreen = void 0),
        this.matchStopInterval = setTimeout(( () => {
            if (At.room) {
                if (At.room.state.started)
                    return;
                this.createLobby(!0)
            }
        }
        ), 5e3),
        N.round = 0,
        null === (t = this.roomInfoPanel) || void 0 === t || t.updateTurn()
    }
    onMatchStart() {
        var e, t, a, n, o, i, s, r;
        At.currentPlayer = At.room.state.players.get(At.room.state.currentPlayerSessionId),
        null != this.countdownScreen && (this.countdownScreen.destroy(),
        this.countdownScreen = void 0),
        this.gameScreen || (this.gameScreen = new gt),
        9 == At.room.state.mode && (this.betScreen = new Mt,
        this.betScreen.onMatchStart()),
        N.round = 0,
        null === (e = this.gameScreen) || void 0 === e || e.setMaxTime(At.room.state.maxTime),
        null === (t = this.gameScreen) || void 0 === t || t.onTimeChange(At.room.state.time),
        null === (a = this.gameScreen) || void 0 === a || a.setLetter(At.room.state.letter, +At.room.state.solves),
        6 == At.room.state.mode && (null === (n = this.gameScreen) || void 0 === n || n.setLimit(At.room.state.plength)),
        null === (o = this.gameScreen) || void 0 === o || o.start(),
        null === (i = this.gameScreen) || void 0 === i || i.changeTurn(At.room.state.players.get(At.room.state.currentPlayerSessionId)),
        this.playerContainer.update_data(),
        null != this.navigationPanel && this.navigationPanel.loaded && (this.navigationPanel.close(),
        this.navigationPanel = void 0),
        At.room.state.currentPlayerSessionId == this.localPlayer.session_id ? this.onLocalPlayerTurn() : this.onRemotePlayerTurn(),
        null === (s = this.settings) || void 0 === s || s.hideButtons();
        var d = 1 == Array.from(At.room.state.players.values()).filter((e => !e.spectating)).length;
        N.playingSolo = d,
        At.keyboard.setSoloMode(d),
        null === (r = this.startButton) || void 0 === r || r.destroy()
    }
    onCountdown(e) {
        var t;
        this.countdownScreen || (this.countdownScreen = new bt,
        this.countdownScreen.start(e),
        null === (t = this.settings) || void 0 === t || t.hideButtons())
    }
    onLocalPlayerTurn() {
        var e, t;
        r.play("yourturn", {
            volume: .4 * V.effects
        }),
        At.keyboard.onLocalTurn(),
        null === (e = this.gameScreen) || void 0 === e || e.onLocalTurn(),
        Ee.previousState = Ee.isInputActive,
        V.autoSwitchChat && (null === (t = Ee.instance) || void 0 === t || t.input.blur())
    }
    onRemotePlayerTurn() {
        var e, t, a, n;
        At.keyboard.onRemoteTurn(),
        null === (e = this.gameScreen) || void 0 === e || e.onRemoteTurn(),
        V.autoSwitchChat && ((null === (t = N.gamePlayer) || void 0 === t ? void 0 : t.spectating) || (null === (a = N.gamePlayer) || void 0 === a ? void 0 : a.eliminated) || Ee.previousState && (null === (n = Ee.instance) || void 0 === n || n.input.focus()))
    }
    onPlayerLeave(e, t) {
        this.playerContainer.removePlayer(e)
    }
    onPlayerJoin(e, t) {
        return It(this, void 0, void 0, (function*() {
            var a = t == At.room.sessionId;
            a && (N.gamePlayer = e),
            this.playerContainer.addPlayer(e, a),
            a ? this.localPlayerInit(e) : yield r.play("joined", {
                volume: .05 * V.effects
            })
        }
        ))
    }
    localPlayerInit(e) {
        if (this.localPlayer)
            return;
        this.localPlayer = e,
        F() ? At.keyboard = new Et(this.localPlayer,this.mobileInput) : (At.keyboard = new Lt(this.localPlayer),
        this.mobileInput.style.display = "none",
        this.mobileInput.style.visibility = "hidden");
        let t = null;
        At.keyboard.onSubmit = t => {
            var a = At.room.state.locale;
            At.room.state.mlang && (a = e.lang);
            var n = t.toLocaleUpperCase(a);
            !N.rewarded && N.dailyWordFound && N.dailyWord == n && (N.rewarded = !0),
            At.room.send("submit", {
                word: n
            }),
            this.setWord("")
        }
        ,
        At.keyboard.onWordUpdate = a => {
            null !== t && clearTimeout(t);
            let n = At.room.state.locale;
            At.room.state.mlang && (n = e.lang);
            a = a.replace(/ß/g, "ẞ").toLocaleUpperCase(n).replace(/ẞ/g, "ß");
            this.setWord(a);
            // hook
            
            
            
            t = setTimeout(( () => {
                At.room.send("word", {
                    word: a
                }),
                t = null
            }
            ), 30)
        }
        ,
        At.keyboard.init()
    }
    setWord(e) {
        var t;
        null === (t = this.gameScreen) || void 0 === t || t.updateWord(e)
    }
}
const Wt = {
    lastTime: performance.now(),
    deltaTime: 0
};
class Bt extends Error {
    constructor(e) {
        super(e),
        this.name = "AuthenticationError"
    }
}
class Nt extends Error {
    constructor(e) {
        super(e),
        this.name = "NetworkError"
    }
}
class Dt {
    constructor(e) {
        this.game = null,
        this.menu = null,
        this.config = {
            errorDisplayDuration: 2e3,
            recoveryAttempts: 600,
            ...e
        }
    }
    async initialize() {
        try {
            this.clearCurrentScene(),
            await this.authenticateUser(),
            this.setupResizeHandler(),
            await this.loadAssetsAndStartGame()
        } catch (e) {
            this.handleCriticalError(e instanceof Error ? e : new Error(String(e)))
        }
    }
    async authenticateUser() {
        try {
            const e = await function() {
                return b(this, void 0, void 0, (function*() {
                    if (!u && localStorage.getItem("gc_auth"))
                        try {
                            const {app: e} = yield y(( () => import("./firebase-4EStdJ18.js")), __vite__mapDeps([0, 1, 2, 3, 4]))
                              , t = (yield y(( () => import("./firebase-CzEjhAzx.js")), __vite__mapDeps([1, 2, 3, 4]))).getAuth(e);
                            if (yield t.authStateReady(),
                            t.currentUser) {
                                const e = yield t.currentUser.getIdToken()
                                  , {data: a} = yield v.http.post("/auth/glogin", {
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        idToken: e
                                    })
                                });
                                return a
                            }
                        } catch (t) {
                            throw t && ("string" != typeof t.code || !t.code.includes("auth/") && "permission-denied" !== t.code ? t.response && "number" == typeof t.response.status && [400, 401, 403].includes(t.response.status) && localStorage.removeItem("gc_auth") : localStorage.removeItem("gc_auth")),
                            new Error("Failed to authenticate with Google.")
                        }
                    const e = window.location.href;
                    return new URLSearchParams(new URL(e).search).get("code"),
                    yield f()
                }
                ))
            }();
            if (!e || !e.token)
                throw new Bt("Invalid authentication data");
            v.auth.token = e.token,
            N.player = e.user.data;
            const t = null == p ? void 0 : p.channelId;
            N.playingAtWordBombServer = !!t && (he.has(t) || "1266397242260983888" == (null == p ? void 0 : p.guildId))
        } catch (e) {
            if (e instanceof Bt)
                throw e;
            throw new Bt("Authentication failed: " + e)
        }
    }
    handleCriticalError(e, t=0) {
        this.showPersistentError(this.formatErrorMessage(e)),
        this.attemptRecovery(e, t)
    }
    formatErrorMessage(e) {
        switch (e.name) {
        case "AuthenticationError":
            return "Authentication failed.\nWe might be updating the server. Please try again later.";
        case "NetworkError":
            return "Network error.\nPlease check your internet connection.";
        case "GameInitializationError":
            return "Game could not be initialized.\nPlease restart the activity.";
        default:
            return "An unexpected error occurred.\nPlease try again."
        }
    }
    attemptRecovery(e, t) {
        if (t >= this.config.recoveryAttempts)
            this.showPersistentError("Unable to recover. Please restart the activity.");
        else
            switch (e.name) {
            case "AuthenticationError":
                setTimeout(( () => {
                    this.initialize().catch((e => this.handleCriticalError(e instanceof Error ? e : new Error(String(e)), t + 1)))
                }
                ), 2e3);
                break;
            case "NetworkError":
                break;
            default:
                this.showPersistentError(`Critical error. Please restart the activity. ${e.message}`)
            }
    }
    showPersistentError(e, t=!1) {
        this.loading && (this.loading.remove(),
        this.loading = null);
        let a = document.getElementById("error-display");
        null === a && (a = document.createElement("div"),
        a.id = "error-display"),
        a.style.position = "absolute",
        a.style.width = "100%",
        a.style.height = "100%",
        a.style.top = "0",
        a.style.left = "0",
        a.style.fontSize = "2em",
        a.style.backgroundColor = "rgba(0,0,0,0.5)",
        a.style.zIndex = "1000",
        a.style.display = "flex",
        a.style.justifyContent = "center",
        a.style.alignItems = "center",
        a.style.flexDirection = "column",
        a.style.textAlign = "center",
        a.style.color = "white",
        a.textContent = e,
        document.body.appendChild(a);
        const n = t ? 1e5 : this.config.errorDisplayDuration;
        setTimeout(( () => {
            null == a || a.remove()
        }
        ), n)
    }
    setupResizeHandler() {
        window.onresize = this.onResize.bind(this)
    }
    async loadAssetsAndStartGame() {
        await _.loadAssets();
        try {
            1 !== V.gameScale && (document.body.style.zoom = `${V.gameScale}`)
        } catch (t) {}
        const e = new URLSearchParams(window.location.search).get("room");
        e ? await this.createLobby(e) : this.createMenu(),
        requestAnimationFrame(this.gameLoop.bind(this))
    }
    gameLoop(e) {
        //hook game loop event
        
        try {
            Wt.deltaTime = e - Wt.lastTime,
            Wt.lastTime = e,
            a.update(e),
            this.game && this.game.localUpdate(Wt.deltaTime)
        } catch (t) {} finally {
            requestAnimationFrame(this.gameLoop.bind(this))
        }
    }
    async createLobby(e, t=!1) {
        var a;
        this.clearCurrentScene();
        const n = document.createElement("div");
        n.style.color = "white",
        n.textContent = L.getWord("loading"),
        null == (a = this.loading) || a.appendChild(n),
        this.game = new At,
        this.game.onLeave = async (e, t) => {
            var a;
            if (4009 === e) {
                const e = t.toString().split(" ")[1];
                N.reconnectionToken = e
            }
            if (4e3 !== e && 4001 !== e && 4002 !== e && 4003 !== e && 4004 !== e && N.reconnectionToken) {
                const e = 10;
                let t = 0;
                z("Connection lost. Attempting to reconnect..."),
                W("Attempting to reconnect to room", M);
                const a = async () => {
                    var a;
                    try {
                        return At.room = await v.reconnect(N.reconnectionToken),
                        null == (a = this.game) || a.onConnected(),
                        N.reconnectionToken = At.room.reconnectionToken,
                        N.currentRoom = At.room,
                        z("Connection re-established"),
                        !0
                    } catch (n) {
                        const a = String(n).includes("disposed");
                        return t = a ? e : t,
                        !1
                    }
                }
                ;
                for (; t < e; ) {
                    if (await a())
                        return;
                    await new Promise((e => setTimeout(e, 1e3))),
                    t++
                }
            }
            if (window.history.replaceState(null, "WordBomb", "/"),
            (null == (a = this.game) ? void 0 : a.settings) && this.game.settings.destroy(),
            4e3 === e)
                return void this.createMenu();
            this.clearCurrentScene();
            let n = "You have been disconnected\n from the server. \nRetrying...";
            4001 === e ? n = "You have been banned from this room" : 4002 === e ? n = "You are already playing in another device" : 4003 === e ? n = "You have been kicked from this room" : 4212 === e ? n = "Room is not available" : 4004 === e && (n = "Guest are not allowed to join this room"),
            this.showPersistentError(n);
            const o = [4001, 4212, 4002, 4003].includes(e);
            setTimeout(( () => {
                this.createMenu()
            }
            ), o ? 1e3 : 3e3)
        }
        ,
        await this.game.createOrJoinRoom(e, t),
        this.loading && (this.loading.remove(),
        this.loading = null)
    }
    async createMenu() {
        var e, t, a;
        this.clearCurrentScene();
        const n = document.createElement("div");
        n.style.color = "white",
        n.textContent = L.getWord("loading"),
        null == (e = this.loading) || e.appendChild(n),
        this.menu = new Re,
        this.menu.onCreate = () => this.createLobby(null),
        this.menu.onJoined = e => this.createLobby(e),
        this.menu.onSpectate = e => this.createLobby(e, !0),
        this.menu.onLeave = e => {
            4e3 !== e && (this.showPersistentError("You have been disconnected\n from the server. \nRetrying..."),
            setTimeout(( () => {
                this.createMenu()
            }
            ), 3e3))
        }
        ,
        await this.menu.joinLobby(),
        null == (a = null == (t = this.menu.lobby) ? void 0 : t.onError) || a.bind(( (e, t) => {
            this.handleCriticalError(new Nt(`Lobby Error ${e}: ${t}`))
        }
        )),
        this.loading && (this.loading.remove(),
        this.loading = null)
    }
    clearCurrentScene() {
        this.menu && (this.menu.destroy(),
        this.menu = null),
        this.game && (this.game.destroy(),
        At.room = null,
        this.game = null),
        ze.instance && ze.instance.close(),
        this.loading && (this.loading.remove(),
        this.loading = null),
        N.currentRoom = null,
        this.loading = document.createElement("div"),
        this.loading.classList.add("spinner"),
        this.loading.appendChild(this.createLoadingImage()),
        document.body.appendChild(this.loading),
        document.body.querySelectorAll(".floating-window").forEach((e => e.remove())),
        document.body.querySelectorAll(".full-window").forEach((e => e.remove()))
    }
    createLoadingImage() {
        const e = document.createElement("img");
        return e.classList.add("spin"),
        e.src = "bomb.png",
        e
    }
    onResize() {
        this.game && this.game.onResize()
    }
    static async start(e) {
        const t = new Dt(e);
        return await t.initialize(),
        p.subscribe("ENTITLEMENT_CREATE", Dt.handleEntitlementCreate),
        t
    }
    static async handleEntitlementCreate(e) {
        var t;
        null !== N.currentRoom ? N.currentRoom.send("entitlement", {
            id: null == (t = N.player) ? void 0 : t.id
        }) : new Q(( () => {}
        ),"Error","Something went wrong. Please restart the activity or join our discord for support")
    }
}
V.load(),
Dt.start({
    errorDisplayDuration: 1e3,
    recoveryAttempts: 100
}).catch(console.error),
window.onbeforeunload = function(e) {
    var t, a;
    if (V.save(),
    At.room && At.room.state.started) {
        const t = "Are you sure you want to leave the game?";
        return e.preventDefault(),
        e.returnValue = t,
        window.addEventListener("unload", ( () => {
            var e, t, a;
            const n = (null == (t = null == (e = N.player) ? void 0 : e.id) ? void 0 : t.toString().length) < 10;
            null == (a = At.room) || a.leave(n)
        }
        )),
        t
    }
    if (At.room) {
        const e = (null == (a = null == (t = N.player) ? void 0 : t.id) ? void 0 : a.toString().length) < 10;
        At.room.leave(e)
    }
    return null
}
;

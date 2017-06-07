/*!
 @package wdt-emoji-bundle - Slack like emoji selector with apple, twitter, google, emojione and custom emoji support.
 @version version: 0.2.0
 @contributors https://github.com/needim/wdt-emoji-bundle/graphs/contributors
 @documentation Examples and Documentation - http://ned.im/wdt-emoji-bundle/
 @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php
 */

;
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['js-emoji'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('js-emoji'));
  } else {
    root.wdtEmojiBundle = factory(root.EmojiConvertor);
  }
})(this, function (EmojiConvertor) {
  var wdtEmojiBundle = {};

  wdtEmojiBundle.defaults = {
    pickerColors : ['green', 'pink', 'yellow', 'blue', 'gray'],
    textMode     : true,
    disabledCategories: ['Skin Tones'],
    sectionOrders: {
      'Recent'  : 10,
      'Custom'  : 9,
      'People'  : 8,
      'Nature'  : 7,
      'Foods'   : 6,
      'Activity': 5,
      'Places'  : 4,
      'Objects' : 3,
      'Symbols' : 2,
      'Flags'   : 1
    },
    skinColor    : 'skin-1',
    allowNative  : false,
    emojiType    : 'apple',
    emojiSheets: {
      'apple'    : '/sheets/sheet_apple_64_indexed_128.png',
      'google'   : '/sheets/sheet_google_64_indexed_128.png',
      'twitter'  : '/sheets/sheet_twitter_64_indexed_128.png',
      'emojione' : '/sheets/sheet_emojione_64_indexed_128.png',
      'facebook' : '/sheets/sheet_facebook_64_indexed_128.png',
      'messenger': '/sheets/sheet_messenger_64_indexed_128.png'
    },
    emojiData: {
      "Symbols": [{
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAVY BLACK HEART",
        "short_name": "heart",
        "short_names": ["heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 1
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "YELLOW HEART",
        "short_name": "yellow_heart",
        "short_names": ["yellow_heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 2
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GREEN HEART",
        "short_name": "green_heart",
        "short_names": ["green_heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 3
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLUE HEART",
        "short_name": "blue_heart",
        "short_names": ["blue_heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 4
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PURPLE HEART",
        "short_name": "purple_heart",
        "short_names": ["purple_heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 5
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BROKEN HEART",
        "short_name": "broken_heart",
        "short_names": ["broken_heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 6
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "HEAVY HEART EXCLAMATION MARK ORNAMENT",
        "short_name": "heavy_heart_exclamation_mark_ornament",
        "short_names": ["heavy_heart_exclamation_mark_ornament"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 7
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TWO HEARTS",
        "short_name": "two_hearts",
        "short_names": ["two_hearts"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 8
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REVOLVING HEARTS",
        "short_name": "revolving_hearts",
        "short_names": ["revolving_hearts"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 9
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BEATING HEART",
        "short_name": "heartbeat",
        "short_names": ["heartbeat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 10
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GROWING HEART",
        "short_name": "heartpulse",
        "short_names": ["heartpulse"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 11
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPARKLING HEART",
        "short_name": "sparkling_heart",
        "short_names": ["sparkling_heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 12
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEART WITH ARROW",
        "short_name": "cupid",
        "short_names": ["cupid"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 13
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEART WITH RIBBON",
        "short_name": "gift_heart",
        "short_names": ["gift_heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 14
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEART DECORATION",
        "short_name": "heart_decoration",
        "short_names": ["heart_decoration"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 15
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "PEACE SYMBOL",
        "short_name": "peace_symbol",
        "short_names": ["peace_symbol"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 16
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LATIN CROSS",
        "short_name": "latin_cross",
        "short_names": ["latin_cross"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 17
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "STAR AND CRESCENT",
        "short_name": "star_and_crescent",
        "short_names": ["star_and_crescent"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 18
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "OM SYMBOL",
        "short_name": "om_symbol",
        "short_names": ["om_symbol"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 19
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WHEEL OF DHARMA",
        "short_name": "wheel_of_dharma",
        "short_names": ["wheel_of_dharma"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 20
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "STAR OF DAVID",
        "short_name": "star_of_david",
        "short_names": ["star_of_david"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 21
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SIX POINTED STAR WITH MIDDLE DOT",
        "short_name": "six_pointed_star",
        "short_names": ["six_pointed_star"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 22
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "MENORAH WITH NINE BRANCHES",
        "short_name": "menorah_with_nine_branches",
        "short_names": ["menorah_with_nine_branches"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 23
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "YIN YANG",
        "short_name": "yin_yang",
        "short_names": ["yin_yang"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 24
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ORTHODOX CROSS",
        "short_name": "orthodox_cross",
        "short_names": ["orthodox_cross"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 25
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "PLACE OF WORSHIP",
        "short_name": "place_of_worship",
        "short_names": ["place_of_worship"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 26
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OPHIUCHUS",
        "short_name": "ophiuchus",
        "short_names": ["ophiuchus"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 27
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ARIES",
        "short_name": "aries",
        "short_names": ["aries"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 28
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TAURUS",
        "short_name": "taurus",
        "short_names": ["taurus"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 29
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GEMINI",
        "short_name": "gemini",
        "short_names": ["gemini"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 30
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CANCER",
        "short_name": "cancer",
        "short_names": ["cancer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 31
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEO",
        "short_name": "leo",
        "short_names": ["leo"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 32
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "VIRGO",
        "short_name": "virgo",
        "short_names": ["virgo"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 33
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LIBRA",
        "short_name": "libra",
        "short_names": ["libra"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 34
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SCORPIUS",
        "short_name": "scorpius",
        "short_names": ["scorpius"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 35
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SAGITTARIUS",
        "short_name": "sagittarius",
        "short_names": ["sagittarius"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 36
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CAPRICORN",
        "short_name": "capricorn",
        "short_names": ["capricorn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 37
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "AQUARIUS",
        "short_name": "aquarius",
        "short_names": ["aquarius"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 38
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PISCES",
        "short_name": "pisces",
        "short_names": ["pisces"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 39
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED ID",
        "short_name": "id",
        "short_names": ["id"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 40
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ATOM SYMBOL",
        "short_name": "atom_symbol",
        "short_names": ["atom_symbol"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 41
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A",
        "short_name": "u7a7a",
        "short_names": ["u7a7a"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 42
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-5272",
        "short_name": "u5272",
        "short_names": ["u5272"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 43
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "RADIOACTIVE SIGN",
        "short_name": "radioactive_sign",
        "short_names": ["radioactive_sign"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 44
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BIOHAZARD SIGN",
        "short_name": "biohazard_sign",
        "short_names": ["biohazard_sign"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 45
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOBILE PHONE OFF",
        "short_name": "mobile_phone_off",
        "short_names": ["mobile_phone_off"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 46
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "VIBRATION MODE",
        "short_name": "vibration_mode",
        "short_names": ["vibration_mode"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 47
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-6709",
        "short_name": "u6709",
        "short_names": ["u6709"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 48
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-7121",
        "short_name": "u7121",
        "short_names": ["u7121"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 49
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-7533",
        "short_name": "u7533",
        "short_names": ["u7533"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 50
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-55B6",
        "short_name": "u55b6",
        "short_names": ["u55b6"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 51
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-6708",
        "short_name": "u6708",
        "short_names": ["u6708"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 52
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EIGHT POINTED BLACK STAR",
        "short_name": "eight_pointed_black_star",
        "short_names": ["eight_pointed_black_star"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 53
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED VS",
        "short_name": "vs",
        "short_names": ["vs"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 54
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CIRCLED IDEOGRAPH ACCEPT",
        "short_name": "accept",
        "short_names": ["accept"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 55
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE FLOWER",
        "short_name": "white_flower",
        "short_names": ["white_flower"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 56
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CIRCLED IDEOGRAPH ADVANTAGE",
        "short_name": "ideograph_advantage",
        "short_names": ["ideograph_advantage"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 57
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CIRCLED IDEOGRAPH SECRET",
        "short_name": "secret",
        "short_names": ["secret"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 58
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CIRCLED IDEOGRAPH CONGRATULATION",
        "short_name": "congratulations",
        "short_names": ["congratulations"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 59
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-5408",
        "short_name": "u5408",
        "short_names": ["u5408"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 60
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-6E80",
        "short_name": "u6e80",
        "short_names": ["u6e80"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 61
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-7981",
        "short_name": "u7981",
        "short_names": ["u7981"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 62
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER A",
        "short_name": "a",
        "short_names": ["a"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 63
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER B",
        "short_name": "b",
        "short_names": ["b"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 64
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEGATIVE SQUARED AB",
        "short_name": "ab",
        "short_names": ["ab"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 65
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CL",
        "short_name": "cl",
        "short_names": ["cl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 66
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER O",
        "short_name": "o2",
        "short_names": ["o2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 67
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED SOS",
        "short_name": "sos",
        "short_names": ["sos"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 68
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NO ENTRY",
        "short_name": "no_entry",
        "short_names": ["no_entry"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 69
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NAME BADGE",
        "short_name": "name_badge",
        "short_names": ["name_badge"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 70
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NO ENTRY SIGN",
        "short_name": "no_entry_sign",
        "short_names": ["no_entry_sign"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 71
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CROSS MARK",
        "short_name": "x",
        "short_names": ["x"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 72
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAVY LARGE CIRCLE",
        "short_name": "o",
        "short_names": ["o"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 73
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ANGER SYMBOL",
        "short_name": "anger",
        "short_names": ["anger"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 74
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HOT SPRINGS",
        "short_name": "hotsprings",
        "short_names": ["hotsprings"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 75
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NO PEDESTRIANS",
        "short_name": "no_pedestrians",
        "short_names": ["no_pedestrians"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 76
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DO NOT LITTER SYMBOL",
        "short_name": "do_not_litter",
        "short_names": ["do_not_litter"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 77
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NO BICYCLES",
        "short_name": "no_bicycles",
        "short_names": ["no_bicycles"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 78
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NON-POTABLE WATER SYMBOL",
        "short_name": "non-potable_water",
        "short_names": ["non-potable_water"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 79
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NO ONE UNDER EIGHTEEN SYMBOL",
        "short_name": "underage",
        "short_names": ["underage"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 80
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NO MOBILE PHONES",
        "short_name": "no_mobile_phones",
        "short_names": ["no_mobile_phones"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 81
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAVY EXCLAMATION MARK SYMBOL",
        "short_name": "exclamation",
        "short_names": ["exclamation", "heavy_exclamation_mark"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 82
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE EXCLAMATION MARK ORNAMENT",
        "short_name": "grey_exclamation",
        "short_names": ["grey_exclamation"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 83
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK QUESTION MARK ORNAMENT",
        "short_name": "question",
        "short_names": ["question"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 84
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE QUESTION MARK ORNAMENT",
        "short_name": "grey_question",
        "short_names": ["grey_question"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 85
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOUBLE EXCLAMATION MARK",
        "short_name": "bangbang",
        "short_names": ["bangbang"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 86
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EXCLAMATION QUESTION MARK",
        "short_name": "interrobang",
        "short_names": ["interrobang"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 87
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HUNDRED POINTS SYMBOL",
        "short_name": "100",
        "short_names": ["100"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 88
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LOW BRIGHTNESS SYMBOL",
        "short_name": "low_brightness",
        "short_names": ["low_brightness"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 89
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HIGH BRIGHTNESS SYMBOL",
        "short_name": "high_brightness",
        "short_names": ["high_brightness"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 90
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TRIDENT EMBLEM",
        "short_name": "trident",
        "short_names": ["trident"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 91
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FLEUR-DE-LIS",
        "short_name": "fleur_de_lis",
        "short_names": ["fleur_de_lis"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 92
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PART ALTERNATION MARK",
        "short_name": "part_alternation_mark",
        "short_names": ["part_alternation_mark"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 93
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WARNING SIGN",
        "short_name": "warning",
        "short_names": ["warning"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 94
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHILDREN CROSSING",
        "short_name": "children_crossing",
        "short_names": ["children_crossing"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 95
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "JAPANESE SYMBOL FOR BEGINNER",
        "short_name": "beginner",
        "short_names": ["beginner"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 96
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK UNIVERSAL RECYCLING SYMBOL",
        "short_name": "recycle",
        "short_names": ["recycle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 97
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED CJK UNIFIED IDEOGRAPH-6307",
        "short_name": "u6307",
        "short_names": ["u6307"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 98
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHART WITH UPWARDS TREND AND YEN SIGN",
        "short_name": "chart",
        "short_names": ["chart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 99
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPARKLE",
        "short_name": "sparkle",
        "short_names": ["sparkle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 100
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EIGHT SPOKED ASTERISK",
        "short_name": "eight_spoked_asterisk",
        "short_names": ["eight_spoked_asterisk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 101
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEGATIVE SQUARED CROSS MARK",
        "short_name": "negative_squared_cross_mark",
        "short_names": ["negative_squared_cross_mark"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 102
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE HEAVY CHECK MARK",
        "short_name": "white_check_mark",
        "short_names": ["white_check_mark"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 103
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DIAMOND SHAPE WITH A DOT INSIDE",
        "short_name": "diamond_shape_with_a_dot_inside",
        "short_names": ["diamond_shape_with_a_dot_inside"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 104
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CYCLONE",
        "short_name": "cyclone",
        "short_names": ["cyclone"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 105
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOUBLE CURLY LOOP",
        "short_name": "loop",
        "short_names": ["loop"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 106
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GLOBE WITH MERIDIANS",
        "short_name": "globe_with_meridians",
        "short_names": ["globe_with_meridians"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 107
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CIRCLED LATIN CAPITAL LETTER M",
        "short_name": "m",
        "short_names": ["m"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 108
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "AUTOMATED TELLER MACHINE",
        "short_name": "atm",
        "short_names": ["atm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 109
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED KATAKANA SA",
        "short_name": "sa",
        "short_names": ["sa"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 110
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PASSPORT CONTROL",
        "short_name": "passport_control",
        "short_names": ["passport_control"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 111
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CUSTOMS",
        "short_name": "customs",
        "short_names": ["customs"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 112
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BAGGAGE CLAIM",
        "short_name": "baggage_claim",
        "short_names": ["baggage_claim"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 113
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEFT LUGGAGE",
        "short_name": "left_luggage",
        "short_names": ["left_luggage"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 114
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHEELCHAIR SYMBOL",
        "short_name": "wheelchair",
        "short_names": ["wheelchair"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 115
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NO SMOKING SYMBOL",
        "short_name": "no_smoking",
        "short_names": ["no_smoking"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 116
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WATER CLOSET",
        "short_name": "wc",
        "short_names": ["wc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 117
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER P",
        "short_name": "parking",
        "short_names": ["parking"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 118
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POTABLE WATER SYMBOL",
        "short_name": "potable_water",
        "short_names": ["potable_water"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 119
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MENS SYMBOL",
        "short_name": "mens",
        "short_names": ["mens"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 120
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WOMENS SYMBOL",
        "short_name": "womens",
        "short_names": ["womens"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 121
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BABY SYMBOL",
        "short_name": "baby_symbol",
        "short_names": ["baby_symbol"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 122
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RESTROOM",
        "short_name": "restroom",
        "short_names": ["restroom"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 123
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PUT LITTER IN ITS PLACE SYMBOL",
        "short_name": "put_litter_in_its_place",
        "short_names": ["put_litter_in_its_place"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 124
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CINEMA",
        "short_name": "cinema",
        "short_names": ["cinema"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 125
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ANTENNA WITH BARS",
        "short_name": "signal_strength",
        "short_names": ["signal_strength"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 126
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED KATAKANA KOKO",
        "short_name": "koko",
        "short_names": ["koko"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 127
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED NG",
        "short_name": "ng",
        "short_names": ["ng"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 128
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED OK",
        "short_name": "ok",
        "short_names": ["ok"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 129
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED UP WITH EXCLAMATION MARK",
        "short_name": "up",
        "short_names": ["up"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 130
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED COOL",
        "short_name": "cool",
        "short_names": ["cool"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 131
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED NEW",
        "short_name": "new",
        "short_names": ["new"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 132
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SQUARED FREE",
        "short_name": "free",
        "short_names": ["free"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 133
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 0",
        "short_name": "zero",
        "short_names": ["zero"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 134
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 1",
        "short_name": "one",
        "short_names": ["one"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 135
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 2",
        "short_name": "two",
        "short_names": ["two"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 136
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 3",
        "short_name": "three",
        "short_names": ["three"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 137
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 4",
        "short_name": "four",
        "short_names": ["four"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 138
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 5",
        "short_name": "five",
        "short_names": ["five"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 139
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 6",
        "short_name": "six",
        "short_names": ["six"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 140
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 7",
        "short_name": "seven",
        "short_names": ["seven"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 141
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 8",
        "short_name": "eight",
        "short_names": ["eight"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 142
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "KEYCAP 9",
        "short_name": "nine",
        "short_names": ["nine"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 143
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KEYCAP TEN",
        "short_name": "keycap_ten",
        "short_names": ["keycap_ten"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 144
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": null,
        "short_name": "keycap_star",
        "short_names": ["keycap_star"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 145
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "INPUT SYMBOL FOR NUMBERS",
        "short_name": "1234",
        "short_names": ["1234"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 146
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK RIGHT-POINTING TRIANGLE",
        "short_name": "arrow_forward",
        "short_names": ["arrow_forward"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 147
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "DOUBLE VERTICAL BAR",
        "short_name": "double_vertical_bar",
        "short_names": ["double_vertical_bar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 148
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BLACK RIGHT-POINTING TRIANGLE WITH DOUBLE VERTICAL BAR",
        "short_name": "black_right_pointing_triangle_with_double_vertical_bar",
        "short_names": ["black_right_pointing_triangle_with_double_vertical_bar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 149
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BLACK SQUARE FOR STOP",
        "short_name": "black_square_for_stop",
        "short_names": ["black_square_for_stop"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 150
      }, {
        "has_img_apple": false,
        "has_img_google": true,
        "has_img_twitter": false,
        "has_img_emojione": false,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "EJECT SYMBOL",
        "short_name": "eject",
        "short_names": ["eject"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 151
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BLACK CIRCLE FOR RECORD",
        "short_name": "black_circle_for_record",
        "short_names": ["black_circle_for_record"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 152
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR",
        "short_name": "black_right_pointing_double_triangle_with_vertical_bar",
        "short_names": ["black_right_pointing_double_triangle_with_vertical_bar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 153
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BLACK LEFT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR",
        "short_name": "black_left_pointing_double_triangle_with_vertical_bar",
        "short_names": ["black_left_pointing_double_triangle_with_vertical_bar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 154
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK RIGHT-POINTING DOUBLE TRIANGLE",
        "short_name": "fast_forward",
        "short_names": ["fast_forward"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 155
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK LEFT-POINTING DOUBLE TRIANGLE",
        "short_name": "rewind",
        "short_names": ["rewind"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 156
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TWISTED RIGHTWARDS ARROWS",
        "short_name": "twisted_rightwards_arrows",
        "short_names": ["twisted_rightwards_arrows"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 157
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS",
        "short_name": "repeat",
        "short_names": ["repeat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 158
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY",
        "short_name": "repeat_one",
        "short_names": ["repeat_one"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 159
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK LEFT-POINTING TRIANGLE",
        "short_name": "arrow_backward",
        "short_names": ["arrow_backward"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 160
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "UP-POINTING SMALL RED TRIANGLE",
        "short_name": "arrow_up_small",
        "short_names": ["arrow_up_small"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 161
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOWN-POINTING SMALL RED TRIANGLE",
        "short_name": "arrow_down_small",
        "short_names": ["arrow_down_small"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 162
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK UP-POINTING DOUBLE TRIANGLE",
        "short_name": "arrow_double_up",
        "short_names": ["arrow_double_up"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 163
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK DOWN-POINTING DOUBLE TRIANGLE",
        "short_name": "arrow_double_down",
        "short_names": ["arrow_double_down"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 164
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK RIGHTWARDS ARROW",
        "short_name": "arrow_right",
        "short_names": ["arrow_right"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 165
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEFTWARDS BLACK ARROW",
        "short_name": "arrow_left",
        "short_names": ["arrow_left"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 166
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "UPWARDS BLACK ARROW",
        "short_name": "arrow_up",
        "short_names": ["arrow_up"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 167
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOWNWARDS BLACK ARROW",
        "short_name": "arrow_down",
        "short_names": ["arrow_down"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 168
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NORTH EAST ARROW",
        "short_name": "arrow_upper_right",
        "short_names": ["arrow_upper_right"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 169
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SOUTH EAST ARROW",
        "short_name": "arrow_lower_right",
        "short_names": ["arrow_lower_right"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 170
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SOUTH WEST ARROW",
        "short_name": "arrow_lower_left",
        "short_names": ["arrow_lower_left"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 171
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NORTH WEST ARROW",
        "short_name": "arrow_upper_left",
        "short_names": ["arrow_upper_left"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 172
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "UP DOWN ARROW",
        "short_name": "arrow_up_down",
        "short_names": ["arrow_up_down"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 173
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEFT RIGHT ARROW",
        "short_name": "left_right_arrow",
        "short_names": ["left_right_arrow"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 174
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
        "short_name": "arrows_counterclockwise",
        "short_names": ["arrows_counterclockwise"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 175
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RIGHTWARDS ARROW WITH HOOK",
        "short_name": "arrow_right_hook",
        "short_names": ["arrow_right_hook"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 176
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEFTWARDS ARROW WITH HOOK",
        "short_name": "leftwards_arrow_with_hook",
        "short_names": ["leftwards_arrow_with_hook"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 177
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS",
        "short_name": "arrow_heading_up",
        "short_names": ["arrow_heading_up"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 178
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS",
        "short_name": "arrow_heading_down",
        "short_names": ["arrow_heading_down"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 179
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "HASH KEY",
        "short_name": "hash",
        "short_names": ["hash"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 180
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "INFORMATION SOURCE",
        "short_name": "information_source",
        "short_names": ["information_source"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 181
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "INPUT SYMBOL FOR LATIN LETTERS",
        "short_name": "abc",
        "short_names": ["abc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 182
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "INPUT SYMBOL FOR LATIN SMALL LETTERS",
        "short_name": "abcd",
        "short_names": ["abcd"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 183
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS",
        "short_name": "capital_abcd",
        "short_names": ["capital_abcd"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 184
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "INPUT SYMBOL FOR SYMBOLS",
        "short_name": "symbols",
        "short_names": ["symbols"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 185
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MUSICAL NOTE",
        "short_name": "musical_note",
        "short_names": ["musical_note"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 186
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MULTIPLE MUSICAL NOTES",
        "short_name": "notes",
        "short_names": ["notes"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 187
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WAVY DASH",
        "short_name": "wavy_dash",
        "short_names": ["wavy_dash"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 188
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CURLY LOOP",
        "short_name": "curly_loop",
        "short_names": ["curly_loop"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 189
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAVY CHECK MARK",
        "short_name": "heavy_check_mark",
        "short_names": ["heavy_check_mark"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 190
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
        "short_name": "arrows_clockwise",
        "short_names": ["arrows_clockwise"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 191
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAVY PLUS SIGN",
        "short_name": "heavy_plus_sign",
        "short_names": ["heavy_plus_sign"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 192
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAVY MINUS SIGN",
        "short_name": "heavy_minus_sign",
        "short_names": ["heavy_minus_sign"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 193
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAVY DIVISION SIGN",
        "short_name": "heavy_division_sign",
        "short_names": ["heavy_division_sign"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 194
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAVY MULTIPLICATION X",
        "short_name": "heavy_multiplication_x",
        "short_names": ["heavy_multiplication_x"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 195
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAVY DOLLAR SIGN",
        "short_name": "heavy_dollar_sign",
        "short_names": ["heavy_dollar_sign"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 196
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CURRENCY EXCHANGE",
        "short_name": "currency_exchange",
        "short_names": ["currency_exchange"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 197
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": false,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "COPYRIGHT SIGN",
        "short_name": "copyright",
        "short_names": ["copyright"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 198
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": false,
        "has_img_emojione": true,
        "has_img_facebook": false,
        "has_img_messenger": false,
        "name": "REGISTERED SIGN",
        "short_name": "registered",
        "short_names": ["registered"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 199
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": false,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TRADE MARK SIGN",
        "short_name": "tm",
        "short_names": ["tm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 200
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "END WITH LEFTWARDS ARROW ABOVE",
        "short_name": "end",
        "short_names": ["end"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 201
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BACK WITH LEFTWARDS ARROW ABOVE",
        "short_name": "back",
        "short_names": ["back"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 202
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE",
        "short_name": "on",
        "short_names": ["on"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 203
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TOP WITH UPWARDS ARROW ABOVE",
        "short_name": "top",
        "short_names": ["top"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 204
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SOON WITH RIGHTWARDS ARROW ABOVE",
        "short_name": "soon",
        "short_names": ["soon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 205
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BALLOT BOX WITH CHECK",
        "short_name": "ballot_box_with_check",
        "short_names": ["ballot_box_with_check"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 206
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RADIO BUTTON",
        "short_name": "radio_button",
        "short_names": ["radio_button"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 207
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MEDIUM WHITE CIRCLE",
        "short_name": "white_circle",
        "short_names": ["white_circle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 208
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MEDIUM BLACK CIRCLE",
        "short_name": "black_circle",
        "short_names": ["black_circle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 209
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LARGE RED CIRCLE",
        "short_name": "red_circle",
        "short_names": ["red_circle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 210
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LARGE BLUE CIRCLE",
        "short_name": "large_blue_circle",
        "short_names": ["large_blue_circle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 211
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMALL ORANGE DIAMOND",
        "short_name": "small_orange_diamond",
        "short_names": ["small_orange_diamond"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 212
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMALL BLUE DIAMOND",
        "short_name": "small_blue_diamond",
        "short_names": ["small_blue_diamond"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 213
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LARGE ORANGE DIAMOND",
        "short_name": "large_orange_diamond",
        "short_names": ["large_orange_diamond"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 214
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LARGE BLUE DIAMOND",
        "short_name": "large_blue_diamond",
        "short_names": ["large_blue_diamond"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 215
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "UP-POINTING RED TRIANGLE",
        "short_name": "small_red_triangle",
        "short_names": ["small_red_triangle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 216
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK SMALL SQUARE",
        "short_name": "black_small_square",
        "short_names": ["black_small_square"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 217
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE SMALL SQUARE",
        "short_name": "white_small_square",
        "short_names": ["white_small_square"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 218
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK LARGE SQUARE",
        "short_name": "black_large_square",
        "short_names": ["black_large_square"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 219
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE LARGE SQUARE",
        "short_name": "white_large_square",
        "short_names": ["white_large_square"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 220
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOWN-POINTING RED TRIANGLE",
        "short_name": "small_red_triangle_down",
        "short_names": ["small_red_triangle_down"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 221
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK MEDIUM SQUARE",
        "short_name": "black_medium_square",
        "short_names": ["black_medium_square"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 222
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE MEDIUM SQUARE",
        "short_name": "white_medium_square",
        "short_names": ["white_medium_square"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 223
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK MEDIUM SMALL SQUARE",
        "short_name": "black_medium_small_square",
        "short_names": ["black_medium_small_square"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 224
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE MEDIUM SMALL SQUARE",
        "short_name": "white_medium_small_square",
        "short_names": ["white_medium_small_square"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 225
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK SQUARE BUTTON",
        "short_name": "black_square_button",
        "short_names": ["black_square_button"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 226
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE SQUARE BUTTON",
        "short_name": "white_square_button",
        "short_names": ["white_square_button"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 227
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPEAKER",
        "short_name": "speaker",
        "short_names": ["speaker"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 228
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPEAKER WITH ONE SOUND WAVE",
        "short_name": "sound",
        "short_names": ["sound"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 229
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPEAKER WITH THREE SOUND WAVES",
        "short_name": "loud_sound",
        "short_names": ["loud_sound"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 230
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPEAKER WITH CANCELLATION STROKE",
        "short_name": "mute",
        "short_names": ["mute"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 231
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHEERING MEGAPHONE",
        "short_name": "mega",
        "short_names": ["mega"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 232
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PUBLIC ADDRESS LOUDSPEAKER",
        "short_name": "loudspeaker",
        "short_names": ["loudspeaker"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 233
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BELL",
        "short_name": "bell",
        "short_names": ["bell"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 234
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BELL WITH CANCELLATION STROKE",
        "short_name": "no_bell",
        "short_names": ["no_bell"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 235
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PLAYING CARD BLACK JOKER",
        "short_name": "black_joker",
        "short_names": ["black_joker"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 236
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MAHJONG TILE RED DRAGON",
        "short_name": "mahjong",
        "short_names": ["mahjong"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 237
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK SPADE SUIT",
        "short_name": "spades",
        "short_names": ["spades"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 238
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK CLUB SUIT",
        "short_name": "clubs",
        "short_names": ["clubs"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 239
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK HEART SUIT",
        "short_name": "hearts",
        "short_names": ["hearts"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 240
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK DIAMOND SUIT",
        "short_name": "diamonds",
        "short_names": ["diamonds"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 241
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FLOWER PLAYING CARDS",
        "short_name": "flower_playing_cards",
        "short_names": ["flower_playing_cards"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 242
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "THOUGHT BALLOON",
        "short_name": "thought_balloon",
        "short_names": ["thought_balloon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 243
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "RIGHT ANGER BUBBLE",
        "short_name": "right_anger_bubble",
        "short_names": ["right_anger_bubble"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 244
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPEECH BALLOON",
        "short_name": "speech_balloon",
        "short_names": ["speech_balloon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 245
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": false,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LEFT SPEECH BUBBLE",
        "short_name": "left_speech_bubble",
        "short_names": ["left_speech_bubble"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 246
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE ONE OCLOCK",
        "short_name": "clock1",
        "short_names": ["clock1"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 247
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE TWO OCLOCK",
        "short_name": "clock2",
        "short_names": ["clock2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 248
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE THREE OCLOCK",
        "short_name": "clock3",
        "short_names": ["clock3"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 249
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE FOUR OCLOCK",
        "short_name": "clock4",
        "short_names": ["clock4"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 250
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE FIVE OCLOCK",
        "short_name": "clock5",
        "short_names": ["clock5"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 251
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE SIX OCLOCK",
        "short_name": "clock6",
        "short_names": ["clock6"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 252
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE SEVEN OCLOCK",
        "short_name": "clock7",
        "short_names": ["clock7"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 253
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE EIGHT OCLOCK",
        "short_name": "clock8",
        "short_names": ["clock8"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 254
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE NINE OCLOCK",
        "short_name": "clock9",
        "short_names": ["clock9"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 255
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE TEN OCLOCK",
        "short_name": "clock10",
        "short_names": ["clock10"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 256
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE ELEVEN OCLOCK",
        "short_name": "clock11",
        "short_names": ["clock11"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 257
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE TWELVE OCLOCK",
        "short_name": "clock12",
        "short_names": ["clock12"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 258
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE ONE-THIRTY",
        "short_name": "clock130",
        "short_names": ["clock130"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 259
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE TWO-THIRTY",
        "short_name": "clock230",
        "short_names": ["clock230"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 260
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE THREE-THIRTY",
        "short_name": "clock330",
        "short_names": ["clock330"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 261
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE FOUR-THIRTY",
        "short_name": "clock430",
        "short_names": ["clock430"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 262
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE FIVE-THIRTY",
        "short_name": "clock530",
        "short_names": ["clock530"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 263
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE SIX-THIRTY",
        "short_name": "clock630",
        "short_names": ["clock630"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 264
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE SEVEN-THIRTY",
        "short_name": "clock730",
        "short_names": ["clock730"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 265
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE EIGHT-THIRTY",
        "short_name": "clock830",
        "short_names": ["clock830"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 266
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE NINE-THIRTY",
        "short_name": "clock930",
        "short_names": ["clock930"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 267
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE TEN-THIRTY",
        "short_name": "clock1030",
        "short_names": ["clock1030"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 268
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE ELEVEN-THIRTY",
        "short_name": "clock1130",
        "short_names": ["clock1130"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 269
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOCK FACE TWELVE-THIRTY",
        "short_name": "clock1230",
        "short_names": ["clock1230"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 270
      }],
      "Objects": [{
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WATCH",
        "short_name": "watch",
        "short_names": ["watch"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 1
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOBILE PHONE",
        "short_name": "iphone",
        "short_names": ["iphone"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 2
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT",
        "short_name": "calling",
        "short_names": ["calling"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 3
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PERSONAL COMPUTER",
        "short_name": "computer",
        "short_names": ["computer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 4
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "KEYBOARD",
        "short_name": "keyboard",
        "short_names": ["keyboard"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 5
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "DESKTOP COMPUTER",
        "short_name": "desktop_computer",
        "short_names": ["desktop_computer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 6
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "PRINTER",
        "short_name": "printer",
        "short_names": ["printer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 7
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "THREE BUTTON MOUSE",
        "short_name": "three_button_mouse",
        "short_names": ["three_button_mouse"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 8
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "TRACKBALL",
        "short_name": "trackball",
        "short_names": ["trackball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 9
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "JOYSTICK",
        "short_name": "joystick",
        "short_names": ["joystick"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 10
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "COMPRESSION",
        "short_name": "compression",
        "short_names": ["compression"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 11
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MINIDISC",
        "short_name": "minidisc",
        "short_names": ["minidisc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 12
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FLOPPY DISK",
        "short_name": "floppy_disk",
        "short_names": ["floppy_disk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 13
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OPTICAL DISC",
        "short_name": "cd",
        "short_names": ["cd"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 14
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DVD",
        "short_name": "dvd",
        "short_names": ["dvd"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 15
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "VIDEOCASSETTE",
        "short_name": "vhs",
        "short_names": ["vhs"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 16
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CAMERA",
        "short_name": "camera",
        "short_names": ["camera"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 17
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CAMERA WITH FLASH",
        "short_name": "camera_with_flash",
        "short_names": ["camera_with_flash"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 18
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "VIDEO CAMERA",
        "short_name": "video_camera",
        "short_names": ["video_camera"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 19
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOVIE CAMERA",
        "short_name": "movie_camera",
        "short_names": ["movie_camera"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 20
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FILM PROJECTOR",
        "short_name": "film_projector",
        "short_names": ["film_projector"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 21
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FILM FRAMES",
        "short_name": "film_frames",
        "short_names": ["film_frames"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 22
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TELEPHONE RECEIVER",
        "short_name": "telephone_receiver",
        "short_names": ["telephone_receiver"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 23
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK TELEPHONE",
        "short_name": "phone",
        "short_names": ["phone", "telephone"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 24
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PAGER",
        "short_name": "pager",
        "short_names": ["pager"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 25
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FAX MACHINE",
        "short_name": "fax",
        "short_names": ["fax"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 26
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TELEVISION",
        "short_name": "tv",
        "short_names": ["tv"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 27
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RADIO",
        "short_name": "radio",
        "short_names": ["radio"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 28
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "STUDIO MICROPHONE",
        "short_name": "studio_microphone",
        "short_names": ["studio_microphone"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 29
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LEVEL SLIDER",
        "short_name": "level_slider",
        "short_names": ["level_slider"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 30
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CONTROL KNOBS",
        "short_name": "control_knobs",
        "short_names": ["control_knobs"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 31
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "STOPWATCH",
        "short_name": "stopwatch",
        "short_names": ["stopwatch"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 32
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "TIMER CLOCK",
        "short_name": "timer_clock",
        "short_names": ["timer_clock"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 33
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ALARM CLOCK",
        "short_name": "alarm_clock",
        "short_names": ["alarm_clock"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 34
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "MANTELPIECE CLOCK",
        "short_name": "mantelpiece_clock",
        "short_names": ["mantelpiece_clock"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 35
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HOURGLASS WITH FLOWING SAND",
        "short_name": "hourglass_flowing_sand",
        "short_names": ["hourglass_flowing_sand"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 36
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HOURGLASS",
        "short_name": "hourglass",
        "short_names": ["hourglass"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 37
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SATELLITE ANTENNA",
        "short_name": "satellite_antenna",
        "short_names": ["satellite_antenna"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 38
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BATTERY",
        "short_name": "battery",
        "short_names": ["battery"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 39
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ELECTRIC PLUG",
        "short_name": "electric_plug",
        "short_names": ["electric_plug"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 40
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ELECTRIC LIGHT BULB",
        "short_name": "bulb",
        "short_names": ["bulb"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 41
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ELECTRIC TORCH",
        "short_name": "flashlight",
        "short_names": ["flashlight"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 42
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CANDLE",
        "short_name": "candle",
        "short_names": ["candle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 43
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WASTEBASKET",
        "short_name": "wastebasket",
        "short_names": ["wastebasket"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 44
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "OIL DRUM",
        "short_name": "oil_drum",
        "short_names": ["oil_drum"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 45
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MONEY WITH WINGS",
        "short_name": "money_with_wings",
        "short_names": ["money_with_wings"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 46
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BANKNOTE WITH DOLLAR SIGN",
        "short_name": "dollar",
        "short_names": ["dollar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 47
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BANKNOTE WITH YEN SIGN",
        "short_name": "yen",
        "short_names": ["yen"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 48
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BANKNOTE WITH EURO SIGN",
        "short_name": "euro",
        "short_names": ["euro"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 49
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BANKNOTE WITH POUND SIGN",
        "short_name": "pound",
        "short_names": ["pound"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 50
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MONEY BAG",
        "short_name": "moneybag",
        "short_names": ["moneybag"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 51
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CREDIT CARD",
        "short_name": "credit_card",
        "short_names": ["credit_card"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 52
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GEM STONE",
        "short_name": "gem",
        "short_names": ["gem"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 53
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SCALES",
        "short_name": "scales",
        "short_names": ["scales"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 54
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WRENCH",
        "short_name": "wrench",
        "short_names": ["wrench"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 55
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HAMMER",
        "short_name": "hammer",
        "short_names": ["hammer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 56
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "HAMMER AND PICK",
        "short_name": "hammer_and_pick",
        "short_names": ["hammer_and_pick"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 57
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "HAMMER AND WRENCH",
        "short_name": "hammer_and_wrench",
        "short_names": ["hammer_and_wrench"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 58
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "PICK",
        "short_name": "pick",
        "short_names": ["pick"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 59
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NUT AND BOLT",
        "short_name": "nut_and_bolt",
        "short_names": ["nut_and_bolt"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 60
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "GEAR",
        "short_name": "gear",
        "short_names": ["gear"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 61
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CHAINS",
        "short_name": "chains",
        "short_names": ["chains"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 62
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PISTOL",
        "short_name": "gun",
        "short_names": ["gun"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 63
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BOMB",
        "short_name": "bomb",
        "short_names": ["bomb"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 64
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HOCHO",
        "short_name": "hocho",
        "short_names": ["hocho", "knife"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 65
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "DAGGER KNIFE",
        "short_name": "dagger_knife",
        "short_names": ["dagger_knife"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 66
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CROSSED SWORDS",
        "short_name": "crossed_swords",
        "short_names": ["crossed_swords"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 67
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SHIELD",
        "short_name": "shield",
        "short_names": ["shield"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 68
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMOKING SYMBOL",
        "short_name": "smoking",
        "short_names": ["smoking"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 69
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SKULL AND CROSSBONES",
        "short_name": "skull_and_crossbones",
        "short_names": ["skull_and_crossbones"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 70
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "COFFIN",
        "short_name": "coffin",
        "short_names": ["coffin"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 71
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FUNERAL URN",
        "short_name": "funeral_urn",
        "short_names": ["funeral_urn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 72
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "AMPHORA",
        "short_name": "amphora",
        "short_names": ["amphora"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 73
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CRYSTAL BALL",
        "short_name": "crystal_ball",
        "short_names": ["crystal_ball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 74
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "PRAYER BEADS",
        "short_name": "prayer_beads",
        "short_names": ["prayer_beads"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 75
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BARBER POLE",
        "short_name": "barber",
        "short_names": ["barber"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 76
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ALEMBIC",
        "short_name": "alembic",
        "short_names": ["alembic"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 77
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TELESCOPE",
        "short_name": "telescope",
        "short_names": ["telescope"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 78
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MICROSCOPE",
        "short_name": "microscope",
        "short_names": ["microscope"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 79
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "HOLE",
        "short_name": "hole",
        "short_names": ["hole"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 80
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PILL",
        "short_name": "pill",
        "short_names": ["pill"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 81
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SYRINGE",
        "short_name": "syringe",
        "short_names": ["syringe"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 82
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "THERMOMETER",
        "short_name": "thermometer",
        "short_names": ["thermometer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 83
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LABEL",
        "short_name": "label",
        "short_names": ["label"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 84
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BOOKMARK",
        "short_name": "bookmark",
        "short_names": ["bookmark"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 85
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TOILET",
        "short_name": "toilet",
        "short_names": ["toilet"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 86
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SHOWER",
        "short_name": "shower",
        "short_names": ["shower"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 87
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BATHTUB",
        "short_name": "bathtub",
        "short_names": ["bathtub"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 88
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KEY",
        "short_name": "key",
        "short_names": ["key"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 89
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "OLD KEY",
        "short_name": "old_key",
        "short_names": ["old_key"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 90
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "COUCH AND LAMP",
        "short_name": "couch_and_lamp",
        "short_names": ["couch_and_lamp"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 91
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SLEEPING ACCOMMODATION",
        "short_name": "sleeping_accommodation",
        "short_names": ["sleeping_accommodation"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 92
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BED",
        "short_name": "bed",
        "short_names": ["bed"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 93
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOOR",
        "short_name": "door",
        "short_names": ["door"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 94
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BELLHOP BELL",
        "short_name": "bellhop_bell",
        "short_names": ["bellhop_bell"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 95
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FRAME WITH PICTURE",
        "short_name": "frame_with_picture",
        "short_names": ["frame_with_picture"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 96
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WORLD MAP",
        "short_name": "world_map",
        "short_names": ["world_map"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 97
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "UMBRELLA ON GROUND",
        "short_name": "umbrella_on_ground",
        "short_names": ["umbrella_on_ground"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 98
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOYAI",
        "short_name": "moyai",
        "short_names": ["moyai"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 99
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SHOPPING BAGS",
        "short_name": "shopping_bags",
        "short_names": ["shopping_bags"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 100
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BALLOON",
        "short_name": "balloon",
        "short_names": ["balloon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 101
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CARP STREAMER",
        "short_name": "flags",
        "short_names": ["flags"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 102
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RIBBON",
        "short_name": "ribbon",
        "short_names": ["ribbon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 103
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WRAPPED PRESENT",
        "short_name": "gift",
        "short_names": ["gift"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 104
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CONFETTI BALL",
        "short_name": "confetti_ball",
        "short_names": ["confetti_ball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 105
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PARTY POPPER",
        "short_name": "tada",
        "short_names": ["tada"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 106
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "JAPANESE DOLLS",
        "short_name": "dolls",
        "short_names": ["dolls"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 107
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WIND CHIME",
        "short_name": "wind_chime",
        "short_names": ["wind_chime"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 108
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CROSSED FLAGS",
        "short_name": "crossed_flags",
        "short_names": ["crossed_flags"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 109
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "IZAKAYA LANTERN",
        "short_name": "izakaya_lantern",
        "short_names": ["izakaya_lantern", "lantern"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 110
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ENVELOPE",
        "short_name": "email",
        "short_names": ["email", "envelope"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 111
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ENVELOPE WITH DOWNWARDS ARROW ABOVE",
        "short_name": "envelope_with_arrow",
        "short_names": ["envelope_with_arrow"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 112
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "INCOMING ENVELOPE",
        "short_name": "incoming_envelope",
        "short_names": ["incoming_envelope"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 113
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "E-MAIL SYMBOL",
        "short_name": "e-mail",
        "short_names": ["e-mail"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 114
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LOVE LETTER",
        "short_name": "love_letter",
        "short_names": ["love_letter"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 115
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POSTBOX",
        "short_name": "postbox",
        "short_names": ["postbox"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 116
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOSED MAILBOX WITH LOWERED FLAG",
        "short_name": "mailbox_closed",
        "short_names": ["mailbox_closed"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 117
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOSED MAILBOX WITH RAISED FLAG",
        "short_name": "mailbox",
        "short_names": ["mailbox"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 118
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OPEN MAILBOX WITH RAISED FLAG",
        "short_name": "mailbox_with_mail",
        "short_names": ["mailbox_with_mail"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 119
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OPEN MAILBOX WITH LOWERED FLAG",
        "short_name": "mailbox_with_no_mail",
        "short_names": ["mailbox_with_no_mail"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 120
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PACKAGE",
        "short_name": "package",
        "short_names": ["package"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 121
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POSTAL HORN",
        "short_name": "postal_horn",
        "short_names": ["postal_horn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 122
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "INBOX TRAY",
        "short_name": "inbox_tray",
        "short_names": ["inbox_tray"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 123
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OUTBOX TRAY",
        "short_name": "outbox_tray",
        "short_names": ["outbox_tray"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 124
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SCROLL",
        "short_name": "scroll",
        "short_names": ["scroll"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 125
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PAGE WITH CURL",
        "short_name": "page_with_curl",
        "short_names": ["page_with_curl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 126
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BOOKMARK TABS",
        "short_name": "bookmark_tabs",
        "short_names": ["bookmark_tabs"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 127
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BAR CHART",
        "short_name": "bar_chart",
        "short_names": ["bar_chart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 128
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHART WITH UPWARDS TREND",
        "short_name": "chart_with_upwards_trend",
        "short_names": ["chart_with_upwards_trend"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 129
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHART WITH DOWNWARDS TREND",
        "short_name": "chart_with_downwards_trend",
        "short_names": ["chart_with_downwards_trend"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 130
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PAGE FACING UP",
        "short_name": "page_facing_up",
        "short_names": ["page_facing_up"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 131
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CALENDAR",
        "short_name": "date",
        "short_names": ["date"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 132
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TEAR-OFF CALENDAR",
        "short_name": "calendar",
        "short_names": ["calendar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 133
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SPIRAL CALENDAR PAD",
        "short_name": "spiral_calendar_pad",
        "short_names": ["spiral_calendar_pad"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 134
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CARD INDEX",
        "short_name": "card_index",
        "short_names": ["card_index"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 135
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CARD FILE BOX",
        "short_name": "card_file_box",
        "short_names": ["card_file_box"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 136
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BALLOT BOX WITH BALLOT",
        "short_name": "ballot_box_with_ballot",
        "short_names": ["ballot_box_with_ballot"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 137
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FILE CABINET",
        "short_name": "file_cabinet",
        "short_names": ["file_cabinet"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 138
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLIPBOARD",
        "short_name": "clipboard",
        "short_names": ["clipboard"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 139
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SPIRAL NOTE PAD",
        "short_name": "spiral_note_pad",
        "short_names": ["spiral_note_pad"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 140
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FILE FOLDER",
        "short_name": "file_folder",
        "short_names": ["file_folder"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 141
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OPEN FILE FOLDER",
        "short_name": "open_file_folder",
        "short_names": ["open_file_folder"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 142
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CARD INDEX DIVIDERS",
        "short_name": "card_index_dividers",
        "short_names": ["card_index_dividers"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 143
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ROLLED-UP NEWSPAPER",
        "short_name": "rolled_up_newspaper",
        "short_names": ["rolled_up_newspaper"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 144
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEWSPAPER",
        "short_name": "newspaper",
        "short_names": ["newspaper"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 145
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NOTEBOOK",
        "short_name": "notebook",
        "short_names": ["notebook"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 146
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOSED BOOK",
        "short_name": "closed_book",
        "short_names": ["closed_book"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 147
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GREEN BOOK",
        "short_name": "green_book",
        "short_names": ["green_book"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 148
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLUE BOOK",
        "short_name": "blue_book",
        "short_names": ["blue_book"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 149
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ORANGE BOOK",
        "short_name": "orange_book",
        "short_names": ["orange_book"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 150
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NOTEBOOK WITH DECORATIVE COVER",
        "short_name": "notebook_with_decorative_cover",
        "short_names": ["notebook_with_decorative_cover"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 151
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEDGER",
        "short_name": "ledger",
        "short_names": ["ledger"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 152
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BOOKS",
        "short_name": "books",
        "short_names": ["books"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 153
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OPEN BOOK",
        "short_name": "book",
        "short_names": ["book", "open_book"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 154
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LINK SYMBOL",
        "short_name": "link",
        "short_names": ["link"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 155
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PAPERCLIP",
        "short_name": "paperclip",
        "short_names": ["paperclip"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 156
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LINKED PAPERCLIPS",
        "short_name": "linked_paperclips",
        "short_names": ["linked_paperclips"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 157
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK SCISSORS",
        "short_name": "scissors",
        "short_names": ["scissors"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 158
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TRIANGULAR RULER",
        "short_name": "triangular_ruler",
        "short_names": ["triangular_ruler"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 159
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "STRAIGHT RULER",
        "short_name": "straight_ruler",
        "short_names": ["straight_ruler"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 160
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PUSHPIN",
        "short_name": "pushpin",
        "short_names": ["pushpin"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 161
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ROUND PUSHPIN",
        "short_name": "round_pushpin",
        "short_names": ["round_pushpin"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 162
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TRIANGULAR FLAG ON POST",
        "short_name": "triangular_flag_on_post",
        "short_names": ["triangular_flag_on_post"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 163
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WAVING WHITE FLAG",
        "short_name": "waving_white_flag",
        "short_names": ["waving_white_flag"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 164
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WAVING BLACK FLAG",
        "short_name": "waving_black_flag",
        "short_names": ["waving_black_flag"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 165
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOSED LOCK WITH KEY",
        "short_name": "closed_lock_with_key",
        "short_names": ["closed_lock_with_key"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 166
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LOCK",
        "short_name": "lock",
        "short_names": ["lock"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 167
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OPEN LOCK",
        "short_name": "unlock",
        "short_names": ["unlock"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 168
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LOCK WITH INK PEN",
        "short_name": "lock_with_ink_pen",
        "short_names": ["lock_with_ink_pen"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 169
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LOWER LEFT BALLPOINT PEN",
        "short_name": "lower_left_ballpoint_pen",
        "short_names": ["lower_left_ballpoint_pen"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 170
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LOWER LEFT FOUNTAIN PEN",
        "short_name": "lower_left_fountain_pen",
        "short_names": ["lower_left_fountain_pen"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 171
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK NIB",
        "short_name": "black_nib",
        "short_names": ["black_nib"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 172
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MEMO",
        "short_name": "memo",
        "short_names": ["memo", "pencil"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 173
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PENCIL",
        "short_name": "pencil2",
        "short_names": ["pencil2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 174
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LOWER LEFT CRAYON",
        "short_name": "lower_left_crayon",
        "short_names": ["lower_left_crayon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 175
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LOWER LEFT PAINTBRUSH",
        "short_name": "lower_left_paintbrush",
        "short_names": ["lower_left_paintbrush"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 176
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEFT-POINTING MAGNIFYING GLASS",
        "short_name": "mag",
        "short_names": ["mag"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 177
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RIGHT-POINTING MAGNIFYING GLASS",
        "short_name": "mag_right",
        "short_names": ["mag_right"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 178
      }],
      "Nature": [{
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOG FACE",
        "short_name": "dog",
        "short_names": ["dog"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 1
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CAT FACE",
        "short_name": "cat",
        "short_names": ["cat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 2
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOUSE FACE",
        "short_name": "mouse",
        "short_names": ["mouse"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 3
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HAMSTER FACE",
        "short_name": "hamster",
        "short_names": ["hamster"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 4
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RABBIT FACE",
        "short_name": "rabbit",
        "short_names": ["rabbit"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 5
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BEAR FACE",
        "short_name": "bear",
        "short_names": ["bear"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 6
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PANDA FACE",
        "short_name": "panda_face",
        "short_names": ["panda_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 7
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KOALA",
        "short_name": "koala",
        "short_names": ["koala"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 8
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TIGER FACE",
        "short_name": "tiger",
        "short_names": ["tiger"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 9
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "LION FACE",
        "short_name": "lion_face",
        "short_names": ["lion_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 10
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "COW FACE",
        "short_name": "cow",
        "short_names": ["cow"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 11
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PIG FACE",
        "short_name": "pig",
        "short_names": ["pig"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 12
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PIG NOSE",
        "short_name": "pig_nose",
        "short_names": ["pig_nose"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 13
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FROG FACE",
        "short_name": "frog",
        "short_names": ["frog"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 14
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OCTOPUS",
        "short_name": "octopus",
        "short_names": ["octopus"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 15
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MONKEY FACE",
        "short_name": "monkey_face",
        "short_names": ["monkey_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 16
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SEE-NO-EVIL MONKEY",
        "short_name": "see_no_evil",
        "short_names": ["see_no_evil"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 17
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEAR-NO-EVIL MONKEY",
        "short_name": "hear_no_evil",
        "short_names": ["hear_no_evil"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 18
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPEAK-NO-EVIL MONKEY",
        "short_name": "speak_no_evil",
        "short_names": ["speak_no_evil"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 19
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MONKEY",
        "short_name": "monkey",
        "short_names": ["monkey"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 20
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHICKEN",
        "short_name": "chicken",
        "short_names": ["chicken"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 21
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PENGUIN",
        "short_name": "penguin",
        "short_names": ["penguin"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 22
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BIRD",
        "short_name": "bird",
        "short_names": ["bird"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 23
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BABY CHICK",
        "short_name": "baby_chick",
        "short_names": ["baby_chick"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 24
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HATCHING CHICK",
        "short_name": "hatching_chick",
        "short_names": ["hatching_chick"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 25
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FRONT-FACING BABY CHICK",
        "short_name": "hatched_chick",
        "short_names": ["hatched_chick"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 26
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WOLF FACE",
        "short_name": "wolf",
        "short_names": ["wolf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 27
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BOAR",
        "short_name": "boar",
        "short_names": ["boar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 28
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HORSE FACE",
        "short_name": "horse",
        "short_names": ["horse"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 29
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "UNICORN FACE",
        "short_name": "unicorn_face",
        "short_names": ["unicorn_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 30
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HONEYBEE",
        "short_name": "bee",
        "short_names": ["bee", "honeybee"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 31
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BUG",
        "short_name": "bug",
        "short_names": ["bug"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 32
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SNAIL",
        "short_name": "snail",
        "short_names": ["snail"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 33
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LADY BEETLE",
        "short_name": "beetle",
        "short_names": ["beetle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 34
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ANT",
        "short_name": "ant",
        "short_names": ["ant"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 35
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SPIDER",
        "short_name": "spider",
        "short_names": ["spider"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 36
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SCORPION",
        "short_name": "scorpion",
        "short_names": ["scorpion"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 37
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CRAB",
        "short_name": "crab",
        "short_names": ["crab"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 38
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SNAKE",
        "short_name": "snake",
        "short_names": ["snake"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 39
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TURTLE",
        "short_name": "turtle",
        "short_names": ["turtle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 40
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TROPICAL FISH",
        "short_name": "tropical_fish",
        "short_names": ["tropical_fish"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 41
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FISH",
        "short_name": "fish",
        "short_names": ["fish"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 42
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLOWFISH",
        "short_name": "blowfish",
        "short_names": ["blowfish"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 43
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOLPHIN",
        "short_name": "dolphin",
        "short_names": ["dolphin", "flipper"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 44
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPOUTING WHALE",
        "short_name": "whale",
        "short_names": ["whale"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 45
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHALE",
        "short_name": "whale2",
        "short_names": ["whale2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 46
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CROCODILE",
        "short_name": "crocodile",
        "short_names": ["crocodile"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 47
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEOPARD",
        "short_name": "leopard",
        "short_names": ["leopard"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 48
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TIGER",
        "short_name": "tiger2",
        "short_names": ["tiger2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 49
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WATER BUFFALO",
        "short_name": "water_buffalo",
        "short_names": ["water_buffalo"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 50
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OX",
        "short_name": "ox",
        "short_names": ["ox"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 51
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "COW",
        "short_name": "cow2",
        "short_names": ["cow2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 52
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DROMEDARY CAMEL",
        "short_name": "dromedary_camel",
        "short_names": ["dromedary_camel"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 53
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BACTRIAN CAMEL",
        "short_name": "camel",
        "short_names": ["camel"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 54
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ELEPHANT",
        "short_name": "elephant",
        "short_names": ["elephant"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 55
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GOAT",
        "short_name": "goat",
        "short_names": ["goat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 56
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RAM",
        "short_name": "ram",
        "short_names": ["ram"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 57
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SHEEP",
        "short_name": "sheep",
        "short_names": ["sheep"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 58
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HORSE",
        "short_name": "racehorse",
        "short_names": ["racehorse"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 59
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PIG",
        "short_name": "pig2",
        "short_names": ["pig2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 60
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RAT",
        "short_name": "rat",
        "short_names": ["rat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 61
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOUSE",
        "short_name": "mouse2",
        "short_names": ["mouse2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 62
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ROOSTER",
        "short_name": "rooster",
        "short_names": ["rooster"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 63
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "TURKEY",
        "short_name": "turkey",
        "short_names": ["turkey"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 64
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "DOVE OF PEACE",
        "short_name": "dove_of_peace",
        "short_names": ["dove_of_peace"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 65
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOG",
        "short_name": "dog2",
        "short_names": ["dog2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 66
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POODLE",
        "short_name": "poodle",
        "short_names": ["poodle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 67
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CAT",
        "short_name": "cat2",
        "short_names": ["cat2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 68
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RABBIT",
        "short_name": "rabbit2",
        "short_names": ["rabbit2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 69
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CHIPMUNK",
        "short_name": "chipmunk",
        "short_names": ["chipmunk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 70
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PAW PRINTS",
        "short_name": "feet",
        "short_names": ["feet", "paw_prints"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 71
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DRAGON",
        "short_name": "dragon",
        "short_names": ["dragon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 72
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DRAGON FACE",
        "short_name": "dragon_face",
        "short_names": ["dragon_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 73
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CACTUS",
        "short_name": "cactus",
        "short_names": ["cactus"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 74
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHRISTMAS TREE",
        "short_name": "christmas_tree",
        "short_names": ["christmas_tree"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 75
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EVERGREEN TREE",
        "short_name": "evergreen_tree",
        "short_names": ["evergreen_tree"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 76
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DECIDUOUS TREE",
        "short_name": "deciduous_tree",
        "short_names": ["deciduous_tree"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 77
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PALM TREE",
        "short_name": "palm_tree",
        "short_names": ["palm_tree"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 78
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SEEDLING",
        "short_name": "seedling",
        "short_names": ["seedling"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 79
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HERB",
        "short_name": "herb",
        "short_names": ["herb"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 80
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SHAMROCK",
        "short_name": "shamrock",
        "short_names": ["shamrock"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 81
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FOUR LEAF CLOVER",
        "short_name": "four_leaf_clover",
        "short_names": ["four_leaf_clover"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 82
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PINE DECORATION",
        "short_name": "bamboo",
        "short_names": ["bamboo"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 83
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TANABATA TREE",
        "short_name": "tanabata_tree",
        "short_names": ["tanabata_tree"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 84
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEAF FLUTTERING IN WIND",
        "short_name": "leaves",
        "short_names": ["leaves"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 85
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FALLEN LEAF",
        "short_name": "fallen_leaf",
        "short_names": ["fallen_leaf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 86
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MAPLE LEAF",
        "short_name": "maple_leaf",
        "short_names": ["maple_leaf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 87
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EAR OF RICE",
        "short_name": "ear_of_rice",
        "short_names": ["ear_of_rice"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 88
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HIBISCUS",
        "short_name": "hibiscus",
        "short_names": ["hibiscus"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 89
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SUNFLOWER",
        "short_name": "sunflower",
        "short_names": ["sunflower"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 90
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ROSE",
        "short_name": "rose",
        "short_names": ["rose"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 91
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TULIP",
        "short_name": "tulip",
        "short_names": ["tulip"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 92
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLOSSOM",
        "short_name": "blossom",
        "short_names": ["blossom"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 93
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHERRY BLOSSOM",
        "short_name": "cherry_blossom",
        "short_names": ["cherry_blossom"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 94
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BOUQUET",
        "short_name": "bouquet",
        "short_names": ["bouquet"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 95
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MUSHROOM",
        "short_name": "mushroom",
        "short_names": ["mushroom"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 96
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHESTNUT",
        "short_name": "chestnut",
        "short_names": ["chestnut"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 97
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "JACK-O-LANTERN",
        "short_name": "jack_o_lantern",
        "short_names": ["jack_o_lantern"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 98
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPIRAL SHELL",
        "short_name": "shell",
        "short_names": ["shell"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 99
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SPIDER WEB",
        "short_name": "spider_web",
        "short_names": ["spider_web"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 100
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EARTH GLOBE AMERICAS",
        "short_name": "earth_americas",
        "short_names": ["earth_americas"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 101
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EARTH GLOBE EUROPE-AFRICA",
        "short_name": "earth_africa",
        "short_names": ["earth_africa"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 102
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EARTH GLOBE ASIA-AUSTRALIA",
        "short_name": "earth_asia",
        "short_names": ["earth_asia"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 103
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FULL MOON SYMBOL",
        "short_name": "full_moon",
        "short_names": ["full_moon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 104
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WANING GIBBOUS MOON SYMBOL",
        "short_name": "waning_gibbous_moon",
        "short_names": ["waning_gibbous_moon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 105
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LAST QUARTER MOON SYMBOL",
        "short_name": "last_quarter_moon",
        "short_names": ["last_quarter_moon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 106
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WANING CRESCENT MOON SYMBOL",
        "short_name": "waning_crescent_moon",
        "short_names": ["waning_crescent_moon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 107
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEW MOON SYMBOL",
        "short_name": "new_moon",
        "short_names": ["new_moon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 108
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WAXING CRESCENT MOON SYMBOL",
        "short_name": "waxing_crescent_moon",
        "short_names": ["waxing_crescent_moon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 109
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FIRST QUARTER MOON SYMBOL",
        "short_name": "first_quarter_moon",
        "short_names": ["first_quarter_moon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 110
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WAXING GIBBOUS MOON SYMBOL",
        "short_name": "moon",
        "short_names": ["moon", "waxing_gibbous_moon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 111
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEW MOON WITH FACE",
        "short_name": "new_moon_with_face",
        "short_names": ["new_moon_with_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 112
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FULL MOON WITH FACE",
        "short_name": "full_moon_with_face",
        "short_names": ["full_moon_with_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 113
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FIRST QUARTER MOON WITH FACE",
        "short_name": "first_quarter_moon_with_face",
        "short_names": ["first_quarter_moon_with_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 114
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LAST QUARTER MOON WITH FACE",
        "short_name": "last_quarter_moon_with_face",
        "short_names": ["last_quarter_moon_with_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 115
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SUN WITH FACE",
        "short_name": "sun_with_face",
        "short_names": ["sun_with_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 116
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CRESCENT MOON",
        "short_name": "crescent_moon",
        "short_names": ["crescent_moon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 117
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE MEDIUM STAR",
        "short_name": "star",
        "short_names": ["star"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 118
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GLOWING STAR",
        "short_name": "star2",
        "short_names": ["star2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 119
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DIZZY SYMBOL",
        "short_name": "dizzy",
        "short_names": ["dizzy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 120
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPARKLES",
        "short_name": "sparkles",
        "short_names": ["sparkles"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 121
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "COMET",
        "short_name": "comet",
        "short_names": ["comet"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 122
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BLACK SUN WITH RAYS",
        "short_name": "sunny",
        "short_names": ["sunny"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 123
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WHITE SUN WITH SMALL CLOUD",
        "short_name": "mostly_sunny",
        "short_names": ["mostly_sunny", "sun_small_cloud"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 124
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SUN BEHIND CLOUD",
        "short_name": "partly_sunny",
        "short_names": ["partly_sunny"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 125
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WHITE SUN BEHIND CLOUD",
        "short_name": "barely_sunny",
        "short_names": ["barely_sunny", "sun_behind_cloud"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 126
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WHITE SUN BEHIND CLOUD WITH RAIN",
        "short_name": "partly_sunny_rain",
        "short_names": ["partly_sunny_rain", "sun_behind_rain_cloud"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 127
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOUD",
        "short_name": "cloud",
        "short_names": ["cloud"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 128
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CLOUD WITH RAIN",
        "short_name": "rain_cloud",
        "short_names": ["rain_cloud"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 129
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "THUNDER CLOUD AND RAIN",
        "short_name": "thunder_cloud_and_rain",
        "short_names": ["thunder_cloud_and_rain"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 130
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CLOUD WITH LIGHTNING",
        "short_name": "lightning",
        "short_names": ["lightning", "lightning_cloud"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 131
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HIGH VOLTAGE SIGN",
        "short_name": "zap",
        "short_names": ["zap"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 132
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FIRE",
        "short_name": "fire",
        "short_names": ["fire"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 133
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "COLLISION SYMBOL",
        "short_name": "boom",
        "short_names": ["boom", "collision"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 134
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SNOWFLAKE",
        "short_name": "snowflake",
        "short_names": ["snowflake"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 135
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CLOUD WITH SNOW",
        "short_name": "snow_cloud",
        "short_names": ["snow_cloud"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 136
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SNOWMAN",
        "short_name": "snowman",
        "short_names": ["snowman"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 137
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SNOWMAN WITHOUT SNOW",
        "short_name": "snowman_without_snow",
        "short_names": ["snowman_without_snow"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 138
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WIND BLOWING FACE",
        "short_name": "wind_blowing_face",
        "short_names": ["wind_blowing_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 139
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DASH SYMBOL",
        "short_name": "dash",
        "short_names": ["dash"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 140
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CLOUD WITH TORNADO",
        "short_name": "tornado",
        "short_names": ["tornado", "tornado_cloud"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 141
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FOG",
        "short_name": "fog",
        "short_names": ["fog"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 142
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "UMBRELLA",
        "short_name": "umbrella",
        "short_names": ["umbrella"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 143
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "UMBRELLA WITH RAIN DROPS",
        "short_name": "umbrella_with_rain_drops",
        "short_names": ["umbrella_with_rain_drops"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 144
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DROPLET",
        "short_name": "droplet",
        "short_names": ["droplet"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 145
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPLASHING SWEAT SYMBOL",
        "short_name": "sweat_drops",
        "short_names": ["sweat_drops"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 146
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WATER WAVE",
        "short_name": "ocean",
        "short_names": ["ocean"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 147
      }],
      "Foods": [{
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GREEN APPLE",
        "short_name": "green_apple",
        "short_names": ["green_apple"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 1
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RED APPLE",
        "short_name": "apple",
        "short_names": ["apple"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 2
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PEAR",
        "short_name": "pear",
        "short_names": ["pear"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 3
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TANGERINE",
        "short_name": "tangerine",
        "short_names": ["tangerine"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 4
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LEMON",
        "short_name": "lemon",
        "short_names": ["lemon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 5
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BANANA",
        "short_name": "banana",
        "short_names": ["banana"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 6
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WATERMELON",
        "short_name": "watermelon",
        "short_names": ["watermelon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 7
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GRAPES",
        "short_name": "grapes",
        "short_names": ["grapes"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 8
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "STRAWBERRY",
        "short_name": "strawberry",
        "short_names": ["strawberry"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 9
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MELON",
        "short_name": "melon",
        "short_names": ["melon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 10
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHERRIES",
        "short_name": "cherries",
        "short_names": ["cherries"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 11
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PEACH",
        "short_name": "peach",
        "short_names": ["peach"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 12
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PINEAPPLE",
        "short_name": "pineapple",
        "short_names": ["pineapple"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 13
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TOMATO",
        "short_name": "tomato",
        "short_names": ["tomato"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 14
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "AUBERGINE",
        "short_name": "eggplant",
        "short_names": ["eggplant"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 15
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "HOT PEPPER",
        "short_name": "hot_pepper",
        "short_names": ["hot_pepper"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 16
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EAR OF MAIZE",
        "short_name": "corn",
        "short_names": ["corn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 17
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ROASTED SWEET POTATO",
        "short_name": "sweet_potato",
        "short_names": ["sweet_potato"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 18
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HONEY POT",
        "short_name": "honey_pot",
        "short_names": ["honey_pot"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 19
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BREAD",
        "short_name": "bread",
        "short_names": ["bread"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 20
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CHEESE WEDGE",
        "short_name": "cheese_wedge",
        "short_names": ["cheese_wedge"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 21
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POULTRY LEG",
        "short_name": "poultry_leg",
        "short_names": ["poultry_leg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 22
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MEAT ON BONE",
        "short_name": "meat_on_bone",
        "short_names": ["meat_on_bone"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 23
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FRIED SHRIMP",
        "short_name": "fried_shrimp",
        "short_names": ["fried_shrimp"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 24
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "COOKING",
        "short_name": "egg",
        "short_names": ["egg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 25
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HAMBURGER",
        "short_name": "hamburger",
        "short_names": ["hamburger"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 26
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FRENCH FRIES",
        "short_name": "fries",
        "short_names": ["fries"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 27
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "HOT DOG",
        "short_name": "hotdog",
        "short_names": ["hotdog"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 28
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SLICE OF PIZZA",
        "short_name": "pizza",
        "short_names": ["pizza"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 29
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPAGHETTI",
        "short_name": "spaghetti",
        "short_names": ["spaghetti"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 30
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "TACO",
        "short_name": "taco",
        "short_names": ["taco"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 31
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BURRITO",
        "short_name": "burrito",
        "short_names": ["burrito"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 32
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "STEAMING BOWL",
        "short_name": "ramen",
        "short_names": ["ramen"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 33
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POT OF FOOD",
        "short_name": "stew",
        "short_names": ["stew"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 34
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FISH CAKE WITH SWIRL DESIGN",
        "short_name": "fish_cake",
        "short_names": ["fish_cake"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 35
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SUSHI",
        "short_name": "sushi",
        "short_names": ["sushi"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 36
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BENTO BOX",
        "short_name": "bento",
        "short_names": ["bento"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 37
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CURRY AND RICE",
        "short_name": "curry",
        "short_names": ["curry"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 38
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RICE BALL",
        "short_name": "rice_ball",
        "short_names": ["rice_ball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 39
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "COOKED RICE",
        "short_name": "rice",
        "short_names": ["rice"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 40
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RICE CRACKER",
        "short_name": "rice_cracker",
        "short_names": ["rice_cracker"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 41
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ODEN",
        "short_name": "oden",
        "short_names": ["oden"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 42
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DANGO",
        "short_name": "dango",
        "short_names": ["dango"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 43
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SHAVED ICE",
        "short_name": "shaved_ice",
        "short_names": ["shaved_ice"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 44
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ICE CREAM",
        "short_name": "ice_cream",
        "short_names": ["ice_cream"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 45
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SOFT ICE CREAM",
        "short_name": "icecream",
        "short_names": ["icecream"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 46
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SHORTCAKE",
        "short_name": "cake",
        "short_names": ["cake"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 47
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BIRTHDAY CAKE",
        "short_name": "birthday",
        "short_names": ["birthday"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 48
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CUSTARD",
        "short_name": "custard",
        "short_names": ["custard"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 49
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CANDY",
        "short_name": "candy",
        "short_names": ["candy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 50
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LOLLIPOP",
        "short_name": "lollipop",
        "short_names": ["lollipop"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 51
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHOCOLATE BAR",
        "short_name": "chocolate_bar",
        "short_names": ["chocolate_bar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 52
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "POPCORN",
        "short_name": "popcorn",
        "short_names": ["popcorn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 53
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DOUGHNUT",
        "short_name": "doughnut",
        "short_names": ["doughnut"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 54
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "COOKIE",
        "short_name": "cookie",
        "short_names": ["cookie"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 55
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BEER MUG",
        "short_name": "beer",
        "short_names": ["beer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 56
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLINKING BEER MUGS",
        "short_name": "beers",
        "short_names": ["beers"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 57
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WINE GLASS",
        "short_name": "wine_glass",
        "short_names": ["wine_glass"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 58
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "COCKTAIL GLASS",
        "short_name": "cocktail",
        "short_names": ["cocktail"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 59
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TROPICAL DRINK",
        "short_name": "tropical_drink",
        "short_names": ["tropical_drink"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 60
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BOTTLE WITH POPPING CORK",
        "short_name": "champagne",
        "short_names": ["champagne"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 61
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SAKE BOTTLE AND CUP",
        "short_name": "sake",
        "short_names": ["sake"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 62
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TEACUP WITHOUT HANDLE",
        "short_name": "tea",
        "short_names": ["tea"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 63
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HOT BEVERAGE",
        "short_name": "coffee",
        "short_names": ["coffee"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 64
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BABY BOTTLE",
        "short_name": "baby_bottle",
        "short_names": ["baby_bottle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 65
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FORK AND KNIFE",
        "short_name": "fork_and_knife",
        "short_names": ["fork_and_knife"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 66
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FORK AND KNIFE WITH PLATE",
        "short_name": "knife_fork_plate",
        "short_names": ["knife_fork_plate"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 67
      }],
      "People": [{
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GRINNING FACE",
        "short_name": "grinning",
        "short_names": ["grinning"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 1
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GRIMACING FACE",
        "short_name": "grimacing",
        "short_names": ["grimacing"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 2
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GRINNING FACE WITH SMILING EYES",
        "short_name": "grin",
        "short_names": ["grin"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 3
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH TEARS OF JOY",
        "short_name": "joy",
        "short_names": ["joy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 4
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING FACE WITH OPEN MOUTH",
        "short_name": "smiley",
        "short_names": ["smiley"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 5
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
        "short_name": "smile",
        "short_names": ["smile"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 6
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT",
        "short_name": "sweat_smile",
        "short_names": ["sweat_smile"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 7
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",
        "short_name": "laughing",
        "short_names": ["laughing", "satisfied"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 8
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING FACE WITH HALO",
        "short_name": "innocent",
        "short_names": ["innocent"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 9
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WINKING FACE",
        "short_name": "wink",
        "short_names": ["wink"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 10
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING FACE WITH SMILING EYES",
        "short_name": "blush",
        "short_names": ["blush"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 11
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SLIGHTLY SMILING FACE",
        "short_name": "slightly_smiling_face",
        "short_names": ["slightly_smiling_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 12
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "UPSIDE-DOWN FACE",
        "short_name": "upside_down_face",
        "short_names": ["upside_down_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 13
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE SMILING FACE",
        "short_name": "relaxed",
        "short_names": ["relaxed"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 14
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE SAVOURING DELICIOUS FOOD",
        "short_name": "yum",
        "short_names": ["yum"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 15
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RELIEVED FACE",
        "short_name": "relieved",
        "short_names": ["relieved"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 16
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING FACE WITH HEART-SHAPED EYES",
        "short_name": "heart_eyes",
        "short_names": ["heart_eyes"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 17
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE THROWING A KISS",
        "short_name": "kissing_heart",
        "short_names": ["kissing_heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 18
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KISSING FACE",
        "short_name": "kissing",
        "short_names": ["kissing"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 19
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KISSING FACE WITH SMILING EYES",
        "short_name": "kissing_smiling_eyes",
        "short_names": ["kissing_smiling_eyes"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 20
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KISSING FACE WITH CLOSED EYES",
        "short_name": "kissing_closed_eyes",
        "short_names": ["kissing_closed_eyes"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 21
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE",
        "short_name": "stuck_out_tongue_winking_eye",
        "short_names": ["stuck_out_tongue_winking_eye"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 22
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES",
        "short_name": "stuck_out_tongue_closed_eyes",
        "short_names": ["stuck_out_tongue_closed_eyes"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 23
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH STUCK-OUT TONGUE",
        "short_name": "stuck_out_tongue",
        "short_names": ["stuck_out_tongue"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 24
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "MONEY-MOUTH FACE",
        "short_name": "money_mouth_face",
        "short_names": ["money_mouth_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 25
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "NERD FACE",
        "short_name": "nerd_face",
        "short_names": ["nerd_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 26
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING FACE WITH SUNGLASSES",
        "short_name": "sunglasses",
        "short_names": ["sunglasses"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 27
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "HUGGING FACE",
        "short_name": "hugging_face",
        "short_names": ["hugging_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 28
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMIRKING FACE",
        "short_name": "smirk",
        "short_names": ["smirk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 29
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITHOUT MOUTH",
        "short_name": "no_mouth",
        "short_names": ["no_mouth"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 30
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NEUTRAL FACE",
        "short_name": "neutral_face",
        "short_names": ["neutral_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 31
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EXPRESSIONLESS FACE",
        "short_name": "expressionless",
        "short_names": ["expressionless"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 32
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "UNAMUSED FACE",
        "short_name": "unamused",
        "short_names": ["unamused"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 33
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FACE WITH ROLLING EYES",
        "short_name": "face_with_rolling_eyes",
        "short_names": ["face_with_rolling_eyes"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 34
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "THINKING FACE",
        "short_name": "thinking_face",
        "short_names": ["thinking_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 35
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FLUSHED FACE",
        "short_name": "flushed",
        "short_names": ["flushed"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 36
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DISAPPOINTED FACE",
        "short_name": "disappointed",
        "short_names": ["disappointed"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 37
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WORRIED FACE",
        "short_name": "worried",
        "short_names": ["worried"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 38
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ANGRY FACE",
        "short_name": "angry",
        "short_names": ["angry"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 39
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POUTING FACE",
        "short_name": "rage",
        "short_names": ["rage"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 40
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PENSIVE FACE",
        "short_name": "pensive",
        "short_names": ["pensive"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 41
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CONFUSED FACE",
        "short_name": "confused",
        "short_names": ["confused"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 42
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SLIGHTLY FROWNING FACE",
        "short_name": "slightly_frowning_face",
        "short_names": ["slightly_frowning_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 43
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WHITE FROWNING FACE",
        "short_name": "white_frowning_face",
        "short_names": ["white_frowning_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 44
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PERSEVERING FACE",
        "short_name": "persevere",
        "short_names": ["persevere"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 45
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CONFOUNDED FACE",
        "short_name": "confounded",
        "short_names": ["confounded"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 46
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TIRED FACE",
        "short_name": "tired_face",
        "short_names": ["tired_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 47
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WEARY FACE",
        "short_name": "weary",
        "short_names": ["weary"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 48
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH LOOK OF TRIUMPH",
        "short_name": "triumph",
        "short_names": ["triumph"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 49
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH OPEN MOUTH",
        "short_name": "open_mouth",
        "short_names": ["open_mouth"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 50
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE SCREAMING IN FEAR",
        "short_name": "scream",
        "short_names": ["scream"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 51
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FEARFUL FACE",
        "short_name": "fearful",
        "short_names": ["fearful"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 52
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH OPEN MOUTH AND COLD SWEAT",
        "short_name": "cold_sweat",
        "short_names": ["cold_sweat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 53
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HUSHED FACE",
        "short_name": "hushed",
        "short_names": ["hushed"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 54
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FROWNING FACE WITH OPEN MOUTH",
        "short_name": "frowning",
        "short_names": ["frowning"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 55
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ANGUISHED FACE",
        "short_name": "anguished",
        "short_names": ["anguished"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 56
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CRYING FACE",
        "short_name": "cry",
        "short_names": ["cry"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 57
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DISAPPOINTED BUT RELIEVED FACE",
        "short_name": "disappointed_relieved",
        "short_names": ["disappointed_relieved"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 58
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SLEEPY FACE",
        "short_name": "sleepy",
        "short_names": ["sleepy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 59
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH COLD SWEAT",
        "short_name": "sweat",
        "short_names": ["sweat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 60
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LOUDLY CRYING FACE",
        "short_name": "sob",
        "short_names": ["sob"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 61
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DIZZY FACE",
        "short_name": "dizzy_face",
        "short_names": ["dizzy_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 62
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ASTONISHED FACE",
        "short_name": "astonished",
        "short_names": ["astonished"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 63
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ZIPPER-MOUTH FACE",
        "short_name": "zipper_mouth_face",
        "short_names": ["zipper_mouth_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 64
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH MEDICAL MASK",
        "short_name": "mask",
        "short_names": ["mask"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 65
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FACE WITH THERMOMETER",
        "short_name": "face_with_thermometer",
        "short_names": ["face_with_thermometer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 66
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FACE WITH HEAD-BANDAGE",
        "short_name": "face_with_head_bandage",
        "short_names": ["face_with_head_bandage"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 67
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SLEEPING FACE",
        "short_name": "sleeping",
        "short_names": ["sleeping"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 68
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SLEEPING SYMBOL",
        "short_name": "zzz",
        "short_names": ["zzz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 69
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PILE OF POO",
        "short_name": "hankey",
        "short_names": ["hankey", "poop", "shit"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 70
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING FACE WITH HORNS",
        "short_name": "smiling_imp",
        "short_names": ["smiling_imp"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 71
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "IMP",
        "short_name": "imp",
        "short_names": ["imp"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 72
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "JAPANESE OGRE",
        "short_name": "japanese_ogre",
        "short_names": ["japanese_ogre"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 73
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "JAPANESE GOBLIN",
        "short_name": "japanese_goblin",
        "short_names": ["japanese_goblin"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 74
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SKULL",
        "short_name": "skull",
        "short_names": ["skull"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 75
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GHOST",
        "short_name": "ghost",
        "short_names": ["ghost"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 76
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EXTRATERRESTRIAL ALIEN",
        "short_name": "alien",
        "short_names": ["alien"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 77
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ROBOT FACE",
        "short_name": "robot_face",
        "short_names": ["robot_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 78
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING CAT FACE WITH OPEN MOUTH",
        "short_name": "smiley_cat",
        "short_names": ["smiley_cat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 79
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GRINNING CAT FACE WITH SMILING EYES",
        "short_name": "smile_cat",
        "short_names": ["smile_cat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 80
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CAT FACE WITH TEARS OF JOY",
        "short_name": "joy_cat",
        "short_names": ["joy_cat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 81
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SMILING CAT FACE WITH HEART-SHAPED EYES",
        "short_name": "heart_eyes_cat",
        "short_names": ["heart_eyes_cat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 82
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CAT FACE WITH WRY SMILE",
        "short_name": "smirk_cat",
        "short_names": ["smirk_cat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 83
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KISSING CAT FACE WITH CLOSED EYES",
        "short_name": "kissing_cat",
        "short_names": ["kissing_cat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 84
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WEARY CAT FACE",
        "short_name": "scream_cat",
        "short_names": ["scream_cat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 85
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CRYING CAT FACE",
        "short_name": "crying_cat_face",
        "short_names": ["crying_cat_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 86
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POUTING CAT FACE",
        "short_name": "pouting_cat",
        "short_names": ["pouting_cat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 87
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PERSON RAISING BOTH HANDS IN CELEBRATION",
        "short_name": "raised_hands",
        "short_names": ["raised_hands"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 88
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLAPPING HANDS SIGN",
        "short_name": "clap",
        "short_names": ["clap"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 89
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WAVING HAND SIGN",
        "short_name": "wave",
        "short_names": ["wave"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 90
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "THUMBS UP SIGN",
        "short_name": "+1",
        "short_names": ["+1", "thumbsup"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 91
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "THUMBS DOWN SIGN",
        "short_name": "-1",
        "short_names": ["-1", "thumbsdown"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 92
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FISTED HAND SIGN",
        "short_name": "facepunch",
        "short_names": ["facepunch", "punch"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 93
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RAISED FIST",
        "short_name": "fist",
        "short_names": ["fist"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 94
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "VICTORY HAND",
        "short_name": "v",
        "short_names": ["v"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 95
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OK HAND SIGN",
        "short_name": "ok_hand",
        "short_names": ["ok_hand"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 96
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RAISED HAND",
        "short_name": "hand",
        "short_names": ["hand", "raised_hand"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 97
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OPEN HANDS SIGN",
        "short_name": "open_hands",
        "short_names": ["open_hands"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 98
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FLEXED BICEPS",
        "short_name": "muscle",
        "short_names": ["muscle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 99
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PERSON WITH FOLDED HANDS",
        "short_name": "pray",
        "short_names": ["pray"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 100
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE UP POINTING INDEX",
        "short_name": "point_up",
        "short_names": ["point_up"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 101
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE UP POINTING BACKHAND INDEX",
        "short_name": "point_up_2",
        "short_names": ["point_up_2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 102
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE DOWN POINTING BACKHAND INDEX",
        "short_name": "point_down",
        "short_names": ["point_down"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 103
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE LEFT POINTING BACKHAND INDEX",
        "short_name": "point_left",
        "short_names": ["point_left"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 104
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WHITE RIGHT POINTING BACKHAND INDEX",
        "short_name": "point_right",
        "short_names": ["point_right"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 105
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "REVERSED HAND WITH MIDDLE FINGER EXTENDED",
        "short_name": "middle_finger",
        "short_names": ["middle_finger", "reversed_hand_with_middle_finger_extended"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 106
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "RAISED HAND WITH FINGERS SPLAYED",
        "short_name": "raised_hand_with_fingers_splayed",
        "short_names": ["raised_hand_with_fingers_splayed"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 107
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SIGN OF THE HORNS",
        "short_name": "the_horns",
        "short_names": ["the_horns", "sign_of_the_horns"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 108
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS",
        "short_name": "spock-hand",
        "short_names": ["spock-hand"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 109
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WRITING HAND",
        "short_name": "writing_hand",
        "short_names": ["writing_hand"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 110
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NAIL POLISH",
        "short_name": "nail_care",
        "short_names": ["nail_care"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 111
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOUTH",
        "short_name": "lips",
        "short_names": ["lips"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 112
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TONGUE",
        "short_name": "tongue",
        "short_names": ["tongue"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 113
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EAR",
        "short_name": "ear",
        "short_names": ["ear"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 114
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NOSE",
        "short_name": "nose",
        "short_names": ["nose"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 115
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "EYE",
        "short_name": "eye",
        "short_names": ["eye"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 116
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EYES",
        "short_name": "eyes",
        "short_names": ["eyes"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 117
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BUST IN SILHOUETTE",
        "short_name": "bust_in_silhouette",
        "short_names": ["bust_in_silhouette"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 118
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BUSTS IN SILHOUETTE",
        "short_name": "busts_in_silhouette",
        "short_names": ["busts_in_silhouette"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 119
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SPEAKING HEAD IN SILHOUETTE",
        "short_name": "speaking_head_in_silhouette",
        "short_names": ["speaking_head_in_silhouette"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 120
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BABY",
        "short_name": "baby",
        "short_names": ["baby"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 121
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BOY",
        "short_name": "boy",
        "short_names": ["boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 122
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GIRL",
        "short_name": "girl",
        "short_names": ["girl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 123
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MAN",
        "short_name": "man",
        "short_names": ["man"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 124
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WOMAN",
        "short_name": "woman",
        "short_names": ["woman"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 125
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PERSON WITH BLOND HAIR",
        "short_name": "person_with_blond_hair",
        "short_names": ["person_with_blond_hair"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 126
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OLDER MAN",
        "short_name": "older_man",
        "short_names": ["older_man"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 127
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OLDER WOMAN",
        "short_name": "older_woman",
        "short_names": ["older_woman"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 128
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MAN WITH GUA PI MAO",
        "short_name": "man_with_gua_pi_mao",
        "short_names": ["man_with_gua_pi_mao"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 129
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MAN WITH TURBAN",
        "short_name": "man_with_turban",
        "short_names": ["man_with_turban"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 130
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POLICE OFFICER",
        "short_name": "cop",
        "short_names": ["cop"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 131
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CONSTRUCTION WORKER",
        "short_name": "construction_worker",
        "short_names": ["construction_worker"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 132
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GUARDSMAN",
        "short_name": "guardsman",
        "short_names": ["guardsman"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 133
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SLEUTH OR SPY",
        "short_name": "sleuth_or_spy",
        "short_names": ["sleuth_or_spy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 134
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FATHER CHRISTMAS",
        "short_name": "santa",
        "short_names": ["santa"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 135
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BABY ANGEL",
        "short_name": "angel",
        "short_names": ["angel"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 136
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PRINCESS",
        "short_name": "princess",
        "short_names": ["princess"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 137
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BRIDE WITH VEIL",
        "short_name": "bride_with_veil",
        "short_names": ["bride_with_veil"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 138
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PEDESTRIAN",
        "short_name": "walking",
        "short_names": ["walking"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 139
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RUNNER",
        "short_name": "runner",
        "short_names": ["runner", "running"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 140
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DANCER",
        "short_name": "dancer",
        "short_names": ["dancer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 141
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WOMAN WITH BUNNY EARS",
        "short_name": "dancers",
        "short_names": ["dancers"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 142
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MAN AND WOMAN HOLDING HANDS",
        "short_name": "couple",
        "short_names": ["couple", "man_and_woman_holding_hands"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 143
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TWO MEN HOLDING HANDS",
        "short_name": "two_men_holding_hands",
        "short_names": ["two_men_holding_hands"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 144
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TWO WOMEN HOLDING HANDS",
        "short_name": "two_women_holding_hands",
        "short_names": ["two_women_holding_hands"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 145
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PERSON BOWING DEEPLY",
        "short_name": "bow",
        "short_names": ["bow"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 146
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "INFORMATION DESK PERSON",
        "short_name": "information_desk_person",
        "short_names": ["information_desk_person"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 147
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH NO GOOD GESTURE",
        "short_name": "no_good",
        "short_names": ["no_good"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 148
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE WITH OK GESTURE",
        "short_name": "ok_woman",
        "short_names": ["ok_woman"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 149
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HAPPY PERSON RAISING ONE HAND",
        "short_name": "raising_hand",
        "short_names": ["raising_hand"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 150
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PERSON WITH POUTING FACE",
        "short_name": "person_with_pouting_face",
        "short_names": ["person_with_pouting_face"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 151
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PERSON FROWNING",
        "short_name": "person_frowning",
        "short_names": ["person_frowning"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 152
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HAIRCUT",
        "short_name": "haircut",
        "short_names": ["haircut"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 153
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACE MASSAGE",
        "short_name": "massage",
        "short_names": ["massage"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 154
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "COUPLE WITH HEART",
        "short_name": "couple_with_heart",
        "short_names": ["couple_with_heart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 155
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": false,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "woman-heart-woman",
        "short_names": ["woman-heart-woman"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 156
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": false,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-heart-man",
        "short_names": ["man-heart-man"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 157
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KISS",
        "short_name": "couplekiss",
        "short_names": ["couplekiss"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 158
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": false,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "woman-kiss-woman",
        "short_names": ["woman-kiss-woman"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 159
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": false,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-kiss-man",
        "short_names": ["man-kiss-man"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 160
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FAMILY",
        "short_name": "family",
        "short_names": ["family", "man-woman-boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 161
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-woman-girl",
        "short_names": ["man-woman-girl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 162
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-woman-girl-boy",
        "short_names": ["man-woman-girl-boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 163
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-woman-boy-boy",
        "short_names": ["man-woman-boy-boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 164
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-woman-girl-girl",
        "short_names": ["man-woman-girl-girl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 165
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "woman-woman-boy",
        "short_names": ["woman-woman-boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 166
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "woman-woman-girl",
        "short_names": ["woman-woman-girl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 167
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "woman-woman-girl-boy",
        "short_names": ["woman-woman-girl-boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 168
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "woman-woman-boy-boy",
        "short_names": ["woman-woman-boy-boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 169
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "woman-woman-girl-girl",
        "short_names": ["woman-woman-girl-girl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 170
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-man-boy",
        "short_names": ["man-man-boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 171
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-man-girl",
        "short_names": ["man-man-girl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 172
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-man-girl-boy",
        "short_names": ["man-man-girl-boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 173
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-man-boy-boy",
        "short_names": ["man-man-boy-boy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 174
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": null,
        "short_name": "man-man-girl-girl",
        "short_names": ["man-man-girl-girl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 175
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WOMANS CLOTHES",
        "short_name": "womans_clothes",
        "short_names": ["womans_clothes"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 176
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "T-SHIRT",
        "short_name": "shirt",
        "short_names": ["shirt", "tshirt"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 177
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "JEANS",
        "short_name": "jeans",
        "short_names": ["jeans"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 178
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NECKTIE",
        "short_name": "necktie",
        "short_names": ["necktie"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 179
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DRESS",
        "short_name": "dress",
        "short_names": ["dress"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 180
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BIKINI",
        "short_name": "bikini",
        "short_names": ["bikini"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 181
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KIMONO",
        "short_name": "kimono",
        "short_names": ["kimono"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 182
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LIPSTICK",
        "short_name": "lipstick",
        "short_names": ["lipstick"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 183
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "KISS MARK",
        "short_name": "kiss",
        "short_names": ["kiss"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 184
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FOOTPRINTS",
        "short_name": "footprints",
        "short_names": ["footprints"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 185
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HIGH-HEELED SHOE",
        "short_name": "high_heel",
        "short_names": ["high_heel"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 186
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WOMANS SANDAL",
        "short_name": "sandal",
        "short_names": ["sandal"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 187
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WOMANS BOOTS",
        "short_name": "boot",
        "short_names": ["boot"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 188
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MANS SHOE",
        "short_name": "mans_shoe",
        "short_names": ["mans_shoe", "shoe"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 189
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ATHLETIC SHOE",
        "short_name": "athletic_shoe",
        "short_names": ["athletic_shoe"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 190
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WOMANS HAT",
        "short_name": "womans_hat",
        "short_names": ["womans_hat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 191
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TOP HAT",
        "short_name": "tophat",
        "short_names": ["tophat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 192
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "HELMET WITH WHITE CROSS",
        "short_name": "helmet_with_white_cross",
        "short_names": ["helmet_with_white_cross"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 193
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GRADUATION CAP",
        "short_name": "mortar_board",
        "short_names": ["mortar_board"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 194
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CROWN",
        "short_name": "crown",
        "short_names": ["crown"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 195
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SCHOOL SATCHEL",
        "short_name": "school_satchel",
        "short_names": ["school_satchel"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 196
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POUCH",
        "short_name": "pouch",
        "short_names": ["pouch"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 197
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PURSE",
        "short_name": "purse",
        "short_names": ["purse"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 198
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HANDBAG",
        "short_name": "handbag",
        "short_names": ["handbag"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 199
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BRIEFCASE",
        "short_name": "briefcase",
        "short_names": ["briefcase"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 200
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EYEGLASSES",
        "short_name": "eyeglasses",
        "short_names": ["eyeglasses"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 201
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "DARK SUNGLASSES",
        "short_name": "dark_sunglasses",
        "short_names": ["dark_sunglasses"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 202
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RING",
        "short_name": "ring",
        "short_names": ["ring"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 203
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLOSED UMBRELLA",
        "short_name": "closed_umbrella",
        "short_names": ["closed_umbrella"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 204
      }],
      "Places": [{
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "AUTOMOBILE",
        "short_name": "car",
        "short_names": ["car", "red_car"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 1
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TAXI",
        "short_name": "taxi",
        "short_names": ["taxi"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 2
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RECREATIONAL VEHICLE",
        "short_name": "blue_car",
        "short_names": ["blue_car"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 3
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BUS",
        "short_name": "bus",
        "short_names": ["bus"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 4
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TROLLEYBUS",
        "short_name": "trolleybus",
        "short_names": ["trolleybus"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 5
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "RACING CAR",
        "short_name": "racing_car",
        "short_names": ["racing_car"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 6
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POLICE CAR",
        "short_name": "police_car",
        "short_names": ["police_car"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 7
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "AMBULANCE",
        "short_name": "ambulance",
        "short_names": ["ambulance"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 8
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FIRE ENGINE",
        "short_name": "fire_engine",
        "short_names": ["fire_engine"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 9
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MINIBUS",
        "short_name": "minibus",
        "short_names": ["minibus"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 10
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DELIVERY TRUCK",
        "short_name": "truck",
        "short_names": ["truck"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 11
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ARTICULATED LORRY",
        "short_name": "articulated_lorry",
        "short_names": ["articulated_lorry"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 12
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TRACTOR",
        "short_name": "tractor",
        "short_names": ["tractor"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 13
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "RACING MOTORCYCLE",
        "short_name": "racing_motorcycle",
        "short_names": ["racing_motorcycle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 14
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BICYCLE",
        "short_name": "bike",
        "short_names": ["bike"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 15
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "POLICE CARS REVOLVING LIGHT",
        "short_name": "rotating_light",
        "short_names": ["rotating_light"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 16
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ONCOMING POLICE CAR",
        "short_name": "oncoming_police_car",
        "short_names": ["oncoming_police_car"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 17
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ONCOMING BUS",
        "short_name": "oncoming_bus",
        "short_names": ["oncoming_bus"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 18
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ONCOMING AUTOMOBILE",
        "short_name": "oncoming_automobile",
        "short_names": ["oncoming_automobile"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 19
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ONCOMING TAXI",
        "short_name": "oncoming_taxi",
        "short_names": ["oncoming_taxi"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 20
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "AERIAL TRAMWAY",
        "short_name": "aerial_tramway",
        "short_names": ["aerial_tramway"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 21
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOUNTAIN CABLEWAY",
        "short_name": "mountain_cableway",
        "short_names": ["mountain_cableway"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 22
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SUSPENSION RAILWAY",
        "short_name": "suspension_railway",
        "short_names": ["suspension_railway"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 23
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RAILWAY CAR",
        "short_name": "railway_car",
        "short_names": ["railway_car"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 24
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TRAM CAR",
        "short_name": "train",
        "short_names": ["train"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 25
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MONORAIL",
        "short_name": "monorail",
        "short_names": ["monorail"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 26
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HIGH-SPEED TRAIN",
        "short_name": "bullettrain_side",
        "short_names": ["bullettrain_side"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 27
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HIGH-SPEED TRAIN WITH BULLET NOSE",
        "short_name": "bullettrain_front",
        "short_names": ["bullettrain_front"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 28
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LIGHT RAIL",
        "short_name": "light_rail",
        "short_names": ["light_rail"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 29
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOUNTAIN RAILWAY",
        "short_name": "mountain_railway",
        "short_names": ["mountain_railway"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 30
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "STEAM LOCOMOTIVE",
        "short_name": "steam_locomotive",
        "short_names": ["steam_locomotive"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 31
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TRAIN",
        "short_name": "train2",
        "short_names": ["train2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 32
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "METRO",
        "short_name": "metro",
        "short_names": ["metro"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 33
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TRAM",
        "short_name": "tram",
        "short_names": ["tram"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 34
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "STATION",
        "short_name": "station",
        "short_names": ["station"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 35
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HELICOPTER",
        "short_name": "helicopter",
        "short_names": ["helicopter"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 36
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SMALL AIRPLANE",
        "short_name": "small_airplane",
        "short_names": ["small_airplane"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 37
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "AIRPLANE",
        "short_name": "airplane",
        "short_names": ["airplane"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 38
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "AIRPLANE DEPARTURE",
        "short_name": "airplane_departure",
        "short_names": ["airplane_departure"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 39
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "AIRPLANE ARRIVING",
        "short_name": "airplane_arriving",
        "short_names": ["airplane_arriving"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 40
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SAILBOAT",
        "short_name": "boat",
        "short_names": ["boat", "sailboat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 41
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "MOTOR BOAT",
        "short_name": "motor_boat",
        "short_names": ["motor_boat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 42
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SPEEDBOAT",
        "short_name": "speedboat",
        "short_names": ["speedboat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 43
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FERRY",
        "short_name": "ferry",
        "short_names": ["ferry"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 44
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "PASSENGER SHIP",
        "short_name": "passenger_ship",
        "short_names": ["passenger_ship"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 45
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ROCKET",
        "short_name": "rocket",
        "short_names": ["rocket"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 46
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SATELLITE",
        "short_name": "satellite",
        "short_names": ["satellite"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 47
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SEAT",
        "short_name": "seat",
        "short_names": ["seat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 48
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ANCHOR",
        "short_name": "anchor",
        "short_names": ["anchor"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 49
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CONSTRUCTION SIGN",
        "short_name": "construction",
        "short_names": ["construction"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 50
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FUEL PUMP",
        "short_name": "fuelpump",
        "short_names": ["fuelpump"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 51
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BUS STOP",
        "short_name": "busstop",
        "short_names": ["busstop"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 52
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "VERTICAL TRAFFIC LIGHT",
        "short_name": "vertical_traffic_light",
        "short_names": ["vertical_traffic_light"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 53
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HORIZONTAL TRAFFIC LIGHT",
        "short_name": "traffic_light",
        "short_names": ["traffic_light"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 54
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHEQUERED FLAG",
        "short_name": "checkered_flag",
        "short_names": ["checkered_flag"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 55
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SHIP",
        "short_name": "ship",
        "short_names": ["ship"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 56
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FERRIS WHEEL",
        "short_name": "ferris_wheel",
        "short_names": ["ferris_wheel"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 57
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ROLLER COASTER",
        "short_name": "roller_coaster",
        "short_names": ["roller_coaster"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 58
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CAROUSEL HORSE",
        "short_name": "carousel_horse",
        "short_names": ["carousel_horse"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 59
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BUILDING CONSTRUCTION",
        "short_name": "building_construction",
        "short_names": ["building_construction"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 60
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FOGGY",
        "short_name": "foggy",
        "short_names": ["foggy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 61
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TOKYO TOWER",
        "short_name": "tokyo_tower",
        "short_names": ["tokyo_tower"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 62
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FACTORY",
        "short_name": "factory",
        "short_names": ["factory"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 63
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FOUNTAIN",
        "short_name": "fountain",
        "short_names": ["fountain"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 64
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOON VIEWING CEREMONY",
        "short_name": "rice_scene",
        "short_names": ["rice_scene"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 65
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "MOUNTAIN",
        "short_name": "mountain",
        "short_names": ["mountain"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 66
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SNOW CAPPED MOUNTAIN",
        "short_name": "snow_capped_mountain",
        "short_names": ["snow_capped_mountain"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 67
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOUNT FUJI",
        "short_name": "mount_fuji",
        "short_names": ["mount_fuji"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 68
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "VOLCANO",
        "short_name": "volcano",
        "short_names": ["volcano"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 69
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SILHOUETTE OF JAPAN",
        "short_name": "japan",
        "short_names": ["japan"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 70
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CAMPING",
        "short_name": "camping",
        "short_names": ["camping"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 71
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TENT",
        "short_name": "tent",
        "short_names": ["tent"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 72
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "NATIONAL PARK",
        "short_name": "national_park",
        "short_names": ["national_park"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 73
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "MOTORWAY",
        "short_name": "motorway",
        "short_names": ["motorway"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 74
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "RAILWAY TRACK",
        "short_name": "railway_track",
        "short_names": ["railway_track"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 75
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SUNRISE",
        "short_name": "sunrise",
        "short_names": ["sunrise"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 76
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SUNRISE OVER MOUNTAINS",
        "short_name": "sunrise_over_mountains",
        "short_names": ["sunrise_over_mountains"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 77
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "DESERT",
        "short_name": "desert",
        "short_names": ["desert"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 78
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BEACH WITH UMBRELLA",
        "short_name": "beach_with_umbrella",
        "short_names": ["beach_with_umbrella"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 79
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "DESERT ISLAND",
        "short_name": "desert_island",
        "short_names": ["desert_island"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 80
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SUNSET OVER BUILDINGS",
        "short_name": "city_sunrise",
        "short_names": ["city_sunrise"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 81
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CITYSCAPE AT DUSK",
        "short_name": "city_sunset",
        "short_names": ["city_sunset"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 82
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CITYSCAPE",
        "short_name": "cityscape",
        "short_names": ["cityscape"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 83
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "NIGHT WITH STARS",
        "short_name": "night_with_stars",
        "short_names": ["night_with_stars"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 84
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BRIDGE AT NIGHT",
        "short_name": "bridge_at_night",
        "short_names": ["bridge_at_night"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 85
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MILKY WAY",
        "short_name": "milky_way",
        "short_names": ["milky_way"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 86
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SHOOTING STAR",
        "short_name": "stars",
        "short_names": ["stars"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 87
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FIREWORK SPARKLER",
        "short_name": "sparkler",
        "short_names": ["sparkler"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 88
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FIREWORKS",
        "short_name": "fireworks",
        "short_names": ["fireworks"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 89
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RAINBOW",
        "short_name": "rainbow",
        "short_names": ["rainbow"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 90
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "HOUSE BUILDINGS",
        "short_name": "house_buildings",
        "short_names": ["house_buildings"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 91
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EUROPEAN CASTLE",
        "short_name": "european_castle",
        "short_names": ["european_castle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 92
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "JAPANESE CASTLE",
        "short_name": "japanese_castle",
        "short_names": ["japanese_castle"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 93
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "STADIUM",
        "short_name": "stadium",
        "short_names": ["stadium"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 94
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "STATUE OF LIBERTY",
        "short_name": "statue_of_liberty",
        "short_names": ["statue_of_liberty"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 95
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HOUSE BUILDING",
        "short_name": "house",
        "short_names": ["house"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 96
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HOUSE WITH GARDEN",
        "short_name": "house_with_garden",
        "short_names": ["house_with_garden"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 97
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "DERELICT HOUSE BUILDING",
        "short_name": "derelict_house_building",
        "short_names": ["derelict_house_building"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 98
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "OFFICE BUILDING",
        "short_name": "office",
        "short_names": ["office"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 99
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DEPARTMENT STORE",
        "short_name": "department_store",
        "short_names": ["department_store"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 100
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "JAPANESE POST OFFICE",
        "short_name": "post_office",
        "short_names": ["post_office"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 101
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "EUROPEAN POST OFFICE",
        "short_name": "european_post_office",
        "short_names": ["european_post_office"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 102
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HOSPITAL",
        "short_name": "hospital",
        "short_names": ["hospital"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 103
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BANK",
        "short_name": "bank",
        "short_names": ["bank"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 104
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HOTEL",
        "short_name": "hotel",
        "short_names": ["hotel"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 105
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CONVENIENCE STORE",
        "short_name": "convenience_store",
        "short_names": ["convenience_store"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 106
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SCHOOL",
        "short_name": "school",
        "short_names": ["school"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 107
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "LOVE HOTEL",
        "short_name": "love_hotel",
        "short_names": ["love_hotel"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 108
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "WEDDING",
        "short_name": "wedding",
        "short_names": ["wedding"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 109
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CLASSICAL BUILDING",
        "short_name": "classical_building",
        "short_names": ["classical_building"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 110
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CHURCH",
        "short_name": "church",
        "short_names": ["church"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 111
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "MOSQUE",
        "short_name": "mosque",
        "short_names": ["mosque"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 112
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SYNAGOGUE",
        "short_name": "synagogue",
        "short_names": ["synagogue"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 113
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "KAABA",
        "short_name": "kaaba",
        "short_names": ["kaaba"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 114
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SHINTO SHRINE",
        "short_name": "shinto_shrine",
        "short_names": ["shinto_shrine"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 115
      }],
      "Activity": [{
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SOCCER BALL",
        "short_name": "soccer",
        "short_names": ["soccer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 1
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BASKETBALL AND HOOP",
        "short_name": "basketball",
        "short_names": ["basketball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 2
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "AMERICAN FOOTBALL",
        "short_name": "football",
        "short_names": ["football"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 3
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BASEBALL",
        "short_name": "baseball",
        "short_names": ["baseball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 4
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TENNIS RACQUET AND BALL",
        "short_name": "tennis",
        "short_names": ["tennis"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 5
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "VOLLEYBALL",
        "short_name": "volleyball",
        "short_names": ["volleyball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 6
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RUGBY FOOTBALL",
        "short_name": "rugby_football",
        "short_names": ["rugby_football"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 7
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BILLIARDS",
        "short_name": "8ball",
        "short_names": ["8ball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 8
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FLAG IN HOLE",
        "short_name": "golf",
        "short_names": ["golf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 9
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "GOLFER",
        "short_name": "golfer",
        "short_names": ["golfer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 10
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "TABLE TENNIS PADDLE AND BALL",
        "short_name": "table_tennis_paddle_and_ball",
        "short_names": ["table_tennis_paddle_and_ball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 11
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BADMINTON RACQUET AND SHUTTLECOCK",
        "short_name": "badminton_racquet_and_shuttlecock",
        "short_names": ["badminton_racquet_and_shuttlecock"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 12
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ICE HOCKEY STICK AND PUCK",
        "short_name": "ice_hockey_stick_and_puck",
        "short_names": ["ice_hockey_stick_and_puck"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 13
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "FIELD HOCKEY STICK AND BALL",
        "short_name": "field_hockey_stick_and_ball",
        "short_names": ["field_hockey_stick_and_ball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 14
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "CRICKET BAT AND BALL",
        "short_name": "cricket_bat_and_ball",
        "short_names": ["cricket_bat_and_ball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 15
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SKI AND SKI BOOT",
        "short_name": "ski",
        "short_names": ["ski"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 16
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SKIER",
        "short_name": "skier",
        "short_names": ["skier"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 17
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SNOWBOARDER",
        "short_name": "snowboarder",
        "short_names": ["snowboarder"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 18
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ICE SKATE",
        "short_name": "ice_skate",
        "short_names": ["ice_skate"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 19
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "BOW AND ARROW",
        "short_name": "bow_and_arrow",
        "short_names": ["bow_and_arrow"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 20
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "FISHING POLE AND FISH",
        "short_name": "fishing_pole_and_fish",
        "short_names": ["fishing_pole_and_fish"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 21
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ROWBOAT",
        "short_name": "rowboat",
        "short_names": ["rowboat"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 22
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SWIMMER",
        "short_name": "swimmer",
        "short_names": ["swimmer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 23
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SURFER",
        "short_name": "surfer",
        "short_names": ["surfer"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 24
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BATH",
        "short_name": "bath",
        "short_names": ["bath"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 25
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "PERSON WITH BALL",
        "short_name": "person_with_ball",
        "short_names": ["person_with_ball"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 26
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "WEIGHT LIFTER",
        "short_name": "weight_lifter",
        "short_names": ["weight_lifter"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 27
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BICYCLIST",
        "short_name": "bicyclist",
        "short_names": ["bicyclist"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 28
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MOUNTAIN BICYCLIST",
        "short_name": "mountain_bicyclist",
        "short_names": ["mountain_bicyclist"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 29
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HORSE RACING",
        "short_name": "horse_racing",
        "short_names": ["horse_racing"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 30
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "MAN IN BUSINESS SUIT LEVITATING",
        "short_name": "man_in_business_suit_levitating",
        "short_names": ["man_in_business_suit_levitating"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 31
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TROPHY",
        "short_name": "trophy",
        "short_names": ["trophy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 32
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "RUNNING SHIRT WITH SASH",
        "short_name": "running_shirt_with_sash",
        "short_names": ["running_shirt_with_sash"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 33
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "SPORTS MEDAL",
        "short_name": "sports_medal",
        "short_names": ["sports_medal"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 34
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "MILITARY MEDAL",
        "short_name": "medal",
        "short_names": ["medal"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 35
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "REMINDER RIBBON",
        "short_name": "reminder_ribbon",
        "short_names": ["reminder_ribbon"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 36
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ROSETTE",
        "short_name": "rosette",
        "short_names": ["rosette"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 37
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TICKET",
        "short_name": "ticket",
        "short_names": ["ticket"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 38
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "ADMISSION TICKETS",
        "short_name": "admission_tickets",
        "short_names": ["admission_tickets"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 39
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "PERFORMING ARTS",
        "short_name": "performing_arts",
        "short_names": ["performing_arts"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 40
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ARTIST PALETTE",
        "short_name": "art",
        "short_names": ["art"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 41
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CIRCUS TENT",
        "short_name": "circus_tent",
        "short_names": ["circus_tent"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 42
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MICROPHONE",
        "short_name": "microphone",
        "short_names": ["microphone"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 43
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "HEADPHONE",
        "short_name": "headphones",
        "short_names": ["headphones"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 44
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MUSICAL SCORE",
        "short_name": "musical_score",
        "short_names": ["musical_score"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 45
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "MUSICAL KEYBOARD",
        "short_name": "musical_keyboard",
        "short_names": ["musical_keyboard"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 46
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SAXOPHONE",
        "short_name": "saxophone",
        "short_names": ["saxophone"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 47
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "TRUMPET",
        "short_name": "trumpet",
        "short_names": ["trumpet"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 48
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GUITAR",
        "short_name": "guitar",
        "short_names": ["guitar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 49
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "VIOLIN",
        "short_name": "violin",
        "short_names": ["violin"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 50
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "CLAPPER BOARD",
        "short_name": "clapper",
        "short_names": ["clapper"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 51
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "VIDEO GAME",
        "short_name": "video_game",
        "short_names": ["video_game"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 52
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "ALIEN MONSTER",
        "short_name": "space_invader",
        "short_names": ["space_invader"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 53
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "DIRECT HIT",
        "short_name": "dart",
        "short_names": ["dart"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 54
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "GAME DIE",
        "short_name": "game_die",
        "short_names": ["game_die"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 55
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "SLOT MACHINE",
        "short_name": "slot_machine",
        "short_names": ["slot_machine"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 56
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "BOWLING",
        "short_name": "bowling",
        "short_names": ["bowling"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 57
      }],
      "Skin Tones": [{
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-1-2",
        "short_name": "skin-tone-2",
        "short_names": ["skin-tone-2"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 1
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-3",
        "short_name": "skin-tone-3",
        "short_names": ["skin-tone-3"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 2
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-4",
        "short_name": "skin-tone-4",
        "short_names": ["skin-tone-4"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 3
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-5",
        "short_name": "skin-tone-5",
        "short_names": ["skin-tone-5"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 4
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "EMOJI MODIFIER FITZPATRICK TYPE-6",
        "short_name": "skin-tone-6",
        "short_names": ["skin-tone-6"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 5
      }],
      "Flags": [{
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AF",
        "short_name": "flag-af",
        "short_names": ["flag-af"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 1
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AX",
        "short_name": "flag-ax",
        "short_names": ["flag-ax"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 2
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AL",
        "short_name": "flag-al",
        "short_names": ["flag-al"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 3
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS DZ",
        "short_name": "flag-dz",
        "short_names": ["flag-dz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 4
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AS",
        "short_name": "flag-as",
        "short_names": ["flag-as"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 5
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AD",
        "short_name": "flag-ad",
        "short_names": ["flag-ad"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 6
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AO",
        "short_name": "flag-ao",
        "short_names": ["flag-ao"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 7
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AI",
        "short_name": "flag-ai",
        "short_names": ["flag-ai"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 8
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AQ",
        "short_name": "flag-aq",
        "short_names": ["flag-aq"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 9
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AG",
        "short_name": "flag-ag",
        "short_names": ["flag-ag"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 10
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AR",
        "short_name": "flag-ar",
        "short_names": ["flag-ar"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 11
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AM",
        "short_name": "flag-am",
        "short_names": ["flag-am"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 12
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AW",
        "short_name": "flag-aw",
        "short_names": ["flag-aw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 13
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AU",
        "short_name": "flag-au",
        "short_names": ["flag-au"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 14
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AT",
        "short_name": "flag-at",
        "short_names": ["flag-at"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 15
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AZ",
        "short_name": "flag-az",
        "short_names": ["flag-az"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 16
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BS",
        "short_name": "flag-bs",
        "short_names": ["flag-bs"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 17
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BH",
        "short_name": "flag-bh",
        "short_names": ["flag-bh"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 18
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BD",
        "short_name": "flag-bd",
        "short_names": ["flag-bd"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 19
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BB",
        "short_name": "flag-bb",
        "short_names": ["flag-bb"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 20
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BY",
        "short_name": "flag-by",
        "short_names": ["flag-by"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 21
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BE",
        "short_name": "flag-be",
        "short_names": ["flag-be"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 22
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BZ",
        "short_name": "flag-bz",
        "short_names": ["flag-bz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 23
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BJ",
        "short_name": "flag-bj",
        "short_names": ["flag-bj"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 24
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BM",
        "short_name": "flag-bm",
        "short_names": ["flag-bm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 25
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BT",
        "short_name": "flag-bt",
        "short_names": ["flag-bt"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 26
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BO",
        "short_name": "flag-bo",
        "short_names": ["flag-bo"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 27
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BQ",
        "short_name": "flag-bq",
        "short_names": ["flag-bq"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 28
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BA",
        "short_name": "flag-ba",
        "short_names": ["flag-ba"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 29
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BW",
        "short_name": "flag-bw",
        "short_names": ["flag-bw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 30
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BR",
        "short_name": "flag-br",
        "short_names": ["flag-br"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 31
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IO",
        "short_name": "flag-io",
        "short_names": ["flag-io"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 32
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS VG",
        "short_name": "flag-vg",
        "short_names": ["flag-vg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 33
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BN",
        "short_name": "flag-bn",
        "short_names": ["flag-bn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 34
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BG",
        "short_name": "flag-bg",
        "short_names": ["flag-bg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 35
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BF",
        "short_name": "flag-bf",
        "short_names": ["flag-bf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 36
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BI",
        "short_name": "flag-bi",
        "short_names": ["flag-bi"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 37
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CV",
        "short_name": "flag-cv",
        "short_names": ["flag-cv"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 38
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KH",
        "short_name": "flag-kh",
        "short_names": ["flag-kh"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 39
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CM",
        "short_name": "flag-cm",
        "short_names": ["flag-cm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 40
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CA",
        "short_name": "flag-ca",
        "short_names": ["flag-ca"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 41
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IC",
        "short_name": "flag-ic",
        "short_names": ["flag-ic"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 42
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KY",
        "short_name": "flag-ky",
        "short_names": ["flag-ky"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 43
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CF",
        "short_name": "flag-cf",
        "short_names": ["flag-cf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 44
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TD",
        "short_name": "flag-td",
        "short_names": ["flag-td"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 45
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CL",
        "short_name": "flag-cl",
        "short_names": ["flag-cl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 46
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CN",
        "short_name": "flag-cn",
        "short_names": ["flag-cn", "cn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 47
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CX",
        "short_name": "flag-cx",
        "short_names": ["flag-cx"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 48
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CC",
        "short_name": "flag-cc",
        "short_names": ["flag-cc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 49
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CO",
        "short_name": "flag-co",
        "short_names": ["flag-co"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 50
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KM",
        "short_name": "flag-km",
        "short_names": ["flag-km"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 51
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CG",
        "short_name": "flag-cg",
        "short_names": ["flag-cg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 52
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CD",
        "short_name": "flag-cd",
        "short_names": ["flag-cd"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 53
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CK",
        "short_name": "flag-ck",
        "short_names": ["flag-ck"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 54
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CR",
        "short_name": "flag-cr",
        "short_names": ["flag-cr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 55
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS HR",
        "short_name": "flag-hr",
        "short_names": ["flag-hr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 56
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CU",
        "short_name": "flag-cu",
        "short_names": ["flag-cu"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 57
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CW",
        "short_name": "flag-cw",
        "short_names": ["flag-cw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 58
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CY",
        "short_name": "flag-cy",
        "short_names": ["flag-cy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 59
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CZ",
        "short_name": "flag-cz",
        "short_names": ["flag-cz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 60
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS DK",
        "short_name": "flag-dk",
        "short_names": ["flag-dk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 61
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS DJ",
        "short_name": "flag-dj",
        "short_names": ["flag-dj"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 62
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS DM",
        "short_name": "flag-dm",
        "short_names": ["flag-dm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 63
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS DO",
        "short_name": "flag-do",
        "short_names": ["flag-do"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 64
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS EC",
        "short_name": "flag-ec",
        "short_names": ["flag-ec"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 65
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS EG",
        "short_name": "flag-eg",
        "short_names": ["flag-eg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 66
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SV",
        "short_name": "flag-sv",
        "short_names": ["flag-sv"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 67
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GQ",
        "short_name": "flag-gq",
        "short_names": ["flag-gq"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 68
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ER",
        "short_name": "flag-er",
        "short_names": ["flag-er"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 69
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS EE",
        "short_name": "flag-ee",
        "short_names": ["flag-ee"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 70
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ET",
        "short_name": "flag-et",
        "short_names": ["flag-et"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 71
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS EU",
        "short_name": "flag-eu",
        "short_names": ["flag-eu"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 72
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS FK",
        "short_name": "flag-fk",
        "short_names": ["flag-fk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 73
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS FO",
        "short_name": "flag-fo",
        "short_names": ["flag-fo"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 74
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS FJ",
        "short_name": "flag-fj",
        "short_names": ["flag-fj"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 75
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS FI",
        "short_name": "flag-fi",
        "short_names": ["flag-fi"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 76
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS FR",
        "short_name": "flag-fr",
        "short_names": ["flag-fr", "fr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 77
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GF",
        "short_name": "flag-gf",
        "short_names": ["flag-gf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 78
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PF",
        "short_name": "flag-pf",
        "short_names": ["flag-pf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 79
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TF",
        "short_name": "flag-tf",
        "short_names": ["flag-tf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 80
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GA",
        "short_name": "flag-ga",
        "short_names": ["flag-ga"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 81
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GM",
        "short_name": "flag-gm",
        "short_names": ["flag-gm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 82
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GE",
        "short_name": "flag-ge",
        "short_names": ["flag-ge"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 83
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS DE",
        "short_name": "flag-de",
        "short_names": ["flag-de", "de"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 84
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GH",
        "short_name": "flag-gh",
        "short_names": ["flag-gh"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 85
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GI",
        "short_name": "flag-gi",
        "short_names": ["flag-gi"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 86
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GR",
        "short_name": "flag-gr",
        "short_names": ["flag-gr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 87
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GL",
        "short_name": "flag-gl",
        "short_names": ["flag-gl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 88
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GD",
        "short_name": "flag-gd",
        "short_names": ["flag-gd"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 89
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GP",
        "short_name": "flag-gp",
        "short_names": ["flag-gp"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 90
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GU",
        "short_name": "flag-gu",
        "short_names": ["flag-gu"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 91
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GT",
        "short_name": "flag-gt",
        "short_names": ["flag-gt"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 92
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GG",
        "short_name": "flag-gg",
        "short_names": ["flag-gg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 93
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GN",
        "short_name": "flag-gn",
        "short_names": ["flag-gn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 94
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GW",
        "short_name": "flag-gw",
        "short_names": ["flag-gw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 95
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GY",
        "short_name": "flag-gy",
        "short_names": ["flag-gy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 96
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS HT",
        "short_name": "flag-ht",
        "short_names": ["flag-ht"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 97
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS HN",
        "short_name": "flag-hn",
        "short_names": ["flag-hn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 98
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS HK",
        "short_name": "flag-hk",
        "short_names": ["flag-hk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 99
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS HU",
        "short_name": "flag-hu",
        "short_names": ["flag-hu"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 100
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IS",
        "short_name": "flag-is",
        "short_names": ["flag-is"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 101
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IN",
        "short_name": "flag-in",
        "short_names": ["flag-in"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 102
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ID",
        "short_name": "flag-id",
        "short_names": ["flag-id"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 103
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IR",
        "short_name": "flag-ir",
        "short_names": ["flag-ir"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 104
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IQ",
        "short_name": "flag-iq",
        "short_names": ["flag-iq"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 105
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IE",
        "short_name": "flag-ie",
        "short_names": ["flag-ie"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 106
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IM",
        "short_name": "flag-im",
        "short_names": ["flag-im"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 107
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IL",
        "short_name": "flag-il",
        "short_names": ["flag-il"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 108
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS IT",
        "short_name": "flag-it",
        "short_names": ["flag-it", "it"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 109
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CI",
        "short_name": "flag-ci",
        "short_names": ["flag-ci"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 110
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS JM",
        "short_name": "flag-jm",
        "short_names": ["flag-jm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 111
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS JP",
        "short_name": "flag-jp",
        "short_names": ["flag-jp", "jp"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 112
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS JE",
        "short_name": "flag-je",
        "short_names": ["flag-je"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 113
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS JO",
        "short_name": "flag-jo",
        "short_names": ["flag-jo"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 114
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KZ",
        "short_name": "flag-kz",
        "short_names": ["flag-kz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 115
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KE",
        "short_name": "flag-ke",
        "short_names": ["flag-ke"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 116
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KI",
        "short_name": "flag-ki",
        "short_names": ["flag-ki"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 117
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS XK",
        "short_name": "flag-xk",
        "short_names": ["flag-xk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 118
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KW",
        "short_name": "flag-kw",
        "short_names": ["flag-kw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 119
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KG",
        "short_name": "flag-kg",
        "short_names": ["flag-kg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 120
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LA",
        "short_name": "flag-la",
        "short_names": ["flag-la"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 121
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LV",
        "short_name": "flag-lv",
        "short_names": ["flag-lv"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 122
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LB",
        "short_name": "flag-lb",
        "short_names": ["flag-lb"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 123
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LS",
        "short_name": "flag-ls",
        "short_names": ["flag-ls"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 124
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LR",
        "short_name": "flag-lr",
        "short_names": ["flag-lr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 125
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LY",
        "short_name": "flag-ly",
        "short_names": ["flag-ly"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 126
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LI",
        "short_name": "flag-li",
        "short_names": ["flag-li"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 127
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LT",
        "short_name": "flag-lt",
        "short_names": ["flag-lt"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 128
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LU",
        "short_name": "flag-lu",
        "short_names": ["flag-lu"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 129
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MO",
        "short_name": "flag-mo",
        "short_names": ["flag-mo"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 130
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MK",
        "short_name": "flag-mk",
        "short_names": ["flag-mk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 131
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MG",
        "short_name": "flag-mg",
        "short_names": ["flag-mg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 132
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MW",
        "short_name": "flag-mw",
        "short_names": ["flag-mw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 133
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MY",
        "short_name": "flag-my",
        "short_names": ["flag-my"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 134
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MV",
        "short_name": "flag-mv",
        "short_names": ["flag-mv"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 135
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ML",
        "short_name": "flag-ml",
        "short_names": ["flag-ml"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 136
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MT",
        "short_name": "flag-mt",
        "short_names": ["flag-mt"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 137
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MH",
        "short_name": "flag-mh",
        "short_names": ["flag-mh"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 138
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MQ",
        "short_name": "flag-mq",
        "short_names": ["flag-mq"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 139
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MR",
        "short_name": "flag-mr",
        "short_names": ["flag-mr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 140
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MU",
        "short_name": "flag-mu",
        "short_names": ["flag-mu"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 141
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS YT",
        "short_name": "flag-yt",
        "short_names": ["flag-yt"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 142
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MX",
        "short_name": "flag-mx",
        "short_names": ["flag-mx"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 143
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS FM",
        "short_name": "flag-fm",
        "short_names": ["flag-fm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 144
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MD",
        "short_name": "flag-md",
        "short_names": ["flag-md"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 145
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MC",
        "short_name": "flag-mc",
        "short_names": ["flag-mc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 146
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MN",
        "short_name": "flag-mn",
        "short_names": ["flag-mn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 147
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ME",
        "short_name": "flag-me",
        "short_names": ["flag-me"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 148
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MS",
        "short_name": "flag-ms",
        "short_names": ["flag-ms"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 149
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MA",
        "short_name": "flag-ma",
        "short_names": ["flag-ma"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 150
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MZ",
        "short_name": "flag-mz",
        "short_names": ["flag-mz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 151
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MM",
        "short_name": "flag-mm",
        "short_names": ["flag-mm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 152
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NA",
        "short_name": "flag-na",
        "short_names": ["flag-na"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 153
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NR",
        "short_name": "flag-nr",
        "short_names": ["flag-nr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 154
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NP",
        "short_name": "flag-np",
        "short_names": ["flag-np"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 155
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NL",
        "short_name": "flag-nl",
        "short_names": ["flag-nl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 156
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NC",
        "short_name": "flag-nc",
        "short_names": ["flag-nc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 157
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NZ",
        "short_name": "flag-nz",
        "short_names": ["flag-nz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 158
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NI",
        "short_name": "flag-ni",
        "short_names": ["flag-ni"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 159
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NE",
        "short_name": "flag-ne",
        "short_names": ["flag-ne"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 160
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NG",
        "short_name": "flag-ng",
        "short_names": ["flag-ng"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 161
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NU",
        "short_name": "flag-nu",
        "short_names": ["flag-nu"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 162
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NF",
        "short_name": "flag-nf",
        "short_names": ["flag-nf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 163
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MP",
        "short_name": "flag-mp",
        "short_names": ["flag-mp"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 164
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KP",
        "short_name": "flag-kp",
        "short_names": ["flag-kp"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 165
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS NO",
        "short_name": "flag-no",
        "short_names": ["flag-no"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 166
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS OM",
        "short_name": "flag-om",
        "short_names": ["flag-om"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 167
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PK",
        "short_name": "flag-pk",
        "short_names": ["flag-pk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 168
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PW",
        "short_name": "flag-pw",
        "short_names": ["flag-pw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 169
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PS",
        "short_name": "flag-ps",
        "short_names": ["flag-ps"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 170
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PA",
        "short_name": "flag-pa",
        "short_names": ["flag-pa"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 171
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PG",
        "short_name": "flag-pg",
        "short_names": ["flag-pg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 172
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PY",
        "short_name": "flag-py",
        "short_names": ["flag-py"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 173
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PE",
        "short_name": "flag-pe",
        "short_names": ["flag-pe"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 174
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PH",
        "short_name": "flag-ph",
        "short_names": ["flag-ph"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 175
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PN",
        "short_name": "flag-pn",
        "short_names": ["flag-pn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 176
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PL",
        "short_name": "flag-pl",
        "short_names": ["flag-pl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 177
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PT",
        "short_name": "flag-pt",
        "short_names": ["flag-pt"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 178
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PR",
        "short_name": "flag-pr",
        "short_names": ["flag-pr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 179
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS QA",
        "short_name": "flag-qa",
        "short_names": ["flag-qa"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 180
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS RE",
        "short_name": "flag-re",
        "short_names": ["flag-re"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 181
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS RO",
        "short_name": "flag-ro",
        "short_names": ["flag-ro"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 182
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS RU",
        "short_name": "flag-ru",
        "short_names": ["flag-ru", "ru"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 183
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS RW",
        "short_name": "flag-rw",
        "short_names": ["flag-rw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 184
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BL",
        "short_name": "flag-bl",
        "short_names": ["flag-bl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 185
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SH",
        "short_name": "flag-sh",
        "short_names": ["flag-sh"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 186
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KN",
        "short_name": "flag-kn",
        "short_names": ["flag-kn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 187
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LC",
        "short_name": "flag-lc",
        "short_names": ["flag-lc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 188
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS PM",
        "short_name": "flag-pm",
        "short_names": ["flag-pm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 189
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS VC",
        "short_name": "flag-vc",
        "short_names": ["flag-vc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 190
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS WS",
        "short_name": "flag-ws",
        "short_names": ["flag-ws"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 191
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SM",
        "short_name": "flag-sm",
        "short_names": ["flag-sm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 192
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ST",
        "short_name": "flag-st",
        "short_names": ["flag-st"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 193
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SA",
        "short_name": "flag-sa",
        "short_names": ["flag-sa"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 194
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SN",
        "short_name": "flag-sn",
        "short_names": ["flag-sn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 195
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS RS",
        "short_name": "flag-rs",
        "short_names": ["flag-rs"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 196
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SC",
        "short_name": "flag-sc",
        "short_names": ["flag-sc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 197
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SL",
        "short_name": "flag-sl",
        "short_names": ["flag-sl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 198
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SG",
        "short_name": "flag-sg",
        "short_names": ["flag-sg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 199
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SX",
        "short_name": "flag-sx",
        "short_names": ["flag-sx"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 200
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SK",
        "short_name": "flag-sk",
        "short_names": ["flag-sk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 201
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SI",
        "short_name": "flag-si",
        "short_names": ["flag-si"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 202
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SB",
        "short_name": "flag-sb",
        "short_names": ["flag-sb"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 203
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SO",
        "short_name": "flag-so",
        "short_names": ["flag-so"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 204
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ZA",
        "short_name": "flag-za",
        "short_names": ["flag-za"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 205
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GS",
        "short_name": "flag-gs",
        "short_names": ["flag-gs"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 206
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS KR",
        "short_name": "flag-kr",
        "short_names": ["flag-kr", "kr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 207
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SS",
        "short_name": "flag-ss",
        "short_names": ["flag-ss"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 208
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ES",
        "short_name": "flag-es",
        "short_names": ["flag-es", "es"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 209
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS LK",
        "short_name": "flag-lk",
        "short_names": ["flag-lk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 210
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SD",
        "short_name": "flag-sd",
        "short_names": ["flag-sd"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 211
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SR",
        "short_name": "flag-sr",
        "short_names": ["flag-sr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 212
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SZ",
        "short_name": "flag-sz",
        "short_names": ["flag-sz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 213
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SE",
        "short_name": "flag-se",
        "short_names": ["flag-se"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 214
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CH",
        "short_name": "flag-ch",
        "short_names": ["flag-ch"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 215
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SY",
        "short_name": "flag-sy",
        "short_names": ["flag-sy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 216
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TW",
        "short_name": "flag-tw",
        "short_names": ["flag-tw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 217
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TJ",
        "short_name": "flag-tj",
        "short_names": ["flag-tj"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 218
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TZ",
        "short_name": "flag-tz",
        "short_names": ["flag-tz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 219
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TH",
        "short_name": "flag-th",
        "short_names": ["flag-th"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 220
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TL",
        "short_name": "flag-tl",
        "short_names": ["flag-tl"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 221
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TG",
        "short_name": "flag-tg",
        "short_names": ["flag-tg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 222
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TK",
        "short_name": "flag-tk",
        "short_names": ["flag-tk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 223
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TO",
        "short_name": "flag-to",
        "short_names": ["flag-to"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 224
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TT",
        "short_name": "flag-tt",
        "short_names": ["flag-tt"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 225
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TN",
        "short_name": "flag-tn",
        "short_names": ["flag-tn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 226
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TR",
        "short_name": "flag-tr",
        "short_names": ["flag-tr"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 227
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TM",
        "short_name": "flag-tm",
        "short_names": ["flag-tm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 228
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TC",
        "short_name": "flag-tc",
        "short_names": ["flag-tc"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 229
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TV",
        "short_name": "flag-tv",
        "short_names": ["flag-tv"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 230
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS UG",
        "short_name": "flag-ug",
        "short_names": ["flag-ug"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 231
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS UA",
        "short_name": "flag-ua",
        "short_names": ["flag-ua"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 232
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AE",
        "short_name": "flag-ae",
        "short_names": ["flag-ae"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 233
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS GB",
        "short_name": "flag-gb",
        "short_names": ["flag-gb", "gb", "uk"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 234
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS US",
        "short_name": "flag-us",
        "short_names": ["flag-us", "us"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 235
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS VI",
        "short_name": "flag-vi",
        "short_names": ["flag-vi"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 236
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS UY",
        "short_name": "flag-uy",
        "short_names": ["flag-uy"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 237
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS UZ",
        "short_name": "flag-uz",
        "short_names": ["flag-uz"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 238
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS VU",
        "short_name": "flag-vu",
        "short_names": ["flag-vu"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 239
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS VA",
        "short_name": "flag-va",
        "short_names": ["flag-va"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 240
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS VE",
        "short_name": "flag-ve",
        "short_names": ["flag-ve"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 241
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS VN",
        "short_name": "flag-vn",
        "short_names": ["flag-vn"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 242
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS WF",
        "short_name": "flag-wf",
        "short_names": ["flag-wf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 243
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS EH",
        "short_name": "flag-eh",
        "short_names": ["flag-eh"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 244
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS YE",
        "short_name": "flag-ye",
        "short_names": ["flag-ye"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 245
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ZM",
        "short_name": "flag-zm",
        "short_names": ["flag-zm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 246
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS ZW",
        "short_name": "flag-zw",
        "short_names": ["flag-zw"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 247
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS AC",
        "short_name": "flag-ac",
        "short_names": ["flag-ac"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 248
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS BV",
        "short_name": "flag-bv",
        "short_names": ["flag-bv"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 249
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": false,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS CP",
        "short_name": "flag-cp",
        "short_names": ["flag-cp"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 250
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS DG",
        "short_name": "flag-dg",
        "short_names": ["flag-dg"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 251
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS EA",
        "short_name": "flag-ea",
        "short_names": ["flag-ea"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 252
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS HM",
        "short_name": "flag-hm",
        "short_names": ["flag-hm"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 253
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS MF",
        "short_name": "flag-mf",
        "short_names": ["flag-mf"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 254
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS SJ",
        "short_name": "flag-sj",
        "short_names": ["flag-sj"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 255
      }, {
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS TA",
        "short_name": "flag-ta",
        "short_names": ["flag-ta"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 256
      }, {
        "has_img_apple": true,
        "has_img_google": false,
        "has_img_twitter": true,
        "has_img_emojione": true,
        "has_img_facebook": true,
        "has_img_messenger": true,
        "name": "REGIONAL INDICATOR SYMBOL LETTERS UM",
        "short_name": "flag-um",
        "short_names": ["flag-um"],
        "unicode": "\uD83E\uDD14",
        "sort_order": 257
      }]
    }
  };

  /**
   * Init the bundle with selector, YAY!
   */
  wdtEmojiBundle.init = function (selector) {

    var self = this;

    // emoji.js overrides

    self.emoji = new EmojiConvertor();

    self.emoji.allow_native = this.defaults.allowNative;
    self.emoji.img_set = this.defaults.emojiType;
    self.emoji.use_sheet = true;
    self.emoji.supports_css = true;
    self.emoji.img_sets['apple']['sheet'] = this.defaults.emojiSheets.apple;
    self.emoji.img_sets['google']['sheet'] = this.defaults.emojiSheets.google;
    self.emoji.img_sets['twitter']['sheet'] = this.defaults.emojiSheets.twitter;
    self.emoji.img_sets['emojione']['sheet'] = this.defaults.emojiSheets.emojione;
    self.emoji.img_sets['facebook']['sheet'] = this.defaults.emojiSheets.facebook;
    self.emoji.img_sets['messenger']['sheet'] = this.defaults.emojiSheets.messenger;

    self.selector = selector;
    self.elements = document.querySelectorAll(selector);

    self.popup = document.querySelector('.wdt-emoji-popup');
    self.scroller = self.popup.querySelector('.wdt-emoji-scroll-wrapper');
    self.searchInput = self.popup.querySelector('#wdt-emoji-search');
    self.previewImg = self.popup.querySelector('#wdt-emoji-preview-img');
    self.previewName = self.popup.querySelector('#wdt-emoji-preview-name');
    self.previewAliases = self.popup.querySelector('#wdt-emoji-preview-aliases');

    document.querySelector('body').dataset.wdtEmojiBundle = wdtEmojiBundle.defaults.emojiType;

    var recent = self.popup.querySelector('[data-group-name="Recent"]');
    if (recent)
        recent.innerHTML = self.emoji.replace_colons(':clock3:');

    var people = self.popup.querySelector('[data-group-name="People"]');
    if (people)
        people.innerHTML = self.emoji.replace_colons(':sunglasses:');

    var nature = self.popup.querySelector('[data-group-name="Nature"]');
    if (nature)
      nature.innerHTML = self.emoji.replace_colons(':shamrock:');

    var foods = self.popup.querySelector('[data-group-name="Foods"]');
    if (foods)
        foods.innerHTML = self.emoji.replace_colons(':pizza:');

    var activity = self.popup.querySelector('[data-group-name="Activity"]');
    if (activity)
        activity.innerHTML = self.emoji.replace_colons(':football:');

    var places = self.popup.querySelector('[data-group-name="Places"]');
    if (places)
        places.innerHTML = self.emoji.replace_colons(':airplane:');

    var objects = self.popup.querySelector('[data-group-name="Objects"]');
    if (objects)
        objects.innerHTML = self.emoji.replace_colons(':bulb:');

    var symbols = self.popup.querySelector('[data-group-name="Symbols"]');
    if (symbols)
        symbols.innerHTML = self.emoji.replace_colons(':heart:');

    var flags = self.popup.querySelector('[data-group-name="Flags"]');
    if (flags)
        flags.innerHTML = self.emoji.replace_colons(':waving_white_flag:');

    var custom = self.popup.querySelector('[data-group-name="Custom"]');
    if (custom)
        custom.innerHTML = self.emoji.replace_colons(':dark_sunglasses:');

    // a trick for contenteditable blur range clear
    self.ranges = {};

    if (this.elements.length) {
      for (var i = 0; i < self.elements.length; i++) {

        var el = self.elements[i];

        if (el.getAttribute('contenteditable')) {
          el.dataset.rangeIndex = i;
          wdtEmojiBundle.addRangeStore(el);
        }

        self.addPicker(self.elements[i]);
      }
    }

    return self;
  };

  /**
   *
   * @param element
   */
  wdtEmojiBundle.addPicker = function (element) {
    var self = this;
    if (!hasClass(element, 'wdt-emoji-picker-ready')) {
      var p = document.createElement('div');
      addClass(p, 'wdt-emoji-picker');

      p.innerHTML = self.emoji.replace_colons(':smile:');

      p.addEventListener('click', wdtEmojiBundle.openPicker);

      var parent = element.parentNode;
      addClass(parent, 'wdt-emoji-picker-parent');
      parent.appendChild(p);
      if (hasClass(element, 'wdt-emoji-open-on-colon')) {
        parent.addEventListener('keyup', wdtEmojiBundle.onKeyup)
      }
      addClass(element, 'wdt-emoji-picker-ready');
    }
  };

  /**
    *
    * @param ev
    * @returns {void}
  */

  wdtEmojiBundle.onKeyup = function (ev) {
    if (ev.key === 'Meta' || ev.key === 'Control' || ev.key === 'Shift') {
      ev.preventDefault();
      return false;
    }

    var element = ev.target,
        parent = findParent(element, 'wdt-emoji-picker-parent'),
        emojiPicker = findChild(parent, 'wdt-emoji-picker'),
        val = element.value,
        selection = getSelection(element),
        textBeforeCursor = val.substring(0, selection.start),
        // `<space>:` OR `^:` followed by text
        // text is captured
        matches = textBeforeCursor.match(/(\s|^):(\S*)$/),
        text = matches && matches[2];

    wdtEmojiBundle.searchAfterColon(text, emojiPicker);
  };

  /**
   *
   * @param text
   * @param emojiPicker
   * @returns {void}
   */
  wdtEmojiBundle.searchAfterColon = function (text, emojiPicker) {
    // no text  or not enough text after colon
    if (!text || text.length < 2) {
      wdtEmojiBundle.close();
      return;
    }
    // is closed
    if (!hasClass(emojiPicker, 'wdt-emoji-picker-open')) {
      wdtEmojiBundle.openPicker.call(emojiPicker, {target: emojiPicker});
    }
    // execute the search
    wdtEmojiBundle.fillSearch(text);
  };

  /**
   *
   * @param ev
   * @returns {boolean}
   */
  wdtEmojiBundle.openPicker = function (ev) {
    var self = this;
    var parent = findParent(ev.target, 'wdt-emoji-picker-parent');

    wdtEmojiBundle.input = parent.querySelector(wdtEmojiBundle.selector);

    // @todo - [needim] - popup must be visible in viewport calculate carefully
    function findBestAvailablePosition(el) {

      var bodyRect = document.body.getBoundingClientRect();
      var elRect = el.getBoundingClientRect();
      var popupRect = wdtEmojiBundle.popup.getBoundingClientRect();

      var pos = {
        left: (elRect.left - popupRect.width) + elRect.width,
        top : elRect.top + Math.abs(bodyRect.top) + elRect.height
      };

      pos.left = pos.left < 0 ? 0 : pos.left;

      pos.left += 'px';
      pos.top += 'px';

      if (bodyRect.width < 415) { // mobile specific @todo - [needim] - better mobile detection needed
        addClass(wdtEmojiBundle.popup, 'wdt-emoji-mobile');

        return {
          left    : '0px',
          bottom  : '0px',
          top     : 'auto',
          width   : '100%',
          position: 'fixed'
        }
      }

      return pos;
    }

    css(wdtEmojiBundle.popup, findBestAvailablePosition(ev.target));

    // On window resized
    window.addEventListener('resize', function(new_event){
      css(wdtEmojiBundle.popup, findBestAvailablePosition(ev.target));
    });

    addClass(wdtEmojiBundle.popup, 'open');

    // fill with emoji
    wdtEmojiBundle.fillPickerPopup();

    if (hasClass(this, 'wdt-emoji-picker-open')) {
      wdtEmojiBundle.closePicker(this);
      removeClass(wdtEmojiBundle.popup, 'open');
      return false;
    }

    wdtEmojiBundle.closePickers();

    addClass(this, 'wdt-emoji-picker-open');
    this.innerHTML = wdtEmojiBundle.emoji.replace_colons(':sunglasses:');
  };

  /**
   *
   * Main function to fill picker popup with emoji
   *
   * @returns void | boolean | mixed
   */
  wdtEmojiBundle.fillPickerPopup = function () {

    var self = this;

    if (hasClass(this.popup, 'ready'))
      return false;

    // @todo - [needim] - Support for recent and custom emoji list
    var sectionsContainer = this.popup.querySelector('.wdt-emoji-sections'),
      sections = {'Recent': [], 'Custom': []},
      sortedSections = [];

    for (var category in wdtEmojiBundle.defaults.emojiData) {
      if (wdtEmojiBundle.defaults.emojiData.hasOwnProperty(category)) {

        if (inArray(category, wdtEmojiBundle.defaults.disabledCategories))
          continue;

        emojiList = wdtEmojiBundle.defaults.emojiData[category];
        sections[category] = emojiList;
      }
    }

    var sortedSectionsArray = Object.keys(sections).sort(function (a, b) {
      return wdtEmojiBundle.defaults.sectionOrders[a] < wdtEmojiBundle.defaults.sectionOrders[b] ? 1 : -1;
    });

    for (var i = 0; i < sortedSectionsArray.length; i++) {
      sortedSections[sortedSectionsArray[i]] = sections[sortedSectionsArray[i]];
    }

    for (var title in sortedSections) {
      if (sortedSections.hasOwnProperty(title)) {
        var emojiList = sortedSections[title];

        if (emojiList.length) {
          var emojiSection = document.createElement('div'),
            emojiTitle = document.createElement('h3'),
            emojiListDiv = document.createElement('div');

          emojiTitle.innerHTML = title;
          emojiTitle.dataset.emojiGroup = title;
          emojiListDiv.dataset.emojiGroup = title;

          addClass(emojiListDiv, 'wdt-emoji-list');
          addClass(emojiSection, 'wdt-emoji-section');

          for (i = 0; i < emojiList.length; i++) {
            var em = emojiList[i];

            if (em.has_img_apple || em.has_img_emojione || em.has_img_google || em.has_img_twitter || em.has_img_facebook || em.has_img_messenger) {
              var emojiLink = document.createElement('a');

              addClass(emojiLink, 'wdt-emoji');
              addClass(emojiLink, wdtEmojiBundle.getRandomPickerColor());

              emojiLink.dataset.hasImgApple = em.has_img_apple;
              emojiLink.dataset.hasImgEmojione = em.has_img_emojione;
              emojiLink.dataset.hasImgGoogle = em.has_img_google;
              emojiLink.dataset.hasImgTwitter = em.has_img_twitter;
              emojiLink.dataset.hasImgFacebook = em.has_img_facebook;
              emojiLink.dataset.hasImgMessenger = em.has_img_messenger;
              emojiLink.dataset.wdtEmojiName = em.name;
              emojiLink.dataset.wdtEmojiShortnames = ':' + em.short_names.join(': :') + ':';
              emojiLink.dataset.wdtEmojiShortname = em.short_name;
              emojiLink.dataset.wdtEmojiUnicode = em.unicode;
              emojiLink.dataset.wdtEmojiOrder = em.sort_order;

              emojiLink.innerHTML = self.emoji.replace_colons(':' + em.short_name + ':');

              emojiListDiv.appendChild(emojiLink);
            }
          }

          emojiSection.appendChild(emojiTitle);
          emojiSection.appendChild(emojiListDiv);
          sectionsContainer.appendChild(emojiSection);
        }
      }
    }

    addClass(this.popup, 'ready');

    wdtEmojiBundle.bindEvents();
  };

  /**
   * Random css class getter for picker hover colors
   * @returns string
   */
  wdtEmojiBundle.getRandomPickerColor = function () {
    return wdtEmojiBundle.defaults.pickerColors[Math.floor(Math.random() * wdtEmojiBundle.defaults.pickerColors.length)]
  };

  /**
   * Close the bundle popup
   */
  wdtEmojiBundle.close = function () {
    removeClass(wdtEmojiBundle.popup, 'open');
    wdtEmojiBundle.closePickers();
  };


  /**
   * Closes all the pickers
   */
  wdtEmojiBundle.closePickers = function () {
    var openPickers = document.querySelectorAll('.wdt-emoji-picker-open');
    if (openPickers.length) {
      for (var i = 0; i < openPickers.length; i++) {
        wdtEmojiBundle.closePicker(openPickers[i]);
      }
    }
  };

  /**
   *
   * @param element
   */
  wdtEmojiBundle.closePicker = function (element) {
    removeClass(element, 'wdt-emoji-picker-open');
    element.innerHTML = this.emoji.replace_colons(':smile:');
    var parent = findParent(element, 'wdt-emoji-picker-parent');
    if (wdtEmojiBundle.searchInput) {
      wdtEmojiBundle.searchInput.value = "";
      wdtEmojiBundle.search("");
    }
  };

  /**
   * void function binds some events for the bundle
   */
  wdtEmojiBundle.bindEvents = function () {
    var self = this;
    var stickers = document.querySelectorAll('.wdt-emoji-section h3');
    if (stickers.length) {
      for (var i = 0; i < stickers.length; i++) {
        sticky(stickers[i]);
      }
    }

    live('click', '.wdt-emoji-list a.wdt-emoji', function (event) {
      var selection = getSelection(wdtEmojiBundle.input);

      replaceText(wdtEmojiBundle.input, selection, this.dataset.wdtEmojiUnicode);
      fire('select', {el: wdtEmojiBundle.input, event: event, emoji: ':' + this.dataset.wdtEmojiShortname + ':'});

      var ce = document.createEvent('Event');
      ce.initEvent('input', true, true);
      wdtEmojiBundle.input.dispatchEvent(ce);
      wdtEmojiBundle.close();
      fire('afterSelect', {el: wdtEmojiBundle.input, event: event, emoji: ':' + this.dataset.wdtEmojiShortname + ':'});

      return false;
    });

    live('click', '.wdt-emoji-popup-mobile-closer', function (event) {
      wdtEmojiBundle.close();
      return false;
    });

    live('mouseover', '.wdt-emoji-list a.wdt-emoji', function (event) {

      if (wdtEmojiBundle.previewTimer)
        clearTimeout(wdtEmojiBundle.previewTimer);

      if (wdtEmojiBundle.previewExitTimer)
        clearTimeout(wdtEmojiBundle.previewExitTimer);

      var emo = this;

      wdtEmojiBundle.previewTimer = setTimeout(function () {

        addClass(wdtEmojiBundle.popup, 'preview-mode');

        wdtEmojiBundle.previewImg.innerHTML = self.emoji.replace_colons(':' + emo.dataset.wdtEmojiShortname + ':');
        wdtEmojiBundle.previewName.innerHTML = emo.dataset.wdtEmojiShortname;
        wdtEmojiBundle.previewAliases.innerHTML = emo.dataset.wdtEmojiShortnames;

      }, 100);

      return false;
    });

    live('mouseout', '.wdt-emoji-list a.wdt-emoji', function () {
      if (wdtEmojiBundle.previewExitTimer)
        clearTimeout(wdtEmojiBundle.previewExitTimer);

      wdtEmojiBundle.previewExitTimer = setTimeout(function () {
        removeClass(wdtEmojiBundle.popup, 'preview-mode');
      }, 1000);

      return false;
    });

    live('click', '.wdt-emoji-tab', function (e) {
      var group = this.dataset.groupName,
        groupHeader = wdtEmojiBundle.popup.querySelector('.wdt-emoji-section h3[data-emoji-group="' + group + '"]');

      if (groupHeader) {
        wdtEmojiBundle.setActiveTab(group);
        wdtEmojiBundle.scroller.scrollTop = groupHeader.offsetTop - groupHeader.getBoundingClientRect().height - 2;
      }

      return false;
    });

    live('input', '#wdt-emoji-search', function (e) {
      var input = this;
      if (wdtEmojiBundle.searchTimer) {
        clearTimeout(wdtEmojiBundle.searchTimer);
      }

      wdtEmojiBundle.searchTimer = setTimeout(function () {
        wdtEmojiBundle.search(input.value);
      }, 225);
    });

    addListenerMulti(wdtEmojiBundle.scroller, 'mousewheel DOMMouseScroll', function(e) {
      var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail,
          bottomOverflow = this.scrollTop + this.getBoundingClientRect().height - this.scrollHeight >= 0,
          topOverflow = this.scrollTop <= 0;
      if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
        e.preventDefault();
      }
    });



  };

  /**
   *
   * @param q
   * @returns {boolean}
   */
  wdtEmojiBundle.fillSearch = function (q) {
    if (wdtEmojiBundle.searchInput) {
      wdtEmojiBundle.searchInput.value = q;
      return wdtEmojiBundle.search(q);
    } else {
      return false;
    }
  };

  /**
   *
   * @param q
   * @returns {boolean}
   */
  wdtEmojiBundle.search = function (q) {

    var sections = wdtEmojiBundle.popup.querySelector('.wdt-emoji-sections'),
      searchResultH3 = wdtEmojiBundle.popup.querySelector('#wdt-emoji-search-result-title'),
      emojiList = sections.querySelectorAll('.wdt-emoji'),
      zeroText = wdtEmojiBundle.popup.querySelector('#wdt-emoji-no-result'),
      found = 0;

    if (q == '') {
      removeClass(searchResultH3, 'wdt-show');
      removeClass(zeroText, 'wdt-show');
      removeClassAll('.wdt-emoji.not-matched', 'not-matched');
      removeClassAll('.wdt-emoji-section', 'wdt-inline');
      removeClassAll('.wdt-emoji-list', 'wdt-inline');
      removeClassAll('.wdt-emoji-section h3', 'wdt-search-on');
      return false;
    }

    for (var i = 0; i < emojiList.length; i++) {
      var emo = emojiList[i];
      var sst = emo.dataset.wdtEmojiName + ' ' + emo.dataset.wdtEmojiShortnames;

      removeClass(emo, 'not-matched');
      if (sst.match(new RegExp(q, "gi"))) {
        found++;
      } else {
        addClass(emo, 'not-matched');
      }

    }

    addClass(searchResultH3, 'wdt-show');
    addClassAll('.wdt-emoji-section', 'wdt-inline');
    addClassAll('.wdt-emoji-list', 'wdt-inline');
    addClassAll('.wdt-emoji-section h3', 'wdt-search-on');

    if (found) {
      removeClass(zeroText, 'wdt-show');
    } else {
      addClass(zeroText, 'wdt-show');
    }
  };

  /**
   *
   * @type {{select: Array, afterSelect: Array, afterPickerOpen: Array}}
   */
  wdtEmojiBundle.dispatchHandlers = {
    'select'         : [],
    'afterSelect'    : [],
    'afterPickerOpen': [] // not implemented
  };

  /**
   *
   * @param eventName
   * @param handler
   * @returns mixed
   */
  wdtEmojiBundle.on = function (eventName, handler) {
    switch (eventName) {
      case "select":
        return wdtEmojiBundle.dispatchHandlers.select.push(handler);
        break;
      case "afterSelect":
        return wdtEmojiBundle.dispatchHandlers.afterSelect.push(handler);
        break;
      case "afterPickerOpen":
        return wdtEmojiBundle.dispatchHandlers.afterPickerOpen.push(handler);
        break;
      default:
        console.error('wdt-emoji-bundle - Not supported event type!', eventName);
        break;
    }
  };

  /**
   * On the fly emoji type changer apple, google, twitter, emojione
   * @param changeType
   */
  wdtEmojiBundle.changeType = function (changeType) {
    var nextSheet = wdtEmojiBundle.defaults.emojiSheets[changeType],
      currentEmojiList = document.querySelectorAll('.emoji-inner'),
      i;

    for (i = 0; i < currentEmojiList.length; i++) {
      var e = currentEmojiList[i];
      css(e, {
        'background-image': 'url(' + nextSheet + ')'
      });

    }

    wdtEmojiBundle.defaults.emojiType = changeType;
    document.querySelector('body').dataset.wdtEmojiBundle = changeType;
    this.emoji.img_set = changeType;
  };

  /**
   *
   * @param color
   */
  wdtEmojiBundle.changeSkinColor = function (color) {
    // @todo - [needim] - support skin colors for apple emoji set
  };

  /**
   *
   * @param text
   * @returns {string}
   */
  wdtEmojiBundle.render = function (text) {
    return this.emoji.replace_colons(this.emoji.replace_emoticons(this.emoji.replace_unified(text)));
  };

  /**
   * A trick for contenteditable range clear on blur
   * @param el
   */
  wdtEmojiBundle.addRangeStore = function (el) {
    el.addEventListener('focus', function () {
      var s = window.getSelection();
      if (!wdtEmojiBundle.ranges[this.dataset.rangeIndex]) {
        wdtEmojiBundle.ranges[this.dataset.rangeIndex] = new Range();
      } else if (s.rangeCount > 0) {
        s.removeAllRanges();
        s.addRange(wdtEmojiBundle.ranges[this.dataset.rangeIndex]);
      }
    });

    addListenerMulti(el, 'mouseup keyup', function () {
      wdtEmojiBundle.ranges[this.dataset.rangeIndex] = window.getSelection().getRangeAt(0);
    });

    addListenerMulti(el, 'mousedown click', function (e) {
      if (document.activeElement != this) {
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          e.cancelBubble = true;
        }

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }

        this.focus();
      }
    });
  };

  /**
   *
   * @param el
   * @param events
   * @param cb
   */
  var addListenerMulti = function (el, events, cb) {
    events = events.split(' ');
    for (var i = 0; i < events.length; i++) {
      el.addEventListener(events[i], cb, false);
    }
  };

  /**
   * Stick section header controls
   * @param el
   */
  var sticky = function (el) {

    var scrollerRect = wdtEmojiBundle.scroller.getBoundingClientRect(),
      elTop = el.getBoundingClientRect().top - scrollerRect.top,
      tabHeaderHeight = wdtEmojiBundle.popup.querySelector('#wdt-emoji-menu-header').getBoundingClientRect().height;

    wdtEmojiBundle.scroller.addEventListener("scroll", check);

    function check() {
      var scrollTop = wdtEmojiBundle.scroller.scrollTop;

      if (hasClass(el, 'sticky') && scrollTop < elTop) {

        removeClass(el, 'sticky');
        css(el, {top: null});
        css(el.parentNode, {'padding-top': null});

      } else if (scrollTop > elTop && !hasClass(el, 'sticky')) {

        var stickers = document.querySelectorAll('.wdt-emoji-section h3');
        if (stickers.length) {
          for (var i = 0; i < stickers.length; i++) {
            removeClass(stickers[i], 'sticky');
            css(stickers[i], {top: null});
            css(stickers[i].parentNode, {'padding-top': null});
          }
        }

        addClass(el, 'sticky');
        css(el, {'top': tabHeaderHeight + 'px'});
        css(el.parentNode, {'padding-top': el.getBoundingClientRect().height + 'px'});

        wdtEmojiBundle.setActiveTab(el.dataset.emojiGroup);
      }
    }
  };

  /**
   *
   * @param group
   */
  wdtEmojiBundle.setActiveTab = function (group) {
    var tabs = document.querySelectorAll('.wdt-emoji-tab');
    if (tabs.length) {
      for (var t = 0; t < tabs.length; t++) {
        removeClass(tabs[t], 'active');
      }
    }

    var activeTab = wdtEmojiBundle.popup.querySelector('.wdt-emoji-tab[data-group-name="' + group + '"]');
    addClass(activeTab, 'active');
  };

  /**
   *
   * @param el
   * @param cls
   * @returns {*}
   */
  var findParent = function (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  };

  /**
   *
   * @param el
   * @param cls
   * @returns {*}
   */
  var findChild = function (el, cls) {
    var children = el.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child.classList.contains(cls)) {
        return child;
      }
    }
  };

  /**
   *
   * @param el
   * @returns {*}
   */
  var getSelection = function (el) {
    var result = {};

    if (el.getAttribute('contenteditable')) {
      return {
        el: el,
        ce: true
      }
    }

    if (window.getSelection) {
      var val = el.value || el.innerHTML,
        len = val.length,
        start = el.selectionStart,
        end = el.selectionEnd,
        sel = val.substring(start, end);

      result = {
        "el"   : el,
        "start": start,
        "end"  : end,
        "len"  : len,
        "sel"  : sel
      };
    }
    else if (document.selection) { // ie
      var range = document.selection.createRange(),
        value = el.value || el.innerHTML,
        stored_range = range.duplicate();

      stored_range.moveToElementText(el);
      stored_range.setEndPoint('EndToEnd', range);
      el.selectionStart = stored_range.text.length - range.text.length;
      el.selectionEnd = el.selectionStart + range.text.length;

      result = {
        "el"   : el,
        "start": el.selectionStart,
        "end"  : el.selectionEnd,
        "len"  : value.length,
        "sel"  : range.text
      };
    }

    return result;
  };

    /**
   * Replace selection text for :input
   *
   * @param el
   * @param selection
   * @param emo
   */
  var replaceText = function (el, selection, emo) {
    var val = el.value || el.innerHTML || '';
    // emo = emo + ' '; //append a space

    if (selection.ce) { // if contenteditable
      el.focus();
      document.execCommand('insertText', false, emo);
    } else {
      var textBefore = val.substring(0, selection.start);
      textBefore = textBefore.replace(/:\S*$/, '')
      el.value = textBefore + emo + val.substring(selection.end, selection.len);

      // @todo - [needim] - check browser compatibilities
      el.selectionStart = el.selectionEnd = (textBefore.length + emo.length);
      el.focus();
    }
  }; 

  /**
   * Fire custom events
   *
   * @param eventName
   * @param params
   */
  var fire = function (eventName, params) {
    var handler, i, len, ref;
    ref = wdtEmojiBundle.dispatchHandlers[eventName];
    for (i = 0, len = ref.length; i < len; i++) {
      handler = ref[i];
      handler(params);
    }
  };

  /**
   *
   * @param eventType
   * @param elementQuerySelector
   * @param cb
   */
  var live = function (eventType, elementQuerySelector, cb) {
    document.addEventListener(eventType, function (event) {

      var qs = document.querySelectorAll(elementQuerySelector);

      if (qs) {
        var el = event.target, index = -1;
        while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
          el = el.parentElement;
        }

        if (index > -1) {
          cb.call(el, event);
        }
      }
    });
  };

  /**
   * Applies css properties to an element, similar to the jQuery
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it
   * does not perform any manipulation of values prior to setting styles.
   */
  var css = (function () {
    var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
      cssProps = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
        capName = name.charAt(0).toUpperCase() + name.slice(1),
        vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function (element, properties) {
      var args = arguments,
        prop,
        value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   *
   * @param element
   * @param name
   * @returns {boolean}
   */
  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   *
   * @param element
   * @param name
   */
  function addClass(element, name) {
    var oldList = classList(element),
      newList = oldList + name;

    if (hasClass(oldList, name)) return;

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   *
   * @param query
   * @param name
   */
  function addClassAll(query, name) {

    var elements = document.querySelectorAll(query);

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      var oldList = classList(element),
        newList = oldList + name;

      if (hasClass(oldList, name)) return;

      // Trim the opening space.
      element.className = newList.substring(1);
    }
  }

  /**
   *
   * @param element
   * @param name
   */
  function removeClass(element, name) {
    var oldList = classList(element),
      newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   *
   * @param query
   * @param name
   */
  function removeClassAll(query, name) {

    var elements = document.querySelectorAll(query);

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      var oldList = classList(element),
        newList;

      if (!hasClass(element, name)) return;

      // Replace the class name.
      newList = oldList.replace(' ' + name + ' ', ' ');

      // Trim the opening and closing spaces.
      element.className = newList.substring(1, newList.length - 1);
    }
  }

  function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
      if(haystack[i] == needle) return true;
    }
    return false;
  }

  /**
   *
   * @param element
   * @returns {string}
   */
  function classList(element) {
    return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  return wdtEmojiBundle;
});

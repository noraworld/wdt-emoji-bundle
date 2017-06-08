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
    /**
     *    Key:  number  total
     * ======================
     * Symbols:    270  (270)
     * Objects:    178  (448)
     * Nature:     147  (595)
     * Foods:       67  (662)
     * People:     204  (866)
     * Places:     115  (981)
     * Activity:    57 (1038)
     * Skin Tones:   5 (1043)
     * Flags:      257 (1300)
     * ======================
     */
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
        "unicode": "2764",
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
        "unicode": "1f49b",
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
        "unicode": "1f49a",
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
        "unicode": "1f499",
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
        "unicode": "1f49c",
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
        "unicode": "1f494",
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
        "unicode": "2763",
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
        "unicode": "1f495",
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
        "unicode": "1f49e",
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
        "unicode": "1f493",
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
        "unicode": "1f497",
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
        "unicode": "1f496",
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
        "unicode": "1f498",
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
        "unicode": "1f49d",
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
        "unicode": "1f49f",
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
        "unicode": "262e",
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
        "unicode": "271d",
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
        "unicode": "262a",
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
        "unicode": "1f549",
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
        "unicode": "2638",
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
        "unicode": "2721",
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
        "unicode": "1f52f",
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
        "unicode": "1f54e",
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
        "unicode": "262f",
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
        "unicode": "2626",
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
        "unicode": "1f6d0",
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
        "unicode": "26ce",
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
        "unicode": "2648",
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
        "unicode": "2649",
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
        "unicode": "264a",
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
        "unicode": "264b",
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
        "unicode": "264c",
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
        "unicode": "264d",
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
        "unicode": "264e",
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
        "unicode": "264f",
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
        "unicode": "2650",
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
        "unicode": "2651",
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
        "unicode": "2652",
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
        "unicode": "2653",
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
        "unicode": "1f194",
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
        "unicode": "269b",
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
        "unicode": "1f233",
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
        "unicode": "1f239",
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
        "unicode": "2622",
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
        "unicode": "2623",
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
        "unicode": "1f4f4",
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
        "unicode": "1f4f3",
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
        "unicode": "1f236",
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
        "unicode": "1f21a",
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
        "unicode": "1f238",
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
        "unicode": "1f23a",
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
        "unicode": "1f237",
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
        "unicode": "2734",
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
        "unicode": "1f19a",
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
        "unicode": "1f251",
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
        "unicode": "1f4ae",
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
        "unicode": "1f250",
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
        "unicode": "3299",
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
        "unicode": "3297",
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
        "unicode": "1f234",
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
        "unicode": "1f235",
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
        "unicode": "1f232",
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
        "unicode": "1f170",
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
        "unicode": "1f171",
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
        "unicode": "1f18e",
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
        "unicode": "1f191",
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
        "unicode": "1f17e",
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
        "unicode": "1f198",
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
        "unicode": "26d4",
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
        "unicode": "1f4db",
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
        "unicode": "1f6ab",
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
        "unicode": "274c",
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
        "unicode": "2b55",
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
        "unicode": "1f4a2",
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
        "unicode": "2668",
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
        "unicode": "1f6b7",
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
        "unicode": "1f6af",
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
        "unicode": "1f6b3",
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
        "unicode": "1f6b0",
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
        "unicode": "1f51e",
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
        "unicode": "1f4f5",
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
        "unicode": "2757",
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
        "unicode": "2755",
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
        "unicode": "2753",
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
        "unicode": "2754",
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
        "unicode": "203c",
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
        "unicode": "2049",
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
        "unicode": "1f4af",
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
        "unicode": "1f505",
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
        "unicode": "1f506",
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
        "unicode": "1f531",
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
        "unicode": "269c",
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
        "unicode": "303d",
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
        "unicode": "26a0",
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
        "unicode": "1f6b8",
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
        "unicode": "1f530",
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
        "unicode": "267b",
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
        "unicode": "1f22f",
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
        "unicode": "1f4b9",
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
        "unicode": "2747",
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
        "unicode": "2733",
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
        "unicode": "274e",
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
        "unicode": "2705",
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
        "unicode": "1f4a0",
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
        "unicode": "1f300",
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
        "unicode": "27bf",
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
        "unicode": "1f310",
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
        "unicode": "24c2",
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
        "unicode": "1f3e7",
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
        "unicode": "1f202",
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
        "unicode": "1f6c2",
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
        "unicode": "1f6c3",
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
        "unicode": "1f6c4",
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
        "unicode": "1f6c5",
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
        "unicode": "267f",
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
        "unicode": "1f6ad",
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
        "unicode": "1f6be",
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
        "unicode": "1f17f",
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
        "unicode": "1f6b0",
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
        "unicode": "1f6b9",
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
        "unicode": "1f6ba",
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
        "unicode": "1f6bc",
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
        "unicode": "1f6bb",
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
        "unicode": "1f6ae",
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
        "unicode": "1f3a6",
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
        "unicode": "1f4f6",
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
        "unicode": "1f201",
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
        "unicode": "1f196",
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
        "unicode": "1f197",
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
        "unicode": "1f199",
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
        "unicode": "1f192",
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
        "unicode": "1f195",
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
        "unicode": "1f193",
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
        "unicode": "0030-20e3",
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
        "unicode": "0031-20e3",
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
        "unicode": "0032-20e3",
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
        "unicode": "0033-20e3",
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
        "unicode": "0034-20e3",
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
        "unicode": "0035-20e3",
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
        "unicode": "0036-20e3",
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
        "unicode": "0037-20e3",
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
        "unicode": "0038-20e3",
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
        "unicode": "0039-20e3",
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
        "unicode": "1f51f",
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
        "unicode": "002a-20e3",
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
        "unicode": "1f522",
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
        "unicode": "25b6",
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
        "unicode": "23f8",
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
        "unicode": "23ef",
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
        "unicode": "23f9",
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
        "unicode": "23cf",
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
        "unicode": "23fa",
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
        "unicode": "23ed",
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
        "unicode": "23ee",
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
        "unicode": "23e9",
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
        "unicode": "23ea",
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
        "unicode": "1f500",
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
        "unicode": "1f501",
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
        "unicode": "1f502",
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
        "unicode": "25c0",
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
        "unicode": "1f53c",
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
        "unicode": "1f53d",
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
        "unicode": "23eb",
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
        "unicode": "23ec",
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
        "unicode": "27a1",
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
        "unicode": "2b05",
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
        "unicode": "2b06",
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
        "unicode": "2b07",
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
        "unicode": "2197",
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
        "unicode": "2198",
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
        "unicode": "2199",
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
        "unicode": "2196",
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
        "unicode": "2195",
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
        "unicode": "2194",
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
        "unicode": "1f504",
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
        "unicode": "21aa",
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
        "unicode": "21a9",
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
        "unicode": "2934",
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
        "unicode": "2935",
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
        "unicode": "0023-20e3",
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
        "unicode": "2139",
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
        "unicode": "1f524",
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
        "unicode": "1f521",
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
        "unicode": "1f520",
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
        "unicode": "1f523",
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
        "unicode": "1f3b5",
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
        "unicode": "1f3b6",
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
        "unicode": "3030",
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
        "unicode": "27b0",
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
        "unicode": "2714",
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
        "unicode": "1f503",
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
        "unicode": "2795",
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
        "unicode": "2796",
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
        "unicode": "2797",
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
        "unicode": "2716",
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
        "unicode": "1f4b2",
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
        "unicode": "1f4b1",
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
        "unicode": "00a9",
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
        "unicode": "00ae",
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
        "unicode": "2122",
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
        "unicode": "1f51a",
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
        "unicode": "1f519",
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
        "unicode": "1f51b",
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
        "unicode": "1f51d",
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
        "unicode": "1f51c",
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
        "unicode": "2611",
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
        "unicode": "1f518",
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
        "unicode": "26aa",
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
        "unicode": "26ab",
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
        "unicode": "1f534",
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
        "unicode": "1f535",
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
        "unicode": "1f538",
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
        "unicode": "1f539",
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
        "unicode": "1f536",
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
        "unicode": "1f537",
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
        "unicode": "1f53a",
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
        "unicode": "25aa",
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
        "unicode": "25ab",
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
        "unicode": "2b1b",
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
        "unicode": "2b1c",
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
        "unicode": "1f53b",
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
        "unicode": "25fc",
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
        "unicode": "25fb",
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
        "unicode": "25fe",
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
        "unicode": "25fd",
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
        "unicode": "1f532",
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
        "unicode": "1f533",
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
        "unicode": "1f508",
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
        "unicode": "1f509",
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
        "unicode": "1f50a",
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
        "unicode": "1f507",
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
        "unicode": "1f4e3",
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
        "unicode": "1f4e2",
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
        "unicode": "1f514",
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
        "unicode": "1f515",
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
        "unicode": "1f0cf",
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
        "unicode": "1f004",
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
        "unicode": "2660",
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
        "unicode": "2663",
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
        "unicode": "2665",
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
        "unicode": "2666",
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
        "unicode": "1f3b4",
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
        "unicode": "1f4ad",
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
        "unicode": "1f5ef",
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
        "unicode": "1f4ac",
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
        "unicode": "1f5e8",
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
        "unicode": "1f550",
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
        "unicode": "1f551",
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
        "unicode": "1f552",
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
        "unicode": "1f553",
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
        "unicode": "1f554",
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
        "unicode": "1f555",
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
        "unicode": "1f556",
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
        "unicode": "1f557",
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
        "unicode": "1f558",
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
        "unicode": "1f559",
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
        "unicode": "1f55a",
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
        "unicode": "1f55b",
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
        "unicode": "1f55c",
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
        "unicode": "1f55d",
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
        "unicode": "1f55e",
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
        "unicode": "1f55f",
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
        "unicode": "1f560",
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
        "unicode": "1f561",
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
        "unicode": "1f562",
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
        "unicode": "1f563",
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
        "unicode": "1f564",
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
        "unicode": "1f565",
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
        "unicode": "1f566",
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
        "unicode": "1f567",
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
        "unicode": "231a",
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
        "unicode": "1f4f1",
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
        "unicode": "1f4f2",
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
        "unicode": "1f4bb",
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
        "unicode": "2328",
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
        "unicode": "1f5a5",
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
        "unicode": "1f5a8",
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
        "unicode": "1f5b1",
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
        "unicode": "1f5b2",
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
        "unicode": "1f579",
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
        "unicode": "1f5dc",
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
        "unicode": "1f4bd",
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
        "unicode": "1f4be",
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
        "unicode": "1f4bf",
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
        "unicode": "1f4c0",
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
        "unicode": "1f4fc",
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
        "unicode": "1f4f7",
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
        "unicode": "1f4f8",
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
        "unicode": "1f4f9",
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
        "unicode": "1f3a5",
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
        "unicode": "1f4fd",
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
        "unicode": "1f39e",
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
        "unicode": "1f4de",
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
        "unicode": "260e",
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
        "unicode": "1f4df",
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
        "unicode": "1f4e0",
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
        "unicode": "1f4fa",
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
        "unicode": "1f4fb",
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
        "unicode": "1f399",
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
        "unicode": "1f39a",
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
        "unicode": "1f39b",
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
        "unicode": "23f1",
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
        "unicode": "23f2",
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
        "unicode": "23f0",
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
        "unicode": "1f570",
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
        "unicode": "23f3",
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
        "unicode": "231b",
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
        "unicode": "1f4e1",
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
        "unicode": "1f50b",
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
        "unicode": "1f50c",
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
        "unicode": "1f4a1",
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
        "unicode": "1f526",
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
        "unicode": "1f56f",
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
        "unicode": "1f5d1",
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
        "unicode": "1f6e2",
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
        "unicode": "1f4b8",
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
        "unicode": "1f4b5",
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
        "unicode": "1f4b4",
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
        "unicode": "1f4b6",
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
        "unicode": "1f4b7",
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
        "unicode": "1f4b0",
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
        "unicode": "1f4b3",
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
        "unicode": "1f48e",
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
        "unicode": "2696",
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
        "unicode": "1f527",
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
        "unicode": "1f528",
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
        "unicode": "2692",
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
        "unicode": "1f6e0",
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
        "unicode": "26cf",
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
        "unicode": "1f529",
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
        "unicode": "2699",
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
        "unicode": "26d3",
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
        "unicode": "1f52b",
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
        "unicode": "1f4a3",
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
        "unicode": "1f52a",
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
        "unicode": "1f5e1",
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
        "unicode": "2694",
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
        "unicode": "1f6e1",
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
        "unicode": "1f6ac",
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
        "unicode": "2620",
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
        "unicode": "26b0",
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
        "unicode": "26b1",
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
        "unicode": "1f3fa",
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
        "unicode": "1f52e",
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
        "unicode": "1f4ff",
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
        "unicode": "1f488",
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
        "unicode": "2697",
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
        "unicode": "1f52d",
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
        "unicode": "1f52c",
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
        "unicode": "1f573",
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
        "unicode": "1f48a",
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
        "unicode": "1f489",
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
        "unicode": "1f321",
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
        "unicode": "1f3f7",
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
        "unicode": "1f516",
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
        "unicode": "1f6bd",
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
        "unicode": "1f6bf",
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
        "unicode": "1f6c1",
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
        "unicode": "1f511",
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
        "unicode": "1f5dd",
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
        "unicode": "1f6cb",
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
        "unicode": "1f6cc",
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
        "unicode": "1f6cf",
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
        "unicode": "1f6aa",
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
        "unicode": "1f6ce",
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
        "unicode": "1f5bc",
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
        "unicode": "1f5fa",
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
        "unicode": "26f1",
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
        "unicode": "1f5ff",
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
        "unicode": "1f6cd",
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
        "unicode": "1f388",
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
        "unicode": "1f38f",
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
        "unicode": "1f380",
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
        "unicode": "1f381",
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
        "unicode": "1f38a",
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
        "unicode": "1f389",
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
        "unicode": "1f38e",
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
        "unicode": "1f390",
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
        "unicode": "1f38c",
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
        "unicode": "1f3ee",
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
        "unicode": "2709",
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
        "unicode": "1f4e9",
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
        "unicode": "1f4e8",
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
        "unicode": "1f4e7",
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
        "unicode": "1f48c",
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
        "unicode": "1f4ee",
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
        "unicode": "1f4ea",
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
        "unicode": "1f4eb",
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
        "unicode": "1f4ec",
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
        "unicode": "1f4ed",
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
        "unicode": "1f4e6",
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
        "unicode": "1f4ef",
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
        "unicode": "1f4e5",
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
        "unicode": "1f4e4",
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
        "unicode": "1f4dc",
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
        "unicode": "1f4c3",
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
        "unicode": "1f4d1",
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
        "unicode": "1f4ca",
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
        "unicode": "1f4c8",
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
        "unicode": "1f4c9",
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
        "unicode": "1f4c4",
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
        "unicode": "1f4c5",
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
        "unicode": "1f4c6",
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
        "unicode": "1f5d3",
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
        "unicode": "1f4c7",
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
        "unicode": "1f5c3",
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
        "unicode": "1f5f3",
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
        "unicode": "1f5c4",
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
        "unicode": "1f4cb",
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
        "unicode": "1f5d2",
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
        "unicode": "1f4c1",
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
        "unicode": "1f4c2",
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
        "unicode": "1f5c2",
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
        "unicode": "1f5de",
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
        "unicode": "1f4f0",
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
        "unicode": "1f4d3",
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
        "unicode": "1f4d5",
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
        "unicode": "1f4d7",
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
        "unicode": "1f4d8",
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
        "unicode": "1f4d9",
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
        "unicode": "1f4d4",
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
        "unicode": "1f4d2",
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
        "unicode": "1f4da",
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
        "unicode": "1f4d6",
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
        "unicode": "1f517",
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
        "unicode": "1f4ce",
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
        "unicode": "1f587",
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
        "unicode": "2702",
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
        "unicode": "1f4d0",
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
        "unicode": "1f4cf",
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
        "unicode": "1f4cc",
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
        "unicode": "1f4cd",
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
        "unicode": "1f6a9",
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
        "unicode": "1f3f3",
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
        "unicode": "1f3f4",
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
        "unicode": "1f510",
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
        "unicode": "1f512",
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
        "unicode": "1f513",
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
        "unicode": "1f50f",
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
        "unicode": "1f58a",
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
        "unicode": "1f58b",
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
        "unicode": "2712",
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
        "unicode": "1f4dd",
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
        "unicode": "270f",
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
        "unicode": "1f58d",
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
        "unicode": "1f58c",
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
        "unicode": "1f50d",
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
        "unicode": "1f50e",
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
        "unicode": "1f436",
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
        "unicode": "1f431",
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
        "unicode": "1f42d",
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
        "unicode": "1f439",
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
        "unicode": "1f430",
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
        "unicode": "1f43b",
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
        "unicode": "1f43c",
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
        "unicode": "1f428",
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
        "unicode": "1f42f",
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
        "unicode": "1f981",
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
        "unicode": "1f42e",
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
        "unicode": "1f437",
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
        "unicode": "1f43d",
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
        "unicode": "1f438",
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
        "unicode": "1f419",
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
        "unicode": "1f435",
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
        "unicode": "1f648",
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
        "unicode": "1f649",
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
        "unicode": "1f64a",
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
        "unicode": "1f412",
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
        "unicode": "1f414",
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
        "unicode": "1f427",
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
        "unicode": "1f426",
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
        "unicode": "1f424",
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
        "unicode": "1f423",
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
        "unicode": "1f425",
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
        "unicode": "1f43a",
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
        "unicode": "1f417",
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
        "unicode": "1f434",
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
        "unicode": "1f984",
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
        "unicode": "1f41d",
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
        "unicode": "1f41b",
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
        "unicode": "1f40c",
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
        "unicode": "1f41e",
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
        "unicode": "1f41c",
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
        "unicode": "1f577",
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
        "unicode": "1f982",
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
        "unicode": "1f980",
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
        "unicode": "1f40d",
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
        "unicode": "1f422",
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
        "unicode": "1f420",
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
        "unicode": "1f41f",
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
        "unicode": "1f421",
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
        "unicode": "1f42c",
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
        "unicode": "1f433",
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
        "unicode": "1f40b",
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
        "unicode": "1f40a",
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
        "unicode": "1f406",
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
        "unicode": "1f405",
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
        "unicode": "1f403",
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
        "unicode": "1f402",
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
        "unicode": "1f404",
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
        "unicode": "1f42a",
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
        "unicode": "1f42b",
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
        "unicode": "1f418",
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
        "unicode": "1f410",
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
        "unicode": "1f40f",
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
        "unicode": "1f411",
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
        "unicode": "1f40e",
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
        "unicode": "1f416",
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
        "unicode": "1f400",
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
        "unicode": "1f401",
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
        "unicode": "1f413",
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
        "unicode": "1f983",
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
        "unicode": "1f54a",
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
        "unicode": "1f415",
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
        "unicode": "1f429",
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
        "unicode": "1f408",
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
        "unicode": "1f407",
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
        "unicode": "1f43f",
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
        "unicode": "1f43e",
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
        "unicode": "1f409",
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
        "unicode": "1f432",
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
        "unicode": "1f335",
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
        "unicode": "1f384",
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
        "unicode": "1f332",
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
        "unicode": "1f333",
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
        "unicode": "1f334",
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
        "unicode": "1f331",
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
        "unicode": "1f33f",
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
        "unicode": "2618",
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
        "unicode": "1f340",
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
        "unicode": "1f38d",
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
        "unicode": "1f38b",
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
        "unicode": "1f343",
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
        "unicode": "1f342",
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
        "unicode": "1f341",
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
        "unicode": "1f33e",
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
        "unicode": "1f33a",
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
        "unicode": "1f33b",
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
        "unicode": "1f339",
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
        "unicode": "1f337",
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
        "unicode": "1f33c",
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
        "unicode": "1f338",
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
        "unicode": "1f490",
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
        "unicode": "1f344",
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
        "unicode": "1f330",
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
        "unicode": "1f383",
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
        "unicode": "1f41a",
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
        "unicode": "1f578",
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
        "unicode": "1f30e",
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
        "unicode": "1f30d",
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
        "unicode": "1f30f",
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
        "unicode": "1f315",
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
        "unicode": "1f316",
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
        "unicode": "1f317",
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
        "unicode": "1f318",
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
        "unicode": "1f311",
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
        "unicode": "1f312",
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
        "unicode": "1f313",
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
        "unicode": "1f314",
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
        "unicode": "1f31a",
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
        "unicode": "1f31d",
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
        "unicode": "1f31b",
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
        "unicode": "1f31c",
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
        "unicode": "1f31e",
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
        "unicode": "1f319",
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
        "unicode": "2b50",
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
        "unicode": "1f31f",
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
        "unicode": "1f4ab",
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
        "unicode": "2728",
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
        "unicode": "2604",
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
        "unicode": "2600",
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
        "unicode": "1f324",
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
        "unicode": "26c5",
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
        "unicode": "1f325",
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
        "unicode": "1f326",
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
        "unicode": "2601",
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
        "unicode": "1f327",
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
        "unicode": "26c8",
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
        "unicode": "1f329",
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
        "unicode": "26a1",
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
        "unicode": "1f525",
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
        "unicode": "1f4a5",
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
        "unicode": "2744",
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
        "unicode": "1f328",
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
        "unicode": "2603",
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
        "unicode": "26c4",
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
        "unicode": "1f32c",
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
        "unicode": "1f4a8",
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
        "unicode": "1f32a",
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
        "unicode": "1f32b",
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
        "unicode": "2602",
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
        "unicode": "2614",
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
        "unicode": "1f4a7",
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
        "unicode": "1f4a6",
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
        "unicode": "1f30a",
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
        "unicode": "1f34f",
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
        "unicode": "1f34e",
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
        "unicode": "1f350",
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
        "unicode": "1f34a",
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
        "unicode": "1f34b",
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
        "unicode": "1f34c",
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
        "unicode": "1f349",
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
        "unicode": "1f347",
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
        "unicode": "1f353",
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
        "unicode": "1f348",
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
        "unicode": "1f352",
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
        "unicode": "1f351",
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
        "unicode": "1f34d",
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
        "unicode": "1f345",
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
        "unicode": "1f346",
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
        "unicode": "1f336",
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
        "unicode": "1f33d",
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
        "unicode": "1f360",
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
        "unicode": "1f36f",
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
        "unicode": "1f35e",
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
        "unicode": "1f9c0",
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
        "unicode": "1f357",
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
        "unicode": "1f356",
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
        "unicode": "1f364",
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
        "unicode": "1f95a",
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
        "unicode": "1f354",
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
        "unicode": "1f35f",
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
        "unicode": "1f32d",
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
        "unicode": "1f355",
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
        "unicode": "1f35d",
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
        "unicode": "1f32e",
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
        "unicode": "1f32f",
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
        "unicode": "1f35c",
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
        "unicode": "1f372",
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
        "unicode": "1f365",
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
        "unicode": "1f363",
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
        "unicode": "1f371",
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
        "unicode": "1f35b",
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
        "unicode": "1f359",
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
        "unicode": "1f35a",
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
        "unicode": "1f358",
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
        "unicode": "1f362",
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
        "unicode": "1f361",
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
        "unicode": "1f367",
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
        "unicode": "1f368",
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
        "unicode": "1f366",
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
        "unicode": "1f370",
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
        "unicode": "1f382",
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
        "unicode": "1f36e",
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
        "unicode": "1f36c",
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
        "unicode": "1f36d",
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
        "unicode": "1f36b",
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
        "unicode": "1f37f",
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
        "unicode": "1f369",
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
        "unicode": "1f36a",
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
        "unicode": "1f37a",
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
        "unicode": "1f37b",
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
        "unicode": "1f377",
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
        "unicode": "1f378",
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
        "unicode": "1f379",
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
        "unicode": "1f37e",
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
        "unicode": "1f376",
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
        "unicode": "1f375",
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
        "unicode": "2615",
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
        "unicode": "1f37c",
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
        "unicode": "1f374",
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
        "unicode": "1f37d",
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
        "unicode": "1f600",
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
        "unicode": "1f62c",
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
        "unicode": "1f601",
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
        "unicode": "1f602",
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
        "unicode": "1f603",
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
        "unicode": "1f604",
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
        "unicode": "1f605",
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
        "unicode": "1f606",
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
        "unicode": "1f607",
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
        "unicode": "1f609",
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
        "unicode": "1f60a",
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
        "unicode": "1f642",
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
        "unicode": "1f643",
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
        "unicode": "263a",
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
        "unicode": "1f60b",
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
        "unicode": "1f60c",
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
        "unicode": "1f60d",
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
        "unicode": "1f618",
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
        "unicode": "1f617",
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
        "unicode": "1f619",
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
        "unicode": "1f61a",
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
        "unicode": "1f61c",
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
        "unicode": "1f61d",
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
        "unicode": "1f61b",
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
        "unicode": "1f911",
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
        "unicode": "1f913",
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
        "unicode": "1f60e",
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
        "unicode": "1f917",
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
        "unicode": "1f60f",
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
        "unicode": "1f636",
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
        "unicode": "1f610",
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
        "unicode": "1f611",
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
        "unicode": "1f612",
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
        "unicode": "1f644",
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
        "unicode": "1f914",
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
        "unicode": "1f633",
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
        "unicode": "1f61e",
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
        "unicode": "1f61f",
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
        "unicode": "1f620",
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
        "unicode": "1f621",
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
        "unicode": "1f614",
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
        "unicode": "1f615",
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
        "unicode": "1f641",
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
        "unicode": "2639",
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
        "unicode": "1f623",
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
        "unicode": "1f616",
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
        "unicode": "1f62b",
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
        "unicode": "1f629",
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
        "unicode": "1f624",
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
        "unicode": "1f62e",
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
        "unicode": "1f631",
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
        "unicode": "1f628",
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
        "unicode": "1f630",
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
        "unicode": "1f62f",
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
        "unicode": "1f626",
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
        "unicode": "1f627",
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
        "unicode": "1f622",
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
        "unicode": "1f625",
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
        "unicode": "1f62a",
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
        "unicode": "1f613",
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
        "unicode": "1f62d",
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
        "unicode": "1f635",
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
        "unicode": "1f632",
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
        "unicode": "1f910",
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
        "unicode": "1f637",
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
        "unicode": "1f912",
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
        "unicode": "1f915",
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
        "unicode": "1f634",
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
        "unicode": "1f4a4",
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
        "unicode": "1f4a9",
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
        "unicode": "1f608",
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
        "unicode": "1f47f",
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
        "unicode": "1f479",
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
        "unicode": "1f47a",
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
        "unicode": "1f480",
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
        "unicode": "1f47b",
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
        "unicode": "1f47d",
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
        "unicode": "1f916",
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
        "unicode": "1f63a",
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
        "unicode": "1f638",
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
        "unicode": "1f639",
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
        "unicode": "1f63b",
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
        "unicode": "1f63c",
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
        "unicode": "1f63d",
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
        "unicode": "1f640",
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
        "unicode": "1f63f",
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
        "unicode": "1f63e",
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
        "unicode": "1f64c",
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
        "unicode": "1f44f",
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
        "unicode": "1f44b",
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
        "unicode": "1f44d",
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
        "unicode": "1f44e",
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
        "unicode": "1f44a",
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
        "unicode": "270a",
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
        "unicode": "270c",
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
        "unicode": "1f44c",
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
        "unicode": "270b",
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
        "unicode": "1f450",
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
        "unicode": "1f4aa",
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
        "unicode": "1f64f",
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
        "unicode": "261d",
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
        "unicode": "1f446",
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
        "unicode": "1f447",
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
        "unicode": "1f448",
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
        "unicode": "1f449",
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
        "unicode": "1f595",
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
        "unicode": "1f590",
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
        "unicode": "1f918",
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
        "unicode": "1f596",
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
        "unicode": "270d",
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
        "unicode": "1f485",
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
        "unicode": "1f444",
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
        "unicode": "1f445",
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
        "unicode": "1f442",
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
        "unicode": "1f443",
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
        "unicode": "1f441",
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
        "unicode": "1f440",
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
        "unicode": "1f464",
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
        "unicode": "1f465",
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
        "unicode": "1f5e3",
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
        "unicode": "1f476",
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
        "unicode": "1f466",
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
        "unicode": "1f467",
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
        "unicode": "1f468",
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
        "unicode": "1f469",
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
        "unicode": "1f471",
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
        "unicode": "1f474",
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
        "unicode": "1f475",
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
        "unicode": "1f472",
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
        "unicode": "1f473",
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
        "unicode": "1f46e",
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
        "unicode": "1f477",
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
        "unicode": "1f482",
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
        "unicode": "1f575",
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
        "unicode": "1f385",
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
        "unicode": "1f47c",
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
        "unicode": "1f478",
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
        "unicode": "1f470",
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
        "unicode": "1f6b6",
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
        "unicode": "1f3c3",
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
        "unicode": "1f483",
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
        "unicode": "1f46f",
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
        "unicode": "1f46b",
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
        "unicode": "1f46c",
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
        "unicode": "1f46d",
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
        "unicode": "1f647",
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
        "unicode": "1f481",
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
        "unicode": "1f645",
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
        "unicode": "1f646",
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
        "unicode": "1f64b",
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
        "unicode": "1f64e",
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
        "unicode": "1f64d",
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
        "unicode": "1f487",
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
        "unicode": "1f486",
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
        "unicode": "1f491",
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
        "unicode": "1f469-200d-2764-fe0f-200d-1f469",
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
        "unicode": "1f468-200d-2764-fe0f-200d-1f468",
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
        "unicode": "1f48f",
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
        "unicode": "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",
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
        "unicode": "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",
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
        "unicode": "1f46a",
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
        "unicode": "1f468-200d-1f469-200d-1f467",
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
        "unicode": "1f468-200d-1f469-200d-1f467-200d-1f466",
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
        "unicode": "1f468-200d-1f469-200d-1f466-200d-1f466",
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
        "unicode": "1f468-200d-1f469-200d-1f467-200d-1f467",
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
        "unicode": "1f469-200d-1f469-200d-1f466",
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
        "unicode": "1f469-200d-1f469-200d-1f467",
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
        "unicode": "1f469-200d-1f469-200d-1f467-200d-1f466",
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
        "unicode": "1f469-200d-1f469-200d-1f466-200d-1f466",
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
        "unicode": "1f469-200d-1f469-200d-1f467-200d-1f467",
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
        "unicode": "1f468-200d-1f468-200d-1f466",
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
        "unicode": "1f468-200d-1f468-200d-1f467",
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
        "unicode": "1f468-200d-1f468-200d-1f467-200d-1f466",
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
        "unicode": "1f468-200d-1f468-200d-1f466-200d-1f466",
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
        "unicode": "1f468-200d-1f468-200d-1f467-200d-1f467",
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
        "unicode": "1f45a",
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
        "unicode": "1f455",
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
        "unicode": "1f456",
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
        "unicode": "1f454",
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
        "unicode": "1f457",
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
        "unicode": "1f459",
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
        "unicode": "1f458",
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
        "unicode": "1f484",
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
        "unicode": "1f48b",
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
        "unicode": "1f463",
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
        "unicode": "1f460",
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
        "unicode": "1f461",
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
        "unicode": "1f462",
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
        "unicode": "1f45e",
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
        "unicode": "1f45f",
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
        "unicode": "1f452",
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
        "unicode": "1f3a9",
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
        "unicode": "26d1",
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
        "unicode": "1f393",
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
        "unicode": "1f451",
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
        "unicode": "1f392",
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
        "unicode": "1f45d",
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
        "unicode": "1f45b",
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
        "unicode": "1f45c",
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
        "unicode": "1f4bc",
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
        "unicode": "1f453",
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
        "unicode": "1f576",
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
        "unicode": "1f48d",
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
        "unicode": "1f302",
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
        "unicode": "1f697",
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
        "unicode": "1f695",
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
        "unicode": "1f699",
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
        "unicode": "1f68c",
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
        "unicode": "1f68e",
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
        "unicode": "1f3ce",
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
        "unicode": "1f693",
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
        "unicode": "1f691",
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
        "unicode": "1f692",
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
        "unicode": "1f690",
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
        "unicode": "1f69a",
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
        "unicode": "1f69b",
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
        "unicode": "1f69c",
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
        "unicode": "1f3cd",
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
        "unicode": "1f6b2",
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
        "unicode": "1f6a8",
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
        "unicode": "1f694",
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
        "unicode": "1f68d",
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
        "unicode": "1f698",
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
        "unicode": "1f696",
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
        "unicode": "1f6a1",
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
        "unicode": "1f6a0",
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
        "unicode": "1f69f",
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
        "unicode": "1f683",
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
        "unicode": "1f68b",
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
        "unicode": "1f69d",
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
        "unicode": "1f684",
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
        "unicode": "1f685",
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
        "unicode": "1f688",
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
        "unicode": "1f69e",
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
        "unicode": "1f682",
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
        "unicode": "1f686",
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
        "unicode": "1f687",
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
        "unicode": "1f68a",
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
        "unicode": "1f689",
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
        "unicode": "1f681",
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
        "unicode": "1f6e9",
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
        "unicode": "2708",
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
        "unicode": "1f6eb",
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
        "unicode": "1f6ec",
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
        "unicode": "26f5",
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
        "unicode": "1f6e5",
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
        "unicode": "1f6a4",
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
        "unicode": "26f4",
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
        "unicode": "1f6f3",
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
        "unicode": "1f680",
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
        "unicode": "1f6f0",
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
        "unicode": "1f4ba",
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
        "unicode": "2693",
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
        "unicode": "1f6a7",
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
        "unicode": "26fd",
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
        "unicode": "1f68f",
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
        "unicode": "1f6a6",
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
        "unicode": "1f6a5",
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
        "unicode": "1f3c1",
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
        "unicode": "1f6a2",
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
        "unicode": "1f3a1",
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
        "unicode": "1f3a2",
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
        "unicode": "1f3a0",
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
        "unicode": "1f3d7",
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
        "unicode": "1f301",
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
        "unicode": "1f5fc",
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
        "unicode": "1f3ed",
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
        "unicode": "26f2",
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
        "unicode": "1f391",
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
        "unicode": "26f0",
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
        "unicode": "1f3d4",
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
        "unicode": "1f5fb",
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
        "unicode": "1f30b",
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
        "unicode": "1f5fe",
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
        "unicode": "1f3d5",
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
        "unicode": "26fa",
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
        "unicode": "1f3de",
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
        "unicode": "1f6e3",
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
        "unicode": "1f6e4",
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
        "unicode": "1f305",
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
        "unicode": "1f304",
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
        "unicode": "1f3dc",
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
        "unicode": "1f3d6",
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
        "unicode": "1f3dd",
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
        "unicode": "1f307",
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
        "unicode": "1f306",
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
        "unicode": "1f3d9",
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
        "unicode": "1f303",
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
        "unicode": "1f309",
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
        "unicode": "1f30c",
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
        "unicode": "1f320",
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
        "unicode": "1f387",
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
        "unicode": "1f386",
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
        "unicode": "1f308",
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
        "unicode": "1f3d8",
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
        "unicode": "1f3f0",
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
        "unicode": "1f3ef",
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
        "unicode": "1f3df",
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
        "unicode": "1f5fd",
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
        "unicode": "1f3e0",
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
        "unicode": "1f3e1",
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
        "unicode": "1f3da",
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
        "unicode": "1f3e2",
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
        "unicode": "1f3ec",
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
        "unicode": "1f3e3",
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
        "unicode": "1f3e4",
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
        "unicode": "1f3e5",
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
        "unicode": "1f3e6",
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
        "unicode": "1f3e8",
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
        "unicode": "1f3ea",
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
        "unicode": "1f3eb",
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
        "unicode": "1f3e9",
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
        "unicode": "1f492",
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
        "unicode": "1f3db",
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
        "unicode": "26ea",
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
        "unicode": "1f54c",
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
        "unicode": "1f54d",
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
        "unicode": "1f54b",
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
        "unicode": "26e9",
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
        "unicode": "26bd",
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
        "unicode": "1f3c0",
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
        "unicode": "1f3c8",
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
        "unicode": "26be",
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
        "unicode": "1f3be",
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
        "unicode": "1f3d0",
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
        "unicode": "1f3c9",
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
        "unicode": "1f3b1",
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
        "unicode": "26f3",
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
        "unicode": "1f3cc",
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
        "unicode": "1f3d3",
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
        "unicode": "1f3f8",
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
        "unicode": "1f3d2",
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
        "unicode": "1f3d1",
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
        "unicode": "1f3cf",
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
        "unicode": "1f3bf",
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
        "unicode": "26f7",
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
        "unicode": "1f3c2",
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
        "unicode": "26f8",
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
        "unicode": "1f3f9",
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
        "unicode": "1f3a3",
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
        "unicode": "1f6a3",
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
        "unicode": "1f3ca",
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
        "unicode": "1f3c4",
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
        "unicode": "1f6c0",
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
        "unicode": "26f9",
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
        "unicode": "1f3cb",
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
        "unicode": "1f6b4",
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
        "unicode": "1f6b5",
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
        "unicode": "1f3c7",
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
        "unicode": "1f574",
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
        "unicode": "1f3c6",
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
        "unicode": "1f3bd",
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
        "unicode": "1f3c5",
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
        "unicode": "1f396",
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
        "unicode": "1f397",
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
        "unicode": "1f3f5",
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
        "unicode": "1f3ab",
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
        "unicode": "1f39f",
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
        "unicode": "1f3ad",
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
        "unicode": "1f3a8",
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
        "unicode": "1f3aa",
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
        "unicode": "1f3a4",
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
        "unicode": "1f3a7",
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
        "unicode": "1f3bc",
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
        "unicode": "1f3b9",
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
        "unicode": "1f3b7",
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
        "unicode": "1f3ba",
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
        "unicode": "1f3b8",
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
        "unicode": "1f3bb",
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
        "unicode": "1f3ac",
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
        "unicode": "1f3ae",
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
        "unicode": "1f47e",
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
        "unicode": "1f3af",
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
        "unicode": "1f3b2",
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
        "unicode": "1f3b0",
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
        "unicode": "1f3b3",
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
        "unicode": "1f3fb",
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
        "unicode": "1f3fc",
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
        "unicode": "1f3fd",
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
        "unicode": "1f3fe",
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
        "unicode": "1f3ff",
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
        "unicode": "1f1e6-1f1eb",
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
        "unicode": "1f1e6-1f1fd",
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
        "unicode": "1f1e6-1f1f1",
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
        "unicode": "1f1e9-1f1ff",
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
        "unicode": "1f1e6-1f1f8",
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
        "unicode": "1f1e6-1f1e9",
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
        "unicode": "1f1e6-1f1f4",
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
        "unicode": "1f1e6-1f1ee",
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
        "unicode": "1f1e6-1f1f6",
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
        "unicode": "1f1e6-1f1ec",
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
        "unicode": "1f1e6-1f1f7",
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
        "unicode": "1f1e6-1f1f2",
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
        "unicode": "1f1e6-1f1fc",
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
        "unicode": "1f1e6-1f1fa",
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
        "unicode": "1f1e6-1f1f9",
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
        "unicode": "1f1e6-1f1ff",
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
        "unicode": "1f1e7-1f1f8",
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
        "unicode": "1f1e7-1f1ed",
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
        "unicode": "1f1e7-1f1e9",
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
        "unicode": "1f1e7-1f1e7",
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
        "unicode": "1f1e7-1f1fe",
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
        "unicode": "1f1e7-1f1ea",
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
        "unicode": "1f1e7-1f1ff",
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
        "unicode": "1f1e7-1f1ef",
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
        "unicode": "1f1e7-1f1f2",
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
        "unicode": "1f1e7-1f1f9",
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
        "unicode": "1f1e7-1f1f4",
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
        "unicode": "1f1e7-1f1f6",
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
        "unicode": "1f1e7-1f1e6",
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
        "unicode": "1f1e7-1f1fc",
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
        "unicode": "1f1e7-1f1f7",
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
        "unicode": "1f1ee-1f1f4",
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
        "unicode": "1f1fb-1f1ec",
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
        "unicode": "1f1e7-1f1f3",
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
        "unicode": "1f1e7-1f1ec",
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
        "unicode": "1f1e7-1f1eb",
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
        "unicode": "1f1e7-1f1ee",
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
        "unicode": "1f1e8-1f1fb",
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
        "unicode": "1f1f0-1f1ed",
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
        "unicode": "1f1e8-1f1f2",
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
        "unicode": "1f1e8-1f1e6",
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
        "unicode": "1f1ee-1f1e8",
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
        "unicode": "1f1f0-1f1fe",
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
        "unicode": "1f1e8-1f1eb",
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
        "unicode": "1f1f9-1f1e9",
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
        "unicode": "1f1e8-1f1f1",
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
        "unicode": "1f1e8-1f1f3",
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
        "unicode": "1f1e8-1f1fd",
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
        "unicode": "1f1e8-1f1e8",
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
        "unicode": "1f1e8-1f1f4",
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
        "unicode": "1f1f0-1f1f2",
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
        "unicode": "1f1e8-1f1ec",
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
        "unicode": "1f1e8-1f1e9",
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
        "unicode": "1f1e8-1f1f0",
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
        "unicode": "1f1e8-1f1f7",
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
        "unicode": "1f1ed-1f1f7",
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
        "unicode": "1f1e8-1f1fa",
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
        "unicode": "1f1e8-1f1fc",
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
        "unicode": "1f1e8-1f1fe",
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
        "unicode": "1f1e8-1f1ff",
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
        "unicode": "1f1e9-1f1f0",
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
        "unicode": "1f1e9-1f1ef",
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
        "unicode": "1f1e9-1f1f2",
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
        "unicode": "1f1e9-1f1f4",
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
        "unicode": "1f1ea-1f1e8",
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
        "unicode": "1f1ea-1f1ec",
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
        "unicode": "1f1f8-1f1fb",
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
        "unicode": "1f1ec-1f1f6",
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
        "unicode": "1f1ea-1f1f7",
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
        "unicode": "1f1ea-1f1ea",
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
        "unicode": "1f1ea-1f1f9",
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
        "unicode": "1f1ea-1f1fa",
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
        "unicode": "1f1eb-1f1f0",
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
        "unicode": "1f1eb-1f1f4",
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
        "unicode": "1f1eb-1f1ef",
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
        "unicode": "1f1eb-1f1ee",
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
        "unicode": "1f1eb-1f1f7",
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
        "unicode": "1f1ec-1f1eb",
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
        "unicode": "1f1f5-1f1eb",
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
        "unicode": "1f1f9-1f1eb",
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
        "unicode": "1f1ec-1f1e6",
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
        "unicode": "1f1ec-1f1f2",
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
        "unicode": "1f1ec-1f1ea",
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
        "unicode": "1f1e9-1f1ea",
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
        "unicode": "1f1ec-1f1ed",
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
        "unicode": "1f1ec-1f1ee",
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
        "unicode": "1f1ec-1f1f7",
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
        "unicode": "1f1ec-1f1f1",
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
        "unicode": "1f1ec-1f1e9",
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
        "unicode": "1f1ec-1f1f5",
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
        "unicode": "1f1ec-1f1fa",
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
        "unicode": "1f1ec-1f1f9",
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
        "unicode": "1f1ec-1f1ec",
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
        "unicode": "1f1ec-1f1f3",
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
        "unicode": "1f1ec-1f1fc",
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
        "unicode": "1f1ec-1f1fe",
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
        "unicode": "1f1ed-1f1f9",
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
        "unicode": "1f1ed-1f1f3",
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
        "unicode": "1f1ed-1f1f0",
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
        "unicode": "1f1ed-1f1fa",
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
        "unicode": "1f1ee-1f1f8",
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
        "unicode": "1f1ee-1f1f3",
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
        "unicode": "1f1ee-1f1e9",
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
        "unicode": "1f1ee-1f1f7",
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
        "unicode": "1f1ee-1f1f6",
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
        "unicode": "1f1ee-1f1ea",
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
        "unicode": "1f1ee-1f1f2",
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
        "unicode": "1f1ee-1f1f1",
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
        "unicode": "1f1ee-1f1f9",
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
        "unicode": "1f1e8-1f1ee",
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
        "unicode": "1f1ef-1f1f2",
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
        "unicode": "1f1ef-1f1f5",
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
        "unicode": "1f1ef-1f1ea",
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
        "unicode": "1f1ef-1f1f4",
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
        "unicode": "1f1f0-1f1ff",
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
        "unicode": "1f1f0-1f1ea",
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
        "unicode": "1f1f0-1f1ee",
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
        "unicode": "1f1fd-1f1f0",
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
        "unicode": "1f1f0-1f1fc",
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
        "unicode": "1f1f0-1f1ec",
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
        "unicode": "1f1f1-1f1e6",
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
        "unicode": "1f1f1-1f1fb",
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
        "unicode": "1f1f1-1f1e7",
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
        "unicode": "1f1f1-1f1f8",
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
        "unicode": "1f1f1-1f1f7",
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
        "unicode": "1f1f1-1f1fe",
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
        "unicode": "1f1f1-1f1ee",
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
        "unicode": "1f1f1-1f1f9",
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
        "unicode": "1f1f1-1f1fa",
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
        "unicode": "1f1f2-1f1f4",
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
        "unicode": "1f1f2-1f1f0",
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
        "unicode": "1f1f2-1f1ec",
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
        "unicode": "1f1f2-1f1fc",
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
        "unicode": "1f1f2-1f1fe",
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
        "unicode": "1f1f2-1f1fb",
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
        "unicode": "1f1f2-1f1f1",
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
        "unicode": "1f1f2-1f1f9",
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
        "unicode": "1f1f2-1f1ed",
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
        "unicode": "1f1f2-1f1f6",
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
        "unicode": "1f1f2-1f1f7",
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
        "unicode": "1f1f2-1f1fa",
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
        "unicode": "1f1fe-1f1f9",
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
        "unicode": "1f1f2-1f1fd",
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
        "unicode": "1f1eb-1f1f2",
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
        "unicode": "1f1f2-1f1e9",
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
        "unicode": "1f1f2-1f1e8",
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
        "unicode": "1f1f2-1f1f3",
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
        "unicode": "1f1f2-1f1ea",
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
        "unicode": "1f1f2-1f1f8",
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
        "unicode": "1f1f2-1f1e6",
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
        "unicode": "1f1f2-1f1ff",
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
        "unicode": "1f1f2-1f1f2",
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
        "unicode": "1f1f3-1f1e6",
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
        "unicode": "1f1f3-1f1f7",
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
        "unicode": "1f1f3-1f1f5",
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
        "unicode": "1f1f3-1f1f1",
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
        "unicode": "1f1f3-1f1e8",
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
        "unicode": "1f1f3-1f1ff",
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
        "unicode": "1f1f3-1f1ee",
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
        "unicode": "1f1f3-1f1ea",
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
        "unicode": "1f1f3-1f1ec",
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
        "unicode": "1f1f3-1f1fa",
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
        "unicode": "1f1f3-1f1eb",
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
        "unicode": "1f1f2-1f1f5",
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
        "unicode": "1f1f0-1f1f5",
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
        "unicode": "1f1f3-1f1f4",
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
        "unicode": "1f1f4-1f1f2",
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
        "unicode": "1f1f5-1f1f0",
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
        "unicode": "1f1f5-1f1fc",
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
        "unicode": "1f1f5-1f1f8",
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
        "unicode": "1f1f5-1f1e6",
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
        "unicode": "1f1f5-1f1ec",
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
        "unicode": "1f1f5-1f1fe",
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
        "unicode": "1f1f5-1f1ea",
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
        "unicode": "1f1f5-1f1ed",
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
        "unicode": "1f1f5-1f1f3",
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
        "unicode": "1f1f5-1f1f1",
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
        "unicode": "1f1f5-1f1f9",
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
        "unicode": "1f1f5-1f1f7",
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
        "unicode": "1f1f6-1f1e6",
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
        "unicode": "1f1f7-1f1ea",
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
        "unicode": "1f1f7-1f1f4",
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
        "unicode": "1f1f7-1f1fa",
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
        "unicode": "1f1f7-1f1fc",
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
        "unicode": "1f1e7-1f1f1",
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
        "unicode": "1f1f8-1f1ed",
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
        "unicode": "1f1f0-1f1f3",
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
        "unicode": "1f1f1-1f1e8",
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
        "unicode": "1f1f5-1f1f2",
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
        "unicode": "1f1fb-1f1e8",
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
        "unicode": "1f1fc-1f1f8",
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
        "unicode": "1f1f8-1f1f2",
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
        "unicode": "1f1f8-1f1f9",
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
        "unicode": "1f1f8-1f1e6",
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
        "unicode": "1f1f8-1f1f3",
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
        "unicode": "1f1f7-1f1f8",
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
        "unicode": "1f1f8-1f1e8",
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
        "unicode": "1f1f8-1f1f1",
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
        "unicode": "1f1f8-1f1ec",
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
        "unicode": "1f1f8-1f1fd",
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
        "unicode": "1f1f8-1f1f0",
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
        "unicode": "1f1f8-1f1ee",
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
        "unicode": "1f1f8-1f1e7",
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
        "unicode": "1f1f8-1f1f4",
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
        "unicode": "1f1ff-1f1e6",
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
        "unicode": "1f1ec-1f1f8",
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
        "unicode": "1f1f0-1f1f7",
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
        "unicode": "1f1f8-1f1f8",
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
        "unicode": "1f1ea-1f1f8",
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
        "unicode": "1f1f1-1f1f0",
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
        "unicode": "1f1f8-1f1e9",
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
        "unicode": "1f1f8-1f1f7",
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
        "unicode": "1f1f8-1f1ff",
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
        "unicode": "1f1f8-1f1ea",
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
        "unicode": "1f1e8-1f1ed",
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
        "unicode": "1f1f8-1f1fe",
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
        "unicode": "1f1f9-1f1fc",
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
        "unicode": "1f1f9-1f1ef",
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
        "unicode": "1f1f9-1f1ff",
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
        "unicode": "1f1f9-1f1ed",
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
        "unicode": "1f1f9-1f1f1",
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
        "unicode": "1f1f9-1f1ec",
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
        "unicode": "1f1f9-1f1f0",
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
        "unicode": "1f1f9-1f1f4",
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
        "unicode": "1f1f9-1f1f9",
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
        "unicode": "1f1f9-1f1f3",
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
        "unicode": "1f1f9-1f1f7",
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
        "unicode": "1f1f9-1f1f2",
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
        "unicode": "1f1f9-1f1e8",
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
        "unicode": "1f1f9-1f1fb",
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
        "unicode": "1f1fa-1f1ec",
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
        "unicode": "1f1fa-1f1e6",
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
        "unicode": "1f1e6-1f1ea",
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
        "unicode": "1f1ec-1f1e7",
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
        "unicode": "1f1fa-1f1f8",
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
        "unicode": "1f1fb-1f1ee",
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
        "unicode": "1f1fa-1f1fe",
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
        "unicode": "1f1fa-1f1ff",
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
        "unicode": "1f1fb-1f1fa",
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
        "unicode": "1f1fb-1f1e6",
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
        "unicode": "1f1fb-1f1ea",
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
        "unicode": "1f1fb-1f1f3",
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
        "unicode": "1f1fc-1f1eb",
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
        "unicode": "1f1ea-1f1ed",
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
        "unicode": "1f1fe-1f1ea",
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
        "unicode": "1f1ff-1f1f2",
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
        "unicode": "1f1ff-1f1fc",
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
        "unicode": "1f1e6-1f1e8",
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
        "unicode": "1f1e7-1f1fb",
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
        "unicode": "1f1e8-1f1f5",
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
        "unicode": "1f1e9-1f1ec",
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
        "unicode": "1f1ea-1f1e6",
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
        "unicode": "1f1ed-1f1f2",
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
        "unicode": "1f1f2-1f1eb",
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
        "unicode": "1f1f8-1f1ef",
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
        "unicode": "1f1f9-1f1e6",
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
        "unicode": "1f1fa-1f1f2",
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

      replaceText(wdtEmojiBundle.input, selection, convert(this.dataset.wdtEmojiUnicode));
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
   * Refer from EmojiOne source code
   * https://github.com/emojione/emojione/blob/865516e2f819f598e2417d3ec143916daaf3111d/lib/js/emojione.js#L398-L427
   *
   * Many thanks to EmojiOne!
   */
  var convert = function(unicode) {
    if (unicode.indexOf("-") > -1) {
      var parts = [];
      var s = unicode.split('-');
      for (var i = 0; i < s.length; i++) {
        var part = parseInt(s[i], 16);
        if (part >= 0x10000 && part <= 0x10FFFF) {
          var hi = Math.floor((part - 0x10000) / 0x400) + 0xD800;
          var lo = ((part - 0x10000) % 0x400) + 0xDC00;
          part = (String.fromCharCode(hi) + String.fromCharCode(lo));
        }
        else {
          part = String.fromCharCode(part);
        }
        parts.push(part);
      }
      return parts.join('');
    }
    else {
      var s = parseInt(unicode, 16);
      if (s >= 0x10000 && s <= 0x10FFFF) {
        var hi = Math.floor((s - 0x10000) / 0x400) + 0xD800;
        var lo = ((s - 0x10000) % 0x400) + 0xDC00;
        return (String.fromCharCode(hi) + String.fromCharCode(lo));
      }
      else {
        return String.fromCharCode(s);
      }
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

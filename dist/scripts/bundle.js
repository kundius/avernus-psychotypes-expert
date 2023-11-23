/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/intl-tel-input/build/js/intlTelInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/intl-tel-input/build/js/intlTelInput.js ***!
  \**************************************************************/
/***/ ((module) => {

/*
 * International Telephone Input v18.2.1
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */
// wrap in UMD
(function (factory) {
  if ( true && module.exports) module.exports = factory();else window.intlTelInput = factory();
})(function (undefined) {
  "use strict";

  return function () {
    // Array of country objects for the flag dropdown.
    // Here is the criteria for the plugin to support a given country/territory
    // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
    // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
    // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
    // Each country array has the following information:
    // [
    //    Country name,
    //    iso2 code,
    //    International dial code,
    //    Order (if >1 country with same dial code),
    //    Area codes
    // ]
    var allCountries = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["North Macedonia (Северна Македонија)", "mk", "389"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]]; // loop over all of the countries above, restructuring the data to be objects with named keys

    for (var i = 0; i < allCountries.length; i++) {
      var c = allCountries[i];
      allCountries[i] = {
        name: c[0],
        iso2: c[1],
        dialCode: c[2],
        priority: c[3] || 0,
        areaCodes: c[4] || null
      };
    }

    "use strict";

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);

      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }

    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");

      return typeof key === "symbol" ? key : String(key);
    }

    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];

      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }

      return (hint === "string" ? String : Number)(input);
    }

    var intlTelInputGlobals = {
      getInstance: function getInstance(input) {
        var id = input.getAttribute("data-intl-tel-input-id");
        return window.intlTelInputGlobals.instances[id];
      },
      instances: {},
      // using a global like this allows us to mock it in the tests
      documentReady: function documentReady() {
        return document.readyState === "complete";
      }
    };

    if (typeof window === "object") {
      window.intlTelInputGlobals = intlTelInputGlobals;
    } // these vars persist through all instances of the plugin


    var id = 0;
    var defaults = {
      // whether or not to allow the dropdown
      allowDropdown: true,
      // auto insert dial code (A) on init, (B) on user selecting a country, (C) on calling setCountry
      // also listen for blur/submit and auto remove dial code if that's all there is
      autoInsertDialCode: false,
      // add a placeholder in the input with an example number for the selected country
      autoPlaceholder: "polite",
      // modify the parentClass
      customContainer: "",
      // modify the auto placeholder
      customPlaceholder: null,
      // append menu to specified element
      dropdownContainer: null,
      // don't display these countries
      excludeCountries: [],
      // format the input value during initialisation and on setNumber
      formatOnDisplay: true,
      // geoIp lookup function
      geoIpLookup: null,
      // inject a hidden input with this name, and on submit, populate it with the result of getNumber
      hiddenInput: "",
      // initial country
      initialCountry: "",
      // localized country names e.g. { 'de': 'Deutschland' }
      localizedCountries: null,
      // national vs international formatting for numbers e.g. placeholders and displaying existing numbers
      nationalMode: true,
      // display only these countries
      onlyCountries: [],
      // number type to use for placeholders
      placeholderNumberType: "MOBILE",
      // the countries at the top of the list. defaults to united states and united kingdom
      preferredCountries: ["us", "gb"],
      // display the country dial code next to the selected flag
      separateDialCode: false,
      // option to hide the flags - must be used with separateDialCode, or allowDropdown=false
      showFlags: true,
      // specify the path to the libphonenumber script to enable validation/formatting
      utilsScript: ""
    }; // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes

    var regionlessNanpNumbers = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"]; // utility function to iterate over an object. can't use Object.entries or native forEach because
    // of IE11

    var forEachProp = function forEachProp(obj, callback) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        callback(keys[i], obj[keys[i]]);
      }
    }; // run a method on each instance of the plugin


    var forEachInstance = function forEachInstance(method) {
      forEachProp(window.intlTelInputGlobals.instances, function (key) {
        window.intlTelInputGlobals.instances[key][method]();
      });
    }; // this is our plugin class that we will create an instance of
    // eslint-disable-next-line no-unused-vars


    var Iti = /*#__PURE__*/function () {
      function Iti(input, options) {
        var _this = this;

        _classCallCheck(this, Iti);

        this.id = id++;
        this.telInput = input;
        this.activeItem = null;
        this.highlightedItem = null; // process specified options / defaults
        // alternative to Object.assign, which isn't supported by IE11

        var customOptions = options || {};
        this.options = {};
        forEachProp(defaults, function (key, value) {
          _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
        });
        this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
      }

      _createClass(Iti, [{
        key: "_init",
        value: function _init() {
          var _this2 = this; // if in nationalMode, do not insert dial codes


          if (this.options.nationalMode) {
            this.options.autoInsertDialCode = false;
          } // if separateDialCode enabled, do not insert dial codes


          if (this.options.separateDialCode) {
            this.options.autoInsertDialCode = false;
          } // force showFlags=true if there's a dropdown and we're not displaying the dial code,
          // as otherwise you just have a down arrow on it's own which doesn't make sense


          var forceShowFlags = this.options.allowDropdown && !this.options.separateDialCode;

          if (!this.options.showFlags && forceShowFlags) {
            this.options.showFlags = true;
          } // we cannot just test screen size as some smartphones/website meta tags will report desktop
          // resolutions
          // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
          // rest of these declarations
          // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'


          this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

          if (this.isMobile) {
            // trigger the mobile dropdown css
            document.body.classList.add("iti-mobile"); // on mobile, we want a full screen dropdown, so we must append it to the body

            if (!this.options.dropdownContainer) {
              this.options.dropdownContainer = document.body;
            }
          } // check if input has one parent with RTL


          this.isRTL = !!this.telInput.closest("[dir=rtl]"); // these promises get resolved when their individual requests complete
          // this way the dev can do something like iti.promise.then(...) to know when all requests are
          // complete

          if (typeof Promise !== "undefined") {
            var autoCountryPromise = new Promise(function (resolve, reject) {
              _this2.resolveAutoCountryPromise = resolve;
              _this2.rejectAutoCountryPromise = reject;
            });
            var utilsScriptPromise = new Promise(function (resolve, reject) {
              _this2.resolveUtilsScriptPromise = resolve;
              _this2.rejectUtilsScriptPromise = reject;
            });
            this.promise = Promise.all([autoCountryPromise, utilsScriptPromise]);
          } else {
            // prevent errors when Promise doesn't exist
            this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function () {};

            this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function () {};
          } // in various situations there could be no country selected initially, but we need to be able
          // to assume this variable exists


          this.selectedCountryData = {}; // process all the data: onlyCountries, excludeCountries, preferredCountries etc

          this._processCountryData(); // generate the markup


          this._generateMarkup(); // set the initial state of the input value and the selected flag


          this._setInitialState(); // start all of the event listeners: autoInsertDialCode, input keydown, selectedFlag click


          this._initListeners(); // utils script, and auto country


          this._initRequests();
        }
      }, {
        key: "_processCountryData",
        value: function _processCountryData() {
          // process onlyCountries or excludeCountries array if present
          this._processAllCountries(); // process the countryCodes map


          this._processCountryCodes(); // process the preferredCountries


          this._processPreferredCountries(); // translate countries according to localizedCountries option


          if (this.options.localizedCountries) {
            this._translateCountriesByLocale();
          } // sort countries by name


          if (this.options.onlyCountries.length || this.options.localizedCountries) {
            this.countries.sort(this._countryNameSort);
          }
        }
      }, {
        key: "_addCountryCode",
        value: function _addCountryCode(iso2, countryCode, priority) {
          if (countryCode.length > this.countryCodeMaxLen) {
            this.countryCodeMaxLen = countryCode.length;
          }

          if (!this.countryCodes.hasOwnProperty(countryCode)) {
            this.countryCodes[countryCode] = [];
          } // bail if we already have this country for this countryCode


          for (var i = 0; i < this.countryCodes[countryCode].length; i++) {
            if (this.countryCodes[countryCode][i] === iso2) {
              return;
            }
          } // check for undefined as 0 is falsy


          var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
          this.countryCodes[countryCode][index] = iso2;
        }
      }, {
        key: "_processAllCountries",
        value: function _processAllCountries() {
          if (this.options.onlyCountries.length) {
            var lowerCaseOnlyCountries = this.options.onlyCountries.map(function (country) {
              return country.toLowerCase();
            });
            this.countries = allCountries.filter(function (country) {
              return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
            });
          } else if (this.options.excludeCountries.length) {
            var lowerCaseExcludeCountries = this.options.excludeCountries.map(function (country) {
              return country.toLowerCase();
            });
            this.countries = allCountries.filter(function (country) {
              return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
            });
          } else {
            this.countries = allCountries;
          }
        }
      }, {
        key: "_translateCountriesByLocale",
        value: function _translateCountriesByLocale() {
          for (var i = 0; i < this.countries.length; i++) {
            var iso = this.countries[i].iso2.toLowerCase();

            if (this.options.localizedCountries.hasOwnProperty(iso)) {
              this.countries[i].name = this.options.localizedCountries[iso];
            }
          }
        }
      }, {
        key: "_countryNameSort",
        value: function _countryNameSort(a, b) {
          if (a.name < b.name) {
            return -1;
          }

          if (a.name > b.name) {
            return 1;
          }

          return 0;
        }
      }, {
        key: "_processCountryCodes",
        value: function _processCountryCodes() {
          this.countryCodeMaxLen = 0; // here we store just dial codes

          this.dialCodes = {}; // here we store "country codes" (both dial codes and their area codes)

          this.countryCodes = {}; // first: add dial codes

          for (var i = 0; i < this.countries.length; i++) {
            var c = this.countries[i];

            if (!this.dialCodes[c.dialCode]) {
              this.dialCodes[c.dialCode] = true;
            }

            this._addCountryCode(c.iso2, c.dialCode, c.priority);
          } // next: add area codes
          // this is a second loop over countries, to make sure we have all of the "root" countries
          // already in the map, so that we can access them, as each time we add an area code substring
          // to the map, we also need to include the "root" country's code, as that also matches


          for (var _i = 0; _i < this.countries.length; _i++) {
            var _c = this.countries[_i]; // area codes

            if (_c.areaCodes) {
              var rootCountryCode = this.countryCodes[_c.dialCode][0]; // for each area code

              for (var j = 0; j < _c.areaCodes.length; j++) {
                var areaCode = _c.areaCodes[j]; // for each digit in the area code to add all partial matches as well

                for (var k = 1; k < areaCode.length; k++) {
                  var partialDialCode = _c.dialCode + areaCode.substr(0, k); // start with the root country, as that also matches this dial code

                  this._addCountryCode(rootCountryCode, partialDialCode);

                  this._addCountryCode(_c.iso2, partialDialCode);
                } // add the full area code


                this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
              }
            }
          }
        }
      }, {
        key: "_processPreferredCountries",
        value: function _processPreferredCountries() {
          this.preferredCountries = [];

          for (var i = 0; i < this.options.preferredCountries.length; i++) {
            var countryCode = this.options.preferredCountries[i].toLowerCase();

            var countryData = this._getCountryData(countryCode, false, true);

            if (countryData) {
              this.preferredCountries.push(countryData);
            }
          }
        }
      }, {
        key: "_createEl",
        value: function _createEl(name, attrs, container) {
          var el = document.createElement(name);

          if (attrs) {
            forEachProp(attrs, function (key, value) {
              return el.setAttribute(key, value);
            });
          }

          if (container) {
            container.appendChild(el);
          }

          return el;
        }
      }, {
        key: "_generateMarkup",
        value: function _generateMarkup() {
          // if autocomplete does not exist on the element and its form, then
          // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
          // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
          // autocompleted number, which on submit could mean wrong number is saved
          if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
            this.telInput.setAttribute("autocomplete", "off");
          }

          var _this$options = this.options,
              allowDropdown = _this$options.allowDropdown,
              separateDialCode = _this$options.separateDialCode,
              showFlags = _this$options.showFlags,
              customContainer = _this$options.customContainer,
              hiddenInput = _this$options.hiddenInput,
              dropdownContainer = _this$options.dropdownContainer; // containers (mostly for positioning)

          var parentClass = "iti";

          if (allowDropdown) {
            parentClass += " iti--allow-dropdown";
          }

          if (separateDialCode) {
            parentClass += " iti--separate-dial-code";
          }

          if (showFlags) {
            parentClass += " iti--show-flags";
          }

          if (customContainer) {
            parentClass += " ".concat(customContainer);
          }

          var wrapper = this._createEl("div", {
            "class": parentClass
          });

          this.telInput.parentNode.insertBefore(wrapper, this.telInput); // only hide the flagsContainer if allowDropdown, showFlags and separateDialCode are all false

          var showFlagsContainer = allowDropdown || showFlags || separateDialCode;

          if (showFlagsContainer) {
            this.flagsContainer = this._createEl("div", {
              "class": "iti__flag-container"
            }, wrapper);
          }

          wrapper.appendChild(this.telInput); // selected flag (displayed to left of input)
          // using Aria tags for "Select-Only Combobox Example"
          // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/

          if (showFlagsContainer) {
            this.selectedFlag = this._createEl("div", _objectSpread({
              "class": "iti__selected-flag"
            }, allowDropdown && {
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-controls": "iti-".concat(this.id, "__country-listbox"),
              "aria-expanded": "false",
              "aria-label": "Telephone country code"
            }), this.flagsContainer);
          }

          if (showFlags) {
            this.selectedFlagInner = this._createEl("div", {
              "class": "iti__flag"
            }, this.selectedFlag);
          }

          if (this.selectedFlag && this.telInput.disabled) {
            this.selectedFlag.setAttribute("aria-disabled", "true");
          }

          if (separateDialCode) {
            this.selectedDialCode = this._createEl("div", {
              "class": "iti__selected-dial-code"
            }, this.selectedFlag);
          }

          if (allowDropdown) {
            if (!this.telInput.disabled) {
              // make element focusable and tab navigable
              this.selectedFlag.setAttribute("tabindex", "0");
            }

            this.dropdownArrow = this._createEl("div", {
              "class": "iti__arrow"
            }, this.selectedFlag); // country dropdown: preferred countries, then divider, then all countries

            this.countryList = this._createEl("ul", {
              "class": "iti__country-list iti__hide",
              id: "iti-".concat(this.id, "__country-listbox"),
              role: "listbox",
              "aria-label": "List of countries"
            });

            if (this.preferredCountries.length) {
              this._appendListItems(this.preferredCountries, "iti__preferred", true);

              this._createEl("li", {
                "class": "iti__divider",
                role: "separator",
                "aria-disabled": "true"
              }, this.countryList);
            }

            this._appendListItems(this.countries, "iti__standard"); // create dropdownContainer markup


            if (dropdownContainer) {
              this.dropdown = this._createEl("div", {
                "class": "iti iti--container"
              });
              this.dropdown.appendChild(this.countryList);
            } else {
              this.flagsContainer.appendChild(this.countryList);
            }
          }

          if (hiddenInput) {
            var hiddenInputName = hiddenInput;
            var name = this.telInput.getAttribute("name");

            if (name) {
              var i = name.lastIndexOf("["); // if input name contains square brackets, then give the hidden input the same name,
              // replacing the contents of the last set of brackets with the given hiddenInput name

              if (i !== -1) {
                hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
              }
            }

            this.hiddenInput = this._createEl("input", {
              type: "hidden",
              name: hiddenInputName
            });
            wrapper.appendChild(this.hiddenInput);
          }
        }
      }, {
        key: "_appendListItems",
        value: function _appendListItems(countries, className, preferred) {
          // we create so many DOM elements, it is faster to build a temp string
          // and then add everything to the DOM in one go at the end
          var tmp = ""; // for each country

          for (var i = 0; i < countries.length; i++) {
            var c = countries[i];
            var idSuffix = preferred ? "-preferred" : ""; // open the list item

            tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "' aria-selected='false'>"); // add the flag

            if (this.options.showFlags) {
              tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
            } // and the country name and dial code


            tmp += "<span class='iti__country-name'>".concat(c.name, "</span>");
            tmp += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>"); // close the list item

            tmp += "</li>";
          }

          this.countryList.insertAdjacentHTML("beforeend", tmp);
        }
      }, {
        key: "_setInitialState",
        value: function _setInitialState() {
          // fix firefox bug: when first load page (with input with value set to number with intl dial
          // code) and initialising plugin removes the dial code from the input, then refresh page,
          // and we try to init plugin again but this time on number without dial code so get grey flag
          var attributeValue = this.telInput.getAttribute("value");
          var inputValue = this.telInput.value;
          var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
          var val = useAttribute ? attributeValue : inputValue;

          var dialCode = this._getDialCode(val);

          var isRegionlessNanp = this._isRegionlessNanp(val);

          var _this$options2 = this.options,
              initialCountry = _this$options2.initialCountry,
              autoInsertDialCode = _this$options2.autoInsertDialCode; // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
          // flag, else fall back to the default country

          if (dialCode && !isRegionlessNanp) {
            this._updateFlagFromNumber(val);
          } else if (initialCountry !== "auto") {
            // see if we should select a flag
            if (initialCountry) {
              this._setFlag(initialCountry.toLowerCase());
            } else {
              if (dialCode && isRegionlessNanp) {
                // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                this._setFlag("us");
              } else {
                // no dial code and no initialCountry, so default to first in list
                this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;

                if (!val) {
                  this._setFlag(this.defaultCountry);
                }
              }
            } // if empty and autoInsertDialCode then insert the dial code


            if (!val && autoInsertDialCode) {
              this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
            }
          } // NOTE: if initialCountry is set to auto, that will be handled separately
          // format - note this wont be run after _updateDialCode as that's only called if no val


          if (val) {
            this._updateValFromNumber(val);
          }
        }
      }, {
        key: "_initListeners",
        value: function _initListeners() {
          this._initKeyListeners();

          if (this.options.autoInsertDialCode) {
            this._initBlurListeners();
          }

          if (this.options.allowDropdown) {
            this._initDropdownListeners();
          }

          if (this.hiddenInput) {
            this._initHiddenInputListener();
          }
        }
      }, {
        key: "_initHiddenInputListener",
        value: function _initHiddenInputListener() {
          var _this3 = this;

          this._handleHiddenInputSubmit = function () {
            _this3.hiddenInput.value = _this3.getNumber();
          };

          if (this.telInput.form) {
            this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
          }
        }
      }, {
        key: "_getClosestLabel",
        value: function _getClosestLabel() {
          var el = this.telInput;

          while (el && el.tagName !== "LABEL") {
            el = el.parentNode;
          }

          return el;
        }
      }, {
        key: "_initDropdownListeners",
        value: function _initDropdownListeners() {
          var _this4 = this; // hack for input nested inside label (which is valid markup): clicking the selected-flag to
          // open the dropdown would then automatically trigger a 2nd click on the input which would
          // close it again


          this._handleLabelClick = function (e) {
            // if the dropdown is closed, then focus the input, else ignore the click
            if (_this4.countryList.classList.contains("iti__hide")) {
              _this4.telInput.focus();
            } else {
              e.preventDefault();
            }
          };

          var label = this._getClosestLabel();

          if (label) {
            label.addEventListener("click", this._handleLabelClick);
          } // toggle country dropdown on click


          this._handleClickSelectedFlag = function () {
            // only intercept this event if we're opening the dropdown
            // else let it bubble up to the top ("click-off-to-close" listener)
            // we cannot just stopPropagation as it may be needed to close another instance
            if (_this4.countryList.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
              _this4._showDropdown();
            }
          };

          this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag); // open dropdown list if currently focused

          this._handleFlagsContainerKeydown = function (e) {
            var isDropdownHidden = _this4.countryList.classList.contains("iti__hide");

            if (isDropdownHidden && ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(e.key) !== -1) {
              // prevent form from being submitted if "ENTER" was pressed
              e.preventDefault(); // prevent event from being handled again by document

              e.stopPropagation();

              _this4._showDropdown();
            } // allow navigation from dropdown to input on TAB


            if (e.key === "Tab") {
              _this4._closeDropdown();
            }
          };

          this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
        }
      }, {
        key: "_initRequests",
        value: function _initRequests() {
          var _this5 = this; // if the user has specified the path to the utils script, fetch it on window.load, else resolve


          if (this.options.utilsScript && !window.intlTelInputUtils) {
            // if the plugin is being initialised after the window.load event has already been fired
            if (window.intlTelInputGlobals.documentReady()) {
              window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
            } else {
              // wait until the load event so we don't block any other requests e.g. the flags image
              window.addEventListener("load", function () {
                window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
              });
            }
          } else {
            this.resolveUtilsScriptPromise();
          }

          if (this.options.initialCountry === "auto") {
            this._loadAutoCountry();
          } else {
            this.resolveAutoCountryPromise();
          }
        }
      }, {
        key: "_loadAutoCountry",
        value: function _loadAutoCountry() {
          // 3 options:
          // 1) already loaded (we're done)
          // 2) not already started loading (start)
          // 3) already started loading (do nothing - just wait for loading callback to fire)
          if (window.intlTelInputGlobals.autoCountry) {
            this.handleAutoCountry();
          } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
            // don't do this twice!
            window.intlTelInputGlobals.startedLoadingAutoCountry = true;

            if (typeof this.options.geoIpLookup === "function") {
              this.options.geoIpLookup(function (countryCode) {
                window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase(); // tell all instances the auto country is ready
                // TODO: this should just be the current instances
                // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                // setTimeout means that the current thread of execution will finish before executing
                // this, which allows the plugin to finish initialising.

                setTimeout(function () {
                  return forEachInstance("handleAutoCountry");
                });
              }, function () {
                return forEachInstance("rejectAutoCountryPromise");
              });
            }
          }
        }
      }, {
        key: "_initKeyListeners",
        value: function _initKeyListeners() {
          var _this6 = this; // update flag on keyup


          this._handleKeyupEvent = function () {
            if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
              _this6._triggerCountryChange();
            }
          };

          this.telInput.addEventListener("keyup", this._handleKeyupEvent); // update flag on cut/paste events (now supported in all major browsers)

          this._handleClipboardEvent = function () {
            // hack because "paste" event is fired before input is updated
            setTimeout(_this6._handleKeyupEvent);
          };

          this.telInput.addEventListener("cut", this._handleClipboardEvent);
          this.telInput.addEventListener("paste", this._handleClipboardEvent);
        }
      }, {
        key: "_cap",
        value: function _cap(number) {
          var max = this.telInput.getAttribute("maxlength");
          return max && number.length > max ? number.substr(0, max) : number;
        }
      }, {
        key: "_initBlurListeners",
        value: function _initBlurListeners() {
          var _this7 = this; // on blur or form submit: if just a dial code then remove it


          this._handleSubmitOrBlurEvent = function () {
            _this7._removeEmptyDialCode();
          };

          if (this.telInput.form) {
            this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
          }

          this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
        }
      }, {
        key: "_removeEmptyDialCode",
        value: function _removeEmptyDialCode() {
          if (this.telInput.value.charAt(0) === "+") {
            var numeric = this._getNumeric(this.telInput.value); // if just a plus, or if just a dial code


            if (!numeric || this.selectedCountryData.dialCode === numeric) {
              this.telInput.value = "";
            }
          }
        }
      }, {
        key: "_getNumeric",
        value: function _getNumeric(s) {
          return s.replace(/\D/g, "");
        }
      }, {
        key: "_trigger",
        value: function _trigger(name) {
          // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
          var e = document.createEvent("Event");
          e.initEvent(name, true, true); // can bubble, and is cancellable

          this.telInput.dispatchEvent(e);
        }
      }, {
        key: "_showDropdown",
        value: function _showDropdown() {
          this.countryList.classList.remove("iti__hide");
          this.selectedFlag.setAttribute("aria-expanded", "true");

          this._setDropdownPosition(); // update highlighting and scroll to active list item


          if (this.activeItem) {
            this._highlightListItem(this.activeItem, false);

            this._scrollTo(this.activeItem, true);
          } // bind all the dropdown-related listeners: mouseover, click, click-off, keydown


          this._bindDropdownListeners(); // update the arrow


          this.dropdownArrow.classList.add("iti__arrow--up");

          this._trigger("open:countrydropdown");
        }
      }, {
        key: "_toggleClass",
        value: function _toggleClass(el, className, shouldHaveClass) {
          if (shouldHaveClass && !el.classList.contains(className)) {
            el.classList.add(className);
          } else if (!shouldHaveClass && el.classList.contains(className)) {
            el.classList.remove(className);
          }
        }
      }, {
        key: "_setDropdownPosition",
        value: function _setDropdownPosition() {
          var _this8 = this;

          if (this.options.dropdownContainer) {
            this.options.dropdownContainer.appendChild(this.dropdown);
          }

          if (!this.isMobile) {
            var pos = this.telInput.getBoundingClientRect(); // windowTop from https://stackoverflow.com/a/14384091/217866

            var windowTop = window.pageYOffset || document.documentElement.scrollTop;
            var inputTop = pos.top + windowTop;
            var dropdownHeight = this.countryList.offsetHeight; // dropdownFitsBelow = (dropdownBottom < windowBottom)

            var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
            var dropdownFitsAbove = inputTop - dropdownHeight > windowTop; // by default, the dropdown will be below the input. If we want to position it above the
            // input, we add the dropup class.

            this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove); // if dropdownContainer is enabled, calculate postion


            if (this.options.dropdownContainer) {
              // by default the dropdown will be directly over the input because it's not in the flow.
              // If we want to position it below, we need to add some extra top value.
              var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight; // calculate placement

              this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
              this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px"); // close menu on window scroll

              this._handleWindowScroll = function () {
                return _this8._closeDropdown();
              };

              window.addEventListener("scroll", this._handleWindowScroll);
            }
          }
        }
      }, {
        key: "_getClosestListItem",
        value: function _getClosestListItem(target) {
          var el = target;

          while (el && el !== this.countryList && !el.classList.contains("iti__country")) {
            el = el.parentNode;
          } // if we reached the countryList element, then return null


          return el === this.countryList ? null : el;
        }
      }, {
        key: "_bindDropdownListeners",
        value: function _bindDropdownListeners() {
          var _this9 = this; // when mouse over a list item, just highlight that one
          // we add the class "highlight", so if they hit "enter" we know which one to select


          this._handleMouseoverCountryList = function (e) {
            // handle event delegation, as we're listening for this event on the countryList
            var listItem = _this9._getClosestListItem(e.target);

            if (listItem) {
              _this9._highlightListItem(listItem, false);
            }
          };

          this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList); // listen for country selection

          this._handleClickCountryList = function (e) {
            var listItem = _this9._getClosestListItem(e.target);

            if (listItem) {
              _this9._selectListItem(listItem);
            }
          };

          this.countryList.addEventListener("click", this._handleClickCountryList); // click off to close
          // (except when this initial opening click is bubbling up)
          // we cannot just stopPropagation as it may be needed to close another instance

          var isOpening = true;

          this._handleClickOffToClose = function () {
            if (!isOpening) {
              _this9._closeDropdown();
            }

            isOpening = false;
          };

          document.documentElement.addEventListener("click", this._handleClickOffToClose); // listen for up/down scrolling, enter to select, or letters to jump to country name.
          // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
          // just hit down and hold it to scroll down (no keyup event).
          // listen on the document because that's where key events are triggered if no input has focus

          var query = "";
          var queryTimer = null;

          this._handleKeydownOnDropdown = function (e) {
            // prevent down key from scrolling the whole page,
            // and enter key from submitting a form etc
            e.preventDefault(); // up and down to navigate

            if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down") {
              _this9._handleUpDownKey(e.key);
            } else if (e.key === "Enter") {
              _this9._handleEnterKey();
            } else if (e.key === "Escape") {
              _this9._closeDropdown();
            } else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
              // jump to countries that start with the query string
              if (queryTimer) {
                clearTimeout(queryTimer);
              }

              query += e.key.toLowerCase();

              _this9._searchForCountry(query); // if the timer hits 1 second, reset the query


              queryTimer = setTimeout(function () {
                query = "";
              }, 1e3);
            }
          };

          document.addEventListener("keydown", this._handleKeydownOnDropdown);
        }
      }, {
        key: "_handleUpDownKey",
        value: function _handleUpDownKey(key) {
          var next = key === "ArrowUp" || key === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;

          if (next) {
            // skip the divider
            if (next.classList.contains("iti__divider")) {
              next = key === "ArrowUp" || key === "Up" ? next.previousElementSibling : next.nextElementSibling;
            }

            this._highlightListItem(next, true);
          }
        }
      }, {
        key: "_handleEnterKey",
        value: function _handleEnterKey() {
          if (this.highlightedItem) {
            this._selectListItem(this.highlightedItem);
          }
        }
      }, {
        key: "_searchForCountry",
        value: function _searchForCountry(query) {
          for (var i = 0; i < this.countries.length; i++) {
            if (this._startsWith(this.countries[i].name, query)) {
              var listItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[i].iso2)); // update highlighting and scroll

              this._highlightListItem(listItem, false);

              this._scrollTo(listItem, true);

              break;
            }
          }
        }
      }, {
        key: "_startsWith",
        value: function _startsWith(a, b) {
          return a.substr(0, b.length).toLowerCase() === b;
        }
      }, {
        key: "_updateValFromNumber",
        value: function _updateValFromNumber(originalNumber) {
          var number = originalNumber;

          if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
            var useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.separateDialCode;
            var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat,
                NATIONAL = _intlTelInputUtils$nu.NATIONAL,
                INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
            var format = useNational ? NATIONAL : INTERNATIONAL;
            number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
          }

          number = this._beforeSetNumber(number);
          this.telInput.value = number;
        }
      }, {
        key: "_updateFlagFromNumber",
        value: function _updateFlagFromNumber(originalNumber) {
          // if we already have US/Canada selected, make sure the number starts
          // with a +1 so _getDialCode will be able to extract the area code
          // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
          // from the number), that means we're initialising the plugin with a number that already has a
          // dial code, so fine to ignore this bit
          var number = originalNumber;
          var selectedDialCode = this.selectedCountryData.dialCode;
          var isNanp = selectedDialCode === "1";

          if (number && isNanp && number.charAt(0) !== "+") {
            if (number.charAt(0) !== "1") {
              number = "1".concat(number);
            }

            number = "+".concat(number);
          } // if separateDialCode enabled, then consider the selected dial code to be part of the number


          if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") {
            number = "+".concat(selectedDialCode).concat(number);
          } // try and extract valid dial code from input


          var dialCode = this._getDialCode(number, true);

          var numeric = this._getNumeric(number);

          var countryCode = null;

          if (dialCode) {
            var countryCodes = this.countryCodes[this._getNumeric(dialCode)]; // check if the right country is already selected. this should be false if the number is
            // longer than the matched dial code because in this case we need to make sure that if
            // there are multiple country matches, that the first one is selected (note: we could
            // just check that here, but it requires the same loop that we already have later)


            var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;

            var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric); // only update the flag if:
            // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
            // AND
            // B) the right country is not already selected


            if (!isRegionlessNanpNumber && !alreadySelected) {
              // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
              // non-empty index
              for (var j = 0; j < countryCodes.length; j++) {
                if (countryCodes[j]) {
                  countryCode = countryCodes[j];
                  break;
                }
              }
            }
          } else if (number.charAt(0) === "+" && numeric.length) {
            // invalid dial code, so empty
            // Note: use getNumeric here because the number has not been formatted yet, so could contain
            // bad chars
            countryCode = "";
          } else if (!number || number === "+") {
            // empty, or just a plus, so default
            countryCode = this.defaultCountry;
          }

          if (countryCode !== null) {
            return this._setFlag(countryCode);
          }

          return false;
        }
      }, {
        key: "_isRegionlessNanp",
        value: function _isRegionlessNanp(number) {
          var numeric = this._getNumeric(number);

          if (numeric.charAt(0) === "1") {
            var areaCode = numeric.substr(1, 3);
            return regionlessNanpNumbers.indexOf(areaCode) !== -1;
          }

          return false;
        }
      }, {
        key: "_highlightListItem",
        value: function _highlightListItem(listItem, shouldFocus) {
          var prevItem = this.highlightedItem;

          if (prevItem) {
            prevItem.classList.remove("iti__highlight");
          }

          this.highlightedItem = listItem;
          this.highlightedItem.classList.add("iti__highlight");
          this.selectedFlag.setAttribute("aria-activedescendant", listItem.getAttribute("id"));

          if (shouldFocus) {
            this.highlightedItem.focus();
          }
        }
      }, {
        key: "_getCountryData",
        value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
          var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;

          for (var i = 0; i < countryList.length; i++) {
            if (countryList[i].iso2 === countryCode) {
              return countryList[i];
            }
          }

          if (allowFail) {
            return null;
          }

          throw new Error("No country data for '".concat(countryCode, "'"));
        }
      }, {
        key: "_setFlag",
        value: function _setFlag(countryCode) {
          var _this$options3 = this.options,
              allowDropdown = _this$options3.allowDropdown,
              separateDialCode = _this$options3.separateDialCode,
              showFlags = _this$options3.showFlags;
          var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {}; // do this first as it will throw an error and stop if countryCode is invalid

          this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {}; // update the defaultCountry - we only need the iso2 from now on, so just store that

          if (this.selectedCountryData.iso2) {
            this.defaultCountry = this.selectedCountryData.iso2;
          }

          if (showFlags) {
            this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
          }

          this._setSelectedCountryFlagTitleAttribute(countryCode, separateDialCode);

          if (separateDialCode) {
            var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
            this.selectedDialCode.innerHTML = dialCode; // offsetWidth is zero if input is in a hidden container during initialisation

            var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth(); // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css


            if (this.isRTL) {
              this.telInput.style.paddingRight = "".concat(selectedFlagWidth + 6, "px");
            } else {
              this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
            }
          } // and the input's placeholder


          this._updatePlaceholder(); // update the active list item


          if (allowDropdown) {
            var prevItem = this.activeItem;

            if (prevItem) {
              prevItem.classList.remove("iti__active");
              prevItem.setAttribute("aria-selected", "false");
            }

            if (countryCode) {
              // check if there is a preferred item first, else fall back to standard
              var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
              nextItem.setAttribute("aria-selected", "true");
              nextItem.classList.add("iti__active");
              this.activeItem = nextItem;
            }
          } // return if the flag has changed or not


          return prevCountry.iso2 !== countryCode;
        }
      }, {
        key: "_setSelectedCountryFlagTitleAttribute",
        value: function _setSelectedCountryFlagTitleAttribute(countryCode, separateDialCode) {
          if (!this.selectedFlag) {
            return;
          }

          var title;

          if (countryCode && !separateDialCode) {
            title = "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode);
          } else if (countryCode) {
            // For screen reader output, we don't want to include the dial code in the reader output twice
            // so just use the selected country name here:
            title = this.selectedCountryData.name;
          } else {
            title = "Unknown";
          }

          this.selectedFlag.setAttribute("title", title);
        }
      }, {
        key: "_getHiddenSelectedFlagWidth",
        value: function _getHiddenSelectedFlagWidth() {
          // to get the right styling to apply, all we need is a shallow clone of the container,
          // and then to inject a deep clone of the selectedFlag element
          var containerClone = this.telInput.parentNode.cloneNode();
          containerClone.style.visibility = "hidden";
          document.body.appendChild(containerClone);
          var flagsContainerClone = this.flagsContainer.cloneNode();
          containerClone.appendChild(flagsContainerClone);
          var selectedFlagClone = this.selectedFlag.cloneNode(true);
          flagsContainerClone.appendChild(selectedFlagClone);
          var width = selectedFlagClone.offsetWidth;
          containerClone.parentNode.removeChild(containerClone);
          return width;
        }
      }, {
        key: "_updatePlaceholder",
        value: function _updatePlaceholder() {
          var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";

          if (window.intlTelInputUtils && shouldSetPlaceholder) {
            var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
            var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
            placeholder = this._beforeSetNumber(placeholder);

            if (typeof this.options.customPlaceholder === "function") {
              placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
            }

            this.telInput.setAttribute("placeholder", placeholder);
          }
        }
      }, {
        key: "_selectListItem",
        value: function _selectListItem(listItem) {
          // update selected flag and active list item
          var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));

          this._closeDropdown();

          this._updateDialCode(listItem.getAttribute("data-dial-code")); // focus the input


          this.telInput.focus(); // put cursor at end - this fix is required for FF and IE11 (with auto inserting dial code),
          // who try to put the cursor at the beginning the first time

          var len = this.telInput.value.length;
          this.telInput.setSelectionRange(len, len);

          if (flagChanged) {
            this._triggerCountryChange();
          }
        }
      }, {
        key: "_closeDropdown",
        value: function _closeDropdown() {
          this.countryList.classList.add("iti__hide");
          this.selectedFlag.setAttribute("aria-expanded", "false");
          this.selectedFlag.removeAttribute("aria-activedescendant"); // update the arrow

          this.dropdownArrow.classList.remove("iti__arrow--up"); // unbind key events

          document.removeEventListener("keydown", this._handleKeydownOnDropdown);
          document.documentElement.removeEventListener("click", this._handleClickOffToClose);
          this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
          this.countryList.removeEventListener("click", this._handleClickCountryList); // remove menu from container

          if (this.options.dropdownContainer) {
            if (!this.isMobile) {
              window.removeEventListener("scroll", this._handleWindowScroll);
            }

            if (this.dropdown.parentNode) {
              this.dropdown.parentNode.removeChild(this.dropdown);
            }
          }

          this._trigger("close:countrydropdown");
        }
      }, {
        key: "_scrollTo",
        value: function _scrollTo(element, middle) {
          var container = this.countryList; // windowTop from https://stackoverflow.com/a/14384091/217866

          var windowTop = window.pageYOffset || document.documentElement.scrollTop;
          var containerHeight = container.offsetHeight;
          var containerTop = container.getBoundingClientRect().top + windowTop;
          var containerBottom = containerTop + containerHeight;
          var elementHeight = element.offsetHeight;
          var elementTop = element.getBoundingClientRect().top + windowTop;
          var elementBottom = elementTop + elementHeight;
          var newScrollTop = elementTop - containerTop + container.scrollTop;
          var middleOffset = containerHeight / 2 - elementHeight / 2;

          if (elementTop < containerTop) {
            // scroll up
            if (middle) {
              newScrollTop -= middleOffset;
            }

            container.scrollTop = newScrollTop;
          } else if (elementBottom > containerBottom) {
            // scroll down
            if (middle) {
              newScrollTop += middleOffset;
            }

            var heightDifference = containerHeight - elementHeight;
            container.scrollTop = newScrollTop - heightDifference;
          }
        }
      }, {
        key: "_updateDialCode",
        value: function _updateDialCode(newDialCodeBare) {
          var inputVal = this.telInput.value; // save having to pass this every time

          var newDialCode = "+".concat(newDialCodeBare);
          var newNumber;

          if (inputVal.charAt(0) === "+") {
            // there's a plus so we're dealing with a replacement
            var prevDialCode = this._getDialCode(inputVal);

            if (prevDialCode) {
              // current number contains a valid dial code, so replace it
              newNumber = inputVal.replace(prevDialCode, newDialCode);
            } else {
              // current number contains an invalid dial code, so ditch it
              // (no way to determine where the invalid dial code ends and the rest of the number begins)
              newNumber = newDialCode;
            }

            this.telInput.value = newNumber;
          } else if (this.options.autoInsertDialCode) {
            if (inputVal) {
              // there is an existing value with no dial code: prefix the new dial code
              newNumber = newDialCode + inputVal;
            } else {
              newNumber = newDialCode;
            }

            this.telInput.value = newNumber;
          }
        }
      }, {
        key: "_getDialCode",
        value: function _getDialCode(number, includeAreaCode) {
          var dialCode = ""; // only interested in international numbers (starting with a plus)

          if (number.charAt(0) === "+") {
            var numericChars = ""; // iterate over chars

            for (var i = 0; i < number.length; i++) {
              var c = number.charAt(i); // if char is number (https://stackoverflow.com/a/8935649/217866)

              if (!isNaN(parseInt(c, 10))) {
                numericChars += c; // if current numericChars make a valid dial code

                if (includeAreaCode) {
                  if (this.countryCodes[numericChars]) {
                    // store the actual raw string (useful for matching later)
                    dialCode = number.substr(0, i + 1);
                  }
                } else {
                  if (this.dialCodes[numericChars]) {
                    dialCode = number.substr(0, i + 1); // if we're just looking for a dial code, we can break as soon as we find one

                    break;
                  }
                } // stop searching as soon as we can - in this case when we hit max len


                if (numericChars.length === this.countryCodeMaxLen) {
                  break;
                }
              }
            }
          }

          return dialCode;
        }
      }, {
        key: "_getFullNumber",
        value: function _getFullNumber() {
          var val = this.telInput.value.trim();
          var dialCode = this.selectedCountryData.dialCode;
          var prefix;

          var numericVal = this._getNumeric(val);

          if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
            // when using separateDialCode, it is visible so is effectively part of the typed number
            prefix = "+".concat(dialCode);
          } else {
            prefix = "";
          }

          return prefix + val;
        }
      }, {
        key: "_beforeSetNumber",
        value: function _beforeSetNumber(originalNumber) {
          var number = originalNumber;

          if (this.options.separateDialCode) {
            var dialCode = this._getDialCode(number); // if there is a valid dial code


            if (dialCode) {
              // in case _getDialCode returned an area code as well
              dialCode = "+".concat(this.selectedCountryData.dialCode); // a lot of numbers will have a space separating the dial code and the main number, and
              // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
              // rid of it
              // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc

              var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
              number = number.substr(start);
            }
          }

          return this._cap(number);
        }
      }, {
        key: "_triggerCountryChange",
        value: function _triggerCountryChange() {
          this._trigger("countrychange");
        }
      }, {
        key: "handleAutoCountry",
        value: function handleAutoCountry() {
          if (this.options.initialCountry === "auto") {
            // we must set this even if there is an initial val in the input: in case the initial val is
            // invalid and they delete it - they should see their auto country
            this.defaultCountry = window.intlTelInputGlobals.autoCountry; // if there's no initial value in the input, then update the flag

            if (!this.telInput.value) {
              this.setCountry(this.defaultCountry);
            }

            this.resolveAutoCountryPromise();
          }
        }
      }, {
        key: "handleUtils",
        value: function handleUtils() {
          // if the request was successful
          if (window.intlTelInputUtils) {
            // if there's an initial value in the input, then format it
            if (this.telInput.value) {
              this._updateValFromNumber(this.telInput.value);
            }

            this._updatePlaceholder();
          }

          this.resolveUtilsScriptPromise();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var form = this.telInput.form;

          if (this.options.allowDropdown) {
            // make sure the dropdown is closed (and unbind listeners)
            this._closeDropdown();

            this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
            this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown); // label click hack

            var label = this._getClosestLabel();

            if (label) {
              label.removeEventListener("click", this._handleLabelClick);
            }
          } // unbind hiddenInput listeners


          if (this.hiddenInput && form) {
            form.removeEventListener("submit", this._handleHiddenInputSubmit);
          } // unbind autoInsertDialCode listeners


          if (this.options.autoInsertDialCode) {
            if (form) {
              form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
            }

            this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
          } // unbind key events, and cut/paste events


          this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
          this.telInput.removeEventListener("cut", this._handleClipboardEvent);
          this.telInput.removeEventListener("paste", this._handleClipboardEvent); // remove attribute of id instance: data-intl-tel-input-id

          this.telInput.removeAttribute("data-intl-tel-input-id"); // remove markup (but leave the original input)

          var wrapper = this.telInput.parentNode;
          wrapper.parentNode.insertBefore(this.telInput, wrapper);
          wrapper.parentNode.removeChild(wrapper);
          delete window.intlTelInputGlobals.instances[this.id];
        }
      }, {
        key: "getExtension",
        value: function getExtension() {
          if (window.intlTelInputUtils) {
            return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
          }

          return "";
        }
      }, {
        key: "getNumber",
        value: function getNumber(format) {
          if (window.intlTelInputUtils) {
            var iso2 = this.selectedCountryData.iso2;
            return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
          }

          return "";
        }
      }, {
        key: "getNumberType",
        value: function getNumberType() {
          if (window.intlTelInputUtils) {
            return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
          }

          return -99;
        }
      }, {
        key: "getSelectedCountryData",
        value: function getSelectedCountryData() {
          return this.selectedCountryData;
        }
      }, {
        key: "getValidationError",
        value: function getValidationError() {
          if (window.intlTelInputUtils) {
            var iso2 = this.selectedCountryData.iso2;
            return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
          }

          return -99;
        }
      }, {
        key: "isValidNumber",
        value: function isValidNumber() {
          var val = this._getFullNumber().trim();

          return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, this.selectedCountryData.iso2) : null;
        }
      }, {
        key: "isPossibleNumber",
        value: function isPossibleNumber() {
          var val = this._getFullNumber().trim();

          return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(val, this.selectedCountryData.iso2) : null;
        }
      }, {
        key: "setCountry",
        value: function setCountry(originalCountryCode) {
          var countryCode = originalCountryCode.toLowerCase(); // check if already selected

          if (this.selectedCountryData.iso2 !== countryCode) {
            this._setFlag(countryCode);

            this._updateDialCode(this.selectedCountryData.dialCode);

            this._triggerCountryChange();
          }
        }
      }, {
        key: "setNumber",
        value: function setNumber(number) {
          // we must update the flag first, which updates this.selectedCountryData, which is used for
          // formatting the number before displaying it
          var flagChanged = this._updateFlagFromNumber(number);

          this._updateValFromNumber(number);

          if (flagChanged) {
            this._triggerCountryChange();
          }
        }
      }, {
        key: "setPlaceholderNumberType",
        value: function setPlaceholderNumberType(type) {
          this.options.placeholderNumberType = type;

          this._updatePlaceholder();
        }
      }]);

      return Iti;
    }();
    /********************
    *  STATIC METHODS
    ********************/
    // get the country data object


    intlTelInputGlobals.getCountryData = function () {
      return allCountries;
    }; // inject a <script> element to load utils.js


    var injectScript = function injectScript(path, handleSuccess, handleFailure) {
      // inject a new script element into the page
      var script = document.createElement("script");

      script.onload = function () {
        forEachInstance("handleUtils");

        if (handleSuccess) {
          handleSuccess();
        }
      };

      script.onerror = function () {
        forEachInstance("rejectUtilsScriptPromise");

        if (handleFailure) {
          handleFailure();
        }
      };

      script.className = "iti-load-utils";
      script.async = true;
      script.src = path;
      document.body.appendChild(script);
    }; // load the utils script


    intlTelInputGlobals.loadUtils = function (path) {
      // 2 options:
      // 1) not already started loading (start)
      // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
      // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
      if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
        // only do this once
        window.intlTelInputGlobals.startedLoadingUtilsScript = true; // if we have promises, then return a promise

        if (typeof Promise !== "undefined") {
          return new Promise(function (resolve, reject) {
            return injectScript(path, resolve, reject);
          });
        }

        injectScript(path);
      }

      return null;
    }; // default options


    intlTelInputGlobals.defaults = defaults; // version

    intlTelInputGlobals.version = "18.2.1"; // convenience wrapper

    return function (input, options) {
      var iti = new Iti(input, options);

      iti._init();

      input.setAttribute("data-intl-tel-input-id", iti.id);
      window.intlTelInputGlobals.instances[iti.id] = iti;
      return iti;
    };
  }();
});

/***/ }),

/***/ "./node_modules/intl-tel-input/index.js":
/*!**********************************************!*\
  !*** ./node_modules/intl-tel-input/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Exposing intl-tel-input as a component
 */
module.exports = __webpack_require__(/*! ./build/js/intlTelInput */ "./node_modules/intl-tel-input/build/js/intlTelInput.js");

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMException": () => (/* binding */ DOMException),
/* harmony export */   "Headers": () => (/* binding */ Headers),
/* harmony export */   "Request": () => (/* binding */ Request),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "fetch": () => (/* binding */ fetch)
/* harmony export */ });
var global = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self || typeof global !== 'undefined' && global;
var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob: 'FileReader' in global && 'Blob' in global && function () {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
};

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}

if (support.arrayBuffer) {
  var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

  var isArrayBufferView = ArrayBuffer.isView || function (obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name);
  }

  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"');
  }

  return name.toLowerCase();
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value);
  }

  return value;
} // Build a destructive iterator for the value list


function iteratorFor(items) {
  var iterator = {
    next: function () {
      var value = items.shift();
      return {
        done: value === undefined,
        value: value
      };
    }
  };

  if (support.iterable) {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}

function Headers(headers) {
  this.map = {};

  if (headers instanceof Headers) {
    headers.forEach(function (value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function (header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function (name) {
      this.append(name, headers[name]);
    }, this);
  }
}

Headers.prototype.append = function (name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ', ' + value : value;
};

Headers.prototype['delete'] = function (name) {
  delete this.map[normalizeName(name)];
};

Headers.prototype.get = function (name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};

Headers.prototype.has = function (name) {
  return this.map.hasOwnProperty(normalizeName(name));
};

Headers.prototype.set = function (name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};

Headers.prototype.forEach = function (callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};

Headers.prototype.keys = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};

Headers.prototype.values = function () {
  var items = [];
  this.forEach(function (value) {
    items.push(value);
  });
  return iteratorFor(items);
};

Headers.prototype.entries = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'));
  }

  body.bodyUsed = true;
}

function fileReaderReady(reader) {
  return new Promise(function (resolve, reject) {
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}

function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsText(blob);
  return promise;
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }

  return chars.join('');
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}

function Body() {
  this.bodyUsed = false;

  this._initBody = function (body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed;
    this._bodyInit = body;

    if (!body) {
      this._bodyText = '';
    } else if (typeof body === 'string') {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8');
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      }
    }
  };

  if (support.blob) {
    this.blob = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob');
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };

    this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);

        if (isConsumed) {
          return isConsumed;
        }

        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
        } else {
          return Promise.resolve(this._bodyArrayBuffer);
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer);
      }
    };
  }

  this.text = function () {
    var rejected = consumed(this);

    if (rejected) {
      return rejected;
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text');
    } else {
      return Promise.resolve(this._bodyText);
    }
  };

  if (support.formData) {
    this.formData = function () {
      return this.text().then(decode);
    };
  }

  this.json = function () {
    return this.text().then(JSON.parse);
  };

  return this;
} // HTTP methods whose capitalization should be normalized


var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }

  options = options || {};
  var body = options.body;

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read');
    }

    this.url = input.url;
    this.credentials = input.credentials;

    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }

    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;

    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }

  this.credentials = options.credentials || this.credentials || 'same-origin';

  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }

  this.method = normalizeMethod(options.method || this.method || 'GET');
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests');
  }

  this._initBody(body);

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/;

      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/;
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
      }
    }
  }
}

Request.prototype.clone = function () {
  return new Request(this, {
    body: this._bodyInit
  });
};

function decode(body) {
  var form = new FormData();
  body.trim().split('&').forEach(function (bytes) {
    if (bytes) {
      var split = bytes.split('=');
      var name = split.shift().replace(/\+/g, ' ');
      var value = split.join('=').replace(/\+/g, ' ');
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}

function parseHeaders(rawHeaders) {
  var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2

  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' '); // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751

  preProcessedHeaders.split('\r').map(function (header) {
    return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header;
  }).forEach(function (line) {
    var parts = line.split(':');
    var key = parts.shift().trim();

    if (key) {
      var value = parts.join(':').trim();
      headers.append(key, value);
    }
  });
  return headers;
}

Body.call(Request.prototype);
function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  }

  if (!options) {
    options = {};
  }

  this.type = 'default';
  this.status = options.status === undefined ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
  this.headers = new Headers(options.headers);
  this.url = options.url || '';

  this._initBody(bodyInit);
}
Body.call(Response.prototype);

Response.prototype.clone = function () {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};

Response.error = function () {
  var response = new Response(null, {
    status: 0,
    statusText: ''
  });
  response.type = 'error';
  return response;
};

var redirectStatuses = [301, 302, 303, 307, 308];

Response.redirect = function (url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code');
  }

  return new Response(null, {
    status: status,
    headers: {
      location: url
    }
  });
};

var DOMException = global.DOMException;

try {
  new DOMException();
} catch (err) {
  DOMException = function (message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };

  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}

function fetch(input, init) {
  return new Promise(function (resolve, reject) {
    var request = new Request(input, init);

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'));
    }

    var xhr = new XMLHttpRequest();

    function abortXhr() {
      xhr.abort();
    }

    xhr.onload = function () {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      };
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      setTimeout(function () {
        resolve(new Response(body, options));
      }, 0);
    };

    xhr.onerror = function () {
      setTimeout(function () {
        reject(new TypeError('Network request failed'));
      }, 0);
    };

    xhr.ontimeout = function () {
      setTimeout(function () {
        reject(new TypeError('Network request failed'));
      }, 0);
    };

    xhr.onabort = function () {
      setTimeout(function () {
        reject(new DOMException('Aborted', 'AbortError'));
      }, 0);
    };

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url;
      } catch (e) {
        return url;
      }
    }

    xhr.open(request.method, fixUrl(request.url), true);

    if (request.credentials === 'include') {
      xhr.withCredentials = true;
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false;
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob';
      } else if (support.arrayBuffer && request.headers.get('Content-Type') && request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1) {
        xhr.responseType = 'arraybuffer';
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function (name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
      });
    } else {
      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr);

      xhr.onreadystatechange = function () {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr);
        }
      };
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
  });
}
fetch.polyfill = true;

if (!global.fetch) {
  global.fetch = fetch;
  global.Headers = Headers;
  global.Request = Request;
  global.Response = Response;
}

/***/ }),

/***/ "./src/scripts/accordion.js":
/*!**********************************!*\
  !*** ./src/scripts/accordion.js ***!
  \**********************************/
/***/ (() => {

var accordions = document.querySelectorAll('[data-accordion]');

if (accordions.length) {
  accordions.forEach(function (accordion) {
    var rows = accordion.querySelectorAll('[data-accordion-row]') || [];
    rows.forEach(function (row) {
      var header = row.querySelector('[data-accordion-header]');
      var content = row.querySelector('[data-accordion-content]');

      var toggle = function toggle() {
        if (content.style.maxHeight) {
          header.classList.remove('_active');
          content.classList.remove('_active');
          content.style.maxHeight = null;
        } else {
          header.classList.add('_active');
          content.classList.add('_active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      };

      header.addEventListener('click', toggle);
    });
  });
}

/***/ }),

/***/ "./src/scripts/forms.js":
/*!******************************!*\
  !*** ./src/scripts/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_1__);


var inputClasses = document.querySelectorAll(".js-input-classes") || [];
inputClasses.forEach(function (input) {
  input.addEventListener("keyup", function (e) {
    if (!!e.target.value) {
      input.classList.add('_filled');
    } else {
      input.classList.remove('_filled');
    }
  });
  input.addEventListener("change", function (e) {
    if (!!e.target.value) {
      input.classList.add('_filled');
    } else {
      input.classList.remove('_filled');
    }
  });
  input.addEventListener("focus", function (e) {
    input.classList.add('_focused');
  });
  input.addEventListener("blur", function (e) {
    input.classList.remove('_focused');
  });
});
var phoneInputs = document.querySelectorAll(".js-input-phone") || [];
phoneInputs.forEach(function (el) {
  // el.value = '7'
  var iti = intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default()(el, {
    initialCountry: "ru",
    preferredCountries: ["ru", "kz", "ua", "by"],
    localizedCountries: {
      ru: "Россия",
      kz: "Казахстан",
      ua: "Украина",
      by: "Беларусь"
    }
  });
  el.addEventListener("countrychange", function (e) {
    var country = iti.getSelectedCountryData();

    if (country.dialCode) {
      $(el).inputmasks("remove");
      $(el).inputmask("+#{*}", maskOpts.inputmask);
      $(el).inputmasks($.extend(true, {}, maskOpts, {
        list: listCountries
      }));
    }
  });
  var listCountries = $.masksSort($.masksLoad(inputmaskParams.phoneCodes), ['#'], /[0-9]|#/, "mask");
  var maskOpts = {
    inputmask: {
      definitions: {
        '#': {
          validator: "[0-9]",
          cardinality: 1
        }
      },
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: false,
      onUnMask: function onUnMask(maskedValue, unmaskedValue) {
        return '+' + unmaskedValue;
      }
    },
    match: /[0-9]/,
    replace: '#',
    listKey: "mask"
  };
  var maskIsInit = false;
  el.addEventListener('focus', function () {
    if (!maskIsInit) {
      maskIsInit = true;
      el.value = '7';
      el.dispatchEvent(new Event('change'));
      $(el).inputmasks($.extend(true, {}, maskOpts, {
        list: listCountries
      }));
    } // if (!el.classList.contains('_masked')) {
    //   el.classList.add('_masked');
    //   $(el).val('7')
    //   $(el).inputmasks($.extend(true, {}, maskOpts, {
    //     list: listCountries,
    //   }));
    // }

  });
});
jQuery.validator.addMethod("laxEmail", function (value, element) {
  return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, "Некорректный e-mail.");
jQuery.validator.addMethod("maskedPhone", function (value, element) {
  return element.imask.masked.isComplete;
}, "Некорректный телефон.");

function submitForm(form, validator) {
  var emailInputs = form.querySelectorAll(".js-input-email") || [];
  emailInputs.forEach(function (el) {
    el.value = el.value.trim().replace(/[\u0000-\u0008,\u000A-\u001F,\u007F-\u00A0]+/g, '');
  });
  fetch(form.getAttribute("action"), {
    method: "POST",
    body: new FormData(form)
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    if (response.success) {
      form.reset();
      validator.showErrors({
        action: response.message
      });
      $("#action-error", form).addClass("error_success");
      setTimeout(function () {
        validator.resetForm();
      }, 4000);

      if (response.redirect) {
        window.location = response.redirect;
      }
    } else {
      validator.showErrors({
        action: response.message
      });
    }
  });
}

var individualFormValidator = $("#individual-form").validate({
  rules: {
    name: {
      required: true
    },
    phone: {
      required: true
    },
    approve: {
      required: true
    }
  },
  messages: {
    name: {
      required: "Введите имя"
    },
    phone: {
      required: "Введите телефон (WhatsApp, Viber)"
    },
    approve: {
      required: "Вы должны согласиться с условиями"
    }
  },
  errorPlacement: function errorPlacement(error, element) {
    error.insertAfter(element.parent());
  },
  submitHandler: function submitHandler(form) {
    submitForm(form, individualFormValidator);
  }
});
var faqFormValidator = $("#faq-form").validate({
  rules: {
    email: {
      required: true,
      email: true,
      laxEmail: true
    }
  },
  messages: {
    email: {
      required: "Введите e-mail",
      email: "Некорректный e-mail"
    }
  },
  submitHandler: function submitHandler(form) {
    submitForm(form, faqFormValidator);
  }
});

/***/ }),

/***/ "./src/scripts/modals.js":
/*!*******************************!*\
  !*** ./src/scripts/modals.js ***!
  \*******************************/
/***/ (() => {

var isVisible = function isVisible(elem) {
  return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};

var modalToggles = document.querySelectorAll("[data-modal-toggle]");

if (modalToggles.length) {
  modalToggles.forEach(function (toggle) {
    var modal = document.querySelector(toggle.dataset.modalToggle);
    var close = modal.querySelector("[data-modal-close]");

    var outsideClickListener = function outsideClickListener(event) {
      if (!modal.contains(event.target) && isVisible(modal) && !toggle.contains(event.target)) {
        hide();
        removeClickListener();
      }
    };

    var removeClickListener = function removeClickListener() {
      document.removeEventListener("click", outsideClickListener);
    };

    var show = function show() {
      modal.classList.add("_opened");
      document.addEventListener("click", outsideClickListener);
    };

    var hide = function hide() {
      modal.classList.remove("_opened");
    };

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      show();
    });
    close.addEventListener("click", function (e) {
      e.preventDefault();
      hide();
    });
  });
}

/***/ }),

/***/ "./src/scripts/scrolls.js":
/*!********************************!*\
  !*** ./src/scripts/scrolls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/esm/index.js");

var scrollup = document.querySelector(".ui-scrollup");
var scrollHandler = (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_0__.throttle)(10, function () {
  if (window.scrollY > 400) {
    scrollup.classList.add("ui-scrollup_fixed");
  } else {
    scrollup.classList.remove("ui-scrollup_fixed");
  }
});
window.addEventListener("scroll", scrollHandler);
var scrolls = document.querySelectorAll("[data-scroll]") || [];
scrolls.forEach(function (scroll) {
  return scroll.addEventListener("click", function (e) {
    e.preventDefault();
    var offset = 0;
    var top = 0;
    var left = 0;

    if (scroll.dataset.scroll) {
      var target = document.querySelector(scroll.dataset.scroll);

      if (target) {
        top = target.offsetTop - offset;
      }
    }

    $([document.documentElement, document.body]).animate({
      scrollTop: top
    }, 2000);
  });
});

/***/ }),

/***/ "./node_modules/throttle-debounce/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/esm/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "throttle": () => (/* binding */ throttle)
/* harmony export */ });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle(delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}
/* eslint-disable no-undefined */

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */


function debounce(delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/scripts/bundle.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/scripts/forms.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ "./src/scripts/modals.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scrolls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrolls */ "./src/scripts/scrolls.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ "./src/scripts/accordion.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_accordion__WEBPACK_IMPORTED_MODULE_3__);





var removeFocusableListener = function removeFocusableListener() {
  document.querySelector("body").classList.remove("page-focusable");
  document.removeEventListener("click", removeFocusableListener);
};

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 9) {
    document.querySelector("body").classList.add("page-focusable");
    document.addEventListener("click", removeFocusableListener);
  }
}, false);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1VDdEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07RUFDcEM3a0IsUUFBUSxDQUFDZ1AsYUFBVCxDQUF1QixNQUF2QixFQUErQm5NLFNBQS9CLENBQXlDc0osTUFBekMsQ0FBZ0QsZ0JBQWhEO0VBQ0FuTSxRQUFRLENBQUM4UixtQkFBVCxDQUE2QixPQUE3QixFQUFzQytTLHVCQUF0QztBQUNELENBSEQ7O0FBS0E3a0IsUUFBUSxDQUFDd0osZ0JBQVQsQ0FDRSxPQURGLEVBRUUsVUFBVUssQ0FBVixFQUFhO0VBQ1gsSUFBSUEsQ0FBQyxDQUFDaWIsT0FBRixLQUFjLENBQWxCLEVBQXFCO0lBQ25COWtCLFFBQVEsQ0FBQ2dQLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JuTSxTQUEvQixDQUF5Q0MsR0FBekMsQ0FBNkMsZ0JBQTdDO0lBQ0E5QyxRQUFRLENBQUN3SixnQkFBVCxDQUEwQixPQUExQixFQUFtQ3FiLHVCQUFuQztFQUNEO0FBQ0YsQ0FQSCxFQVFFLEtBUkYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V1cm9tb25vbGl0LXdwLXRoZW1lLy4vbm9kZV9tb2R1bGVzL2ludGwtdGVsLWlucHV0L2J1aWxkL2pzL2ludGxUZWxJbnB1dC5qcyIsIndlYnBhY2s6Ly9ldXJvbW9ub2xpdC13cC10aGVtZS8uL25vZGVfbW9kdWxlcy9pbnRsLXRlbC1pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ldXJvbW9ub2xpdC13cC10aGVtZS8uL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vZXVyb21vbm9saXQtd3AtdGhlbWUvLi9zcmMvc2NyaXB0cy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vZXVyb21vbm9saXQtd3AtdGhlbWUvLi9zcmMvc2NyaXB0cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9ldXJvbW9ub2xpdC13cC10aGVtZS8uL3NyYy9zY3JpcHRzL21vZGFscy5qcyIsIndlYnBhY2s6Ly9ldXJvbW9ub2xpdC13cC10aGVtZS8uL3NyYy9zY3JpcHRzL3Njcm9sbHMuanMiLCJ3ZWJwYWNrOi8vZXVyb21vbm9saXQtd3AtdGhlbWUvLi4vdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vZXVyb21vbm9saXQtd3AtdGhlbWUvLi4vZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vZXVyb21vbm9saXQtd3AtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXVyb21vbm9saXQtd3AtdGhlbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXVyb21vbm9saXQtd3AtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V1cm9tb25vbGl0LXdwLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXVyb21vbm9saXQtd3AtdGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ldXJvbW9ub2xpdC13cC10aGVtZS8uL3NyYy9zY3JpcHRzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogSW50ZXJuYXRpb25hbCBUZWxlcGhvbmUgSW5wdXQgdjE4LjIuMVxuICogaHR0cHM6Ly9naXRodWIuY29tL2phY2tvY25yL2ludGwtdGVsLWlucHV0LmdpdFxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cblxuLy8gd3JhcCBpbiBVTURcbihmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyBlbHNlIHdpbmRvdy5pbnRsVGVsSW5wdXQgPSBmYWN0b3J5KCk7XG59KShmdW5jdGlvbih1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEFycmF5IG9mIGNvdW50cnkgb2JqZWN0cyBmb3IgdGhlIGZsYWcgZHJvcGRvd24uXG4gICAgICAgIC8vIEhlcmUgaXMgdGhlIGNyaXRlcmlhIGZvciB0aGUgcGx1Z2luIHRvIHN1cHBvcnQgYSBnaXZlbiBjb3VudHJ5L3RlcnJpdG9yeVxuICAgICAgICAvLyAtIEl0IGhhcyBhbiBpc28yIGNvZGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT18zMTY2LTFfYWxwaGEtMlxuICAgICAgICAvLyAtIEl0IGhhcyBpdCdzIG93biBjb3VudHJ5IGNhbGxpbmcgY29kZSAoaXQgaXMgbm90IGEgc3ViLXJlZ2lvbiBvZiBhbm90aGVyIGNvdW50cnkpOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX2NvdW50cnlfY2FsbGluZ19jb2Rlc1xuICAgICAgICAvLyAtIEl0IGhhcyBhIGZsYWcgaW4gdGhlIHJlZ2lvbi1mbGFncyBwcm9qZWN0OiBodHRwczovL2dpdGh1Yi5jb20vYmVoZGFkL3JlZ2lvbi1mbGFncy90cmVlL2doLXBhZ2VzL3BuZ1xuICAgICAgICAvLyAtIEl0IGlzIHN1cHBvcnRlZCBieSBsaWJwaG9uZW51bWJlciAoaXQgbXVzdCBiZSBsaXN0ZWQgb24gdGhpcyBwYWdlKTogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZWkxOG4vbGlicGhvbmVudW1iZXIvYmxvYi9tYXN0ZXIvcmVzb3VyY2VzL1Nob3J0TnVtYmVyTWV0YWRhdGEueG1sXG4gICAgICAgIC8vIEVhY2ggY291bnRyeSBhcnJheSBoYXMgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbjpcbiAgICAgICAgLy8gW1xuICAgICAgICAvLyAgICBDb3VudHJ5IG5hbWUsXG4gICAgICAgIC8vICAgIGlzbzIgY29kZSxcbiAgICAgICAgLy8gICAgSW50ZXJuYXRpb25hbCBkaWFsIGNvZGUsXG4gICAgICAgIC8vICAgIE9yZGVyIChpZiA+MSBjb3VudHJ5IHdpdGggc2FtZSBkaWFsIGNvZGUpLFxuICAgICAgICAvLyAgICBBcmVhIGNvZGVzXG4gICAgICAgIC8vIF1cbiAgICAgICAgdmFyIGFsbENvdW50cmllcyA9IFsgWyBcIkFmZ2hhbmlzdGFuICjigKvYp9mB2LrYp9mG2LPYqtin2YbigKzigI4pXCIsIFwiYWZcIiwgXCI5M1wiIF0sIFsgXCJBbGJhbmlhIChTaHFpcMOrcmkpXCIsIFwiYWxcIiwgXCIzNTVcIiBdLCBbIFwiQWxnZXJpYSAo4oCr2KfZhNis2LLYp9im2LHigKzigI4pXCIsIFwiZHpcIiwgXCIyMTNcIiBdLCBbIFwiQW1lcmljYW4gU2Ftb2FcIiwgXCJhc1wiLCBcIjFcIiwgNSwgWyBcIjY4NFwiIF0gXSwgWyBcIkFuZG9ycmFcIiwgXCJhZFwiLCBcIjM3NlwiIF0sIFsgXCJBbmdvbGFcIiwgXCJhb1wiLCBcIjI0NFwiIF0sIFsgXCJBbmd1aWxsYVwiLCBcImFpXCIsIFwiMVwiLCA2LCBbIFwiMjY0XCIgXSBdLCBbIFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBcImFnXCIsIFwiMVwiLCA3LCBbIFwiMjY4XCIgXSBdLCBbIFwiQXJnZW50aW5hXCIsIFwiYXJcIiwgXCI1NFwiIF0sIFsgXCJBcm1lbmlhICjVgNWh1bXVodW91b/VodW2KVwiLCBcImFtXCIsIFwiMzc0XCIgXSwgWyBcIkFydWJhXCIsIFwiYXdcIiwgXCIyOTdcIiBdLCBbIFwiQXNjZW5zaW9uIElzbGFuZFwiLCBcImFjXCIsIFwiMjQ3XCIgXSwgWyBcIkF1c3RyYWxpYVwiLCBcImF1XCIsIFwiNjFcIiwgMCBdLCBbIFwiQXVzdHJpYSAow5ZzdGVycmVpY2gpXCIsIFwiYXRcIiwgXCI0M1wiIF0sIFsgXCJBemVyYmFpamFuIChBesmZcmJheWNhbilcIiwgXCJhelwiLCBcIjk5NFwiIF0sIFsgXCJCYWhhbWFzXCIsIFwiYnNcIiwgXCIxXCIsIDgsIFsgXCIyNDJcIiBdIF0sIFsgXCJCYWhyYWluICjigKvYp9mE2KjYrdix2YrZhuKArOKAjilcIiwgXCJiaFwiLCBcIjk3M1wiIF0sIFsgXCJCYW5nbGFkZXNoICjgpqzgpr7gpoLgprLgpr7gpqbgp4fgprYpXCIsIFwiYmRcIiwgXCI4ODBcIiBdLCBbIFwiQmFyYmFkb3NcIiwgXCJiYlwiLCBcIjFcIiwgOSwgWyBcIjI0NlwiIF0gXSwgWyBcIkJlbGFydXMgKNCR0LXQu9Cw0YDRg9GB0YwpXCIsIFwiYnlcIiwgXCIzNzVcIiBdLCBbIFwiQmVsZ2l1bSAoQmVsZ2nDqylcIiwgXCJiZVwiLCBcIjMyXCIgXSwgWyBcIkJlbGl6ZVwiLCBcImJ6XCIsIFwiNTAxXCIgXSwgWyBcIkJlbmluIChCw6luaW4pXCIsIFwiYmpcIiwgXCIyMjlcIiBdLCBbIFwiQmVybXVkYVwiLCBcImJtXCIsIFwiMVwiLCAxMCwgWyBcIjQ0MVwiIF0gXSwgWyBcIkJodXRhbiAo4L2g4L2W4L6y4L204L2CKVwiLCBcImJ0XCIsIFwiOTc1XCIgXSwgWyBcIkJvbGl2aWFcIiwgXCJib1wiLCBcIjU5MVwiIF0sIFsgXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hICjQkdC+0YHQvdCwINC4INCl0LXRgNGG0LXQs9C+0LLQuNC90LApXCIsIFwiYmFcIiwgXCIzODdcIiBdLCBbIFwiQm90c3dhbmFcIiwgXCJid1wiLCBcIjI2N1wiIF0sIFsgXCJCcmF6aWwgKEJyYXNpbClcIiwgXCJiclwiLCBcIjU1XCIgXSwgWyBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBcImlvXCIsIFwiMjQ2XCIgXSwgWyBcIkJyaXRpc2ggVmlyZ2luIElzbGFuZHNcIiwgXCJ2Z1wiLCBcIjFcIiwgMTEsIFsgXCIyODRcIiBdIF0sIFsgXCJCcnVuZWlcIiwgXCJiblwiLCBcIjY3M1wiIF0sIFsgXCJCdWxnYXJpYSAo0JHRitC70LPQsNGA0LjRjylcIiwgXCJiZ1wiLCBcIjM1OVwiIF0sIFsgXCJCdXJraW5hIEZhc29cIiwgXCJiZlwiLCBcIjIyNlwiIF0sIFsgXCJCdXJ1bmRpIChVYnVydW5kaSlcIiwgXCJiaVwiLCBcIjI1N1wiIF0sIFsgXCJDYW1ib2RpYSAo4Z6A4Z6Y4Z+S4Z6W4Z674Z6H4Z62KVwiLCBcImtoXCIsIFwiODU1XCIgXSwgWyBcIkNhbWVyb29uIChDYW1lcm91bilcIiwgXCJjbVwiLCBcIjIzN1wiIF0sIFsgXCJDYW5hZGFcIiwgXCJjYVwiLCBcIjFcIiwgMSwgWyBcIjIwNFwiLCBcIjIyNlwiLCBcIjIzNlwiLCBcIjI0OVwiLCBcIjI1MFwiLCBcIjI2M1wiLCBcIjI4OVwiLCBcIjMwNlwiLCBcIjM0M1wiLCBcIjM1NFwiLCBcIjM2NVwiLCBcIjM2N1wiLCBcIjM2OFwiLCBcIjM4MlwiLCBcIjM4N1wiLCBcIjQwM1wiLCBcIjQxNlwiLCBcIjQxOFwiLCBcIjQyOFwiLCBcIjQzMVwiLCBcIjQzN1wiLCBcIjQzOFwiLCBcIjQ1MFwiLCBcIjU4NFwiLCBcIjQ2OFwiLCBcIjQ3NFwiLCBcIjUwNlwiLCBcIjUxNFwiLCBcIjUxOVwiLCBcIjU0OFwiLCBcIjU3OVwiLCBcIjU4MVwiLCBcIjU4NFwiLCBcIjU4N1wiLCBcIjYwNFwiLCBcIjYxM1wiLCBcIjYzOVwiLCBcIjY0N1wiLCBcIjY3MlwiLCBcIjY4M1wiLCBcIjcwNVwiLCBcIjcwOVwiLCBcIjc0MlwiLCBcIjc1M1wiLCBcIjc3OFwiLCBcIjc4MFwiLCBcIjc4MlwiLCBcIjgwN1wiLCBcIjgxOVwiLCBcIjgyNVwiLCBcIjg2N1wiLCBcIjg3M1wiLCBcIjkwMlwiLCBcIjkwNVwiIF0gXSwgWyBcIkNhcGUgVmVyZGUgKEthYnUgVmVyZGkpXCIsIFwiY3ZcIiwgXCIyMzhcIiBdLCBbIFwiQ2FyaWJiZWFuIE5ldGhlcmxhbmRzXCIsIFwiYnFcIiwgXCI1OTlcIiwgMSwgWyBcIjNcIiwgXCI0XCIsIFwiN1wiIF0gXSwgWyBcIkNheW1hbiBJc2xhbmRzXCIsIFwia3lcIiwgXCIxXCIsIDEyLCBbIFwiMzQ1XCIgXSBdLCBbIFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljIChSw6lwdWJsaXF1ZSBjZW50cmFmcmljYWluZSlcIiwgXCJjZlwiLCBcIjIzNlwiIF0sIFsgXCJDaGFkIChUY2hhZClcIiwgXCJ0ZFwiLCBcIjIzNVwiIF0sIFsgXCJDaGlsZVwiLCBcImNsXCIsIFwiNTZcIiBdLCBbIFwiQ2hpbmEgKOS4reWbvSlcIiwgXCJjblwiLCBcIjg2XCIgXSwgWyBcIkNocmlzdG1hcyBJc2xhbmRcIiwgXCJjeFwiLCBcIjYxXCIsIDIsIFsgXCI4OTE2NFwiIF0gXSwgWyBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsIFwiY2NcIiwgXCI2MVwiLCAxLCBbIFwiODkxNjJcIiBdIF0sIFsgXCJDb2xvbWJpYVwiLCBcImNvXCIsIFwiNTdcIiBdLCBbIFwiQ29tb3JvcyAo4oCr2KzYstixINin2YTZgtmF2LHigKzigI4pXCIsIFwia21cIiwgXCIyNjlcIiBdLCBbIFwiQ29uZ28gKERSQykgKEphbWh1cmkgeWEgS2lkZW1va3Jhc2lhIHlhIEtvbmdvKVwiLCBcImNkXCIsIFwiMjQzXCIgXSwgWyBcIkNvbmdvIChSZXB1YmxpYykgKENvbmdvLUJyYXp6YXZpbGxlKVwiLCBcImNnXCIsIFwiMjQyXCIgXSwgWyBcIkNvb2sgSXNsYW5kc1wiLCBcImNrXCIsIFwiNjgyXCIgXSwgWyBcIkNvc3RhIFJpY2FcIiwgXCJjclwiLCBcIjUwNlwiIF0sIFsgXCJDw7R0ZSBk4oCZSXZvaXJlXCIsIFwiY2lcIiwgXCIyMjVcIiBdLCBbIFwiQ3JvYXRpYSAoSHJ2YXRza2EpXCIsIFwiaHJcIiwgXCIzODVcIiBdLCBbIFwiQ3ViYVwiLCBcImN1XCIsIFwiNTNcIiBdLCBbIFwiQ3VyYcOnYW9cIiwgXCJjd1wiLCBcIjU5OVwiLCAwIF0sIFsgXCJDeXBydXMgKM6az43PgM+Bzr/PgilcIiwgXCJjeVwiLCBcIjM1N1wiIF0sIFsgXCJDemVjaCBSZXB1YmxpYyAoxIxlc2vDoSByZXB1Ymxpa2EpXCIsIFwiY3pcIiwgXCI0MjBcIiBdLCBbIFwiRGVubWFyayAoRGFubWFyaylcIiwgXCJka1wiLCBcIjQ1XCIgXSwgWyBcIkRqaWJvdXRpXCIsIFwiZGpcIiwgXCIyNTNcIiBdLCBbIFwiRG9taW5pY2FcIiwgXCJkbVwiLCBcIjFcIiwgMTMsIFsgXCI3NjdcIiBdIF0sIFsgXCJEb21pbmljYW4gUmVwdWJsaWMgKFJlcMO6YmxpY2EgRG9taW5pY2FuYSlcIiwgXCJkb1wiLCBcIjFcIiwgMiwgWyBcIjgwOVwiLCBcIjgyOVwiLCBcIjg0OVwiIF0gXSwgWyBcIkVjdWFkb3JcIiwgXCJlY1wiLCBcIjU5M1wiIF0sIFsgXCJFZ3lwdCAo4oCr2YXYtdix4oCs4oCOKVwiLCBcImVnXCIsIFwiMjBcIiBdLCBbIFwiRWwgU2FsdmFkb3JcIiwgXCJzdlwiLCBcIjUwM1wiIF0sIFsgXCJFcXVhdG9yaWFsIEd1aW5lYSAoR3VpbmVhIEVjdWF0b3JpYWwpXCIsIFwiZ3FcIiwgXCIyNDBcIiBdLCBbIFwiRXJpdHJlYVwiLCBcImVyXCIsIFwiMjkxXCIgXSwgWyBcIkVzdG9uaWEgKEVlc3RpKVwiLCBcImVlXCIsIFwiMzcyXCIgXSwgWyBcIkVzd2F0aW5pXCIsIFwic3pcIiwgXCIyNjhcIiBdLCBbIFwiRXRoaW9waWFcIiwgXCJldFwiLCBcIjI1MVwiIF0sIFsgXCJGYWxrbGFuZCBJc2xhbmRzIChJc2xhcyBNYWx2aW5hcylcIiwgXCJma1wiLCBcIjUwMFwiIF0sIFsgXCJGYXJvZSBJc2xhbmRzIChGw7hyb3lhcilcIiwgXCJmb1wiLCBcIjI5OFwiIF0sIFsgXCJGaWppXCIsIFwiZmpcIiwgXCI2NzlcIiBdLCBbIFwiRmlubGFuZCAoU3VvbWkpXCIsIFwiZmlcIiwgXCIzNThcIiwgMCBdLCBbIFwiRnJhbmNlXCIsIFwiZnJcIiwgXCIzM1wiIF0sIFsgXCJGcmVuY2ggR3VpYW5hIChHdXlhbmUgZnJhbsOnYWlzZSlcIiwgXCJnZlwiLCBcIjU5NFwiIF0sIFsgXCJGcmVuY2ggUG9seW5lc2lhIChQb2x5bsOpc2llIGZyYW7Dp2Fpc2UpXCIsIFwicGZcIiwgXCI2ODlcIiBdLCBbIFwiR2Fib25cIiwgXCJnYVwiLCBcIjI0MVwiIF0sIFsgXCJHYW1iaWFcIiwgXCJnbVwiLCBcIjIyMFwiIF0sIFsgXCJHZW9yZ2lhICjhg6Hhg5Dhg6Xhg5Dhg6Dhg5fhg5Xhg5Thg5rhg50pXCIsIFwiZ2VcIiwgXCI5OTVcIiBdLCBbIFwiR2VybWFueSAoRGV1dHNjaGxhbmQpXCIsIFwiZGVcIiwgXCI0OVwiIF0sIFsgXCJHaGFuYSAoR2FhbmEpXCIsIFwiZ2hcIiwgXCIyMzNcIiBdLCBbIFwiR2licmFsdGFyXCIsIFwiZ2lcIiwgXCIzNTBcIiBdLCBbIFwiR3JlZWNlICjOlc67zrvOrM60zrEpXCIsIFwiZ3JcIiwgXCIzMFwiIF0sIFsgXCJHcmVlbmxhbmQgKEthbGFhbGxpdCBOdW5hYXQpXCIsIFwiZ2xcIiwgXCIyOTlcIiBdLCBbIFwiR3JlbmFkYVwiLCBcImdkXCIsIFwiMVwiLCAxNCwgWyBcIjQ3M1wiIF0gXSwgWyBcIkd1YWRlbG91cGVcIiwgXCJncFwiLCBcIjU5MFwiLCAwIF0sIFsgXCJHdWFtXCIsIFwiZ3VcIiwgXCIxXCIsIDE1LCBbIFwiNjcxXCIgXSBdLCBbIFwiR3VhdGVtYWxhXCIsIFwiZ3RcIiwgXCI1MDJcIiBdLCBbIFwiR3Vlcm5zZXlcIiwgXCJnZ1wiLCBcIjQ0XCIsIDEsIFsgXCIxNDgxXCIsIFwiNzc4MVwiLCBcIjc4MzlcIiwgXCI3OTExXCIgXSBdLCBbIFwiR3VpbmVhIChHdWluw6llKVwiLCBcImduXCIsIFwiMjI0XCIgXSwgWyBcIkd1aW5lYS1CaXNzYXUgKEd1aW7DqSBCaXNzYXUpXCIsIFwiZ3dcIiwgXCIyNDVcIiBdLCBbIFwiR3V5YW5hXCIsIFwiZ3lcIiwgXCI1OTJcIiBdLCBbIFwiSGFpdGlcIiwgXCJodFwiLCBcIjUwOVwiIF0sIFsgXCJIb25kdXJhc1wiLCBcImhuXCIsIFwiNTA0XCIgXSwgWyBcIkhvbmcgS29uZyAo6aaZ5rivKVwiLCBcImhrXCIsIFwiODUyXCIgXSwgWyBcIkh1bmdhcnkgKE1hZ3lhcm9yc3rDoWcpXCIsIFwiaHVcIiwgXCIzNlwiIF0sIFsgXCJJY2VsYW5kICjDjXNsYW5kKVwiLCBcImlzXCIsIFwiMzU0XCIgXSwgWyBcIkluZGlhICjgpK3gpL7gpLDgpKQpXCIsIFwiaW5cIiwgXCI5MVwiIF0sIFsgXCJJbmRvbmVzaWFcIiwgXCJpZFwiLCBcIjYyXCIgXSwgWyBcIklyYW4gKOKAq9in24zYsdin2YbigKzigI4pXCIsIFwiaXJcIiwgXCI5OFwiIF0sIFsgXCJJcmFxICjigKvYp9mE2LnYsdin2YLigKzigI4pXCIsIFwiaXFcIiwgXCI5NjRcIiBdLCBbIFwiSXJlbGFuZFwiLCBcImllXCIsIFwiMzUzXCIgXSwgWyBcIklzbGUgb2YgTWFuXCIsIFwiaW1cIiwgXCI0NFwiLCAyLCBbIFwiMTYyNFwiLCBcIjc0NTc2XCIsIFwiNzUyNFwiLCBcIjc5MjRcIiwgXCI3NjI0XCIgXSBdLCBbIFwiSXNyYWVsICjigKvXmdep16jXkNec4oCs4oCOKVwiLCBcImlsXCIsIFwiOTcyXCIgXSwgWyBcIkl0YWx5IChJdGFsaWEpXCIsIFwiaXRcIiwgXCIzOVwiLCAwIF0sIFsgXCJKYW1haWNhXCIsIFwiam1cIiwgXCIxXCIsIDQsIFsgXCI4NzZcIiwgXCI2NThcIiBdIF0sIFsgXCJKYXBhbiAo5pel5pysKVwiLCBcImpwXCIsIFwiODFcIiBdLCBbIFwiSmVyc2V5XCIsIFwiamVcIiwgXCI0NFwiLCAzLCBbIFwiMTUzNFwiLCBcIjc1MDlcIiwgXCI3NzAwXCIsIFwiNzc5N1wiLCBcIjc4MjlcIiwgXCI3OTM3XCIgXSBdLCBbIFwiSm9yZGFuICjigKvYp9mE2KPYsdiv2YbigKzigI4pXCIsIFwiam9cIiwgXCI5NjJcIiBdLCBbIFwiS2F6YWtoc3RhbiAo0JrQsNC30LDRhdGB0YLQsNC9KVwiLCBcImt6XCIsIFwiN1wiLCAxLCBbIFwiMzNcIiwgXCI3XCIgXSBdLCBbIFwiS2VueWFcIiwgXCJrZVwiLCBcIjI1NFwiIF0sIFsgXCJLaXJpYmF0aVwiLCBcImtpXCIsIFwiNjg2XCIgXSwgWyBcIktvc292b1wiLCBcInhrXCIsIFwiMzgzXCIgXSwgWyBcIkt1d2FpdCAo4oCr2KfZhNmD2YjZitiq4oCs4oCOKVwiLCBcImt3XCIsIFwiOTY1XCIgXSwgWyBcIkt5cmd5enN0YW4gKNCa0YvRgNCz0YvQt9GB0YLQsNC9KVwiLCBcImtnXCIsIFwiOTk2XCIgXSwgWyBcIkxhb3MgKOC6peC6suC6pylcIiwgXCJsYVwiLCBcIjg1NlwiIF0sIFsgXCJMYXR2aWEgKExhdHZpamEpXCIsIFwibHZcIiwgXCIzNzFcIiBdLCBbIFwiTGViYW5vbiAo4oCr2YTYqNmG2KfZhuKArOKAjilcIiwgXCJsYlwiLCBcIjk2MVwiIF0sIFsgXCJMZXNvdGhvXCIsIFwibHNcIiwgXCIyNjZcIiBdLCBbIFwiTGliZXJpYVwiLCBcImxyXCIsIFwiMjMxXCIgXSwgWyBcIkxpYnlhICjigKvZhNmK2KjZitin4oCs4oCOKVwiLCBcImx5XCIsIFwiMjE4XCIgXSwgWyBcIkxpZWNodGVuc3RlaW5cIiwgXCJsaVwiLCBcIjQyM1wiIF0sIFsgXCJMaXRodWFuaWEgKExpZXR1dmEpXCIsIFwibHRcIiwgXCIzNzBcIiBdLCBbIFwiTHV4ZW1ib3VyZ1wiLCBcImx1XCIsIFwiMzUyXCIgXSwgWyBcIk1hY2F1ICjmvrPploApXCIsIFwibW9cIiwgXCI4NTNcIiBdLCBbIFwiTWFkYWdhc2NhciAoTWFkYWdhc2lrYXJhKVwiLCBcIm1nXCIsIFwiMjYxXCIgXSwgWyBcIk1hbGF3aVwiLCBcIm13XCIsIFwiMjY1XCIgXSwgWyBcIk1hbGF5c2lhXCIsIFwibXlcIiwgXCI2MFwiIF0sIFsgXCJNYWxkaXZlc1wiLCBcIm12XCIsIFwiOTYwXCIgXSwgWyBcIk1hbGlcIiwgXCJtbFwiLCBcIjIyM1wiIF0sIFsgXCJNYWx0YVwiLCBcIm10XCIsIFwiMzU2XCIgXSwgWyBcIk1hcnNoYWxsIElzbGFuZHNcIiwgXCJtaFwiLCBcIjY5MlwiIF0sIFsgXCJNYXJ0aW5pcXVlXCIsIFwibXFcIiwgXCI1OTZcIiBdLCBbIFwiTWF1cml0YW5pYSAo4oCr2YXZiNix2YrYqtin2YbZitin4oCs4oCOKVwiLCBcIm1yXCIsIFwiMjIyXCIgXSwgWyBcIk1hdXJpdGl1cyAoTW9yaXMpXCIsIFwibXVcIiwgXCIyMzBcIiBdLCBbIFwiTWF5b3R0ZVwiLCBcInl0XCIsIFwiMjYyXCIsIDEsIFsgXCIyNjlcIiwgXCI2MzlcIiBdIF0sIFsgXCJNZXhpY28gKE3DqXhpY28pXCIsIFwibXhcIiwgXCI1MlwiIF0sIFsgXCJNaWNyb25lc2lhXCIsIFwiZm1cIiwgXCI2OTFcIiBdLCBbIFwiTW9sZG92YSAoUmVwdWJsaWNhIE1vbGRvdmEpXCIsIFwibWRcIiwgXCIzNzNcIiBdLCBbIFwiTW9uYWNvXCIsIFwibWNcIiwgXCIzNzdcIiBdLCBbIFwiTW9uZ29saWEgKNCc0L7QvdCz0L7QuylcIiwgXCJtblwiLCBcIjk3NlwiIF0sIFsgXCJNb250ZW5lZ3JvIChDcm5hIEdvcmEpXCIsIFwibWVcIiwgXCIzODJcIiBdLCBbIFwiTW9udHNlcnJhdFwiLCBcIm1zXCIsIFwiMVwiLCAxNiwgWyBcIjY2NFwiIF0gXSwgWyBcIk1vcm9jY28gKOKAq9in2YTZhdi62LHYqOKArOKAjilcIiwgXCJtYVwiLCBcIjIxMlwiLCAwIF0sIFsgXCJNb3phbWJpcXVlIChNb8OnYW1iaXF1ZSlcIiwgXCJtelwiLCBcIjI1OFwiIF0sIFsgXCJNeWFubWFyIChCdXJtYSkgKOGAmeGAvOGAlOGAuuGAmeGArClcIiwgXCJtbVwiLCBcIjk1XCIgXSwgWyBcIk5hbWliaWEgKE5hbWliacOrKVwiLCBcIm5hXCIsIFwiMjY0XCIgXSwgWyBcIk5hdXJ1XCIsIFwibnJcIiwgXCI2NzRcIiBdLCBbIFwiTmVwYWwgKOCkqOClh+CkquCkvuCksilcIiwgXCJucFwiLCBcIjk3N1wiIF0sIFsgXCJOZXRoZXJsYW5kcyAoTmVkZXJsYW5kKVwiLCBcIm5sXCIsIFwiMzFcIiBdLCBbIFwiTmV3IENhbGVkb25pYSAoTm91dmVsbGUtQ2Fsw6lkb25pZSlcIiwgXCJuY1wiLCBcIjY4N1wiIF0sIFsgXCJOZXcgWmVhbGFuZFwiLCBcIm56XCIsIFwiNjRcIiBdLCBbIFwiTmljYXJhZ3VhXCIsIFwibmlcIiwgXCI1MDVcIiBdLCBbIFwiTmlnZXIgKE5pamFyKVwiLCBcIm5lXCIsIFwiMjI3XCIgXSwgWyBcIk5pZ2VyaWFcIiwgXCJuZ1wiLCBcIjIzNFwiIF0sIFsgXCJOaXVlXCIsIFwibnVcIiwgXCI2ODNcIiBdLCBbIFwiTm9yZm9sayBJc2xhbmRcIiwgXCJuZlwiLCBcIjY3MlwiIF0sIFsgXCJOb3J0aCBLb3JlYSAo7KGw7ISgIOuvvOyjvOyjvOydmCDsnbjrr7wg6rO17ZmU6rWtKVwiLCBcImtwXCIsIFwiODUwXCIgXSwgWyBcIk5vcnRoIE1hY2Vkb25pYSAo0KHQtdCy0LXRgNC90LAg0JzQsNC60LXQtNC+0L3QuNGY0LApXCIsIFwibWtcIiwgXCIzODlcIiBdLCBbIFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIFwibXBcIiwgXCIxXCIsIDE3LCBbIFwiNjcwXCIgXSBdLCBbIFwiTm9yd2F5IChOb3JnZSlcIiwgXCJub1wiLCBcIjQ3XCIsIDAgXSwgWyBcIk9tYW4gKOKAq9i52Y/Zhdin2YbigKzigI4pXCIsIFwib21cIiwgXCI5NjhcIiBdLCBbIFwiUGFraXN0YW4gKOKAq9m+2Kfaqdiz2KrYp9mG4oCs4oCOKVwiLCBcInBrXCIsIFwiOTJcIiBdLCBbIFwiUGFsYXVcIiwgXCJwd1wiLCBcIjY4MFwiIF0sIFsgXCJQYWxlc3RpbmUgKOKAq9mB2YTYs9i32YrZhuKArOKAjilcIiwgXCJwc1wiLCBcIjk3MFwiIF0sIFsgXCJQYW5hbWEgKFBhbmFtw6EpXCIsIFwicGFcIiwgXCI1MDdcIiBdLCBbIFwiUGFwdWEgTmV3IEd1aW5lYVwiLCBcInBnXCIsIFwiNjc1XCIgXSwgWyBcIlBhcmFndWF5XCIsIFwicHlcIiwgXCI1OTVcIiBdLCBbIFwiUGVydSAoUGVyw7opXCIsIFwicGVcIiwgXCI1MVwiIF0sIFsgXCJQaGlsaXBwaW5lc1wiLCBcInBoXCIsIFwiNjNcIiBdLCBbIFwiUG9sYW5kIChQb2xza2EpXCIsIFwicGxcIiwgXCI0OFwiIF0sIFsgXCJQb3J0dWdhbFwiLCBcInB0XCIsIFwiMzUxXCIgXSwgWyBcIlB1ZXJ0byBSaWNvXCIsIFwicHJcIiwgXCIxXCIsIDMsIFsgXCI3ODdcIiwgXCI5MzlcIiBdIF0sIFsgXCJRYXRhciAo4oCr2YLYt9ix4oCs4oCOKVwiLCBcInFhXCIsIFwiOTc0XCIgXSwgWyBcIlLDqXVuaW9uIChMYSBSw6l1bmlvbilcIiwgXCJyZVwiLCBcIjI2MlwiLCAwIF0sIFsgXCJSb21hbmlhIChSb23Dom5pYSlcIiwgXCJyb1wiLCBcIjQwXCIgXSwgWyBcIlJ1c3NpYSAo0KDQvtGB0YHQuNGPKVwiLCBcInJ1XCIsIFwiN1wiLCAwIF0sIFsgXCJSd2FuZGFcIiwgXCJyd1wiLCBcIjI1MFwiIF0sIFsgXCJTYWludCBCYXJ0aMOpbGVteVwiLCBcImJsXCIsIFwiNTkwXCIsIDEgXSwgWyBcIlNhaW50IEhlbGVuYVwiLCBcInNoXCIsIFwiMjkwXCIgXSwgWyBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBcImtuXCIsIFwiMVwiLCAxOCwgWyBcIjg2OVwiIF0gXSwgWyBcIlNhaW50IEx1Y2lhXCIsIFwibGNcIiwgXCIxXCIsIDE5LCBbIFwiNzU4XCIgXSBdLCBbIFwiU2FpbnQgTWFydGluIChTYWludC1NYXJ0aW4gKHBhcnRpZSBmcmFuw6dhaXNlKSlcIiwgXCJtZlwiLCBcIjU5MFwiLCAyIF0sIFsgXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uIChTYWludC1QaWVycmUtZXQtTWlxdWVsb24pXCIsIFwicG1cIiwgXCI1MDhcIiBdLCBbIFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgXCJ2Y1wiLCBcIjFcIiwgMjAsIFsgXCI3ODRcIiBdIF0sIFsgXCJTYW1vYVwiLCBcIndzXCIsIFwiNjg1XCIgXSwgWyBcIlNhbiBNYXJpbm9cIiwgXCJzbVwiLCBcIjM3OFwiIF0sIFsgXCJTw6NvIFRvbcOpIGFuZCBQcsOtbmNpcGUgKFPDo28gVG9tw6kgZSBQcsOtbmNpcGUpXCIsIFwic3RcIiwgXCIyMzlcIiBdLCBbIFwiU2F1ZGkgQXJhYmlhICjigKvYp9mE2YXZhdmE2YPYqSDYp9mE2LnYsdio2YrYqSDYp9mE2LPYudmI2K/Zitip4oCs4oCOKVwiLCBcInNhXCIsIFwiOTY2XCIgXSwgWyBcIlNlbmVnYWwgKFPDqW7DqWdhbClcIiwgXCJzblwiLCBcIjIyMVwiIF0sIFsgXCJTZXJiaWEgKNCh0YDQsdC40ZjQsClcIiwgXCJyc1wiLCBcIjM4MVwiIF0sIFsgXCJTZXljaGVsbGVzXCIsIFwic2NcIiwgXCIyNDhcIiBdLCBbIFwiU2llcnJhIExlb25lXCIsIFwic2xcIiwgXCIyMzJcIiBdLCBbIFwiU2luZ2Fwb3JlXCIsIFwic2dcIiwgXCI2NVwiIF0sIFsgXCJTaW50IE1hYXJ0ZW5cIiwgXCJzeFwiLCBcIjFcIiwgMjEsIFsgXCI3MjFcIiBdIF0sIFsgXCJTbG92YWtpYSAoU2xvdmVuc2tvKVwiLCBcInNrXCIsIFwiNDIxXCIgXSwgWyBcIlNsb3ZlbmlhIChTbG92ZW5pamEpXCIsIFwic2lcIiwgXCIzODZcIiBdLCBbIFwiU29sb21vbiBJc2xhbmRzXCIsIFwic2JcIiwgXCI2NzdcIiBdLCBbIFwiU29tYWxpYSAoU29vbWFhbGl5YSlcIiwgXCJzb1wiLCBcIjI1MlwiIF0sIFsgXCJTb3V0aCBBZnJpY2FcIiwgXCJ6YVwiLCBcIjI3XCIgXSwgWyBcIlNvdXRoIEtvcmVhICjrjIDtlZzrr7zqta0pXCIsIFwia3JcIiwgXCI4MlwiIF0sIFsgXCJTb3V0aCBTdWRhbiAo4oCr2KzZhtmI2Kgg2KfZhNiz2YjYr9in2YbigKzigI4pXCIsIFwic3NcIiwgXCIyMTFcIiBdLCBbIFwiU3BhaW4gKEVzcGHDsWEpXCIsIFwiZXNcIiwgXCIzNFwiIF0sIFsgXCJTcmkgTGFua2EgKOC3geC3iuKAjeC2u+C3kyDgtr3gtoLgtprgt4/gt4ApXCIsIFwibGtcIiwgXCI5NFwiIF0sIFsgXCJTdWRhbiAo4oCr2KfZhNiz2YjYr9in2YbigKzigI4pXCIsIFwic2RcIiwgXCIyNDlcIiBdLCBbIFwiU3VyaW5hbWVcIiwgXCJzclwiLCBcIjU5N1wiIF0sIFsgXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsIFwic2pcIiwgXCI0N1wiLCAxLCBbIFwiNzlcIiBdIF0sIFsgXCJTd2VkZW4gKFN2ZXJpZ2UpXCIsIFwic2VcIiwgXCI0NlwiIF0sIFsgXCJTd2l0emVybGFuZCAoU2Nod2VpeilcIiwgXCJjaFwiLCBcIjQxXCIgXSwgWyBcIlN5cmlhICjigKvYs9mI2LHZitin4oCs4oCOKVwiLCBcInN5XCIsIFwiOTYzXCIgXSwgWyBcIlRhaXdhbiAo5Y+w54GjKVwiLCBcInR3XCIsIFwiODg2XCIgXSwgWyBcIlRhamlraXN0YW5cIiwgXCJ0alwiLCBcIjk5MlwiIF0sIFsgXCJUYW56YW5pYVwiLCBcInR6XCIsIFwiMjU1XCIgXSwgWyBcIlRoYWlsYW5kICjguYTguJfguKIpXCIsIFwidGhcIiwgXCI2NlwiIF0sIFsgXCJUaW1vci1MZXN0ZVwiLCBcInRsXCIsIFwiNjcwXCIgXSwgWyBcIlRvZ29cIiwgXCJ0Z1wiLCBcIjIyOFwiIF0sIFsgXCJUb2tlbGF1XCIsIFwidGtcIiwgXCI2OTBcIiBdLCBbIFwiVG9uZ2FcIiwgXCJ0b1wiLCBcIjY3NlwiIF0sIFsgXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIFwidHRcIiwgXCIxXCIsIDIyLCBbIFwiODY4XCIgXSBdLCBbIFwiVHVuaXNpYSAo4oCr2KrZiNmG2LPigKzigI4pXCIsIFwidG5cIiwgXCIyMTZcIiBdLCBbIFwiVHVya2V5IChUw7xya2l5ZSlcIiwgXCJ0clwiLCBcIjkwXCIgXSwgWyBcIlR1cmttZW5pc3RhblwiLCBcInRtXCIsIFwiOTkzXCIgXSwgWyBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBcInRjXCIsIFwiMVwiLCAyMywgWyBcIjY0OVwiIF0gXSwgWyBcIlR1dmFsdVwiLCBcInR2XCIsIFwiNjg4XCIgXSwgWyBcIlUuUy4gVmlyZ2luIElzbGFuZHNcIiwgXCJ2aVwiLCBcIjFcIiwgMjQsIFsgXCIzNDBcIiBdIF0sIFsgXCJVZ2FuZGFcIiwgXCJ1Z1wiLCBcIjI1NlwiIF0sIFsgXCJVa3JhaW5lICjQo9C60YDQsNGX0L3QsClcIiwgXCJ1YVwiLCBcIjM4MFwiIF0sIFsgXCJVbml0ZWQgQXJhYiBFbWlyYXRlcyAo4oCr2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K/YqeKArOKAjilcIiwgXCJhZVwiLCBcIjk3MVwiIF0sIFsgXCJVbml0ZWQgS2luZ2RvbVwiLCBcImdiXCIsIFwiNDRcIiwgMCBdLCBbIFwiVW5pdGVkIFN0YXRlc1wiLCBcInVzXCIsIFwiMVwiLCAwIF0sIFsgXCJVcnVndWF5XCIsIFwidXlcIiwgXCI1OThcIiBdLCBbIFwiVXpiZWtpc3RhbiAoT8q7emJla2lzdG9uKVwiLCBcInV6XCIsIFwiOTk4XCIgXSwgWyBcIlZhbnVhdHVcIiwgXCJ2dVwiLCBcIjY3OFwiIF0sIFsgXCJWYXRpY2FuIENpdHkgKENpdHTDoCBkZWwgVmF0aWNhbm8pXCIsIFwidmFcIiwgXCIzOVwiLCAxLCBbIFwiMDY2OThcIiBdIF0sIFsgXCJWZW5lenVlbGFcIiwgXCJ2ZVwiLCBcIjU4XCIgXSwgWyBcIlZpZXRuYW0gKFZp4buHdCBOYW0pXCIsIFwidm5cIiwgXCI4NFwiIF0sIFsgXCJXYWxsaXMgYW5kIEZ1dHVuYSAoV2FsbGlzLWV0LUZ1dHVuYSlcIiwgXCJ3ZlwiLCBcIjY4MVwiIF0sIFsgXCJXZXN0ZXJuIFNhaGFyYSAo4oCr2KfZhNi12K3Ysdin2KEg2KfZhNi62LHYqNmK2KnigKzigI4pXCIsIFwiZWhcIiwgXCIyMTJcIiwgMSwgWyBcIjUyODhcIiwgXCI1Mjg5XCIgXSBdLCBbIFwiWWVtZW4gKOKAq9in2YTZitmF2YbigKzigI4pXCIsIFwieWVcIiwgXCI5NjdcIiBdLCBbIFwiWmFtYmlhXCIsIFwiem1cIiwgXCIyNjBcIiBdLCBbIFwiWmltYmFid2VcIiwgXCJ6d1wiLCBcIjI2M1wiIF0sIFsgXCLDhWxhbmQgSXNsYW5kc1wiLCBcImF4XCIsIFwiMzU4XCIsIDEsIFsgXCIxOFwiIF0gXSBdO1xuICAgICAgICAvLyBsb29wIG92ZXIgYWxsIG9mIHRoZSBjb3VudHJpZXMgYWJvdmUsIHJlc3RydWN0dXJpbmcgdGhlIGRhdGEgdG8gYmUgb2JqZWN0cyB3aXRoIG5hbWVkIGtleXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxDb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjID0gYWxsQ291bnRyaWVzW2ldO1xuICAgICAgICAgICAgYWxsQ291bnRyaWVzW2ldID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGNbMF0sXG4gICAgICAgICAgICAgICAgaXNvMjogY1sxXSxcbiAgICAgICAgICAgICAgICBkaWFsQ29kZTogY1syXSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogY1szXSB8fCAwLFxuICAgICAgICAgICAgICAgIGFyZWFDb2RlczogY1s0XSB8fCBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBPYmplY3QoYXJndW1lbnRzW2ldKSA6IHt9O1xuICAgICAgICAgICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBvd25LZXlzLnB1c2guYXBwbHkob3duS2V5cywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7XG4gICAgICAgICAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgICAgICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gICAgICAgICAgICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGludGxUZWxJbnB1dEdsb2JhbHMgPSB7XG4gICAgICAgICAgICBnZXRJbnN0YW5jZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoaW5wdXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWludGwtdGVsLWlucHV0LWlkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5pbnN0YW5jZXNbaWRdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluc3RhbmNlczoge30sXG4gICAgICAgICAgICAvLyB1c2luZyBhIGdsb2JhbCBsaWtlIHRoaXMgYWxsb3dzIHVzIHRvIG1vY2sgaXQgaW4gdGhlIHRlc3RzXG4gICAgICAgICAgICBkb2N1bWVudFJlYWR5OiBmdW5jdGlvbiBkb2N1bWVudFJlYWR5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscyA9IGludGxUZWxJbnB1dEdsb2JhbHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlc2UgdmFycyBwZXJzaXN0IHRocm91Z2ggYWxsIGluc3RhbmNlcyBvZiB0aGUgcGx1Z2luXG4gICAgICAgIHZhciBpZCA9IDA7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIC8vIHdoZXRoZXIgb3Igbm90IHRvIGFsbG93IHRoZSBkcm9wZG93blxuICAgICAgICAgICAgYWxsb3dEcm9wZG93bjogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGF1dG8gaW5zZXJ0IGRpYWwgY29kZSAoQSkgb24gaW5pdCwgKEIpIG9uIHVzZXIgc2VsZWN0aW5nIGEgY291bnRyeSwgKEMpIG9uIGNhbGxpbmcgc2V0Q291bnRyeVxuICAgICAgICAgICAgLy8gYWxzbyBsaXN0ZW4gZm9yIGJsdXIvc3VibWl0IGFuZCBhdXRvIHJlbW92ZSBkaWFsIGNvZGUgaWYgdGhhdCdzIGFsbCB0aGVyZSBpc1xuICAgICAgICAgICAgYXV0b0luc2VydERpYWxDb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGFkZCBhIHBsYWNlaG9sZGVyIGluIHRoZSBpbnB1dCB3aXRoIGFuIGV4YW1wbGUgbnVtYmVyIGZvciB0aGUgc2VsZWN0ZWQgY291bnRyeVxuICAgICAgICAgICAgYXV0b1BsYWNlaG9sZGVyOiBcInBvbGl0ZVwiLFxuICAgICAgICAgICAgLy8gbW9kaWZ5IHRoZSBwYXJlbnRDbGFzc1xuICAgICAgICAgICAgY3VzdG9tQ29udGFpbmVyOiBcIlwiLFxuICAgICAgICAgICAgLy8gbW9kaWZ5IHRoZSBhdXRvIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICBjdXN0b21QbGFjZWhvbGRlcjogbnVsbCxcbiAgICAgICAgICAgIC8vIGFwcGVuZCBtZW51IHRvIHNwZWNpZmllZCBlbGVtZW50XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRhaW5lcjogbnVsbCxcbiAgICAgICAgICAgIC8vIGRvbid0IGRpc3BsYXkgdGhlc2UgY291bnRyaWVzXG4gICAgICAgICAgICBleGNsdWRlQ291bnRyaWVzOiBbXSxcbiAgICAgICAgICAgIC8vIGZvcm1hdCB0aGUgaW5wdXQgdmFsdWUgZHVyaW5nIGluaXRpYWxpc2F0aW9uIGFuZCBvbiBzZXROdW1iZXJcbiAgICAgICAgICAgIGZvcm1hdE9uRGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGdlb0lwIGxvb2t1cCBmdW5jdGlvblxuICAgICAgICAgICAgZ2VvSXBMb29rdXA6IG51bGwsXG4gICAgICAgICAgICAvLyBpbmplY3QgYSBoaWRkZW4gaW5wdXQgd2l0aCB0aGlzIG5hbWUsIGFuZCBvbiBzdWJtaXQsIHBvcHVsYXRlIGl0IHdpdGggdGhlIHJlc3VsdCBvZiBnZXROdW1iZXJcbiAgICAgICAgICAgIGhpZGRlbklucHV0OiBcIlwiLFxuICAgICAgICAgICAgLy8gaW5pdGlhbCBjb3VudHJ5XG4gICAgICAgICAgICBpbml0aWFsQ291bnRyeTogXCJcIixcbiAgICAgICAgICAgIC8vIGxvY2FsaXplZCBjb3VudHJ5IG5hbWVzIGUuZy4geyAnZGUnOiAnRGV1dHNjaGxhbmQnIH1cbiAgICAgICAgICAgIGxvY2FsaXplZENvdW50cmllczogbnVsbCxcbiAgICAgICAgICAgIC8vIG5hdGlvbmFsIHZzIGludGVybmF0aW9uYWwgZm9ybWF0dGluZyBmb3IgbnVtYmVycyBlLmcuIHBsYWNlaG9sZGVycyBhbmQgZGlzcGxheWluZyBleGlzdGluZyBudW1iZXJzXG4gICAgICAgICAgICBuYXRpb25hbE1vZGU6IHRydWUsXG4gICAgICAgICAgICAvLyBkaXNwbGF5IG9ubHkgdGhlc2UgY291bnRyaWVzXG4gICAgICAgICAgICBvbmx5Q291bnRyaWVzOiBbXSxcbiAgICAgICAgICAgIC8vIG51bWJlciB0eXBlIHRvIHVzZSBmb3IgcGxhY2Vob2xkZXJzXG4gICAgICAgICAgICBwbGFjZWhvbGRlck51bWJlclR5cGU6IFwiTU9CSUxFXCIsXG4gICAgICAgICAgICAvLyB0aGUgY291bnRyaWVzIGF0IHRoZSB0b3Agb2YgdGhlIGxpc3QuIGRlZmF1bHRzIHRvIHVuaXRlZCBzdGF0ZXMgYW5kIHVuaXRlZCBraW5nZG9tXG4gICAgICAgICAgICBwcmVmZXJyZWRDb3VudHJpZXM6IFsgXCJ1c1wiLCBcImdiXCIgXSxcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgdGhlIGNvdW50cnkgZGlhbCBjb2RlIG5leHQgdG8gdGhlIHNlbGVjdGVkIGZsYWdcbiAgICAgICAgICAgIHNlcGFyYXRlRGlhbENvZGU6IGZhbHNlLFxuICAgICAgICAgICAgLy8gb3B0aW9uIHRvIGhpZGUgdGhlIGZsYWdzIC0gbXVzdCBiZSB1c2VkIHdpdGggc2VwYXJhdGVEaWFsQ29kZSwgb3IgYWxsb3dEcm9wZG93bj1mYWxzZVxuICAgICAgICAgICAgc2hvd0ZsYWdzOiB0cnVlLFxuICAgICAgICAgICAgLy8gc3BlY2lmeSB0aGUgcGF0aCB0byB0aGUgbGlicGhvbmVudW1iZXIgc2NyaXB0IHRvIGVuYWJsZSB2YWxpZGF0aW9uL2Zvcm1hdHRpbmdcbiAgICAgICAgICAgIHV0aWxzU2NyaXB0OiBcIlwiXG4gICAgICAgIH07XG4gICAgICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfTm9ydGhfQW1lcmljYW5fTnVtYmVyaW5nX1BsYW5fYXJlYV9jb2RlcyNOb24tZ2VvZ3JhcGhpY19hcmVhX2NvZGVzXG4gICAgICAgIHZhciByZWdpb25sZXNzTmFucE51bWJlcnMgPSBbIFwiODAwXCIsIFwiODIyXCIsIFwiODMzXCIsIFwiODQ0XCIsIFwiODU1XCIsIFwiODY2XCIsIFwiODc3XCIsIFwiODgwXCIsIFwiODgxXCIsIFwiODgyXCIsIFwiODgzXCIsIFwiODg0XCIsIFwiODg1XCIsIFwiODg2XCIsIFwiODg3XCIsIFwiODg4XCIsIFwiODg5XCIgXTtcbiAgICAgICAgLy8gdXRpbGl0eSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYW4gb2JqZWN0LiBjYW4ndCB1c2UgT2JqZWN0LmVudHJpZXMgb3IgbmF0aXZlIGZvckVhY2ggYmVjYXVzZVxuICAgICAgICAvLyBvZiBJRTExXG4gICAgICAgIHZhciBmb3JFYWNoUHJvcCA9IGZ1bmN0aW9uIGZvckVhY2hQcm9wKG9iaiwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGtleXNbaV0sIG9ialtrZXlzW2ldXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJ1biBhIG1ldGhvZCBvbiBlYWNoIGluc3RhbmNlIG9mIHRoZSBwbHVnaW5cbiAgICAgICAgdmFyIGZvckVhY2hJbnN0YW5jZSA9IGZ1bmN0aW9uIGZvckVhY2hJbnN0YW5jZShtZXRob2QpIHtcbiAgICAgICAgICAgIGZvckVhY2hQcm9wKHdpbmRvdy5pbnRsVGVsSW5wdXRHbG9iYWxzLmluc3RhbmNlcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMuaW5zdGFuY2VzW2tleV1bbWV0aG9kXSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMgaXMgb3VyIHBsdWdpbiBjbGFzcyB0aGF0IHdlIHdpbGwgY3JlYXRlIGFuIGluc3RhbmNlIG9mXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICB2YXIgSXRpID0gLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIEl0aShpbnB1dCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEl0aSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IGlkKys7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3Mgc3BlY2lmaWVkIG9wdGlvbnMgLyBkZWZhdWx0c1xuICAgICAgICAgICAgICAgIC8vIGFsdGVybmF0aXZlIHRvIE9iamVjdC5hc3NpZ24sIHdoaWNoIGlzbid0IHN1cHBvcnRlZCBieSBJRTExXG4gICAgICAgICAgICAgICAgdmFyIGN1c3RvbU9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvckVhY2hQcm9wKGRlZmF1bHRzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9wdGlvbnNba2V5XSA9IGN1c3RvbU9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSA/IGN1c3RvbU9wdGlvbnNba2V5XSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFkSW5pdGlhbFBsYWNlaG9sZGVyID0gQm9vbGVhbihpbnB1dC5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfY3JlYXRlQ2xhc3MoSXRpLCBbIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2luaXRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBpbiBuYXRpb25hbE1vZGUsIGRvIG5vdCBpbnNlcnQgZGlhbCBjb2Rlc1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5hdGlvbmFsTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF1dG9JbnNlcnREaWFsQ29kZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNlcGFyYXRlRGlhbENvZGUgZW5hYmxlZCwgZG8gbm90IGluc2VydCBkaWFsIGNvZGVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VwYXJhdGVEaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF1dG9JbnNlcnREaWFsQ29kZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcmNlIHNob3dGbGFncz10cnVlIGlmIHRoZXJlJ3MgYSBkcm9wZG93biBhbmQgd2UncmUgbm90IGRpc3BsYXlpbmcgdGhlIGRpYWwgY29kZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgb3RoZXJ3aXNlIHlvdSBqdXN0IGhhdmUgYSBkb3duIGFycm93IG9uIGl0J3Mgb3duIHdoaWNoIGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9yY2VTaG93RmxhZ3MgPSB0aGlzLm9wdGlvbnMuYWxsb3dEcm9wZG93biAmJiAhdGhpcy5vcHRpb25zLnNlcGFyYXRlRGlhbENvZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLnNob3dGbGFncyAmJiBmb3JjZVNob3dGbGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNob3dGbGFncyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2Fubm90IGp1c3QgdGVzdCBzY3JlZW4gc2l6ZSBhcyBzb21lIHNtYXJ0cGhvbmVzL3dlYnNpdGUgbWV0YSB0YWdzIHdpbGwgcmVwb3J0IGRlc2t0b3BcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x1dGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogZm9yIHNvbWUgcmVhc29uIGphc21pbmUgYnJlYWtzIGlmIHlvdSBwdXQgdGhpcyBpbiB0aGUgbWFpbiBQbHVnaW4gZnVuY3Rpb24gd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdCBvZiB0aGVzZSBkZWNsYXJhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogdG8gdGFyZ2V0IEFuZHJvaWQgTW9iaWxlcyAoYW5kIG5vdCBUYWJsZXRzKSwgd2UgbXVzdCBmaW5kICdBbmRyb2lkJyBhbmQgJ01vYmlsZSdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9IC9BbmRyb2lkLitNb2JpbGV8d2ViT1N8aVBob25lfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgdGhlIG1vYmlsZSBkcm9wZG93biBjc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIml0aS1tb2JpbGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbiBtb2JpbGUsIHdlIHdhbnQgYSBmdWxsIHNjcmVlbiBkcm9wZG93biwgc28gd2UgbXVzdCBhcHBlbmQgaXQgdG8gdGhlIGJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRyb3Bkb3duQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRyb3Bkb3duQ29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBpbnB1dCBoYXMgb25lIHBhcmVudCB3aXRoIFJUTFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUlRMID0gISF0aGlzLnRlbElucHV0LmNsb3Nlc3QoXCJbZGlyPXJ0bF1cIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHByb21pc2VzIGdldCByZXNvbHZlZCB3aGVuIHRoZWlyIGluZGl2aWR1YWwgcmVxdWVzdHMgY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXkgdGhlIGRldiBjYW4gZG8gc29tZXRoaW5nIGxpa2UgaXRpLnByb21pc2UudGhlbiguLi4pIHRvIGtub3cgd2hlbiBhbGwgcmVxdWVzdHMgYXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF1dG9Db3VudHJ5UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZXNvbHZlQXV0b0NvdW50cnlQcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVqZWN0QXV0b0NvdW50cnlQcm9taXNlID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXRpbHNTY3JpcHRQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlc29sdmVVdGlsc1NjcmlwdFByb21pc2UgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZWplY3RVdGlsc1NjcmlwdFByb21pc2UgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZSA9IFByb21pc2UuYWxsKFsgYXV0b0NvdW50cnlQcm9taXNlLCB1dGlsc1NjcmlwdFByb21pc2UgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGVycm9ycyB3aGVuIFByb21pc2UgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQXV0b0NvdW50cnlQcm9taXNlID0gdGhpcy5yZWplY3RBdXRvQ291bnRyeVByb21pc2UgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVXRpbHNTY3JpcHRQcm9taXNlID0gdGhpcy5yZWplY3RVdGlsc1NjcmlwdFByb21pc2UgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGluIHZhcmlvdXMgc2l0dWF0aW9ucyB0aGVyZSBjb3VsZCBiZSBubyBjb3VudHJ5IHNlbGVjdGVkIGluaXRpYWxseSwgYnV0IHdlIG5lZWQgdG8gYmUgYWJsZVxuICAgICAgICAgICAgICAgICAgICAvLyB0byBhc3N1bWUgdGhpcyB2YXJpYWJsZSBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MgYWxsIHRoZSBkYXRhOiBvbmx5Q291bnRyaWVzLCBleGNsdWRlQ291bnRyaWVzLCBwcmVmZXJyZWRDb3VudHJpZXMgZXRjXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NDb3VudHJ5RGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBnZW5lcmF0ZSB0aGUgbWFya3VwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlTWFya3VwKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUgYW5kIHRoZSBzZWxlY3RlZCBmbGFnXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCBhbGwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyczogYXV0b0luc2VydERpYWxDb2RlLCBpbnB1dCBrZXlkb3duLCBzZWxlY3RlZEZsYWcgY2xpY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgICAgICAvLyB1dGlscyBzY3JpcHQsIGFuZCBhdXRvIGNvdW50cnlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdFJlcXVlc3RzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfcHJvY2Vzc0NvdW50cnlEYXRhXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wcm9jZXNzQ291bnRyeURhdGEoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2Nlc3Mgb25seUNvdW50cmllcyBvciBleGNsdWRlQ291bnRyaWVzIGFycmF5IGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc0FsbENvdW50cmllcygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBjb3VudHJ5Q29kZXMgbWFwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NDb3VudHJ5Q29kZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvY2VzcyB0aGUgcHJlZmVycmVkQ291bnRyaWVzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NQcmVmZXJyZWRDb3VudHJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNsYXRlIGNvdW50cmllcyBhY2NvcmRpbmcgdG8gbG9jYWxpemVkQ291bnRyaWVzIG9wdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvY2FsaXplZENvdW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRlQ291bnRyaWVzQnlMb2NhbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBzb3J0IGNvdW50cmllcyBieSBuYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25seUNvdW50cmllcy5sZW5ndGggfHwgdGhpcy5vcHRpb25zLmxvY2FsaXplZENvdW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMuc29ydCh0aGlzLl9jb3VudHJ5TmFtZVNvcnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfYWRkQ291bnRyeUNvZGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZENvdW50cnlDb2RlKGlzbzIsIGNvdW50cnlDb2RlLCBwcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeUNvZGUubGVuZ3RoID4gdGhpcy5jb3VudHJ5Q29kZU1heExlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5Q29kZU1heExlbiA9IGNvdW50cnlDb2RlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY291bnRyeUNvZGVzLmhhc093blByb3BlcnR5KGNvdW50cnlDb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5Q29kZXNbY291bnRyeUNvZGVdID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gYmFpbCBpZiB3ZSBhbHJlYWR5IGhhdmUgdGhpcyBjb3VudHJ5IGZvciB0aGlzIGNvdW50cnlDb2RlXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb3VudHJ5Q29kZXNbY291bnRyeUNvZGVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudHJ5Q29kZXNbY291bnRyeUNvZGVdW2ldID09PSBpc28yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciB1bmRlZmluZWQgYXMgMCBpcyBmYWxzeVxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwcmlvcml0eSAhPT0gdW5kZWZpbmVkID8gcHJpb3JpdHkgOiB0aGlzLmNvdW50cnlDb2Rlc1tjb3VudHJ5Q29kZV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlDb2Rlc1tjb3VudHJ5Q29kZV1baW5kZXhdID0gaXNvMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9wcm9jZXNzQWxsQ291bnRyaWVzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wcm9jZXNzQWxsQ291bnRyaWVzKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9ubHlDb3VudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG93ZXJDYXNlT25seUNvdW50cmllcyA9IHRoaXMub3B0aW9ucy5vbmx5Q291bnRyaWVzLm1hcChmdW5jdGlvbihjb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50cnkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMgPSBhbGxDb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG93ZXJDYXNlT25seUNvdW50cmllcy5pbmRleE9mKGNvdW50cnkuaXNvMikgPiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5leGNsdWRlQ291bnRyaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvd2VyQ2FzZUV4Y2x1ZGVDb3VudHJpZXMgPSB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvdW50cmllcy5tYXAoZnVuY3Rpb24oY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudHJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyaWVzID0gYWxsQ291bnRyaWVzLmZpbHRlcihmdW5jdGlvbihjb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZUV4Y2x1ZGVDb3VudHJpZXMuaW5kZXhPZihjb3VudHJ5LmlzbzIpID09PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMgPSBhbGxDb3VudHJpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl90cmFuc2xhdGVDb3VudHJpZXNCeUxvY2FsZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdHJhbnNsYXRlQ291bnRyaWVzQnlMb2NhbGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc28gPSB0aGlzLmNvdW50cmllc1tpXS5pc28yLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvY2FsaXplZENvdW50cmllcy5oYXNPd25Qcm9wZXJ0eShpc28pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXNbaV0ubmFtZSA9IHRoaXMub3B0aW9ucy5sb2NhbGl6ZWRDb3VudHJpZXNbaXNvXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2NvdW50cnlOYW1lU29ydFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY291bnRyeU5hbWVTb3J0KGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEubmFtZSA8IGIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3Byb2Nlc3NDb3VudHJ5Q29kZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Byb2Nlc3NDb3VudHJ5Q29kZXMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeUNvZGVNYXhMZW4gPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBoZXJlIHdlIHN0b3JlIGp1c3QgZGlhbCBjb2Rlc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxDb2RlcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAvLyBoZXJlIHdlIHN0b3JlIFwiY291bnRyeSBjb2Rlc1wiIChib3RoIGRpYWwgY29kZXMgYW5kIHRoZWlyIGFyZWEgY29kZXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeUNvZGVzID0ge307XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0OiBhZGQgZGlhbCBjb2Rlc1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMuY291bnRyaWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpYWxDb2Rlc1tjLmRpYWxDb2RlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbENvZGVzW2MuZGlhbENvZGVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZENvdW50cnlDb2RlKGMuaXNvMiwgYy5kaWFsQ29kZSwgYy5wcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gbmV4dDogYWRkIGFyZWEgY29kZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhIHNlY29uZCBsb29wIG92ZXIgY291bnRyaWVzLCB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhbGwgb2YgdGhlIFwicm9vdFwiIGNvdW50cmllc1xuICAgICAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IGluIHRoZSBtYXAsIHNvIHRoYXQgd2UgY2FuIGFjY2VzcyB0aGVtLCBhcyBlYWNoIHRpbWUgd2UgYWRkIGFuIGFyZWEgY29kZSBzdWJzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gdGhlIG1hcCwgd2UgYWxzbyBuZWVkIHRvIGluY2x1ZGUgdGhlIFwicm9vdFwiIGNvdW50cnkncyBjb2RlLCBhcyB0aGF0IGFsc28gbWF0Y2hlc1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5jb3VudHJpZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSB0aGlzLmNvdW50cmllc1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmVhIGNvZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2MuYXJlYUNvZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3RDb3VudHJ5Q29kZSA9IHRoaXMuY291bnRyeUNvZGVzW19jLmRpYWxDb2RlXVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBhcmVhIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9jLmFyZWFDb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJlYUNvZGUgPSBfYy5hcmVhQ29kZXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGRpZ2l0IGluIHRoZSBhcmVhIGNvZGUgdG8gYWRkIGFsbCBwYXJ0aWFsIG1hdGNoZXMgYXMgd2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMTsgayA8IGFyZWFDb2RlLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydGlhbERpYWxDb2RlID0gX2MuZGlhbENvZGUgKyBhcmVhQ29kZS5zdWJzdHIoMCwgayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCB3aXRoIHRoZSByb290IGNvdW50cnksIGFzIHRoYXQgYWxzbyBtYXRjaGVzIHRoaXMgZGlhbCBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRDb3VudHJ5Q29kZShyb290Q291bnRyeUNvZGUsIHBhcnRpYWxEaWFsQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRDb3VudHJ5Q29kZShfYy5pc28yLCBwYXJ0aWFsRGlhbENvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgZnVsbCBhcmVhIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkQ291bnRyeUNvZGUoX2MuaXNvMiwgX2MuZGlhbENvZGUgKyBhcmVhQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfcHJvY2Vzc1ByZWZlcnJlZENvdW50cmllc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJvY2Vzc1ByZWZlcnJlZENvdW50cmllcygpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmZXJyZWRDb3VudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRyeUNvZGUgPSB0aGlzLm9wdGlvbnMucHJlZmVycmVkQ291bnRyaWVzW2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRyeURhdGEgPSB0aGlzLl9nZXRDb3VudHJ5RGF0YShjb3VudHJ5Q29kZSwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnlEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmZXJyZWRDb3VudHJpZXMucHVzaChjb3VudHJ5RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9jcmVhdGVFbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlRWwobmFtZSwgYXR0cnMsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvckVhY2hQcm9wKGF0dHJzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2dlbmVyYXRlTWFya3VwXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZW5lcmF0ZU1hcmt1cCgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYXV0b2NvbXBsZXRlIGRvZXMgbm90IGV4aXN0IG9uIHRoZSBlbGVtZW50IGFuZCBpdHMgZm9ybSwgdGhlblxuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGF1dG9jb21wbGV0ZSBhcyB0aGVyZSdzIG5vIHNhZmUsIGNyb3NzLWJyb3dzZXIgZXZlbnQgd2UgY2FuIHJlYWN0IHRvLCBzbyBpdCBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gZWFzaWx5IHB1dCB0aGUgcGx1Z2luIGluIGFuIGluY29uc2lzdGVudCBzdGF0ZSBlLmcuIHRoZSB3cm9uZyBmbGFnIHNlbGVjdGVkIGZvciB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gYXV0b2NvbXBsZXRlZCBudW1iZXIsIHdoaWNoIG9uIHN1Ym1pdCBjb3VsZCBtZWFuIHdyb25nIG51bWJlciBpcyBzYXZlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGVsSW5wdXQuaGFzQXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIpICYmICEodGhpcy50ZWxJbnB1dC5mb3JtICYmIHRoaXMudGVsSW5wdXQuZm9ybS5oYXNBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucywgYWxsb3dEcm9wZG93biA9IF90aGlzJG9wdGlvbnMuYWxsb3dEcm9wZG93biwgc2VwYXJhdGVEaWFsQ29kZSA9IF90aGlzJG9wdGlvbnMuc2VwYXJhdGVEaWFsQ29kZSwgc2hvd0ZsYWdzID0gX3RoaXMkb3B0aW9ucy5zaG93RmxhZ3MsIGN1c3RvbUNvbnRhaW5lciA9IF90aGlzJG9wdGlvbnMuY3VzdG9tQ29udGFpbmVyLCBoaWRkZW5JbnB1dCA9IF90aGlzJG9wdGlvbnMuaGlkZGVuSW5wdXQsIGRyb3Bkb3duQ29udGFpbmVyID0gX3RoaXMkb3B0aW9ucy5kcm9wZG93bkNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbmVycyAobW9zdGx5IGZvciBwb3NpdGlvbmluZylcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudENsYXNzID0gXCJpdGlcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93RHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENsYXNzICs9IFwiIGl0aS0tYWxsb3ctZHJvcGRvd25cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VwYXJhdGVEaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2xhc3MgKz0gXCIgaXRpLS1zZXBhcmF0ZS1kaWFsLWNvZGVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0ZsYWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbGFzcyArPSBcIiBpdGktLXNob3ctZmxhZ3NcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbGFzcyArPSBcIiBcIi5jb25jYXQoY3VzdG9tQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuX2NyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogcGFyZW50Q2xhc3NcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcy50ZWxJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgaGlkZSB0aGUgZmxhZ3NDb250YWluZXIgaWYgYWxsb3dEcm9wZG93biwgc2hvd0ZsYWdzIGFuZCBzZXBhcmF0ZURpYWxDb2RlIGFyZSBhbGwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNob3dGbGFnc0NvbnRhaW5lciA9IGFsbG93RHJvcGRvd24gfHwgc2hvd0ZsYWdzIHx8IHNlcGFyYXRlRGlhbENvZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG93RmxhZ3NDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZ3NDb250YWluZXIgPSB0aGlzLl9jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcIml0aV9fZmxhZy1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnRlbElucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0ZWQgZmxhZyAoZGlzcGxheWVkIHRvIGxlZnQgb2YgaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzaW5nIEFyaWEgdGFncyBmb3IgXCJTZWxlY3QtT25seSBDb21ib2JveCBFeGFtcGxlXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1dBSS9BUklBL2FwZy9wYXR0ZXJucy9jb21ib2JveC9leGFtcGxlcy9jb21ib2JveC1zZWxlY3Qtb25seS9cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dGbGFnc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcgPSB0aGlzLl9jcmVhdGVFbChcImRpdlwiLCBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiaXRpX19zZWxlY3RlZC1mbGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGFsbG93RHJvcGRvd24gJiYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwiY29tYm9ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJsaXN0Ym94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiaXRpLVwiLmNvbmNhdCh0aGlzLmlkLCBcIl9fY291bnRyeS1saXN0Ym94XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiVGVsZXBob25lIGNvdW50cnkgY29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgdGhpcy5mbGFnc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dGbGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWdJbm5lciA9IHRoaXMuX2NyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiaXRpX19mbGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuc2VsZWN0ZWRGbGFnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEZsYWcgJiYgdGhpcy50ZWxJbnB1dC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcGFyYXRlRGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaWFsQ29kZSA9IHRoaXMuX2NyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiaXRpX19zZWxlY3RlZC1kaWFsLWNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5zZWxlY3RlZEZsYWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGVsSW5wdXQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIGVsZW1lbnQgZm9jdXNhYmxlIGFuZCB0YWIgbmF2aWdhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bkFycm93ID0gdGhpcy5fY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJpdGlfX2Fycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuc2VsZWN0ZWRGbGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvdW50cnkgZHJvcGRvd246IHByZWZlcnJlZCBjb3VudHJpZXMsIHRoZW4gZGl2aWRlciwgdGhlbiBhbGwgY291bnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlMaXN0ID0gdGhpcy5fY3JlYXRlRWwoXCJ1bFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcIml0aV9fY291bnRyeS1saXN0IGl0aV9faGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIml0aS1cIi5jb25jYXQodGhpcy5pZCwgXCJfX2NvdW50cnktbGlzdGJveFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJMaXN0IG9mIGNvdW50cmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRMaXN0SXRlbXModGhpcy5wcmVmZXJyZWRDb3VudHJpZXMsIFwiaXRpX19wcmVmZXJyZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlRWwoXCJsaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJpdGlfX2RpdmlkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJzZXBhcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5jb3VudHJ5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRMaXN0SXRlbXModGhpcy5jb3VudHJpZXMsIFwiaXRpX19zdGFuZGFyZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBkcm9wZG93bkNvbnRhaW5lciBtYXJrdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bkNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24gPSB0aGlzLl9jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJpdGkgaXRpLS1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy5jb3VudHJ5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb3VudHJ5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpZGRlbklucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlkZGVuSW5wdXROYW1lID0gaGlkZGVuSW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMudGVsSW5wdXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBuYW1lLmxhc3RJbmRleE9mKFwiW1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpbnB1dCBuYW1lIGNvbnRhaW5zIHNxdWFyZSBicmFja2V0cywgdGhlbiBnaXZlIHRoZSBoaWRkZW4gaW5wdXQgdGhlIHNhbWUgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNpbmcgdGhlIGNvbnRlbnRzIG9mIHRoZSBsYXN0IHNldCBvZiBicmFja2V0cyB3aXRoIHRoZSBnaXZlbiBoaWRkZW5JbnB1dCBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbklucHV0TmFtZSA9IFwiXCIuY29uY2F0KG5hbWUuc3Vic3RyKDAsIGkpLCBcIltcIikuY29uY2F0KGhpZGRlbklucHV0TmFtZSwgXCJdXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLl9jcmVhdGVFbChcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGhpZGRlbklucHV0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfYXBwZW5kTGlzdEl0ZW1zXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRMaXN0SXRlbXMoY291bnRyaWVzLCBjbGFzc05hbWUsIHByZWZlcnJlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjcmVhdGUgc28gbWFueSBET00gZWxlbWVudHMsIGl0IGlzIGZhc3RlciB0byBidWlsZCBhIHRlbXAgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIGFkZCBldmVyeXRoaW5nIHRvIHRoZSBET00gaW4gb25lIGdvIGF0IHRoZSBlbmRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGNvdW50cnlcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gY291bnRyaWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkU3VmZml4ID0gcHJlZmVycmVkID8gXCItcHJlZmVycmVkXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3BlbiB0aGUgbGlzdCBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgKz0gXCI8bGkgY2xhc3M9J2l0aV9fY291bnRyeSBcIi5jb25jYXQoY2xhc3NOYW1lLCBcIicgdGFiSW5kZXg9Jy0xJyBpZD0naXRpLVwiKS5jb25jYXQodGhpcy5pZCwgXCJfX2l0ZW0tXCIpLmNvbmNhdChjLmlzbzIpLmNvbmNhdChpZFN1ZmZpeCwgXCInIHJvbGU9J29wdGlvbicgZGF0YS1kaWFsLWNvZGU9J1wiKS5jb25jYXQoYy5kaWFsQ29kZSwgXCInIGRhdGEtY291bnRyeS1jb2RlPSdcIikuY29uY2F0KGMuaXNvMiwgXCInIGFyaWEtc2VsZWN0ZWQ9J2ZhbHNlJz5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIGZsYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd0ZsYWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wICs9IFwiPGRpdiBjbGFzcz0naXRpX19mbGFnLWJveCc+PGRpdiBjbGFzcz0naXRpX19mbGFnIGl0aV9fXCIuY29uY2F0KGMuaXNvMiwgXCInPjwvZGl2PjwvZGl2PlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGUgY291bnRyeSBuYW1lIGFuZCBkaWFsIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSBcIjxzcGFuIGNsYXNzPSdpdGlfX2NvdW50cnktbmFtZSc+XCIuY29uY2F0KGMubmFtZSwgXCI8L3NwYW4+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wICs9IFwiPHNwYW4gY2xhc3M9J2l0aV9fZGlhbC1jb2RlJz4rXCIuY29uY2F0KGMuZGlhbENvZGUsIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBsaXN0IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSBcIjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5TGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdG1wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9zZXRJbml0aWFsU3RhdGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4IGZpcmVmb3ggYnVnOiB3aGVuIGZpcnN0IGxvYWQgcGFnZSAod2l0aCBpbnB1dCB3aXRoIHZhbHVlIHNldCB0byBudW1iZXIgd2l0aCBpbnRsIGRpYWxcbiAgICAgICAgICAgICAgICAgICAgLy8gY29kZSkgYW5kIGluaXRpYWxpc2luZyBwbHVnaW4gcmVtb3ZlcyB0aGUgZGlhbCBjb2RlIGZyb20gdGhlIGlucHV0LCB0aGVuIHJlZnJlc2ggcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHdlIHRyeSB0byBpbml0IHBsdWdpbiBhZ2FpbiBidXQgdGhpcyB0aW1lIG9uIG51bWJlciB3aXRob3V0IGRpYWwgY29kZSBzbyBnZXQgZ3JleSBmbGFnXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMudGVsSW5wdXQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gdGhpcy50ZWxJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZUF0dHJpYnV0ZSA9IGF0dHJpYnV0ZVZhbHVlICYmIGF0dHJpYnV0ZVZhbHVlLmNoYXJBdCgwKSA9PT0gXCIrXCIgJiYgKCFpbnB1dFZhbHVlIHx8IGlucHV0VmFsdWUuY2hhckF0KDApICE9PSBcIitcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB1c2VBdHRyaWJ1dGUgPyBhdHRyaWJ1dGVWYWx1ZSA6IGlucHV0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWFsQ29kZSA9IHRoaXMuX2dldERpYWxDb2RlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1JlZ2lvbmxlc3NOYW5wID0gdGhpcy5faXNSZWdpb25sZXNzTmFucCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMkb3B0aW9uczIgPSB0aGlzLm9wdGlvbnMsIGluaXRpYWxDb3VudHJ5ID0gX3RoaXMkb3B0aW9uczIuaW5pdGlhbENvdW50cnksIGF1dG9JbnNlcnREaWFsQ29kZSA9IF90aGlzJG9wdGlvbnMyLmF1dG9JbnNlcnREaWFsQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIGEgZGlhbCBjb2RlLCBhbmQgaXQncyBub3QgYSByZWdpb25sZXNzTmFucCwgd2UgY2FuIGdvIGFoZWFkIGFuZCBzZXQgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGZsYWcsIGVsc2UgZmFsbCBiYWNrIHRvIHRoZSBkZWZhdWx0IGNvdW50cnlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpYWxDb2RlICYmICFpc1JlZ2lvbmxlc3NOYW5wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVGbGFnRnJvbU51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxDb3VudHJ5ICE9PSBcImF1dG9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGlmIHdlIHNob3VsZCBzZWxlY3QgYSBmbGFnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbENvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRGbGFnKGluaXRpYWxDb3VudHJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlhbENvZGUgJiYgaXNSZWdpb25sZXNzTmFucCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoYXMgaW50bCBkaWFsIGNvZGUsIGlzIHJlZ2lvbmxlc3MgbmFucCwgYW5kIG5vIGluaXRpYWxDb3VudHJ5LCBzbyBkZWZhdWx0IHRvIFVTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEZsYWcoXCJ1c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBubyBkaWFsIGNvZGUgYW5kIG5vIGluaXRpYWxDb3VudHJ5LCBzbyBkZWZhdWx0IHRvIGZpcnN0IGluIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q291bnRyeSA9IHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCA/IHRoaXMucHJlZmVycmVkQ291bnRyaWVzWzBdLmlzbzIgOiB0aGlzLmNvdW50cmllc1swXS5pc28yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0RmxhZyh0aGlzLmRlZmF1bHRDb3VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGVtcHR5IGFuZCBhdXRvSW5zZXJ0RGlhbENvZGUgdGhlbiBpbnNlcnQgdGhlIGRpYWwgY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWwgJiYgYXV0b0luc2VydERpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC52YWx1ZSA9IFwiK1wiLmNvbmNhdCh0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuZGlhbENvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IGlmIGluaXRpYWxDb3VudHJ5IGlzIHNldCB0byBhdXRvLCB0aGF0IHdpbGwgYmUgaGFuZGxlZCBzZXBhcmF0ZWx5XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcm1hdCAtIG5vdGUgdGhpcyB3b250IGJlIHJ1biBhZnRlciBfdXBkYXRlRGlhbENvZGUgYXMgdGhhdCdzIG9ubHkgY2FsbGVkIGlmIG5vIHZhbFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVWYWxGcm9tTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9pbml0TGlzdGVuZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0TGlzdGVuZXJzKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0S2V5TGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0luc2VydERpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0Qmx1ckxpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWxsb3dEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdERyb3Bkb3duTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRIaWRkZW5JbnB1dExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9pbml0SGlkZGVuSW5wdXRMaXN0ZW5lclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdEhpZGRlbklucHV0TGlzdGVuZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVIaWRkZW5JbnB1dFN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLmhpZGRlbklucHV0LnZhbHVlID0gX3RoaXMzLmdldE51bWJlcigpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZWxJbnB1dC5mb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVIaWRkZW5JbnB1dFN1Ym1pdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9nZXRDbG9zZXN0TGFiZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldENsb3Nlc3RMYWJlbCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpcy50ZWxJbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsICYmIGVsLnRhZ05hbWUgIT09IFwiTEFCRUxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9pbml0RHJvcGRvd25MaXN0ZW5lcnNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXREcm9wZG93bkxpc3RlbmVycygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhY2sgZm9yIGlucHV0IG5lc3RlZCBpbnNpZGUgbGFiZWwgKHdoaWNoIGlzIHZhbGlkIG1hcmt1cCk6IGNsaWNraW5nIHRoZSBzZWxlY3RlZC1mbGFnIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wZW4gdGhlIGRyb3Bkb3duIHdvdWxkIHRoZW4gYXV0b21hdGljYWxseSB0cmlnZ2VyIGEgMm5kIGNsaWNrIG9uIHRoZSBpbnB1dCB3aGljaCB3b3VsZFxuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZSBpdCBhZ2FpblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVMYWJlbENsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGRyb3Bkb3duIGlzIGNsb3NlZCwgdGhlbiBmb2N1cyB0aGUgaW5wdXQsIGVsc2UgaWdub3JlIHRoZSBjbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzNC5jb3VudHJ5TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGlfX2hpZGVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQudGVsSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLl9nZXRDbG9zZXN0TGFiZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlTGFiZWxDbGljayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdG9nZ2xlIGNvdW50cnkgZHJvcGRvd24gb24gY2xpY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2xpY2tTZWxlY3RlZEZsYWcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgaW50ZXJjZXB0IHRoaXMgZXZlbnQgaWYgd2UncmUgb3BlbmluZyB0aGUgZHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgbGV0IGl0IGJ1YmJsZSB1cCB0byB0aGUgdG9wIChcImNsaWNrLW9mZi10by1jbG9zZVwiIGxpc3RlbmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2Fubm90IGp1c3Qgc3RvcFByb3BhZ2F0aW9uIGFzIGl0IG1heSBiZSBuZWVkZWQgdG8gY2xvc2UgYW5vdGhlciBpbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzNC5jb3VudHJ5TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGlfX2hpZGVcIikgJiYgIV90aGlzNC50ZWxJbnB1dC5kaXNhYmxlZCAmJiAhX3RoaXM0LnRlbElucHV0LnJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0Ll9zaG93RHJvcGRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2hhbmRsZUNsaWNrU2VsZWN0ZWRGbGFnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3BlbiBkcm9wZG93biBsaXN0IGlmIGN1cnJlbnRseSBmb2N1c2VkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUZsYWdzQ29udGFpbmVyS2V5ZG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0Ryb3Bkb3duSGlkZGVuID0gX3RoaXM0LmNvdW50cnlMaXN0LmNsYXNzTGlzdC5jb250YWlucyhcIml0aV9faGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Ryb3Bkb3duSGlkZGVuICYmIFsgXCJBcnJvd1VwXCIsIFwiVXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJEb3duXCIsIFwiIFwiLCBcIkVudGVyXCIgXS5pbmRleE9mKGUua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWQgaWYgXCJFTlRFUlwiIHdhcyBwcmVzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgZXZlbnQgZnJvbSBiZWluZyBoYW5kbGVkIGFnYWluIGJ5IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuX3Nob3dEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgbmF2aWdhdGlvbiBmcm9tIGRyb3Bkb3duIHRvIGlucHV0IG9uIFRBQlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0Ll9jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZ3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRmxhZ3NDb250YWluZXJLZXlkb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9pbml0UmVxdWVzdHNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXRSZXF1ZXN0cygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB1c2VyIGhhcyBzcGVjaWZpZWQgdGhlIHBhdGggdG8gdGhlIHV0aWxzIHNjcmlwdCwgZmV0Y2ggaXQgb24gd2luZG93LmxvYWQsIGVsc2UgcmVzb2x2ZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnV0aWxzU2NyaXB0ICYmICF3aW5kb3cuaW50bFRlbElucHV0VXRpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwbHVnaW4gaXMgYmVpbmcgaW5pdGlhbGlzZWQgYWZ0ZXIgdGhlIHdpbmRvdy5sb2FkIGV2ZW50IGhhcyBhbHJlYWR5IGJlZW4gZmlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5kb2N1bWVudFJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5sb2FkVXRpbHModGhpcy5vcHRpb25zLnV0aWxzU2NyaXB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCB1bnRpbCB0aGUgbG9hZCBldmVudCBzbyB3ZSBkb24ndCBibG9jayBhbnkgb3RoZXIgcmVxdWVzdHMgZS5nLiB0aGUgZmxhZ3MgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbnRsVGVsSW5wdXRHbG9iYWxzLmxvYWRVdGlscyhfdGhpczUub3B0aW9ucy51dGlsc1NjcmlwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVVdGlsc1NjcmlwdFByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluaXRpYWxDb3VudHJ5ID09PSBcImF1dG9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEF1dG9Db3VudHJ5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVBdXRvQ291bnRyeVByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2xvYWRBdXRvQ291bnRyeVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZEF1dG9Db3VudHJ5KCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAzIG9wdGlvbnM6XG4gICAgICAgICAgICAgICAgICAgIC8vIDEpIGFscmVhZHkgbG9hZGVkICh3ZSdyZSBkb25lKVxuICAgICAgICAgICAgICAgICAgICAvLyAyKSBub3QgYWxyZWFkeSBzdGFydGVkIGxvYWRpbmcgKHN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICAvLyAzKSBhbHJlYWR5IHN0YXJ0ZWQgbG9hZGluZyAoZG8gbm90aGluZyAtIGp1c3Qgd2FpdCBmb3IgbG9hZGluZyBjYWxsYmFjayB0byBmaXJlKVxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMuYXV0b0NvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0b0NvdW50cnkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghd2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMuc3RhcnRlZExvYWRpbmdBdXRvQ291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgZG8gdGhpcyB0d2ljZSFcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbnRsVGVsSW5wdXRHbG9iYWxzLnN0YXJ0ZWRMb2FkaW5nQXV0b0NvdW50cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZ2VvSXBMb29rdXAgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5nZW9JcExvb2t1cChmdW5jdGlvbihjb3VudHJ5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5hdXRvQ291bnRyeSA9IGNvdW50cnlDb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRlbGwgYWxsIGluc3RhbmNlcyB0aGUgYXV0byBjb3VudHJ5IGlzIHJlYWR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGp1c3QgYmUgdGhlIGN1cnJlbnQgaW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVQREFURTogdXNlIHNldFRpbWVvdXQgaW4gY2FzZSB0aGVpciBnZW9JcExvb2t1cCBmdW5jdGlvbiBjYWxscyB0aGlzIGNhbGxiYWNrIHN0cmFpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF3YXkgKGUuZy4gaWYgdGhleSBoYXZlIGFscmVhZHkgZG9uZSB0aGUgZ2VvIGlwIGxvb2t1cCBzb21ld2hlcmUgZWxzZSkuIFVzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQgbWVhbnMgdGhhdCB0aGUgY3VycmVudCB0aHJlYWQgb2YgZXhlY3V0aW9uIHdpbGwgZmluaXNoIGJlZm9yZSBleGVjdXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcywgd2hpY2ggYWxsb3dzIHRoZSBwbHVnaW4gdG8gZmluaXNoIGluaXRpYWxpc2luZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JFYWNoSW5zdGFuY2UoXCJoYW5kbGVBdXRvQ291bnRyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JFYWNoSW5zdGFuY2UoXCJyZWplY3RBdXRvQ291bnRyeVByb21pc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9pbml0S2V5TGlzdGVuZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0S2V5TGlzdGVuZXJzKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGZsYWcgb24ga2V5dXBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlS2V5dXBFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzNi5fdXBkYXRlRmxhZ0Zyb21OdW1iZXIoX3RoaXM2LnRlbElucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNi5fdHJpZ2dlckNvdW50cnlDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5faGFuZGxlS2V5dXBFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmbGFnIG9uIGN1dC9wYXN0ZSBldmVudHMgKG5vdyBzdXBwb3J0ZWQgaW4gYWxsIG1ham9yIGJyb3dzZXJzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVDbGlwYm9hcmRFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFjayBiZWNhdXNlIFwicGFzdGVcIiBldmVudCBpcyBmaXJlZCBiZWZvcmUgaW5wdXQgaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChfdGhpczYuX2hhbmRsZUtleXVwRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjdXRcIiwgdGhpcy5faGFuZGxlQ2xpcGJvYXJkRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCB0aGlzLl9oYW5kbGVDbGlwYm9hcmRFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfY2FwXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jYXAobnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB0aGlzLnRlbElucHV0LmdldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1heCAmJiBudW1iZXIubGVuZ3RoID4gbWF4ID8gbnVtYmVyLnN1YnN0cigwLCBtYXgpIDogbnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2luaXRCbHVyTGlzdGVuZXJzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0Qmx1ckxpc3RlbmVycygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uIGJsdXIgb3IgZm9ybSBzdWJtaXQ6IGlmIGp1c3QgYSBkaWFsIGNvZGUgdGhlbiByZW1vdmUgaXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU3VibWl0T3JCbHVyRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNy5fcmVtb3ZlRW1wdHlEaWFsQ29kZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZWxJbnB1dC5mb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXRPckJsdXJFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLl9oYW5kbGVTdWJtaXRPckJsdXJFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfcmVtb3ZlRW1wdHlEaWFsQ29kZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRW1wdHlEaWFsQ29kZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGVsSW5wdXQudmFsdWUuY2hhckF0KDApID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVyaWMgPSB0aGlzLl9nZXROdW1lcmljKHRoaXMudGVsSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYganVzdCBhIHBsdXMsIG9yIGlmIGp1c3QgYSBkaWFsIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbnVtZXJpYyB8fCB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuZGlhbENvZGUgPT09IG51bWVyaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2dldE51bWVyaWNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldE51bWVyaWMocykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfdHJpZ2dlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdHJpZ2dlcihuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhdmUgdG8gdXNlIG9sZCBzY2hvb2wgZG9jdW1lbnQuY3JlYXRlRXZlbnQgYXMgSUUxMSBkb2Vzbid0IHN1cHBvcnQgYG5ldyBFdmVudCgpYCBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBlLmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FuIGJ1YmJsZSwgYW5kIGlzIGNhbmNlbGxhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9zaG93RHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Nob3dEcm9wZG93bigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5TGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiaXRpX19oaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmxhZy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0RHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgaGlnaGxpZ2h0aW5nIGFuZCBzY3JvbGwgdG8gYWN0aXZlIGxpc3QgaXRlbVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRMaXN0SXRlbSh0aGlzLmFjdGl2ZUl0ZW0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvKHRoaXMuYWN0aXZlSXRlbSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gYmluZCBhbGwgdGhlIGRyb3Bkb3duLXJlbGF0ZWQgbGlzdGVuZXJzOiBtb3VzZW92ZXIsIGNsaWNrLCBjbGljay1vZmYsIGtleWRvd25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmluZERyb3Bkb3duTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYXJyb3dcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bkFycm93LmNsYXNzTGlzdC5hZGQoXCJpdGlfX2Fycm93LS11cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihcIm9wZW46Y291bnRyeWRyb3Bkb3duXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3RvZ2dsZUNsYXNzXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90b2dnbGVDbGFzcyhlbCwgY2xhc3NOYW1lLCBzaG91bGRIYXZlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEhhdmVDbGFzcyAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkSGF2ZUNsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9zZXREcm9wZG93blBvc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXREcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXM4ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bkNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMudGVsSW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3dUb3AgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODQwOTEvMjE3ODY2XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2luZG93VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXRUb3AgPSBwb3MudG9wICsgd2luZG93VG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5jb3VudHJ5TGlzdC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkcm9wZG93bkZpdHNCZWxvdyA9IChkcm9wZG93bkJvdHRvbSA8IHdpbmRvd0JvdHRvbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wZG93bkZpdHNCZWxvdyA9IGlucHV0VG9wICsgdGhpcy50ZWxJbnB1dC5vZmZzZXRIZWlnaHQgKyBkcm9wZG93bkhlaWdodCA8IHdpbmRvd1RvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wZG93bkZpdHNBYm92ZSA9IGlucHV0VG9wIC0gZHJvcGRvd25IZWlnaHQgPiB3aW5kb3dUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0LCB0aGUgZHJvcGRvd24gd2lsbCBiZSBiZWxvdyB0aGUgaW5wdXQuIElmIHdlIHdhbnQgdG8gcG9zaXRpb24gaXQgYWJvdmUgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnB1dCwgd2UgYWRkIHRoZSBkcm9wdXAgY2xhc3MuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVDbGFzcyh0aGlzLmNvdW50cnlMaXN0LCBcIml0aV9fY291bnRyeS1saXN0LS1kcm9wdXBcIiwgIWRyb3Bkb3duRml0c0JlbG93ICYmIGRyb3Bkb3duRml0c0Fib3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGRyb3Bkb3duQ29udGFpbmVyIGlzIGVuYWJsZWQsIGNhbGN1bGF0ZSBwb3N0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyb3Bkb3duQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnkgZGVmYXVsdCB0aGUgZHJvcGRvd24gd2lsbCBiZSBkaXJlY3RseSBvdmVyIHRoZSBpbnB1dCBiZWNhdXNlIGl0J3Mgbm90IGluIHRoZSBmbG93LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIHdhbnQgdG8gcG9zaXRpb24gaXQgYmVsb3csIHdlIG5lZWQgdG8gYWRkIHNvbWUgZXh0cmEgdG9wIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHRyYVRvcCA9ICFkcm9wZG93bkZpdHNCZWxvdyAmJiBkcm9wZG93bkZpdHNBYm92ZSA/IDAgOiB0aGlzLnRlbElucHV0Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgcGxhY2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5zdHlsZS50b3AgPSBcIlwiLmNvbmNhdChpbnB1dFRvcCArIGV4dHJhVG9wLCBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uc3R5bGUubGVmdCA9IFwiXCIuY29uY2F0KHBvcy5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LCBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsb3NlIG1lbnUgb24gd2luZG93IHNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM4Ll9jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfZ2V0Q2xvc2VzdExpc3RJdGVtXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRDbG9zZXN0TGlzdEl0ZW0odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsICYmIGVsICE9PSB0aGlzLmNvdW50cnlMaXN0ICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGlfX2NvdW50cnlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSByZWFjaGVkIHRoZSBjb3VudHJ5TGlzdCBlbGVtZW50LCB0aGVuIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbCA9PT0gdGhpcy5jb3VudHJ5TGlzdCA/IG51bGwgOiBlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9iaW5kRHJvcGRvd25MaXN0ZW5lcnNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2JpbmREcm9wZG93bkxpc3RlbmVycygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gbW91c2Ugb3ZlciBhIGxpc3QgaXRlbSwganVzdCBoaWdobGlnaHQgdGhhdCBvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgYWRkIHRoZSBjbGFzcyBcImhpZ2hsaWdodFwiLCBzbyBpZiB0aGV5IGhpdCBcImVudGVyXCIgd2Uga25vdyB3aGljaCBvbmUgdG8gc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlb3ZlckNvdW50cnlMaXN0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGV2ZW50IGRlbGVnYXRpb24sIGFzIHdlJ3JlIGxpc3RlbmluZyBmb3IgdGhpcyBldmVudCBvbiB0aGUgY291bnRyeUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9IF90aGlzOS5fZ2V0Q2xvc2VzdExpc3RJdGVtKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzOS5faGlnaGxpZ2h0TGlzdEl0ZW0obGlzdEl0ZW0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuX2hhbmRsZU1vdXNlb3ZlckNvdW50cnlMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGVuIGZvciBjb3VudHJ5IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVDbGlja0NvdW50cnlMaXN0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RJdGVtID0gX3RoaXM5Ll9nZXRDbG9zZXN0TGlzdEl0ZW0oZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM5Ll9zZWxlY3RMaXN0SXRlbShsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeUxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2hhbmRsZUNsaWNrQ291bnRyeUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGljayBvZmYgdG8gY2xvc2VcbiAgICAgICAgICAgICAgICAgICAgLy8gKGV4Y2VwdCB3aGVuIHRoaXMgaW5pdGlhbCBvcGVuaW5nIGNsaWNrIGlzIGJ1YmJsaW5nIHVwKVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW5ub3QganVzdCBzdG9wUHJvcGFnYXRpb24gYXMgaXQgbWF5IGJlIG5lZWRlZCB0byBjbG9zZSBhbm90aGVyIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc09wZW5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVDbGlja09mZlRvQ2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNPcGVuaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM5Ll9jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVDbGlja09mZlRvQ2xvc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBsaXN0ZW4gZm9yIHVwL2Rvd24gc2Nyb2xsaW5nLCBlbnRlciB0byBzZWxlY3QsIG9yIGxldHRlcnMgdG8ganVtcCB0byBjb3VudHJ5IG5hbWUuXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSBrZXlkb3duIGFzIGtleXByZXNzIGRvZXNuJ3QgZmlyZSBmb3Igbm9uLWNoYXIga2V5cyBhbmQgd2Ugd2FudCB0byBjYXRjaCBpZiB0aGV5XG4gICAgICAgICAgICAgICAgICAgIC8vIGp1c3QgaGl0IGRvd24gYW5kIGhvbGQgaXQgdG8gc2Nyb2xsIGRvd24gKG5vIGtleXVwIGV2ZW50KS5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGVuIG9uIHRoZSBkb2N1bWVudCBiZWNhdXNlIHRoYXQncyB3aGVyZSBrZXkgZXZlbnRzIGFyZSB0cmlnZ2VyZWQgaWYgbm8gaW5wdXQgaGFzIGZvY3VzXG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlS2V5ZG93bk9uRHJvcGRvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGRvd24ga2V5IGZyb20gc2Nyb2xsaW5nIHRoZSB3aG9sZSBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGVudGVyIGtleSBmcm9tIHN1Ym1pdHRpbmcgYSBmb3JtIGV0Y1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXAgYW5kIGRvd24gdG8gbmF2aWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIgfHwgZS5rZXkgPT09IFwiVXBcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBlLmtleSA9PT0gXCJEb3duXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczkuX2hhbmRsZVVwRG93bktleShlLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczkuX2hhbmRsZUVudGVyS2V5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM5Ll9jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC9eW2EtekEtWsOALcO/0LAt0Y/QkC3QryBdJC8udGVzdChlLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBqdW1wIHRvIGNvdW50cmllcyB0aGF0IHN0YXJ0IHdpdGggdGhlIHF1ZXJ5IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeVRpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChxdWVyeVRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKz0gZS5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczkuX3NlYXJjaEZvckNvdW50cnkocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0aW1lciBoaXRzIDEgc2Vjb25kLCByZXNldCB0aGUgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDFlMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUtleWRvd25PbkRyb3Bkb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9oYW5kbGVVcERvd25LZXlcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVVwRG93bktleShrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBrZXkgPT09IFwiQXJyb3dVcFwiIHx8IGtleSA9PT0gXCJVcFwiID8gdGhpcy5oaWdobGlnaHRlZEl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZyA6IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNraXAgdGhlIGRpdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0LmNsYXNzTGlzdC5jb250YWlucyhcIml0aV9fZGl2aWRlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBrZXkgPT09IFwiQXJyb3dVcFwiIHx8IGtleSA9PT0gXCJVcFwiID8gbmV4dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIDogbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRMaXN0SXRlbShuZXh0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2hhbmRsZUVudGVyS2V5XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVFbnRlcktleSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RMaXN0SXRlbSh0aGlzLmhpZ2hsaWdodGVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9zZWFyY2hGb3JDb3VudHJ5XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZWFyY2hGb3JDb3VudHJ5KHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGFydHNXaXRoKHRoaXMuY291bnRyaWVzW2ldLm5hbWUsIHF1ZXJ5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9IHRoaXMuY291bnRyeUxpc3QucXVlcnlTZWxlY3RvcihcIiNpdGktXCIuY29uY2F0KHRoaXMuaWQsIFwiX19pdGVtLVwiKS5jb25jYXQodGhpcy5jb3VudHJpZXNbaV0uaXNvMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBoaWdobGlnaHRpbmcgYW5kIHNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExpc3RJdGVtKGxpc3RJdGVtLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG8obGlzdEl0ZW0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfc3RhcnRzV2l0aFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc3RhcnRzV2l0aChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnN1YnN0cigwLCBiLmxlbmd0aCkudG9Mb3dlckNhc2UoKSA9PT0gYjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl91cGRhdGVWYWxGcm9tTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVWYWxGcm9tTnVtYmVyKG9yaWdpbmFsTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXIgPSBvcmlnaW5hbE51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXRPbkRpc3BsYXkgJiYgd2luZG93LmludGxUZWxJbnB1dFV0aWxzICYmIHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVzZU5hdGlvbmFsID0gdGhpcy5vcHRpb25zLm5hdGlvbmFsTW9kZSB8fCBudW1iZXIuY2hhckF0KDApICE9PSBcIitcIiAmJiAhdGhpcy5vcHRpb25zLnNlcGFyYXRlRGlhbENvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2ludGxUZWxJbnB1dFV0aWxzJG51ID0gaW50bFRlbElucHV0VXRpbHMubnVtYmVyRm9ybWF0LCBOQVRJT05BTCA9IF9pbnRsVGVsSW5wdXRVdGlscyRudS5OQVRJT05BTCwgSU5URVJOQVRJT05BTCA9IF9pbnRsVGVsSW5wdXRVdGlscyRudS5JTlRFUk5BVElPTkFMO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdCA9IHVzZU5hdGlvbmFsID8gTkFUSU9OQUwgOiBJTlRFUk5BVElPTkFMO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gaW50bFRlbElucHV0VXRpbHMuZm9ybWF0TnVtYmVyKG51bWJlciwgdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmlzbzIsIGZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gdGhpcy5fYmVmb3JlU2V0TnVtYmVyKG51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQudmFsdWUgPSBudW1iZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfdXBkYXRlRmxhZ0Zyb21OdW1iZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZUZsYWdGcm9tTnVtYmVyKG9yaWdpbmFsTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBVUy9DYW5hZGEgc2VsZWN0ZWQsIG1ha2Ugc3VyZSB0aGUgbnVtYmVyIHN0YXJ0c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGEgKzEgc28gX2dldERpYWxDb2RlIHdpbGwgYmUgYWJsZSB0byBleHRyYWN0IHRoZSBhcmVhIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlOiBpZiB3ZSBkb250IHlldCBoYXZlIHNlbGVjdGVkQ291bnRyeURhdGEsIGJ1dCB3ZSdyZSBoZXJlICh0cnlpbmcgdG8gdXBkYXRlIHRoZSBmbGFnXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIG51bWJlciksIHRoYXQgbWVhbnMgd2UncmUgaW5pdGlhbGlzaW5nIHRoZSBwbHVnaW4gd2l0aCBhIG51bWJlciB0aGF0IGFscmVhZHkgaGFzIGFcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlhbCBjb2RlLCBzbyBmaW5lIHRvIGlnbm9yZSB0aGlzIGJpdFxuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyID0gb3JpZ2luYWxOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZERpYWxDb2RlID0gdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmRpYWxDb2RlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNOYW5wID0gc2VsZWN0ZWREaWFsQ29kZSA9PT0gXCIxXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1iZXIgJiYgaXNOYW5wICYmIG51bWJlci5jaGFyQXQoMCkgIT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyLmNoYXJBdCgwKSAhPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgPSBcIjFcIi5jb25jYXQobnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlciA9IFwiK1wiLmNvbmNhdChudW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNlcGFyYXRlRGlhbENvZGUgZW5hYmxlZCwgdGhlbiBjb25zaWRlciB0aGUgc2VsZWN0ZWQgZGlhbCBjb2RlIHRvIGJlIHBhcnQgb2YgdGhlIG51bWJlclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlcGFyYXRlRGlhbENvZGUgJiYgc2VsZWN0ZWREaWFsQ29kZSAmJiBudW1iZXIuY2hhckF0KDApICE9PSBcIitcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gXCIrXCIuY29uY2F0KHNlbGVjdGVkRGlhbENvZGUpLmNvbmNhdChudW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSBhbmQgZXh0cmFjdCB2YWxpZCBkaWFsIGNvZGUgZnJvbSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbENvZGUgPSB0aGlzLl9nZXREaWFsQ29kZShudW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtZXJpYyA9IHRoaXMuX2dldE51bWVyaWMobnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50cnlDb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRyeUNvZGVzID0gdGhpcy5jb3VudHJ5Q29kZXNbdGhpcy5fZ2V0TnVtZXJpYyhkaWFsQ29kZSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHJpZ2h0IGNvdW50cnkgaXMgYWxyZWFkeSBzZWxlY3RlZC4gdGhpcyBzaG91bGQgYmUgZmFsc2UgaWYgdGhlIG51bWJlciBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9uZ2VyIHRoYW4gdGhlIG1hdGNoZWQgZGlhbCBjb2RlIGJlY2F1c2UgaW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgaWZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBtdWx0aXBsZSBjb3VudHJ5IG1hdGNoZXMsIHRoYXQgdGhlIGZpcnN0IG9uZSBpcyBzZWxlY3RlZCAobm90ZTogd2UgY291bGRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGp1c3QgY2hlY2sgdGhhdCBoZXJlLCBidXQgaXQgcmVxdWlyZXMgdGhlIHNhbWUgbG9vcCB0aGF0IHdlIGFscmVhZHkgaGF2ZSBsYXRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHJlYWR5U2VsZWN0ZWQgPSBjb3VudHJ5Q29kZXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuaXNvMikgIT09IC0xICYmIG51bWVyaWMubGVuZ3RoIDw9IGRpYWxDb2RlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNSZWdpb25sZXNzTmFucE51bWJlciA9IHNlbGVjdGVkRGlhbENvZGUgPT09IFwiMVwiICYmIHRoaXMuX2lzUmVnaW9ubGVzc05hbnAobnVtZXJpYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IHVwZGF0ZSB0aGUgZmxhZyBpZjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEpIE5PVCAod2UgY3VycmVudGx5IGhhdmUgYSBOQU5QIGZsYWcgc2VsZWN0ZWQsIGFuZCB0aGUgbnVtYmVyIGlzIGEgcmVnaW9ubGVzc05hbnApXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEIpIHRoZSByaWdodCBjb3VudHJ5IGlzIG5vdCBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUmVnaW9ubGVzc05hbnBOdW1iZXIgJiYgIWFscmVhZHlTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHVzaW5nIG9ubHlDb3VudHJpZXMgb3B0aW9uLCBjb3VudHJ5Q29kZXNbMF0gbWF5IGJlIGVtcHR5LCBzbyB3ZSBtdXN0IGZpbmQgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9uLWVtcHR5IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb3VudHJ5Q29kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnlDb2Rlc1tqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIuY2hhckF0KDApID09PSBcIitcIiAmJiBudW1lcmljLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW52YWxpZCBkaWFsIGNvZGUsIHNvIGVtcHR5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiB1c2UgZ2V0TnVtZXJpYyBoZXJlIGJlY2F1c2UgdGhlIG51bWJlciBoYXMgbm90IGJlZW4gZm9ybWF0dGVkIHlldCwgc28gY291bGQgY29udGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFkIGNoYXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5Q29kZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW51bWJlciB8fCBudW1iZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbXB0eSwgb3IganVzdCBhIHBsdXMsIHNvIGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnlDb2RlID0gdGhpcy5kZWZhdWx0Q291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeUNvZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXRGbGFnKGNvdW50cnlDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfaXNSZWdpb25sZXNzTmFucFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNSZWdpb25sZXNzTmFucChudW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVyaWMgPSB0aGlzLl9nZXROdW1lcmljKG51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcmljLmNoYXJBdCgwKSA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmVhQ29kZSA9IG51bWVyaWMuc3Vic3RyKDEsIDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2lvbmxlc3NOYW5wTnVtYmVycy5pbmRleE9mKGFyZWFDb2RlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2hpZ2hsaWdodExpc3RJdGVtXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oaWdobGlnaHRMaXN0SXRlbShsaXN0SXRlbSwgc2hvdWxkRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZJdGVtID0gdGhpcy5oaWdobGlnaHRlZEl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIml0aV9faGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gbGlzdEl0ZW07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGlfX2hpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuc2V0QXR0cmlidXRlKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIsIGxpc3RJdGVtLmdldEF0dHJpYnV0ZShcImlkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfZ2V0Q291bnRyeURhdGFcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldENvdW50cnlEYXRhKGNvdW50cnlDb2RlLCBpZ25vcmVPbmx5Q291bnRyaWVzT3B0aW9uLCBhbGxvd0ZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50cnlMaXN0ID0gaWdub3JlT25seUNvdW50cmllc09wdGlvbiA/IGFsbENvdW50cmllcyA6IHRoaXMuY291bnRyaWVzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50cnlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeUxpc3RbaV0uaXNvMiA9PT0gY291bnRyeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRyeUxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93RmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY291bnRyeSBkYXRhIGZvciAnXCIuY29uY2F0KGNvdW50cnlDb2RlLCBcIidcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3NldEZsYWdcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldEZsYWcoY291bnRyeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzJG9wdGlvbnMzID0gdGhpcy5vcHRpb25zLCBhbGxvd0Ryb3Bkb3duID0gX3RoaXMkb3B0aW9uczMuYWxsb3dEcm9wZG93biwgc2VwYXJhdGVEaWFsQ29kZSA9IF90aGlzJG9wdGlvbnMzLnNlcGFyYXRlRGlhbENvZGUsIHNob3dGbGFncyA9IF90aGlzJG9wdGlvbnMzLnNob3dGbGFncztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZDb3VudHJ5ID0gdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmlzbzIgPyB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEgOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gdGhpcyBmaXJzdCBhcyBpdCB3aWxsIHRocm93IGFuIGVycm9yIGFuZCBzdG9wIGlmIGNvdW50cnlDb2RlIGlzIGludmFsaWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhID0gY291bnRyeUNvZGUgPyB0aGlzLl9nZXRDb3VudHJ5RGF0YShjb3VudHJ5Q29kZSwgZmFsc2UsIGZhbHNlKSA6IHt9O1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGRlZmF1bHRDb3VudHJ5IC0gd2Ugb25seSBuZWVkIHRoZSBpc28yIGZyb20gbm93IG9uLCBzbyBqdXN0IHN0b3JlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRDb3VudHJ5ID0gdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmlzbzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dGbGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWdJbm5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0aV9fZmxhZyBpdGlfX1wiLmNvbmNhdChjb3VudHJ5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldFNlbGVjdGVkQ291bnRyeUZsYWdUaXRsZUF0dHJpYnV0ZShjb3VudHJ5Q29kZSwgc2VwYXJhdGVEaWFsQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXBhcmF0ZURpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbENvZGUgPSB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuZGlhbENvZGUgPyBcIitcIi5jb25jYXQodGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmRpYWxDb2RlKSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlhbENvZGUuaW5uZXJIVE1MID0gZGlhbENvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZmZzZXRXaWR0aCBpcyB6ZXJvIGlmIGlucHV0IGlzIGluIGEgaGlkZGVuIGNvbnRhaW5lciBkdXJpbmcgaW5pdGlhbGlzYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEZsYWdXaWR0aCA9IHRoaXMuc2VsZWN0ZWRGbGFnLm9mZnNldFdpZHRoIHx8IHRoaXMuX2dldEhpZGRlblNlbGVjdGVkRmxhZ1dpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgNnB4IG9mIHBhZGRpbmcgYWZ0ZXIgdGhlIGdyZXkgc2VsZWN0ZWQtZGlhbC1jb2RlIGJveCwgYXMgdGhpcyBpcyB3aGF0IHdlIHVzZSBpbiB0aGUgY3NzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JUTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoc2VsZWN0ZWRGbGFnV2lkdGggKyA2LCBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCJcIi5jb25jYXQoc2VsZWN0ZWRGbGFnV2lkdGggKyA2LCBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGUgaW5wdXQncyBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQbGFjZWhvbGRlcigpO1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGFjdGl2ZSBsaXN0IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93RHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmV2SXRlbSA9IHRoaXMuYWN0aXZlSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpdGlfX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2SXRlbS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIHByZWZlcnJlZCBpdGVtIGZpcnN0LCBlbHNlIGZhbGwgYmFjayB0byBzdGFuZGFyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0SXRlbSA9IHRoaXMuY291bnRyeUxpc3QucXVlcnlTZWxlY3RvcihcIiNpdGktXCIuY29uY2F0KHRoaXMuaWQsIFwiX19pdGVtLVwiKS5jb25jYXQoY291bnRyeUNvZGUsIFwiLXByZWZlcnJlZFwiKSkgfHwgdGhpcy5jb3VudHJ5TGlzdC5xdWVyeVNlbGVjdG9yKFwiI2l0aS1cIi5jb25jYXQodGhpcy5pZCwgXCJfX2l0ZW0tXCIpLmNvbmNhdChjb3VudHJ5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJdGVtLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGlfX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBuZXh0SXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gaWYgdGhlIGZsYWcgaGFzIGNoYW5nZWQgb3Igbm90XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2Q291bnRyeS5pc28yICE9PSBjb3VudHJ5Q29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9zZXRTZWxlY3RlZENvdW50cnlGbGFnVGl0bGVBdHRyaWJ1dGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFNlbGVjdGVkQ291bnRyeUZsYWdUaXRsZUF0dHJpYnV0ZShjb3VudHJ5Q29kZSwgc2VwYXJhdGVEaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeUNvZGUgJiYgIXNlcGFyYXRlRGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gXCJcIi5jb25jYXQodGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLm5hbWUsIFwiOiArXCIpLmNvbmNhdCh0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuZGlhbENvZGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50cnlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3Igc2NyZWVuIHJlYWRlciBvdXRwdXQsIHdlIGRvbid0IHdhbnQgdG8gaW5jbHVkZSB0aGUgZGlhbCBjb2RlIGluIHRoZSByZWFkZXIgb3V0cHV0IHR3aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBqdXN0IHVzZSB0aGUgc2VsZWN0ZWQgY291bnRyeSBuYW1lIGhlcmU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBcIlVua25vd25cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmxhZy5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfZ2V0SGlkZGVuU2VsZWN0ZWRGbGFnV2lkdGhcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEhpZGRlblNlbGVjdGVkRmxhZ1dpZHRoKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0byBnZXQgdGhlIHJpZ2h0IHN0eWxpbmcgdG8gYXBwbHksIGFsbCB3ZSBuZWVkIGlzIGEgc2hhbGxvdyBjbG9uZSBvZiB0aGUgY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhlbiB0byBpbmplY3QgYSBkZWVwIGNsb25lIG9mIHRoZSBzZWxlY3RlZEZsYWcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyQ2xvbmUgPSB0aGlzLnRlbElucHV0LnBhcmVudE5vZGUuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsb25lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lckNsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZsYWdzQ29udGFpbmVyQ2xvbmUgPSB0aGlzLmZsYWdzQ29udGFpbmVyLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbG9uZS5hcHBlbmRDaGlsZChmbGFnc0NvbnRhaW5lckNsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkRmxhZ0Nsb25lID0gdGhpcy5zZWxlY3RlZEZsYWcuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBmbGFnc0NvbnRhaW5lckNsb25lLmFwcGVuZENoaWxkKHNlbGVjdGVkRmxhZ0Nsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gc2VsZWN0ZWRGbGFnQ2xvbmUub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyQ2xvbmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfdXBkYXRlUGxhY2Vob2xkZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVBsYWNlaG9sZGVyKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvdWxkU2V0UGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMuYXV0b1BsYWNlaG9sZGVyID09PSBcImFnZ3Jlc3NpdmVcIiB8fCAhdGhpcy5oYWRJbml0aWFsUGxhY2Vob2xkZXIgJiYgdGhpcy5vcHRpb25zLmF1dG9QbGFjZWhvbGRlciA9PT0gXCJwb2xpdGVcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbnRsVGVsSW5wdXRVdGlscyAmJiBzaG91bGRTZXRQbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlclR5cGUgPSBpbnRsVGVsSW5wdXRVdGlscy5udW1iZXJUeXBlW3RoaXMub3B0aW9ucy5wbGFjZWhvbGRlck51bWJlclR5cGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmlzbzIgPyBpbnRsVGVsSW5wdXRVdGlscy5nZXRFeGFtcGxlTnVtYmVyKHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yLCB0aGlzLm9wdGlvbnMubmF0aW9uYWxNb2RlLCBudW1iZXJUeXBlKSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2JlZm9yZVNldE51bWJlcihwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jdXN0b21QbGFjZWhvbGRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMuY3VzdG9tUGxhY2Vob2xkZXIocGxhY2Vob2xkZXIsIHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3NlbGVjdExpc3RJdGVtXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZWxlY3RMaXN0SXRlbShsaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgc2VsZWN0ZWQgZmxhZyBhbmQgYWN0aXZlIGxpc3QgaXRlbVxuICAgICAgICAgICAgICAgICAgICB2YXIgZmxhZ0NoYW5nZWQgPSB0aGlzLl9zZXRGbGFnKGxpc3RJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtY291bnRyeS1jb2RlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xvc2VEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEaWFsQ29kZShsaXN0SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpYWwtY29kZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzIHRoZSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHB1dCBjdXJzb3IgYXQgZW5kIC0gdGhpcyBmaXggaXMgcmVxdWlyZWQgZm9yIEZGIGFuZCBJRTExICh3aXRoIGF1dG8gaW5zZXJ0aW5nIGRpYWwgY29kZSksXG4gICAgICAgICAgICAgICAgICAgIC8vIHdobyB0cnkgdG8gcHV0IHRoZSBjdXJzb3IgYXQgdGhlIGJlZ2lubmluZyB0aGUgZmlyc3QgdGltZVxuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gdGhpcy50ZWxJbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuLCBsZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZ0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9jbG9zZURyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jbG9zZURyb3Bkb3duKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlMaXN0LmNsYXNzTGlzdC5hZGQoXCJpdGlfX2hpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGFycm93XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25BcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaXRpX19hcnJvdy0tdXBcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVuYmluZCBrZXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUtleWRvd25PbkRyb3Bkb3duKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVDbGlja09mZlRvQ2xvc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5faGFuZGxlTW91c2VvdmVyQ291bnRyeUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVDbGlja0NvdW50cnlMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG1lbnUgZnJvbSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bkNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5faGFuZGxlV2luZG93U2Nyb2xsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bkb3duLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kcm9wZG93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihcImNsb3NlOmNvdW50cnlkcm9wZG93blwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9zY3JvbGxUb1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2Nyb2xsVG8oZWxlbWVudCwgbWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvdW50cnlMaXN0O1xuICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3dUb3AgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODQwOTEvMjE3ODY2XG4gICAgICAgICAgICAgICAgICAgIHZhciB3aW5kb3dUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJUb3AgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93VG9wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyQm90dG9tID0gY29udGFpbmVyVG9wICsgY29udGFpbmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFRvcCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93VG9wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyBlbGVtZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U2Nyb2xsVG9wID0gZWxlbWVudFRvcCAtIGNvbnRhaW5lclRvcCArIGNvbnRhaW5lci5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaWRkbGVPZmZzZXQgPSBjb250YWluZXJIZWlnaHQgLyAyIC0gZWxlbWVudEhlaWdodCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50VG9wIDwgY29udGFpbmVyVG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGwgdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRkbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTY3JvbGxUb3AgLT0gbWlkZGxlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IG5ld1Njcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Qm90dG9tID4gY29udGFpbmVyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGwgZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Njcm9sbFRvcCArPSBtaWRkbGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0RGlmZmVyZW5jZSA9IGNvbnRhaW5lckhlaWdodCAtIGVsZW1lbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wIC0gaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX3VwZGF0ZURpYWxDb2RlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVEaWFsQ29kZShuZXdEaWFsQ29kZUJhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0VmFsID0gdGhpcy50ZWxJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSBoYXZpbmcgdG8gcGFzcyB0aGlzIGV2ZXJ5IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0RpYWxDb2RlID0gXCIrXCIuY29uY2F0KG5ld0RpYWxDb2RlQmFyZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFZhbC5jaGFyQXQoMCkgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVyZSdzIGEgcGx1cyBzbyB3ZSdyZSBkZWFsaW5nIHdpdGggYSByZXBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZEaWFsQ29kZSA9IHRoaXMuX2dldERpYWxDb2RlKGlucHV0VmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2RGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50IG51bWJlciBjb250YWlucyBhIHZhbGlkIGRpYWwgY29kZSwgc28gcmVwbGFjZSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld051bWJlciA9IGlucHV0VmFsLnJlcGxhY2UocHJldkRpYWxDb2RlLCBuZXdEaWFsQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgbnVtYmVyIGNvbnRhaW5zIGFuIGludmFsaWQgZGlhbCBjb2RlLCBzbyBkaXRjaCBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChubyB3YXkgdG8gZGV0ZXJtaW5lIHdoZXJlIHRoZSBpbnZhbGlkIGRpYWwgY29kZSBlbmRzIGFuZCB0aGUgcmVzdCBvZiB0aGUgbnVtYmVyIGJlZ2lucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdOdW1iZXIgPSBuZXdEaWFsQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQudmFsdWUgPSBuZXdOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmF1dG9JbnNlcnREaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgYW4gZXhpc3RpbmcgdmFsdWUgd2l0aCBubyBkaWFsIGNvZGU6IHByZWZpeCB0aGUgbmV3IGRpYWwgY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld051bWJlciA9IG5ld0RpYWxDb2RlICsgaW5wdXRWYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld051bWJlciA9IG5ld0RpYWxDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC52YWx1ZSA9IG5ld051bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2dldERpYWxDb2RlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXREaWFsQ29kZShudW1iZXIsIGluY2x1ZGVBcmVhQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbENvZGUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGludGVyZXN0ZWQgaW4gaW50ZXJuYXRpb25hbCBudW1iZXJzIChzdGFydGluZyB3aXRoIGEgcGx1cylcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWJlci5jaGFyQXQoMCkgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtZXJpY0NoYXJzID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBjaGFyc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IG51bWJlci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgY2hhciBpcyBudW1iZXIgKGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84OTM1NjQ5LzIxNzg2NilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGMsIDEwKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpY0NoYXJzICs9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGN1cnJlbnQgbnVtZXJpY0NoYXJzIG1ha2UgYSB2YWxpZCBkaWFsIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVBcmVhQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRyeUNvZGVzW251bWVyaWNDaGFyc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgYWN0dWFsIHJhdyBzdHJpbmcgKHVzZWZ1bCBmb3IgbWF0Y2hpbmcgbGF0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbENvZGUgPSBudW1iZXIuc3Vic3RyKDAsIGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpYWxDb2Rlc1tudW1lcmljQ2hhcnNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbENvZGUgPSBudW1iZXIuc3Vic3RyKDAsIGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSdyZSBqdXN0IGxvb2tpbmcgZm9yIGEgZGlhbCBjb2RlLCB3ZSBjYW4gYnJlYWsgYXMgc29vbiBhcyB3ZSBmaW5kIG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3Agc2VhcmNoaW5nIGFzIHNvb24gYXMgd2UgY2FuIC0gaW4gdGhpcyBjYXNlIHdoZW4gd2UgaGl0IG1heCBsZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bWVyaWNDaGFycy5sZW5ndGggPT09IHRoaXMuY291bnRyeUNvZGVNYXhMZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaWFsQ29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIl9nZXRGdWxsTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRGdWxsTnVtYmVyKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdGhpcy50ZWxJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWFsQ29kZSA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5kaWFsQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZWZpeDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVyaWNWYWwgPSB0aGlzLl9nZXROdW1lcmljKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VwYXJhdGVEaWFsQ29kZSAmJiB2YWwuY2hhckF0KDApICE9PSBcIitcIiAmJiBkaWFsQ29kZSAmJiBudW1lcmljVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHVzaW5nIHNlcGFyYXRlRGlhbENvZGUsIGl0IGlzIHZpc2libGUgc28gaXMgZWZmZWN0aXZlbHkgcGFydCBvZiB0aGUgdHlwZWQgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXggPSBcIitcIi5jb25jYXQoZGlhbENvZGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiX2JlZm9yZVNldE51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYmVmb3JlU2V0TnVtYmVyKG9yaWdpbmFsTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXIgPSBvcmlnaW5hbE51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZXBhcmF0ZURpYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbENvZGUgPSB0aGlzLl9nZXREaWFsQ29kZShudW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSB2YWxpZCBkaWFsIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaWFsQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIGNhc2UgX2dldERpYWxDb2RlIHJldHVybmVkIGFuIGFyZWEgY29kZSBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbENvZGUgPSBcIitcIi5jb25jYXQodGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmRpYWxDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGxvdCBvZiBudW1iZXJzIHdpbGwgaGF2ZSBhIHNwYWNlIHNlcGFyYXRpbmcgdGhlIGRpYWwgY29kZSBhbmQgdGhlIG1haW4gbnVtYmVyLCBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzb21lIE5BTlAgbnVtYmVycyB3aWxsIGhhdmUgYSBoeXBoZW4gZS5nLiArMSA2ODQtNzMzLTEyMzQgLSBpbiBib3RoIGNhc2VzIHdlIHdhbnQgdG8gZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmlkIG9mIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogZG9uJ3QganVzdCB0cmltIGFsbCBub24tbnVtZXJpY3MgYXMgbWF5IHdhbnQgdG8gcHJlc2VydmUgYW4gb3BlbiBwYXJlbnRoZXNpcyBldGNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBudW1iZXJbZGlhbENvZGUubGVuZ3RoXSA9PT0gXCIgXCIgfHwgbnVtYmVyW2RpYWxDb2RlLmxlbmd0aF0gPT09IFwiLVwiID8gZGlhbENvZGUubGVuZ3RoICsgMSA6IGRpYWxDb2RlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgPSBudW1iZXIuc3Vic3RyKHN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FwKG51bWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJfdHJpZ2dlckNvdW50cnlDaGFuZ2VcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3RyaWdnZXJDb3VudHJ5Q2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmlnZ2VyKFwiY291bnRyeWNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImhhbmRsZUF1dG9Db3VudHJ5XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUF1dG9Db3VudHJ5KCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluaXRpYWxDb3VudHJ5ID09PSBcImF1dG9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgbXVzdCBzZXQgdGhpcyBldmVuIGlmIHRoZXJlIGlzIGFuIGluaXRpYWwgdmFsIGluIHRoZSBpbnB1dDogaW4gY2FzZSB0aGUgaW5pdGlhbCB2YWwgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludmFsaWQgYW5kIHRoZXkgZGVsZXRlIGl0IC0gdGhleSBzaG91bGQgc2VlIHRoZWlyIGF1dG8gY291bnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q291bnRyeSA9IHdpbmRvdy5pbnRsVGVsSW5wdXRHbG9iYWxzLmF1dG9Db3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBubyBpbml0aWFsIHZhbHVlIGluIHRoZSBpbnB1dCwgdGhlbiB1cGRhdGUgdGhlIGZsYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50ZWxJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmRlZmF1bHRDb3VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUF1dG9Db3VudHJ5UHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJoYW5kbGVVdGlsc1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVVdGlscygpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbnRsVGVsSW5wdXRVdGlscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBhbiBpbml0aWFsIHZhbHVlIGluIHRoZSBpbnB1dCwgdGhlbiBmb3JtYXQgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlbElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsRnJvbU51bWJlcih0aGlzLnRlbElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBsYWNlaG9sZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVXRpbHNTY3JpcHRQcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtID0gdGhpcy50ZWxJbnB1dC5mb3JtO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93RHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgZHJvcGRvd24gaXMgY2xvc2VkIChhbmQgdW5iaW5kIGxpc3RlbmVycylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGbGFnLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVDbGlja1NlbGVjdGVkRmxhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWdzQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUZsYWdzQ29udGFpbmVyS2V5ZG93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbCBjbGljayBoYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLl9nZXRDbG9zZXN0TGFiZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVMYWJlbENsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmJpbmQgaGlkZGVuSW5wdXQgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbklucHV0ICYmIGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVIaWRkZW5JbnB1dFN1Ym1pdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdW5iaW5kIGF1dG9JbnNlcnREaWFsQ29kZSBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvSW5zZXJ0RGlhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuX2hhbmRsZVN1Ym1pdE9yQmx1ckV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5faGFuZGxlU3VibWl0T3JCbHVyRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHVuYmluZCBrZXkgZXZlbnRzLCBhbmQgY3V0L3Bhc3RlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9oYW5kbGVLZXl1cEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY3V0XCIsIHRoaXMuX2hhbmRsZUNsaXBib2FyZEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5faGFuZGxlQ2xpcGJvYXJkRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgYXR0cmlidXRlIG9mIGlkIGluc3RhbmNlOiBkYXRhLWludGwtdGVsLWlucHV0LWlkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVsSW5wdXQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1pbnRsLXRlbC1pbnB1dC1pZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG1hcmt1cCAoYnV0IGxlYXZlIHRoZSBvcmlnaW5hbCBpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLnRlbElucHV0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy50ZWxJbnB1dCwgd3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5pbnRsVGVsSW5wdXRHbG9iYWxzLmluc3RhbmNlc1t0aGlzLmlkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImdldEV4dGVuc2lvblwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFeHRlbnNpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW50bFRlbElucHV0VXRpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRsVGVsSW5wdXRVdGlscy5nZXRFeHRlbnNpb24odGhpcy5fZ2V0RnVsbE51bWJlcigpLCB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuaXNvMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJnZXROdW1iZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TnVtYmVyKGZvcm1hdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmludGxUZWxJbnB1dFV0aWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNvMiA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludGxUZWxJbnB1dFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLl9nZXRGdWxsTnVtYmVyKCksIGlzbzIsIGZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJnZXROdW1iZXJUeXBlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE51bWJlclR5cGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW50bFRlbElucHV0VXRpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnRsVGVsSW5wdXRVdGlscy5nZXROdW1iZXJUeXBlKHRoaXMuX2dldEZ1bGxOdW1iZXIoKSwgdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLmlzbzIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtOTk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJnZXRTZWxlY3RlZENvdW50cnlEYXRhXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlbGVjdGVkQ291bnRyeURhdGEoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQ291bnRyeURhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJnZXRWYWxpZGF0aW9uRXJyb3JcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmludGxUZWxJbnB1dFV0aWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNvMiA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludGxUZWxJbnB1dFV0aWxzLmdldFZhbGlkYXRpb25FcnJvcih0aGlzLl9nZXRGdWxsTnVtYmVyKCksIGlzbzIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtOTk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJpc1ZhbGlkTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmFsaWROdW1iZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLl9nZXRGdWxsTnVtYmVyKCkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmludGxUZWxJbnB1dFV0aWxzID8gaW50bFRlbElucHV0VXRpbHMuaXNWYWxpZE51bWJlcih2YWwsIHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJpc1Bvc3NpYmxlTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUG9zc2libGVOdW1iZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLl9nZXRGdWxsTnVtYmVyKCkudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmludGxUZWxJbnB1dFV0aWxzID8gaW50bFRlbElucHV0VXRpbHMuaXNQb3NzaWJsZU51bWJlcih2YWwsIHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZXRDb3VudHJ5XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvdW50cnkob3JpZ2luYWxDb3VudHJ5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRyeUNvZGUgPSBvcmlnaW5hbENvdW50cnlDb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDb3VudHJ5RGF0YS5pc28yICE9PSBjb3VudHJ5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0RmxhZyhjb3VudHJ5Q29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEaWFsQ29kZSh0aGlzLnNlbGVjdGVkQ291bnRyeURhdGEuZGlhbENvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlckNvdW50cnlDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2V0TnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE51bWJlcihudW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgbXVzdCB1cGRhdGUgdGhlIGZsYWcgZmlyc3QsIHdoaWNoIHVwZGF0ZXMgdGhpcy5zZWxlY3RlZENvdW50cnlEYXRhLCB3aGljaCBpcyB1c2VkIGZvclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3JtYXR0aW5nIHRoZSBudW1iZXIgYmVmb3JlIGRpc3BsYXlpbmcgaXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZsYWdDaGFuZ2VkID0gdGhpcy5fdXBkYXRlRmxhZ0Zyb21OdW1iZXIobnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsRnJvbU51bWJlcihudW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZ0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldFBsYWNlaG9sZGVyTnVtYmVyVHlwZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQbGFjZWhvbGRlck51bWJlclR5cGUodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXJOdW1iZXJUeXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUGxhY2Vob2xkZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IF0pO1xuICAgICAgICAgICAgcmV0dXJuIEl0aTtcbiAgICAgICAgfSgpO1xuICAgICAgICAvKioqKioqKioqKioqKioqKioqKipcbiAqICBTVEFUSUMgTUVUSE9EU1xuICoqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvLyBnZXQgdGhlIGNvdW50cnkgZGF0YSBvYmplY3RcbiAgICAgICAgaW50bFRlbElucHV0R2xvYmFscy5nZXRDb3VudHJ5RGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsbENvdW50cmllcztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gaW5qZWN0IGEgPHNjcmlwdD4gZWxlbWVudCB0byBsb2FkIHV0aWxzLmpzXG4gICAgICAgIHZhciBpbmplY3RTY3JpcHQgPSBmdW5jdGlvbiBpbmplY3RTY3JpcHQocGF0aCwgaGFuZGxlU3VjY2VzcywgaGFuZGxlRmFpbHVyZSkge1xuICAgICAgICAgICAgLy8gaW5qZWN0IGEgbmV3IHNjcmlwdCBlbGVtZW50IGludG8gdGhlIHBhZ2VcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZvckVhY2hJbnN0YW5jZShcImhhbmRsZVV0aWxzXCIpO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoSW5zdGFuY2UoXCJyZWplY3RVdGlsc1NjcmlwdFByb21pc2VcIik7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZUZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmFpbHVyZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzY3JpcHQuY2xhc3NOYW1lID0gXCJpdGktbG9hZC11dGlsc1wiO1xuICAgICAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBwYXRoO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBsb2FkIHRoZSB1dGlscyBzY3JpcHRcbiAgICAgICAgaW50bFRlbElucHV0R2xvYmFscy5sb2FkVXRpbHMgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgICAgICAvLyAyIG9wdGlvbnM6XG4gICAgICAgICAgICAvLyAxKSBub3QgYWxyZWFkeSBzdGFydGVkIGxvYWRpbmcgKHN0YXJ0KVxuICAgICAgICAgICAgLy8gMikgYWxyZWFkeSBzdGFydGVkIGxvYWRpbmcgKGRvIG5vdGhpbmcgLSBqdXN0IHdhaXQgZm9yIHRoZSBvbmxvYWQgY2FsbGJhY2sgdG8gZmlyZSwgd2hpY2ggd2lsbFxuICAgICAgICAgICAgLy8gdHJpZ2dlciBoYW5kbGVVdGlscyBvbiBhbGwgaW5zdGFuY2VzLCBpbnZva2luZyB0aGVpciByZXNvbHZlVXRpbHNTY3JpcHRQcm9taXNlIGZ1bmN0aW9ucylcbiAgICAgICAgICAgIGlmICghd2luZG93LmludGxUZWxJbnB1dFV0aWxzICYmICF3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5zdGFydGVkTG9hZGluZ1V0aWxzU2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSBkbyB0aGlzIG9uY2VcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW50bFRlbElucHV0R2xvYmFscy5zdGFydGVkTG9hZGluZ1V0aWxzU2NyaXB0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIHByb21pc2VzLCB0aGVuIHJldHVybiBhIHByb21pc2VcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluamVjdFNjcmlwdChwYXRoLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5qZWN0U2NyaXB0KHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICBpbnRsVGVsSW5wdXRHbG9iYWxzLmRlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgICAgIC8vIHZlcnNpb25cbiAgICAgICAgaW50bFRlbElucHV0R2xvYmFscy52ZXJzaW9uID0gXCIxOC4yLjFcIjtcbiAgICAgICAgLy8gY29udmVuaWVuY2Ugd3JhcHBlclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBpdGkgPSBuZXcgSXRpKGlucHV0LCBvcHRpb25zKTtcbiAgICAgICAgICAgIGl0aS5faW5pdCgpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbnRsLXRlbC1pbnB1dC1pZFwiLCBpdGkuaWQpO1xuICAgICAgICAgICAgd2luZG93LmludGxUZWxJbnB1dEdsb2JhbHMuaW5zdGFuY2VzW2l0aS5pZF0gPSBpdGk7XG4gICAgICAgICAgICByZXR1cm4gaXRpO1xuICAgICAgICB9O1xuICAgIH0oKTtcbn0pOyIsIi8qKlxuICogRXhwb3NpbmcgaW50bC10ZWwtaW5wdXQgYXMgYSBjb21wb25lbnRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9idWlsZC9qcy9pbnRsVGVsSW5wdXRcIik7XG4iLCJ2YXIgZ2xvYmFsID1cbiAgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzKSB8fFxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYpIHx8XG4gICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwpXG5cbnZhciBzdXBwb3J0ID0ge1xuICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIGdsb2JhbCxcbiAgaXRlcmFibGU6ICdTeW1ib2wnIGluIGdsb2JhbCAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgYmxvYjpcbiAgICAnRmlsZVJlYWRlcicgaW4gZ2xvYmFsICYmXG4gICAgJ0Jsb2InIGluIGdsb2JhbCAmJlxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gZ2xvYmFsLFxuICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBnbG9iYWxcbn1cblxuZnVuY3Rpb24gaXNEYXRhVmlldyhvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG59XG5cbmlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICBdXG5cbiAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICBBcnJheUJ1ZmZlci5pc1ZpZXcgfHxcbiAgICBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gIH1cbiAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH4hXS9pLnRlc3QobmFtZSkgfHwgbmFtZSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZTogXCInICsgbmFtZSArICdcIicpXG4gIH1cbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgdmFyIGl0ZXJhdG9yID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXRlcmF0b3Jcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICB0aGlzLm1hcCA9IHt9XG5cbiAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgfSwgdGhpcylcbiAgfVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICB9XG4gIH1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKG5hbWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIGl0ZW1zLnB1c2godmFsdWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbn1cblxuZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgfVxuICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgfVxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgfVxuICByZXR1cm4gY2hhcnMuam9pbignJylcbn1cblxuZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gIGlmIChidWYuc2xpY2UpIHtcbiAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gIH0gZWxzZSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICB9XG59XG5cbmZ1bmN0aW9uIEJvZHkoKSB7XG4gIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgIC8qXG4gICAgICBmZXRjaC1tb2NrIHdyYXBzIHRoZSBSZXNwb25zZSBvYmplY3QgaW4gYW4gRVM2IFByb3h5IHRvXG4gICAgICBwcm92aWRlIHVzZWZ1bCB0ZXN0IGhhcm5lc3MgZmVhdHVyZXMgc3VjaCBhcyBmbHVzaC4gSG93ZXZlciwgb25cbiAgICAgIEVTNSBicm93c2VycyB3aXRob3V0IGZldGNoIG9yIFByb3h5IHN1cHBvcnQgcG9sbHlmaWxscyBtdXN0IGJlIHVzZWQ7XG4gICAgICB0aGUgcHJveHktcG9sbHlmaWxsIGlzIHVuYWJsZSB0byBwcm94eSBhbiBhdHRyaWJ1dGUgdW5sZXNzIGl0IGV4aXN0c1xuICAgICAgb24gdGhlIG9iamVjdCBiZWZvcmUgdGhlIFByb3h5IGlzIGNyZWF0ZWQuIFRoaXMgY2hhbmdlIGVuc3VyZXNcbiAgICAgIFJlc3BvbnNlLmJvZHlVc2VkIGV4aXN0cyBvbiB0aGUgaW5zdGFuY2UsIHdoaWxlIG1haW50YWluaW5nIHRoZVxuICAgICAgc2VtYW50aWMgb2Ygc2V0dGluZyBSZXF1ZXN0LmJvZHlVc2VkIGluIHRoZSBjb25zdHJ1Y3RvciBiZWZvcmVcbiAgICAgIF9pbml0Qm9keSBpcyBjYWxsZWQuXG4gICAgKi9cbiAgICB0aGlzLmJvZHlVc2VkID0gdGhpcy5ib2R5VXNlZFxuICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgIGlmICghYm9keSkge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICB2YXIgaXNDb25zdW1lZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChpc0NvbnN1bWVkKSB7XG4gICAgICAgICAgcmV0dXJuIGlzQ29uc3VtZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ1ZmZlci5zbGljZShcbiAgICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVPZmZzZXQsXG4gICAgICAgICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlT2Zmc2V0ICsgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICB9XG4gIH1cblxuICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG52YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG5mdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVxdWVzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIHRoZSBcIm5ld1wiIG9wZXJhdG9yLCB0aGlzIERPTSBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgfVxuICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsXG4gICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gIH1cblxuICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdzYW1lLW9yaWdpbidcbiAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICB9XG4gIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbFxuICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gIH1cbiAgdGhpcy5faW5pdEJvZHkoYm9keSlcblxuICBpZiAodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpIHtcbiAgICBpZiAob3B0aW9ucy5jYWNoZSA9PT0gJ25vLXN0b3JlJyB8fCBvcHRpb25zLmNhY2hlID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAvLyBTZWFyY2ggZm9yIGEgJ18nIHBhcmFtZXRlciBpbiB0aGUgcXVlcnkgc3RyaW5nXG4gICAgICB2YXIgcmVQYXJhbVNlYXJjaCA9IC8oWz8mXSlfPVteJl0qL1xuICAgICAgaWYgKHJlUGFyYW1TZWFyY2gudGVzdCh0aGlzLnVybCkpIHtcbiAgICAgICAgLy8gSWYgaXQgYWxyZWFkeSBleGlzdHMgdGhlbiBzZXQgdGhlIHZhbHVlIHdpdGggdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICB0aGlzLnVybCA9IHRoaXMudXJsLnJlcGxhY2UocmVQYXJhbVNlYXJjaCwgJyQxXz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGEgbmV3ICdfJyBwYXJhbWV0ZXIgdG8gdGhlIGVuZCB3aXRoIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgdmFyIHJlUXVlcnlTdHJpbmcgPSAvXFw/L1xuICAgICAgICB0aGlzLnVybCArPSAocmVRdWVyeVN0cmluZy50ZXN0KHRoaXMudXJsKSA/ICcmJyA6ICc/JykgKyAnXz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG59XG5cbmZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgYm9keVxuICAgIC50cmltKClcbiAgICAuc3BsaXQoJyYnKVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gZm9ybVxufVxuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgLy8gUmVwbGFjZSBpbnN0YW5jZXMgb2YgXFxyXFxuIGFuZCBcXG4gZm9sbG93ZWQgYnkgYXQgbGVhc3Qgb25lIHNwYWNlIG9yIGhvcml6b250YWwgdGFiIHdpdGggYSBzcGFjZVxuICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKVxuICAvLyBBdm9pZGluZyBzcGxpdCB2aWEgcmVnZXggdG8gd29yayBhcm91bmQgYSBjb21tb24gSUUxMSBidWcgd2l0aCB0aGUgY29yZS1qcyAzLjYuMCByZWdleCBwb2x5ZmlsbFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoL2lzc3Vlcy83NDhcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzc1MVxuICBwcmVQcm9jZXNzZWRIZWFkZXJzXG4gICAgLnNwbGl0KCdcXHInKVxuICAgIC5tYXAoZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICByZXR1cm4gaGVhZGVyLmluZGV4T2YoJ1xcbicpID09PSAwID8gaGVhZGVyLnN1YnN0cigxLCBoZWFkZXIubGVuZ3RoKSA6IGhlYWRlclxuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiBoZWFkZXJzXG59XG5cbkJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNwb25zZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIHRoZSBcIm5ld1wiIG9wZXJhdG9yLCB0aGlzIERPTSBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpXG4gIH1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXNcbiAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHQgPT09IHVuZGVmaW5lZCA/ICcnIDogJycgKyBvcHRpb25zLnN0YXR1c1RleHRcbiAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxufVxuXG5Cb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG5SZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgdXJsOiB0aGlzLnVybFxuICB9KVxufVxuXG5SZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxudmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cblJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxufVxuXG5leHBvcnQgdmFyIERPTUV4Y2VwdGlvbiA9IGdsb2JhbC5ET01FeGNlcHRpb25cbnRyeSB7XG4gIG5ldyBET01FeGNlcHRpb24oKVxufSBjYXRjaCAoZXJyKSB7XG4gIERPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpXG4gICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrXG4gIH1cbiAgRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKVxuICBET01FeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRE9NRXhjZXB0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaChpbnB1dCwgaW5pdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbCAmJiByZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgZnVuY3Rpb24gYWJvcnRYaHIoKSB7XG4gICAgICB4aHIuYWJvcnQoKVxuICAgIH1cblxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgfVxuICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZml4VXJsKHVybCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHVybCA9PT0gJycgJiYgZ2xvYmFsLmxvY2F0aW9uLmhyZWYgPyBnbG9iYWwubG9jYXRpb24uaHJlZiA6IHVybFxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIGZpeFVybChyZXF1ZXN0LnVybCksIHRydWUpXG5cbiAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyKSB7XG4gICAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHN1cHBvcnQuYXJyYXlCdWZmZXIgJiZcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiZcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5kZXhPZignYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJykgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5pdCAmJiB0eXBlb2YgaW5pdC5oZWFkZXJzID09PSAnb2JqZWN0JyAmJiAhKGluaXQuaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhpbml0LmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBub3JtYWxpemVWYWx1ZShpbml0LmhlYWRlcnNbbmFtZV0pKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbCkge1xuICAgICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocilcblxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBET05FIChzdWNjZXNzIG9yIGZhaWx1cmUpXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICB9KVxufVxuXG5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcblxuaWYgKCFnbG9iYWwuZmV0Y2gpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2hcbiAgZ2xvYmFsLkhlYWRlcnMgPSBIZWFkZXJzXG4gIGdsb2JhbC5SZXF1ZXN0ID0gUmVxdWVzdFxuICBnbG9iYWwuUmVzcG9uc2UgPSBSZXNwb25zZVxufVxuIiwiY29uc3QgYWNjb3JkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjY29yZGlvbl0nKVxyXG5pZiAoYWNjb3JkaW9ucy5sZW5ndGgpIHtcclxuICBhY2NvcmRpb25zLmZvckVhY2goYWNjb3JkaW9uID0+IHtcclxuICAgIGNvbnN0IHJvd3MgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWNjb3JkaW9uLXJvd10nKSB8fCBbXVxyXG5cclxuICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBjb25zdCBoZWFkZXIgPSByb3cucXVlcnlTZWxlY3RvcignW2RhdGEtYWNjb3JkaW9uLWhlYWRlcl0nKVxyXG4gICAgICBjb25zdCBjb250ZW50ID0gcm93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjY29yZGlvbi1jb250ZW50XScpXHJcblxyXG4gICAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpXHJcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxyXG4gICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJylcclxuICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpXHJcbiAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCBcIndoYXR3Zy1mZXRjaFwiO1xyXG5pbXBvcnQgaW50bFRlbElucHV0IGZyb20gXCJpbnRsLXRlbC1pbnB1dFwiO1xyXG5cclxuY29uc3QgaW5wdXRDbGFzc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1pbnB1dC1jbGFzc2VzXCIpIHx8IFtdO1xyXG5pbnB1dENsYXNzZXMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+e1xyXG4gICAgaWYgKCEhZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnX2ZpbGxlZCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdfZmlsbGVkJylcclxuICAgIH1cclxuICB9KVxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+e1xyXG4gICAgaWYgKCEhZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnX2ZpbGxlZCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdfZmlsbGVkJylcclxuICAgIH1cclxuICB9KVxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoZSkgPT57XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdfZm9jdXNlZCcpXHJcbiAgfSlcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT57XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9jdXNlZCcpXHJcbiAgfSlcclxufSlcclxuXHJcbmNvbnN0IHBob25lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1pbnB1dC1waG9uZVwiKSB8fCBbXTtcclxucGhvbmVJbnB1dHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAvLyBlbC52YWx1ZSA9ICc3J1xyXG5cclxuICBjb25zdCBpdGkgPSBpbnRsVGVsSW5wdXQoZWwsIHtcclxuICAgIGluaXRpYWxDb3VudHJ5OiBcInJ1XCIsXHJcbiAgICBwcmVmZXJyZWRDb3VudHJpZXM6IFtcclxuICAgICAgXCJydVwiLFxyXG4gICAgICBcImt6XCIsXHJcbiAgICAgIFwidWFcIixcclxuICAgICAgXCJieVwiLFxyXG4gICAgXSxcclxuICAgIGxvY2FsaXplZENvdW50cmllczoge1xyXG4gICAgICBydTogXCLQoNC+0YHRgdC40Y9cIixcclxuICAgICAga3o6IFwi0JrQsNC30LDRhdGB0YLQsNC9XCIsXHJcbiAgICAgIHVhOiBcItCj0LrRgNCw0LjQvdCwXCIsXHJcbiAgICAgIGJ5OiBcItCR0LXQu9Cw0YDRg9GB0YxcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNvdW50cnljaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnN0IGNvdW50cnkgPSBpdGkuZ2V0U2VsZWN0ZWRDb3VudHJ5RGF0YSgpO1xyXG4gICAgaWYgKGNvdW50cnkuZGlhbENvZGUpIHtcclxuICAgICAgJChlbCkuaW5wdXRtYXNrcyhcInJlbW92ZVwiKTtcclxuICAgICAgJChlbCkuaW5wdXRtYXNrKFwiKyN7Kn1cIiwgbWFza09wdHMuaW5wdXRtYXNrKTtcclxuICAgICAgJChlbCkuaW5wdXRtYXNrcygkLmV4dGVuZCh0cnVlLCB7fSwgbWFza09wdHMsIHtcclxuICAgICAgICBsaXN0OiBsaXN0Q291bnRyaWVzXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbGlzdENvdW50cmllcyA9ICQubWFza3NTb3J0KCQubWFza3NMb2FkKGlucHV0bWFza1BhcmFtcy5waG9uZUNvZGVzKSwgWycjJ10sIC9bMC05XXwjLywgXCJtYXNrXCIpO1xyXG4gIGNvbnN0IG1hc2tPcHRzID0ge1xyXG4gICAgICBpbnB1dG1hc2s6IHtcclxuICAgICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgJyMnOiB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05XVwiLFxyXG4gICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG93TWFza09uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgYXV0b1VubWFzazogdHJ1ZSxcclxuICAgICAgICAgIGNsZWFyTWFza09uTG9zdEZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihtYXNrZWRWYWx1ZSwgdW5tYXNrZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJysnK3VubWFza2VkVmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1hdGNoOiAvWzAtOV0vLFxyXG4gICAgICByZXBsYWNlOiAnIycsXHJcbiAgICAgIGxpc3RLZXk6IFwibWFza1wiXHJcbiAgfTtcclxuXHJcbiAgbGV0IG1hc2tJc0luaXQgPSBmYWxzZVxyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG4gICAgaWYgKCFtYXNrSXNJbml0KSB7XHJcbiAgICAgIG1hc2tJc0luaXQgPSB0cnVlO1xyXG4gICAgICBlbC52YWx1ZSA9ICc3JztcclxuICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgJChlbCkuaW5wdXRtYXNrcygkLmV4dGVuZCh0cnVlLCB7fSwgbWFza09wdHMsIHtcclxuICAgICAgICBsaXN0OiBsaXN0Q291bnRyaWVzLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnX21hc2tlZCcpKSB7XHJcbiAgICAvLyAgIGVsLmNsYXNzTGlzdC5hZGQoJ19tYXNrZWQnKTtcclxuICAgIC8vICAgJChlbCkudmFsKCc3JylcclxuICAgIC8vICAgJChlbCkuaW5wdXRtYXNrcygkLmV4dGVuZCh0cnVlLCB7fSwgbWFza09wdHMsIHtcclxuICAgIC8vICAgICBsaXN0OiBsaXN0Q291bnRyaWVzLFxyXG4gICAgLy8gICB9KSk7XHJcbiAgICAvLyB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxualF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXHJcbiAgXCJsYXhFbWFpbFwiLFxyXG4gIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fFxyXG4gICAgICAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLy50ZXN0KFxyXG4gICAgICAgIHZhbHVlXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfSxcclxuICBcItCd0LXQutC+0YDRgNC10LrRgtC90YvQuSBlLW1haWwuXCJcclxuKTtcclxuXHJcbmpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFxyXG4gIFwibWFza2VkUGhvbmVcIixcclxuICBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmltYXNrLm1hc2tlZC5pc0NvbXBsZXRlXHJcbiAgfSxcclxuICBcItCd0LXQutC+0YDRgNC10LrRgtC90YvQuSDRgtC10LvQtdGE0L7QvS5cIlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybShmb3JtLCB2YWxpZGF0b3IpIHtcclxuICBjb25zdCBlbWFpbElucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5qcy1pbnB1dC1lbWFpbFwiKSB8fCBbXTtcclxuICBlbWFpbElucHV0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgZWwudmFsdWUgPSBlbC52YWx1ZS50cmltKCkucmVwbGFjZSgvW1xcdTAwMDAtXFx1MDAwOCxcXHUwMDBBLVxcdTAwMUYsXFx1MDA3Ri1cXHUwMEEwXSsvZywgJycpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgYm9keTogbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICB2YWxpZGF0b3Iuc2hvd0Vycm9ycyh7XHJcbiAgICAgICAgICBhY3Rpb246IHJlc3BvbnNlLm1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNhY3Rpb24tZXJyb3JcIiwgZm9ybSkuYWRkQ2xhc3MoXCJlcnJvcl9zdWNjZXNzXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdmFsaWRhdG9yLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdCkge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcmVzcG9uc2UucmVkaXJlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbGlkYXRvci5zaG93RXJyb3JzKHtcclxuICAgICAgICAgIGFjdGlvbjogcmVzcG9uc2UubWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnZhciBpbmRpdmlkdWFsRm9ybVZhbGlkYXRvciA9ICQoXCIjaW5kaXZpZHVhbC1mb3JtXCIpLnZhbGlkYXRlKHtcclxuICBydWxlczoge1xyXG4gICAgbmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwaG9uZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBhcHByb3ZlOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1INC40LzRj1wiLFxyXG4gICAgfSxcclxuICAgIHBob25lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1INGC0LXQu9C10YTQvtC9IChXaGF0c0FwcCwgVmliZXIpXCIsXHJcbiAgICB9LFxyXG4gICAgYXBwcm92ZToge1xyXG4gICAgICByZXF1aXJlZDogXCLQktGLINC00L7Qu9C20L3RiyDRgdC+0LPQu9Cw0YHQuNGC0YzRgdGPINGBINGD0YHQu9C+0LLQuNGP0LzQuFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiAoZXJyb3IsIGVsZW1lbnQpIHtcclxuICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQucGFyZW50KCkpO1xyXG4gIH0sXHJcbiAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24gKGZvcm0pIHtcclxuICAgIHN1Ym1pdEZvcm0oZm9ybSwgaW5kaXZpZHVhbEZvcm1WYWxpZGF0b3IpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxudmFyIGZhcUZvcm1WYWxpZGF0b3IgPSAkKFwiI2ZhcS1mb3JtXCIpLnZhbGlkYXRlKHtcclxuICBydWxlczoge1xyXG4gICAgZW1haWw6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGVtYWlsOiB0cnVlLFxyXG4gICAgICBsYXhFbWFpbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXNzYWdlczoge1xyXG4gICAgZW1haWw6IHtcclxuICAgICAgcmVxdWlyZWQ6IFwi0JLQstC10LTQuNGC0LUgZS1tYWlsXCIsXHJcbiAgICAgIGVtYWlsOiBcItCd0LXQutC+0YDRgNC10LrRgtC90YvQuSBlLW1haWxcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbiAoZm9ybSkge1xyXG4gICAgc3VibWl0Rm9ybShmb3JtLCBmYXFGb3JtVmFsaWRhdG9yKTtcclxuICB9LFxyXG59KTtcclxuIiwiY29uc3QgaXNWaXNpYmxlID0gKGVsZW0pID0+XHJcbiAgISFlbGVtICYmXHJcbiAgISEoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcclxuXHJcbmNvbnN0IG1vZGFsVG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tb2RhbC10b2dnbGVdXCIpO1xyXG5pZiAobW9kYWxUb2dnbGVzLmxlbmd0aCkge1xyXG4gIG1vZGFsVG9nZ2xlcy5mb3JFYWNoKCh0b2dnbGUpID0+IHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG9nZ2xlLmRhdGFzZXQubW9kYWxUb2dnbGUpO1xyXG4gICAgbGV0IGNsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIltkYXRhLW1vZGFsLWNsb3NlXVwiKTtcclxuICAgIGNvbnN0IG91dHNpZGVDbGlja0xpc3RlbmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAgIGlzVmlzaWJsZShtb2RhbCkgJiZcclxuICAgICAgICAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgIHJlbW92ZUNsaWNrTGlzdGVuZXIoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZUNsaWNrTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvdXRzaWRlQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIl9vcGVuZWRcIik7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvdXRzaWRlQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGlkZSA9ICgpID0+IHtcclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGVuZWRcIik7XHJcbiAgICB9O1xyXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNob3coKTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tIFwidGhyb3R0bGUtZGVib3VuY2VcIjtcclxuXHJcbmNvbnN0IHNjcm9sbHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS1zY3JvbGx1cFwiKTtcclxuY29uc3Qgc2Nyb2xsSGFuZGxlciA9IHRocm90dGxlKDEwLCAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNDAwKSB7XHJcbiAgICBzY3JvbGx1cC5jbGFzc0xpc3QuYWRkKFwidWktc2Nyb2xsdXBfZml4ZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNjcm9sbHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJ1aS1zY3JvbGx1cF9maXhlZFwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcblxyXG5jb25zdCBzY3JvbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNjcm9sbF1cIikgfHwgW107XHJcbnNjcm9sbHMuZm9yRWFjaCgoc2Nyb2xsKSA9PlxyXG4gIHNjcm9sbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgIGxldCB0b3AgPSAwO1xyXG4gICAgbGV0IGxlZnQgPSAwO1xyXG4gICAgaWYgKHNjcm9sbC5kYXRhc2V0LnNjcm9sbCkge1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzY3JvbGwuZGF0YXNldC5zY3JvbGwpO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdG9wID0gdGFyZ2V0Lm9mZnNldFRvcCAtIG9mZnNldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBzY3JvbGxUb3A6IHRvcCxcclxuICAgICAgfSxcclxuICAgICAgMjAwMFxyXG4gICAgKTtcclxuICB9KVxyXG4pO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQsbm8tcGFyYW0tcmVhc3NpZ24sbm8tc2hhZG93ICovXG5cbi8qKlxuICogVGhyb3R0bGUgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24uIEVzcGVjaWFsbHkgdXNlZnVsIGZvciByYXRlIGxpbWl0aW5nXG4gKiBleGVjdXRpb24gb2YgaGFuZGxlcnMgb24gZXZlbnRzIGxpa2UgcmVzaXplIGFuZCBzY3JvbGwuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IC0gICAgICAgICAgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSAgICAgICAgICAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzLWlzLCB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIHRocm90dGxlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSAgICAgICAgICAgICAgQW4gb2JqZWN0IHRvIGNvbmZpZ3VyZSBvcHRpb25zLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5ub1RyYWlsaW5nXSAtICAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBub1RyYWlsaW5nIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgb25seSBleGVjdXRlIGV2ZXJ5IGBkZWxheWAgbWlsbGlzZWNvbmRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQuIElmIG5vVHJhaWxpbmcgaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmUgZmluYWwgdGltZSBhZnRlciB0aGUgbGFzdCB0aHJvdHRsZWQtZnVuY3Rpb24gY2FsbC4gKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3JcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGVsYXlgIG1pbGxpc2Vjb25kcywgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5ub0xlYWRpbmddIC0gICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vTGVhZGluZyBpcyBmYWxzZSwgdGhlIGZpcnN0IHRocm90dGxlZC1mdW5jdGlvbiBjYWxsIHdpbGwgZXhlY3V0ZSBjYWxsYmFja1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltbWVkaWF0ZWx5LiBJZiBub0xlYWRpbmcgaXMgdHJ1ZSwgdGhlIGZpcnN0IHRoZSBjYWxsYmFjayBleGVjdXRpb24gd2lsbCBiZSBza2lwcGVkLiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrIHdpbGwgbmV2ZXIgZXhlY3V0ZWQgaWYgYm90aCBub0xlYWRpbmcgPSB0cnVlIGFuZCBub1RyYWlsaW5nID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVib3VuY2VNb2RlXSAtIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuIElmIGBkZWJvdW5jZU1vZGVgIGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgKGF0IGVuZCksIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBuZXcsIHRocm90dGxlZCwgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkZWxheSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0Y29uc3Qge1xuXHRcdG5vVHJhaWxpbmcgPSBmYWxzZSxcblx0XHRub0xlYWRpbmcgPSBmYWxzZSxcblx0XHRkZWJvdW5jZU1vZGUgPSB1bmRlZmluZWRcblx0fSA9IG9wdGlvbnMgfHwge307XG5cdC8qXG5cdCAqIEFmdGVyIHdyYXBwZXIgaGFzIHN0b3BwZWQgYmVpbmcgY2FsbGVkLCB0aGlzIHRpbWVvdXQgZW5zdXJlcyB0aGF0XG5cdCAqIGBjYWxsYmFja2AgaXMgZXhlY3V0ZWQgYXQgdGhlIHByb3BlciB0aW1lcyBpbiBgdGhyb3R0bGVgIGFuZCBgZW5kYFxuXHQgKiBkZWJvdW5jZSBtb2Rlcy5cblx0ICovXG5cdGxldCB0aW1lb3V0SUQ7XG5cdGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcblxuXHQvLyBLZWVwIHRyYWNrIG9mIHRoZSBsYXN0IHRpbWUgYGNhbGxiYWNrYCB3YXMgZXhlY3V0ZWQuXG5cdGxldCBsYXN0RXhlYyA9IDA7XG5cblx0Ly8gRnVuY3Rpb24gdG8gY2xlYXIgZXhpc3RpbmcgdGltZW91dFxuXHRmdW5jdGlvbiBjbGVhckV4aXN0aW5nVGltZW91dCgpIHtcblx0XHRpZiAodGltZW91dElEKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dElEKTtcblx0XHR9XG5cdH1cblxuXHQvLyBGdW5jdGlvbiB0byBjYW5jZWwgbmV4dCBleGVjXG5cdGZ1bmN0aW9uIGNhbmNlbChvcHRpb25zKSB7XG5cdFx0Y29uc3QgeyB1cGNvbWluZ09ubHkgPSBmYWxzZSB9ID0gb3B0aW9ucyB8fCB7fTtcblx0XHRjbGVhckV4aXN0aW5nVGltZW91dCgpO1xuXHRcdGNhbmNlbGxlZCA9ICF1cGNvbWluZ09ubHk7XG5cdH1cblxuXHQvKlxuXHQgKiBUaGUgYHdyYXBwZXJgIGZ1bmN0aW9uIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIHRocm90dGxpbmcgLyBkZWJvdW5jaW5nXG5cdCAqIGZ1bmN0aW9uYWxpdHkgYW5kIHdoZW4gZXhlY3V0ZWQgd2lsbCBsaW1pdCB0aGUgcmF0ZSBhdCB3aGljaCBgY2FsbGJhY2tgXG5cdCAqIGlzIGV4ZWN1dGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gd3JhcHBlciguLi5hcmd1bWVudHNfKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGxhc3RFeGVjO1xuXG5cdFx0aWYgKGNhbmNlbGxlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEV4ZWN1dGUgYGNhbGxiYWNrYCBhbmQgdXBkYXRlIHRoZSBgbGFzdEV4ZWNgIHRpbWVzdGFtcC5cblx0XHRmdW5jdGlvbiBleGVjKCkge1xuXHRcdFx0bGFzdEV4ZWMgPSBEYXRlLm5vdygpO1xuXHRcdFx0Y2FsbGJhY2suYXBwbHkoc2VsZiwgYXJndW1lbnRzXyk7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHQgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbikgdGhpcyBpcyB1c2VkIHRvIGNsZWFyIHRoZSBmbGFnXG5cdFx0ICogdG8gYWxsb3cgZnV0dXJlIGBjYWxsYmFja2AgZXhlY3V0aW9ucy5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBjbGVhcigpIHtcblx0XHRcdHRpbWVvdXRJRCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiAoIW5vTGVhZGluZyAmJiBkZWJvdW5jZU1vZGUgJiYgIXRpbWVvdXRJRCkge1xuXHRcdFx0Lypcblx0XHRcdCAqIFNpbmNlIGB3cmFwcGVyYCBpcyBiZWluZyBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZFxuXHRcdFx0ICogYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBleGVjdXRlIGBjYWxsYmFja2Bcblx0XHRcdCAqIGFuZCBub0xlYWRpbmcgIT0gdHJ1ZS5cblx0XHRcdCAqL1xuXHRcdFx0ZXhlYygpO1xuXHRcdH1cblxuXHRcdGNsZWFyRXhpc3RpbmdUaW1lb3V0KCk7XG5cblx0XHRpZiAoZGVib3VuY2VNb2RlID09PSB1bmRlZmluZWQgJiYgZWxhcHNlZCA+IGRlbGF5KSB7XG5cdFx0XHRpZiAobm9MZWFkaW5nKSB7XG5cdFx0XHRcdC8qXG5cdFx0XHRcdCAqIEluIHRocm90dGxlIG1vZGUgd2l0aCBub0xlYWRpbmcsIGlmIGBkZWxheWAgdGltZSBoYXNcblx0XHRcdFx0ICogYmVlbiBleGNlZWRlZCwgdXBkYXRlIGBsYXN0RXhlY2AgYW5kIHNjaGVkdWxlIGBjYWxsYmFja2Bcblx0XHRcdFx0ICogdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0bGFzdEV4ZWMgPSBEYXRlLm5vdygpO1xuXHRcdFx0XHRpZiAoIW5vVHJhaWxpbmcpIHtcblx0XHRcdFx0XHR0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGRlYm91bmNlTW9kZSA/IGNsZWFyIDogZXhlYywgZGVsYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvKlxuXHRcdFx0XHQgKiBJbiB0aHJvdHRsZSBtb2RlIHdpdGhvdXQgbm9MZWFkaW5nLCBpZiBgZGVsYXlgIHRpbWUgaGFzIGJlZW4gZXhjZWVkZWQsIGV4ZWN1dGVcblx0XHRcdFx0ICogYGNhbGxiYWNrYC5cblx0XHRcdFx0ICovXG5cdFx0XHRcdGV4ZWMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG5vVHJhaWxpbmcgIT09IHRydWUpIHtcblx0XHRcdC8qXG5cdFx0XHQgKiBJbiB0cmFpbGluZyB0aHJvdHRsZSBtb2RlLCBzaW5jZSBgZGVsYXlgIHRpbWUgaGFzIG5vdCBiZWVuXG5cdFx0XHQgKiBleGNlZWRlZCwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGBkZWxheWAgbXMgYWZ0ZXIgbW9zdFxuXHRcdFx0ICogcmVjZW50IGV4ZWN1dGlvbi5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZVxuXHRcdFx0ICogYWZ0ZXIgYGRlbGF5YCBtcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0b1xuXHRcdFx0ICogZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuXHRcdFx0ICovXG5cdFx0XHR0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRkZWJvdW5jZU1vZGUgPyBjbGVhciA6IGV4ZWMsXG5cdFx0XHRcdGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkID8gZGVsYXkgLSBlbGFwc2VkIDogZGVsYXlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0d3JhcHBlci5jYW5jZWwgPSBjYW5jZWw7XG5cblx0Ly8gUmV0dXJuIHRoZSB3cmFwcGVyIGZ1bmN0aW9uLlxuXHRyZXR1cm4gd3JhcHBlcjtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCAqL1xuXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi90aHJvdHRsZS5qcyc7XG5cbi8qKlxuICogRGVib3VuY2UgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24uIERlYm91bmNpbmcsIHVubGlrZSB0aHJvdHRsaW5nLFxuICogZ3VhcmFudGVlcyB0aGF0IGEgZnVuY3Rpb24gaXMgb25seSBleGVjdXRlZCBhIHNpbmdsZSB0aW1lLCBlaXRoZXIgYXQgdGhlXG4gKiB2ZXJ5IGJlZ2lubmluZyBvZiBhIHNlcmllcyBvZiBjYWxscywgb3IgYXQgdGhlIHZlcnkgZW5kLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSAtICAgICAgICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtICAgICAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgZGVib3VuY2VkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtICAgICAgICAgICBBbiBvYmplY3QgdG8gY29uZmlndXJlIG9wdGlvbnMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF0QmVnaW5dIC0gIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgYXRCZWdpbiBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGBkZWxheWAgbWlsbGlzZWNvbmRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC4gSWYgYXRCZWdpbiBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgYXQgdGhlIGZpcnN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbmV3LCBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkZWxheSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0Y29uc3QgeyBhdEJlZ2luID0gZmFsc2UgfSA9IG9wdGlvbnMgfHwge307XG5cdHJldHVybiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIHsgZGVib3VuY2VNb2RlOiBhdEJlZ2luICE9PSBmYWxzZSB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2Zvcm1zXCI7XHJcbmltcG9ydCBcIi4vbW9kYWxzXCI7XHJcbmltcG9ydCBcIi4vc2Nyb2xsc1wiO1xyXG5pbXBvcnQgXCIuL2FjY29yZGlvblwiO1xyXG5cclxuY29uc3QgcmVtb3ZlRm9jdXNhYmxlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnJlbW92ZShcInBhZ2UtZm9jdXNhYmxlXCIpO1xyXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVGb2N1c2FibGVMaXN0ZW5lcik7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gIFwia2V5dXBcIixcclxuICBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwicGFnZS1mb2N1c2FibGVcIik7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVGb2N1c2FibGVMaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBmYWxzZVxyXG4pO1xyXG4iXSwibmFtZXMiOlsiZmFjdG9yeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ3aW5kb3ciLCJpbnRsVGVsSW5wdXQiLCJ1bmRlZmluZWQiLCJhbGxDb3VudHJpZXMiLCJpIiwibGVuZ3RoIiwiYyIsIm5hbWUiLCJpc28yIiwiZGlhbENvZGUiLCJwcmlvcml0eSIsImFyZWFDb2RlcyIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJPYmplY3QiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInB1c2giLCJhcHBseSIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJmb3JFYWNoIiwia2V5IiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwidmFsdWUiLCJfdG9Qcm9wZXJ0eUtleSIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJhcmciLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJyZXMiLCJjYWxsIiwiTnVtYmVyIiwiaW50bFRlbElucHV0R2xvYmFscyIsImdldEluc3RhbmNlIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJpbnN0YW5jZXMiLCJkb2N1bWVudFJlYWR5IiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwiZGVmYXVsdHMiLCJhbGxvd0Ryb3Bkb3duIiwiYXV0b0luc2VydERpYWxDb2RlIiwiYXV0b1BsYWNlaG9sZGVyIiwiY3VzdG9tQ29udGFpbmVyIiwiY3VzdG9tUGxhY2Vob2xkZXIiLCJkcm9wZG93bkNvbnRhaW5lciIsImV4Y2x1ZGVDb3VudHJpZXMiLCJmb3JtYXRPbkRpc3BsYXkiLCJnZW9JcExvb2t1cCIsImhpZGRlbklucHV0IiwiaW5pdGlhbENvdW50cnkiLCJsb2NhbGl6ZWRDb3VudHJpZXMiLCJuYXRpb25hbE1vZGUiLCJvbmx5Q291bnRyaWVzIiwicGxhY2Vob2xkZXJOdW1iZXJUeXBlIiwicHJlZmVycmVkQ291bnRyaWVzIiwic2VwYXJhdGVEaWFsQ29kZSIsInNob3dGbGFncyIsInV0aWxzU2NyaXB0IiwicmVnaW9ubGVzc05hbnBOdW1iZXJzIiwiZm9yRWFjaFByb3AiLCJjYWxsYmFjayIsImZvckVhY2hJbnN0YW5jZSIsIm1ldGhvZCIsIkl0aSIsIm9wdGlvbnMiLCJfdGhpcyIsInRlbElucHV0IiwiYWN0aXZlSXRlbSIsImhpZ2hsaWdodGVkSXRlbSIsImN1c3RvbU9wdGlvbnMiLCJoYXNPd25Qcm9wZXJ0eSIsImhhZEluaXRpYWxQbGFjZWhvbGRlciIsIkJvb2xlYW4iLCJfaW5pdCIsIl90aGlzMiIsImZvcmNlU2hvd0ZsYWdzIiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsImlzUlRMIiwiY2xvc2VzdCIsIlByb21pc2UiLCJhdXRvQ291bnRyeVByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzb2x2ZUF1dG9Db3VudHJ5UHJvbWlzZSIsInJlamVjdEF1dG9Db3VudHJ5UHJvbWlzZSIsInV0aWxzU2NyaXB0UHJvbWlzZSIsInJlc29sdmVVdGlsc1NjcmlwdFByb21pc2UiLCJyZWplY3RVdGlsc1NjcmlwdFByb21pc2UiLCJwcm9taXNlIiwiYWxsIiwic2VsZWN0ZWRDb3VudHJ5RGF0YSIsIl9wcm9jZXNzQ291bnRyeURhdGEiLCJfZ2VuZXJhdGVNYXJrdXAiLCJfc2V0SW5pdGlhbFN0YXRlIiwiX2luaXRMaXN0ZW5lcnMiLCJfaW5pdFJlcXVlc3RzIiwiX3Byb2Nlc3NBbGxDb3VudHJpZXMiLCJfcHJvY2Vzc0NvdW50cnlDb2RlcyIsIl9wcm9jZXNzUHJlZmVycmVkQ291bnRyaWVzIiwiX3RyYW5zbGF0ZUNvdW50cmllc0J5TG9jYWxlIiwiY291bnRyaWVzIiwic29ydCIsIl9jb3VudHJ5TmFtZVNvcnQiLCJfYWRkQ291bnRyeUNvZGUiLCJjb3VudHJ5Q29kZSIsImNvdW50cnlDb2RlTWF4TGVuIiwiY291bnRyeUNvZGVzIiwiaW5kZXgiLCJsb3dlckNhc2VPbmx5Q291bnRyaWVzIiwibWFwIiwiY291bnRyeSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImxvd2VyQ2FzZUV4Y2x1ZGVDb3VudHJpZXMiLCJpc28iLCJhIiwiYiIsImRpYWxDb2RlcyIsIl9pIiwiX2MiLCJyb290Q291bnRyeUNvZGUiLCJqIiwiYXJlYUNvZGUiLCJrIiwicGFydGlhbERpYWxDb2RlIiwic3Vic3RyIiwiY291bnRyeURhdGEiLCJfZ2V0Q291bnRyeURhdGEiLCJfY3JlYXRlRWwiLCJhdHRycyIsImNvbnRhaW5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiaGFzQXR0cmlidXRlIiwiZm9ybSIsIl90aGlzJG9wdGlvbnMiLCJwYXJlbnRDbGFzcyIsImNvbmNhdCIsIndyYXBwZXIiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwic2hvd0ZsYWdzQ29udGFpbmVyIiwiZmxhZ3NDb250YWluZXIiLCJzZWxlY3RlZEZsYWciLCJyb2xlIiwic2VsZWN0ZWRGbGFnSW5uZXIiLCJkaXNhYmxlZCIsInNlbGVjdGVkRGlhbENvZGUiLCJkcm9wZG93bkFycm93IiwiY291bnRyeUxpc3QiLCJfYXBwZW5kTGlzdEl0ZW1zIiwiZHJvcGRvd24iLCJoaWRkZW5JbnB1dE5hbWUiLCJsYXN0SW5kZXhPZiIsInR5cGUiLCJjbGFzc05hbWUiLCJwcmVmZXJyZWQiLCJ0bXAiLCJpZFN1ZmZpeCIsImluc2VydEFkamFjZW50SFRNTCIsImF0dHJpYnV0ZVZhbHVlIiwiaW5wdXRWYWx1ZSIsInVzZUF0dHJpYnV0ZSIsImNoYXJBdCIsInZhbCIsIl9nZXREaWFsQ29kZSIsImlzUmVnaW9ubGVzc05hbnAiLCJfaXNSZWdpb25sZXNzTmFucCIsIl90aGlzJG9wdGlvbnMyIiwiX3VwZGF0ZUZsYWdGcm9tTnVtYmVyIiwiX3NldEZsYWciLCJkZWZhdWx0Q291bnRyeSIsIl91cGRhdGVWYWxGcm9tTnVtYmVyIiwiX2luaXRLZXlMaXN0ZW5lcnMiLCJfaW5pdEJsdXJMaXN0ZW5lcnMiLCJfaW5pdERyb3Bkb3duTGlzdGVuZXJzIiwiX2luaXRIaWRkZW5JbnB1dExpc3RlbmVyIiwiX3RoaXMzIiwiX2hhbmRsZUhpZGRlbklucHV0U3VibWl0IiwiZ2V0TnVtYmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9nZXRDbG9zZXN0TGFiZWwiLCJ0YWdOYW1lIiwiX3RoaXM0IiwiX2hhbmRsZUxhYmVsQ2xpY2siLCJlIiwiY29udGFpbnMiLCJmb2N1cyIsInByZXZlbnREZWZhdWx0IiwibGFiZWwiLCJfaGFuZGxlQ2xpY2tTZWxlY3RlZEZsYWciLCJyZWFkT25seSIsIl9zaG93RHJvcGRvd24iLCJfaGFuZGxlRmxhZ3NDb250YWluZXJLZXlkb3duIiwiaXNEcm9wZG93bkhpZGRlbiIsInN0b3BQcm9wYWdhdGlvbiIsIl9jbG9zZURyb3Bkb3duIiwiX3RoaXM1IiwiaW50bFRlbElucHV0VXRpbHMiLCJsb2FkVXRpbHMiLCJfbG9hZEF1dG9Db3VudHJ5IiwiYXV0b0NvdW50cnkiLCJoYW5kbGVBdXRvQ291bnRyeSIsInN0YXJ0ZWRMb2FkaW5nQXV0b0NvdW50cnkiLCJzZXRUaW1lb3V0IiwiX3RoaXM2IiwiX2hhbmRsZUtleXVwRXZlbnQiLCJfdHJpZ2dlckNvdW50cnlDaGFuZ2UiLCJfaGFuZGxlQ2xpcGJvYXJkRXZlbnQiLCJfY2FwIiwibnVtYmVyIiwibWF4IiwiX3RoaXM3IiwiX2hhbmRsZVN1Ym1pdE9yQmx1ckV2ZW50IiwiX3JlbW92ZUVtcHR5RGlhbENvZGUiLCJudW1lcmljIiwiX2dldE51bWVyaWMiLCJzIiwicmVwbGFjZSIsIl90cmlnZ2VyIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwicmVtb3ZlIiwiX3NldERyb3Bkb3duUG9zaXRpb24iLCJfaGlnaGxpZ2h0TGlzdEl0ZW0iLCJfc2Nyb2xsVG8iLCJfYmluZERyb3Bkb3duTGlzdGVuZXJzIiwiX3RvZ2dsZUNsYXNzIiwic2hvdWxkSGF2ZUNsYXNzIiwiX3RoaXM4IiwicG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93VG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpbnB1dFRvcCIsInRvcCIsImRyb3Bkb3duSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZHJvcGRvd25GaXRzQmVsb3ciLCJpbm5lckhlaWdodCIsImRyb3Bkb3duRml0c0Fib3ZlIiwiZXh0cmFUb3AiLCJzdHlsZSIsImxlZnQiLCJzY3JvbGxMZWZ0IiwiX2hhbmRsZVdpbmRvd1Njcm9sbCIsIl9nZXRDbG9zZXN0TGlzdEl0ZW0iLCJfdGhpczkiLCJfaGFuZGxlTW91c2VvdmVyQ291bnRyeUxpc3QiLCJsaXN0SXRlbSIsIl9oYW5kbGVDbGlja0NvdW50cnlMaXN0IiwiX3NlbGVjdExpc3RJdGVtIiwiaXNPcGVuaW5nIiwiX2hhbmRsZUNsaWNrT2ZmVG9DbG9zZSIsInF1ZXJ5IiwicXVlcnlUaW1lciIsIl9oYW5kbGVLZXlkb3duT25Ecm9wZG93biIsIl9oYW5kbGVVcERvd25LZXkiLCJfaGFuZGxlRW50ZXJLZXkiLCJjbGVhclRpbWVvdXQiLCJfc2VhcmNoRm9yQ291bnRyeSIsIm5leHQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiX3N0YXJ0c1dpdGgiLCJxdWVyeVNlbGVjdG9yIiwib3JpZ2luYWxOdW1iZXIiLCJ1c2VOYXRpb25hbCIsIl9pbnRsVGVsSW5wdXRVdGlscyRudSIsIm51bWJlckZvcm1hdCIsIk5BVElPTkFMIiwiSU5URVJOQVRJT05BTCIsImZvcm1hdCIsImZvcm1hdE51bWJlciIsIl9iZWZvcmVTZXROdW1iZXIiLCJpc05hbnAiLCJhbHJlYWR5U2VsZWN0ZWQiLCJpc1JlZ2lvbmxlc3NOYW5wTnVtYmVyIiwic2hvdWxkRm9jdXMiLCJwcmV2SXRlbSIsImlnbm9yZU9ubHlDb3VudHJpZXNPcHRpb24iLCJhbGxvd0ZhaWwiLCJFcnJvciIsIl90aGlzJG9wdGlvbnMzIiwicHJldkNvdW50cnkiLCJfc2V0U2VsZWN0ZWRDb3VudHJ5RmxhZ1RpdGxlQXR0cmlidXRlIiwiaW5uZXJIVE1MIiwic2VsZWN0ZWRGbGFnV2lkdGgiLCJvZmZzZXRXaWR0aCIsIl9nZXRIaWRkZW5TZWxlY3RlZEZsYWdXaWR0aCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwiX3VwZGF0ZVBsYWNlaG9sZGVyIiwibmV4dEl0ZW0iLCJ0aXRsZSIsImNvbnRhaW5lckNsb25lIiwiY2xvbmVOb2RlIiwidmlzaWJpbGl0eSIsImZsYWdzQ29udGFpbmVyQ2xvbmUiLCJzZWxlY3RlZEZsYWdDbG9uZSIsIndpZHRoIiwicmVtb3ZlQ2hpbGQiLCJzaG91bGRTZXRQbGFjZWhvbGRlciIsIm51bWJlclR5cGUiLCJwbGFjZWhvbGRlciIsImdldEV4YW1wbGVOdW1iZXIiLCJmbGFnQ2hhbmdlZCIsIl91cGRhdGVEaWFsQ29kZSIsImxlbiIsInNldFNlbGVjdGlvblJhbmdlIiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJtaWRkbGUiLCJjb250YWluZXJIZWlnaHQiLCJjb250YWluZXJUb3AiLCJjb250YWluZXJCb3R0b20iLCJlbGVtZW50SGVpZ2h0IiwiZWxlbWVudFRvcCIsImVsZW1lbnRCb3R0b20iLCJuZXdTY3JvbGxUb3AiLCJtaWRkbGVPZmZzZXQiLCJoZWlnaHREaWZmZXJlbmNlIiwibmV3RGlhbENvZGVCYXJlIiwiaW5wdXRWYWwiLCJuZXdEaWFsQ29kZSIsIm5ld051bWJlciIsInByZXZEaWFsQ29kZSIsImluY2x1ZGVBcmVhQ29kZSIsIm51bWVyaWNDaGFycyIsImlzTmFOIiwicGFyc2VJbnQiLCJfZ2V0RnVsbE51bWJlciIsInRyaW0iLCJwcmVmaXgiLCJudW1lcmljVmFsIiwic3RhcnQiLCJzZXRDb3VudHJ5IiwiaGFuZGxlVXRpbHMiLCJkZXN0cm95IiwiZ2V0RXh0ZW5zaW9uIiwiZ2V0TnVtYmVyVHlwZSIsImdldFNlbGVjdGVkQ291bnRyeURhdGEiLCJnZXRWYWxpZGF0aW9uRXJyb3IiLCJpc1ZhbGlkTnVtYmVyIiwiaXNQb3NzaWJsZU51bWJlciIsIm9yaWdpbmFsQ291bnRyeUNvZGUiLCJzZXROdW1iZXIiLCJzZXRQbGFjZWhvbGRlck51bWJlclR5cGUiLCJnZXRDb3VudHJ5RGF0YSIsImluamVjdFNjcmlwdCIsInBhdGgiLCJoYW5kbGVTdWNjZXNzIiwiaGFuZGxlRmFpbHVyZSIsInNjcmlwdCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJhc3luYyIsInNyYyIsInN0YXJ0ZWRMb2FkaW5nVXRpbHNTY3JpcHQiLCJ2ZXJzaW9uIiwiaXRpIiwicmVxdWlyZSIsImdsb2JhbCIsImdsb2JhbFRoaXMiLCJzZWxmIiwic3VwcG9ydCIsInNlYXJjaFBhcmFtcyIsIml0ZXJhYmxlIiwiYmxvYiIsIkJsb2IiLCJmb3JtRGF0YSIsImFycmF5QnVmZmVyIiwiaXNEYXRhVmlldyIsIkRhdGFWaWV3IiwiaXNQcm90b3R5cGVPZiIsInZpZXdDbGFzc2VzIiwiaXNBcnJheUJ1ZmZlclZpZXciLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsInRvU3RyaW5nIiwibm9ybWFsaXplTmFtZSIsIm5vcm1hbGl6ZVZhbHVlIiwiaXRlcmF0b3JGb3IiLCJpdGVtcyIsIml0ZXJhdG9yIiwic2hpZnQiLCJkb25lIiwiSGVhZGVycyIsImhlYWRlcnMiLCJhcHBlbmQiLCJBcnJheSIsImlzQXJyYXkiLCJoZWFkZXIiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkVmFsdWUiLCJnZXQiLCJoYXMiLCJzZXQiLCJ0aGlzQXJnIiwidmFsdWVzIiwiZW50cmllcyIsImNvbnN1bWVkIiwiYm9keVVzZWQiLCJmaWxlUmVhZGVyUmVhZHkiLCJyZWFkZXIiLCJyZXN1bHQiLCJlcnJvciIsInJlYWRCbG9iQXNBcnJheUJ1ZmZlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInJlYWRCbG9iQXNUZXh0IiwicmVhZEFzVGV4dCIsInJlYWRBcnJheUJ1ZmZlckFzVGV4dCIsImJ1ZiIsInZpZXciLCJVaW50OEFycmF5IiwiY2hhcnMiLCJmcm9tQ2hhckNvZGUiLCJqb2luIiwiYnVmZmVyQ2xvbmUiLCJzbGljZSIsImJ5dGVMZW5ndGgiLCJidWZmZXIiLCJCb2R5IiwiX2luaXRCb2R5IiwiX2JvZHlJbml0IiwiX2JvZHlUZXh0IiwiX2JvZHlCbG9iIiwiRm9ybURhdGEiLCJfYm9keUZvcm1EYXRhIiwiVVJMU2VhcmNoUGFyYW1zIiwiX2JvZHlBcnJheUJ1ZmZlciIsInJlamVjdGVkIiwiaXNDb25zdW1lZCIsImJ5dGVPZmZzZXQiLCJ0aGVuIiwidGV4dCIsImRlY29kZSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJtZXRob2RzIiwibm9ybWFsaXplTWV0aG9kIiwidXBjYXNlZCIsInRvVXBwZXJDYXNlIiwiUmVxdWVzdCIsInVybCIsImNyZWRlbnRpYWxzIiwibW9kZSIsInNpZ25hbCIsInJlZmVycmVyIiwiY2FjaGUiLCJyZVBhcmFtU2VhcmNoIiwiRGF0ZSIsImdldFRpbWUiLCJyZVF1ZXJ5U3RyaW5nIiwiY2xvbmUiLCJzcGxpdCIsImJ5dGVzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VIZWFkZXJzIiwicmF3SGVhZGVycyIsInByZVByb2Nlc3NlZEhlYWRlcnMiLCJsaW5lIiwicGFydHMiLCJSZXNwb25zZSIsImJvZHlJbml0Iiwic3RhdHVzIiwib2siLCJzdGF0dXNUZXh0IiwicmVzcG9uc2UiLCJyZWRpcmVjdFN0YXR1c2VzIiwicmVkaXJlY3QiLCJSYW5nZUVycm9yIiwibG9jYXRpb24iLCJET01FeGNlcHRpb24iLCJlcnIiLCJtZXNzYWdlIiwic3RhY2siLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImZldGNoIiwiaW5pdCIsInJlcXVlc3QiLCJhYm9ydGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJhYm9ydFhociIsImFib3J0IiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwicmVzcG9uc2VVUkwiLCJyZXNwb25zZVRleHQiLCJvbnRpbWVvdXQiLCJvbmFib3J0IiwiZml4VXJsIiwiaHJlZiIsIm9wZW4iLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwic2VuZCIsInBvbHlmaWxsIiwiYWNjb3JkaW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY2NvcmRpb24iLCJyb3dzIiwicm93IiwiY29udGVudCIsInRvZ2dsZSIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImlucHV0Q2xhc3NlcyIsInBob25lSW5wdXRzIiwicnUiLCJreiIsInVhIiwiYnkiLCIkIiwiaW5wdXRtYXNrcyIsImlucHV0bWFzayIsIm1hc2tPcHRzIiwiZXh0ZW5kIiwibGlzdCIsImxpc3RDb3VudHJpZXMiLCJtYXNrc1NvcnQiLCJtYXNrc0xvYWQiLCJpbnB1dG1hc2tQYXJhbXMiLCJwaG9uZUNvZGVzIiwiZGVmaW5pdGlvbnMiLCJ2YWxpZGF0b3IiLCJjYXJkaW5hbGl0eSIsInNob3dNYXNrT25Ib3ZlciIsImF1dG9Vbm1hc2siLCJjbGVhck1hc2tPbkxvc3RGb2N1cyIsIm9uVW5NYXNrIiwibWFza2VkVmFsdWUiLCJ1bm1hc2tlZFZhbHVlIiwibWF0Y2giLCJsaXN0S2V5IiwibWFza0lzSW5pdCIsIkV2ZW50IiwialF1ZXJ5IiwiYWRkTWV0aG9kIiwib3B0aW9uYWwiLCJpbWFzayIsIm1hc2tlZCIsImlzQ29tcGxldGUiLCJzdWJtaXRGb3JtIiwiZW1haWxJbnB1dHMiLCJzdWNjZXNzIiwicmVzZXQiLCJzaG93RXJyb3JzIiwiYWN0aW9uIiwiYWRkQ2xhc3MiLCJyZXNldEZvcm0iLCJpbmRpdmlkdWFsRm9ybVZhbGlkYXRvciIsInZhbGlkYXRlIiwicnVsZXMiLCJyZXF1aXJlZCIsInBob25lIiwiYXBwcm92ZSIsIm1lc3NhZ2VzIiwiZXJyb3JQbGFjZW1lbnQiLCJpbnNlcnRBZnRlciIsInBhcmVudCIsInN1Ym1pdEhhbmRsZXIiLCJmYXFGb3JtVmFsaWRhdG9yIiwiZW1haWwiLCJsYXhFbWFpbCIsImlzVmlzaWJsZSIsImVsZW0iLCJnZXRDbGllbnRSZWN0cyIsIm1vZGFsVG9nZ2xlcyIsIm1vZGFsIiwiZGF0YXNldCIsIm1vZGFsVG9nZ2xlIiwiY2xvc2UiLCJvdXRzaWRlQ2xpY2tMaXN0ZW5lciIsImV2ZW50IiwiaGlkZSIsInJlbW92ZUNsaWNrTGlzdGVuZXIiLCJzaG93IiwidGhyb3R0bGUiLCJzY3JvbGx1cCIsInNjcm9sbEhhbmRsZXIiLCJzY3JvbGxZIiwic2Nyb2xscyIsInNjcm9sbCIsIm9mZnNldCIsIm9mZnNldFRvcCIsImFuaW1hdGUiLCJkZWxheSIsIl9yZWYkbm9UcmFpbGluZyIsIm5vVHJhaWxpbmciLCJfcmVmJG5vTGVhZGluZyIsIm5vTGVhZGluZyIsIl9yZWYkZGVib3VuY2VNb2RlIiwiZGVib3VuY2VNb2RlIiwidGltZW91dElEIiwiY2FuY2VsbGVkIiwibGFzdEV4ZWMiLCJjbGVhckV4aXN0aW5nVGltZW91dCIsImNhbmNlbCIsIl9yZWYyJHVwY29taW5nT25seSIsInVwY29taW5nT25seSIsImFyZ3VtZW50c18iLCJlbGFwc2VkIiwibm93IiwiZXhlYyIsImNsZWFyIiwiX3JlZiRhdEJlZ2luIiwiYXRCZWdpbiIsInJlbW92ZUZvY3VzYWJsZUxpc3RlbmVyIiwia2V5Q29kZSJdLCJzb3VyY2VSb290IjoiIn0=
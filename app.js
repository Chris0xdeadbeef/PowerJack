"use strict";

var _slicedToArray = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
  };
})();

var _extends =
  Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];
    return arr2;
  } else {
    return Array.from(arr);
  }
}

var _React = React;
var useState = _React.useState;
var useMemo = _React.useMemo;
var useEffect = _React.useEffect;

var PowerupManager = function PowerupManager() {
  var _useState = useState(function () {
    var saved = localStorage.getItem("blackjackPowerups");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Example - Double Down",
            effect: "Double the bet and draw a card",
            target: "Me",
            timing: "Before hit",
            active: true,
            favorite: false,
          },
        ];
  });

  var _useState2 = _slicedToArray(_useState, 2);

  var powerups = _useState2[0];
  var setPowerups = _useState2[1];

  var _useState3 = useState("");

  var _useState32 = _slicedToArray(_useState3, 2);

  var searchTerm = _useState32[0];
  var setSearchTerm = _useState32[1];

  var _useState4 = useState(["Me", "Other player", "Dealer"]);

  var _useState42 = _slicedToArray(_useState4, 2);

  var filterTargets = _useState42[0];
  var setFilterTargets = _useState42[1];

  var _useState5 = useState([
    "My turn",
    "Before turn",
    "Before dealer turn",
    "During dealer turn",
    "Before hit",
    "Other player turn",
    "If I have 21",
    "If busted",
    "Unusable if busted",
  ]);

  var _useState52 = _slicedToArray(_useState5, 2);

  var filterTimings = _useState52[0];
  var setFilterTimings = _useState52[1];

  var _useState6 = useState(false);

  var _useState62 = _slicedToArray(_useState6, 2);

  var showAddForm = _useState62[0];
  var setShowAddForm = _useState62[1];

  var _useState7 = useState({
    name: "",
    effect: "",
    target: ["Me"],
    timing: ["My turn"],
  });

  var _useState72 = _slicedToArray(_useState7, 2);

  var newPowerup = _useState72[0];
  var setNewPowerup = _useState72[1];

  var _useState8 = useState(null);

  var _useState82 = _slicedToArray(_useState8, 2);

  var editingId = _useState82[0];
  var setEditingId = _useState82[1];

  var _useState9 = useState({
    name: "",
    effect: "",
    target: ["Me"],
    timing: ["My turn"],
  });

  var _useState92 = _slicedToArray(_useState9, 2);

  var editedPowerup = _useState92[0];
  var setEditedPowerup = _useState92[1];

  var _useState10 = useState(function () {
    return localStorage.getItem("language") || "fr";
  });

  var _useState102 = _slicedToArray(_useState10, 2);

  var language = _useState102[0];
  var setLanguage = _useState102[1];

  var _useState11 = useState(false);

  var _useState112 = _slicedToArray(_useState11, 2);

  var isLanguageMenuOpen = _useState112[0];
  var setIsLanguageMenuOpen = _useState112[1];

  var allTargets = ["Me", "Other player", "Dealer"];
  var allTimings = [
    "My turn",
    "Before turn",
    "Before dealer turn",
    "During dealer turn",
    "Before hit",
    "Other player turn",
    "If I have 21",
    "If busted",
    "Unusable if busted",
  ];

  useEffect(
    function () {
      localStorage.setItem("blackjackPowerups", JSON.stringify(powerups));
    },
    [powerups]
  );

  useEffect(
    function () {
      localStorage.setItem("language", language);
    },
    [language]
  );

  var t = function t(key) {
    return getTranslation(language, key);
  };

  var getTargetLabel = function getTargetLabel(target) {
    var targetMap = {
      Me: "targetMe",
      "Other player": "targetOtherPlayer",
      Dealer: "targetDealer",
    };
    return t(targetMap[target] || target);
  };

  var getTimingLabel = function getTimingLabel(timing) {
    var timingMap = {
      "My turn": "timingMyTurn",
      "Before turn": "timingBeforeTurn",
      "Before dealer turn": "timingBeforeDealerTurn",
      "During dealer turn": "timingDuringDealerTurn",
      "Before hit": "timingBeforeHit",
      "Other player turn": "timingOtherPlayerTurn",
      "If I have 21": "timingIfI21",
      "If busted": "timingIfBusted",
      "Unusable if busted": "timingUnusableIfBusted",
    };
    return t(timingMap[timing] || timing);
  };

  var addPowerup = function addPowerup() {
    if (
      newPowerup.name.trim() &&
      newPowerup.target.length > 0 &&
      newPowerup.timing.length > 0
    ) {
      setPowerups(
        [].concat(_toConsumableArray(powerups), [
          _extends({}, newPowerup, {
            id: Date.now(),
            active: true,
          }),
        ])
      );
      setNewPowerup({
        name: "",
        effect: "",
        target: ["Me"],
        timing: ["My turn"],
      });
      setShowAddForm(false);
    }
  };

  var deletePowerup = function deletePowerup(id) {
    if (confirm(t("deleteConfirm"))) {
      setPowerups(
        powerups.filter(function (p) {
          return p.id !== id;
        })
      );
    }
  };

  var togglePowerup = function togglePowerup(id) {
    setPowerups(
      powerups.map(function (p) {
        return p.id === id ? _extends({}, p, { active: !p.active }) : p;
      })
    );
  };

  var toggleFavorite = function toggleFavorite(id) {
    setPowerups(
      powerups.map(function (p) {
        return p.id === id ? _extends({}, p, { favorite: !p.favorite }) : p;
      })
    );
  };

  var toggleAllPowerups = function toggleAllPowerups(status) {
    setPowerups(
      powerups.map(function (p) {
        return _extends({}, p, { active: status });
      })
    );
  };

  var filteredPowerups = useMemo(
    function () {
      return powerups.filter(function (p) {
        var matchSearch =
          (p.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
          (p.effect || "").toLowerCase().includes(searchTerm.toLowerCase());
        var pTargets = Array.isArray(p.target) ? p.target : [p.target];
        var matchTarget =
          filterTargets.length === 0 ||
          pTargets.some(function (c) {
            return filterTargets.includes(c);
          });
        var pTimings = Array.isArray(p.timing) ? p.timing : [p.timing];
        var matchTiming =
          filterTimings.length === 0 ||
          pTimings.some(function (m) {
            return filterTimings.includes(m);
          });
        return matchSearch && matchTarget && matchTiming;
      });
    },
    [powerups, searchTerm, filterTargets, filterTimings]
  );

  var importFromJSON = function importFromJSON(e) {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (event) {
        try {
          var imported = JSON.parse(event.target.result);
          if (
            confirm(
              t("importConfirm") +
                " " +
                imported.length +
                " " +
                t("importReplace")
            )
          ) {
            setPowerups(imported);
          }
        } catch (error) {
          alert(t("importError"));
        }
      };
      reader.readAsText(file);
    }
  };

  var exportToJSON = function exportToJSON() {
    var dataStr = JSON.stringify(powerups, null, 2);
    var blob = new Blob([dataStr], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "powerups_backup.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  var startEdit = function startEdit(p) {
    setEditingId(p.id);
    var pTiming = Array.isArray(p.timing) ? p.timing : [p.timing];
    setEditedPowerup({
      name: p.name,
      effect: p.effect,
      target: Array.isArray(p.target) ? p.target : [p.target],
      timing: pTiming,
    });
  };

  var saveEdit = function saveEdit() {
    setPowerups(
      powerups.map(function (p) {
        return p.id === editingId ? _extends({}, p, editedPowerup) : p;
      })
    );
    setEditingId(null);
    setEditedPowerup({
      name: "",
      effect: "",
      target: "Me",
      timing: "My turn",
    });
  };

  var cancelEdit = function cancelEdit() {
    setEditingId(null);
    setEditedPowerup({
      name: "",
      effect: "",
      target: ["Me"],
      timing: ["My turn"],
    });
  };

  var toggleTargetFilter = function toggleTargetFilter(target) {
    setFilterTargets(function (prev) {
      return prev.includes(target)
        ? prev.filter(function (c) {
            return c !== target;
          })
        : [].concat(_toConsumableArray(prev), [target]);
    });
  };

  var toggleTargetNew = function toggleTargetNew(target) {
    setNewPowerup(function (prev) {
      return _extends({}, prev, {
        target: prev.target.includes(target)
          ? prev.target.filter(function (c) {
              return c !== target;
            })
          : [].concat(_toConsumableArray(prev.target), [target]),
      });
    });
  };

  var toggleTargetEdit = function toggleTargetEdit(target) {
    setEditedPowerup(function (prev) {
      return _extends({}, prev, {
        target: prev.target.includes(target)
          ? prev.target.filter(function (c) {
              return c !== target;
            })
          : [].concat(_toConsumableArray(prev.target), [target]),
      });
    });
  };

  var toggleTimingFilter = function toggleTimingFilter(timing) {
    setFilterTimings(function (prev) {
      return prev.includes(timing)
        ? prev.filter(function (m) {
            return m !== timing;
          })
        : [].concat(_toConsumableArray(prev), [timing]);
    });
  };

  var toggleTimingNew = function toggleTimingNew(timing) {
    setNewPowerup(function (prev) {
      return _extends({}, prev, {
        timing: prev.timing.includes(timing)
          ? prev.timing.filter(function (m) {
              return m !== timing;
            })
          : [].concat(_toConsumableArray(prev.timing), [timing]),
      });
    });
  };

  var toggleTimingEdit = function toggleTimingEdit(timing) {
    setEditedPowerup(function (prev) {
      return _extends({}, prev, {
        timing: prev.timing.includes(timing)
          ? prev.timing.filter(function (m) {
              return m !== timing;
            })
          : [].concat(_toConsumableArray(prev.timing), [timing]),
      });
    });
  };

  var clearAllData = function clearAllData() {
    if (confirm(t("deleteAllWarning"))) {
      if (confirm(t("deleteAllConfirm"))) {
        setPowerups([]);
        localStorage.removeItem("blackjackPowerups");
      }
    }
  };

  var favorites = powerups.filter(function (p) {
    return p.favorite;
  });

  return React.createElement(
    "div",
    {
      className:
        "min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black p-4",
    },
    React.createElement(
      "div",
      { className: "max-w-6xl mx-auto" },
      favorites.length > 0 &&
        React.createElement(
          "div",
          {
            className:
              "bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-6 border border-yellow-500/50",
          },
          React.createElement(
            "h2",
            { className: "text-2xl font-bold text-yellow-400 mb-4" },
            t("favorites")
          ),
          React.createElement(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-4 gap-4" },
            allTargets.map(function (target) {
              var favoritesByTarget = favorites.filter(function (p) {
                var pTargets = Array.isArray(p.target) ? p.target : [p.target];
                return pTargets.includes(target);
              });
              return React.createElement(
                "div",
                { key: target },
                React.createElement(
                  "h3",
                  {
                    className:
                      "text-lg font-bold text-yellow-300 mb-3 pb-2 border-b border-yellow-500/30",
                  },
                  getTargetLabel(target)
                ),
                favoritesByTarget.length > 0
                  ? React.createElement(
                      "div",
                      { className: "space-y-2" },
                      favoritesByTarget.map(function (p) {
                        return React.createElement(
                          "div",
                          {
                            key: p.id,
                            className:
                              "bg-black/60 border border-yellow-500/30 rounded-lg p-3",
                          },
                          React.createElement(
                            "p",
                            {
                              className:
                                "text-yellow-400 font-semibold text-sm",
                            },
                            p.name
                          ),
                          React.createElement(
                            "p",
                            { className: "text-green-200 text-xs mt-1" },
                            p.effect
                          )
                        );
                      })
                    )
                  : React.createElement(
                      "p",
                      { className: "text-gray-400 text-sm italic" },
                      t("noFavorites")
                    )
              );
            })
          )
        ),
      React.createElement(
        "div",
        {
          className:
            "bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-4 mb-6 border border-green-500/30",
        },
        React.createElement(
          "div",
          { className: "mb-4 flex gap-2 items-end" },
          React.createElement("input", {
            type: "text",
            placeholder: t("searchPlaceholder"),
            value: searchTerm,
            onChange: function (e) {
              return setSearchTerm(e.target.value);
            },
            className:
              "flex-1 px-4 py-2 bg-gray-900/60 border border-green-500/40 rounded-lg text-white placeholder-green-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500",
          }),
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement(
              "button",
              {
                onClick: function () {
                  return setIsLanguageMenuOpen(!isLanguageMenuOpen);
                },
                className:
                  "px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg transition-all font-bold text-lg",
                title: "Change language",
              },
              language.toUpperCase()
            ),
            isLanguageMenuOpen &&
              React.createElement(
                "div",
                {
                  className:
                    "absolute top-12 right-0 bg-black/90 border border-yellow-500/50 rounded-lg shadow-xl overflow-hidden z-50",
                },
                React.createElement(
                  "button",
                  {
                    onClick: function () {
                      setLanguage("fr");
                      setIsLanguageMenuOpen(false);
                    },
                    className:
                      "w-full px-6 py-3 flex items-center gap-3 transition-all " +
                      (language === "fr"
                        ? "bg-yellow-600 text-white"
                        : "text-white hover:bg-gray-700"),
                  },
                  React.createElement(
                    "span",
                    { className: "font-semibold" },
                    "Français"
                  )
                ),
                React.createElement(
                  "button",
                  {
                    onClick: function () {
                      setLanguage("en");
                      setIsLanguageMenuOpen(false);
                    },
                    className:
                      "w-full px-6 py-3 flex items-center gap-3 transition-all border-t border-gray-700 " +
                      (language === "en"
                        ? "bg-yellow-600 text-white"
                        : "text-white hover:bg-gray-700"),
                  },
                  React.createElement(
                    "span",
                    { className: "font-semibold" },
                    "English"
                  )
                ),
                React.createElement(
                  "button",
                  {
                    onClick: function () {
                      setLanguage("de");
                      setIsLanguageMenuOpen(false);
                    },
                    className:
                      "w-full px-6 py-3 flex items-center gap-3 transition-all border-t border-gray-700 " +
                      (language === "de"
                        ? "bg-yellow-600 text-white"
                        : "text-white hover:bg-gray-700"),
                  },
                  React.createElement(
                    "span",
                    { className: "font-semibold" },
                    "Deutsch"
                  )
                )
              )
          )
        ),
        React.createElement(
          "div",
          { className: "flex flex-col gap-4" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "flex items-center justify-between mb-3" },
              React.createElement(
                "p",
                { className: "text-green-400 text-sm font-semibold" },
                t("targets")
              ),
              filterTargets.length < allTargets.length &&
                React.createElement(
                  "button",
                  {
                    onClick: function () {
                      return setFilterTargets(allTargets);
                    },
                    className:
                      "text-xs text-green-400 hover:text-green-300 font-semibold",
                  },
                  t("clearAll")
                )
            ),
            React.createElement(
              "div",
              { className: "flex flex-wrap gap-2" },
              allTargets.map(function (c) {
                return React.createElement(
                  "button",
                  {
                    key: c,
                    onClick: function () {
                      return toggleTargetFilter(c);
                    },
                    className:
                      "px-4 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer " +
                      (filterTargets.includes(c)
                        ? "bg-green-600 text-white shadow-lg"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"),
                  },
                  getTargetLabel(c)
                );
              })
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "flex items-center justify-between mb-3" },
              React.createElement(
                "p",
                { className: "text-green-400 text-sm font-semibold" },
                t("moments")
              ),
              filterTimings.length < allTimings.length &&
                React.createElement(
                  "button",
                  {
                    onClick: function () {
                      return setFilterTimings(allTimings);
                    },
                    className:
                      "text-xs text-green-400 hover:text-green-300 font-semibold",
                  },
                  t("clearAll")
                )
            ),
            React.createElement(
              "div",
              { className: "flex flex-wrap gap-2" },
              allTimings.map(function (m) {
                return React.createElement(
                  "button",
                  {
                    key: m,
                    onClick: function () {
                      return toggleTimingFilter(m);
                    },
                    className:
                      "px-4 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer " +
                      (filterTimings.includes(m)
                        ? "bg-purple-600 text-white shadow-lg"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"),
                  },
                  getTimingLabel(m)
                );
              })
            )
          )
        ),
        React.createElement(
          "div",
          { className: "flex flex-wrap gap-2 mt-4" },
          React.createElement(
            "button",
            {
              onClick: function () {
                return setShowAddForm(!showAddForm);
              },
              className:
                "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-lg",
            },
            t("addPowerup")
          ),
          React.createElement(
            "button",
            {
              onClick: function () {
                return toggleAllPowerups(true);
              },
              className:
                "px-4 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-all",
            },
            t("possessAll")
          ),
          React.createElement(
            "button",
            {
              onClick: function () {
                return toggleAllPowerups(false);
              },
              className:
                "px-4 py-2 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all",
            },
            t("possessNone")
          ),
          React.createElement(
            "button",
            {
              onClick: exportToJSON,
              className:
                "px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all",
            },
            t("saveJson")
          ),
          React.createElement(
            "label",
            {
              className:
                "px-4 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all cursor-pointer",
            },
            t("importJson"),
            React.createElement("input", {
              type: "file",
              accept: ".json",
              onChange: importFromJSON,
              className: "hidden",
            })
          ),
          React.createElement(
            "button",
            {
              onClick: clearAllData,
              className:
                "px-4 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-600 transition-all",
            },
            t("deleteAll")
          )
        )
      ),
      editingId &&
        React.createElement(
          "div",
          {
            className:
              "bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-6 border border-blue-500/50",
          },
          React.createElement(
            "h2",
            { className: "text-2xl font-bold text-blue-400 mb-4" },
            t("editPowerup")
          ),
          React.createElement(
            "div",
            { className: "space-y-4" },
            React.createElement("input", {
              type: "text",
              placeholder: t("powerupName"),
              value: editedPowerup.name,
              onChange: function (e) {
                return setEditedPowerup(
                  _extends({}, editedPowerup, {
                    name: e.target.value,
                  })
                );
              },
              className:
                "w-full px-4 py-2 bg-gray-900/60 border border-green-500/40 rounded-lg text-white placeholder-green-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500",
            }),
            React.createElement("input", {
              type: "text",
              placeholder: t("effect"),
              value: editedPowerup.effect,
              onChange: function (e) {
                return setEditedPowerup(
                  _extends({}, editedPowerup, {
                    effect: e.target.value,
                  })
                );
              },
              className:
                "w-full px-4 py-2 bg-gray-900/60 border border-green-500/40 rounded-lg text-white placeholder-green-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500",
            }),
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                { className: "text-blue-400 text-sm font-semibold mb-3" },
                t("targets")
              ),
              React.createElement(
                "div",
                { className: "flex flex-wrap gap-2" },
                allTargets.map(function (c) {
                  return React.createElement(
                    "button",
                    {
                      key: c,
                      onClick: function () {
                        return toggleTargetEdit(c);
                      },
                      className:
                        "px-4 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer " +
                        (editedPowerup.target.includes(c)
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"),
                    },
                    getTargetLabel(c)
                  );
                })
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                { className: "text-blue-400 text-sm font-semibold mb-3" },
                t("moments")
              ),
              React.createElement(
                "div",
                { className: "flex flex-wrap gap-2" },
                allTimings.map(function (m) {
                  return React.createElement(
                    "button",
                    {
                      key: m,
                      onClick: function () {
                        return toggleTimingEdit(m);
                      },
                      className:
                        "px-4 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer " +
                        (editedPowerup.timing.includes(m)
                          ? "bg-purple-600 text-white shadow-lg"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"),
                    },
                    getTimingLabel(m)
                  );
                })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "flex gap-2 mt-4" },
            React.createElement(
              "button",
              {
                onClick: saveEdit,
                className:
                  "flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all",
              },
              t("save")
            ),
            React.createElement(
              "button",
              {
                onClick: cancelEdit,
                className:
                  "px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-all",
              },
              t("cancel")
            )
          )
        ),
      showAddForm &&
        React.createElement(
          "div",
          {
            className:
              "bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-6 border border-yellow-500/50",
          },
          React.createElement(
            "h2",
            { className: "text-2xl font-bold text-yellow-400 mb-4" },
            t("newPowerup")
          ),
          React.createElement(
            "div",
            { className: "space-y-4" },
            React.createElement("input", {
              type: "text",
              placeholder: t("powerupName"),
              value: newPowerup.name,
              onChange: function (e) {
                return setNewPowerup(
                  _extends({}, newPowerup, { name: e.target.value })
                );
              },
              className:
                "w-full px-4 py-2 bg-gray-900/60 border border-green-500/40 rounded-lg text-white placeholder-green-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500",
            }),
            React.createElement("input", {
              type: "text",
              placeholder: t("effect"),
              value: newPowerup.effect,
              onChange: function (e) {
                return setNewPowerup(
                  _extends({}, newPowerup, { effect: e.target.value })
                );
              },
              className:
                "w-full px-4 py-2 bg-gray-900/60 border border-green-500/40 rounded-lg text-white placeholder-green-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-500",
            }),
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                { className: "text-yellow-400 text-sm font-semibold mb-3" },
                t("targets")
              ),
              React.createElement(
                "div",
                { className: "flex flex-wrap gap-2" },
                allTargets.map(function (c) {
                  return React.createElement(
                    "button",
                    {
                      key: c,
                      onClick: function () {
                        return toggleTargetNew(c);
                      },
                      className:
                        "px-4 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer " +
                        (newPowerup.target.includes(c)
                          ? "bg-yellow-600 text-white shadow-lg"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"),
                    },
                    getTargetLabel(c)
                  );
                })
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                { className: "text-yellow-400 text-sm font-semibold mb-3" },
                t("moments")
              ),
              React.createElement(
                "div",
                { className: "flex flex-wrap gap-2" },
                allTimings.map(function (m) {
                  return React.createElement(
                    "button",
                    {
                      key: m,
                      onClick: function () {
                        return toggleTimingNew(m);
                      },
                      className:
                        "px-4 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer " +
                        (newPowerup.timing.includes(m)
                          ? "bg-yellow-600 text-white shadow-lg"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"),
                    },
                    getTimingLabel(m)
                  );
                })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "flex gap-2 mt-4" },
            React.createElement(
              "button",
              {
                onClick: addPowerup,
                className:
                  "flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-lg hover:from-green-500 hover:to-green-400 transition-all",
              },
              t("add")
            ),
            React.createElement(
              "button",
              {
                onClick: function () {
                  return setShowAddForm(false);
                },
                className:
                  "px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-all",
              },
              t("cancel")
            )
          )
        ),
      React.createElement(
        "div",
        { className: "space-y-3" },
        filteredPowerups.length === 0
          ? React.createElement(
              "div",
              {
                className:
                  "bg-black/40 backdrop-blur-sm rounded-xl p-8 text-center border border-green-500/30",
              },
              React.createElement(
                "p",
                { className: "text-green-400 text-lg" },
                t("noPowerupFound")
              )
            )
          : filteredPowerups.map(function (powerup) {
              return React.createElement(
                "div",
                {
                  key: powerup.id,
                  className:
                    "bg-black/40 backdrop-blur-sm rounded-xl p-4 border-2 transition-all " +
                    (powerup.active
                      ? "border-green-500/50 hover:border-green-400"
                      : "border-red-500/50 opacity-60"),
                },
                React.createElement(
                  "div",
                  { className: "flex items-start justify-between gap-4" },
                  React.createElement(
                    "div",
                    { className: "flex-1" },
                    React.createElement(
                      "h3",
                      { className: "text-xl font-bold text-yellow-400 mb-2" },
                      powerup.name
                    ),
                    React.createElement(
                      "p",
                      { className: "text-green-200 mb-3" },
                      powerup.effect
                    ),
                    React.createElement(
                      "div",
                      { className: "flex flex-wrap gap-2" },
                      React.createElement(
                        "div",
                        { className: "flex flex-wrap gap-1" },
                        (Array.isArray(powerup.target)
                          ? powerup.target
                          : [powerup.target]
                        ).map(function (c) {
                          return React.createElement(
                            "span",
                            {
                              key: c,
                              className:
                                "px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold",
                            },
                            getTargetLabel(c)
                          );
                        })
                      ),
                      React.createElement(
                        "div",
                        { className: "flex flex-wrap gap-1" },
                        (Array.isArray(powerup.timing)
                          ? powerup.timing
                          : [powerup.timing]
                        ).map(function (m) {
                          return React.createElement(
                            "span",
                            {
                              key: m,
                              className:
                                "px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold",
                            },
                            getTimingLabel(m)
                          );
                        })
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "flex gap-2" },
                    React.createElement(
                      "button",
                      {
                        onClick: function () {
                          return togglePowerup(powerup.id);
                        },
                        className:
                          "px-4 py-2 rounded-lg font-semibold transition-all " +
                          (powerup.active
                            ? "bg-green-600 hover:bg-green-500 text-white"
                            : "bg-gray-600 hover:bg-gray-500 text-gray-200"),
                      },
                      powerup.active ? t("possessed") : t("notPossessed")
                    ),
                    React.createElement(
                      "button",
                      {
                        onClick: function () {
                          return toggleFavorite(powerup.id);
                        },
                        className:
                          "px-4 py-2 rounded-lg font-semibold transition-all " +
                          (powerup.favorite
                            ? "bg-yellow-600 hover:bg-yellow-500 text-white"
                            : "bg-gray-600 hover:bg-gray-500 text-gray-200"),
                      },
                      powerup.favorite
                        ? "⭐ " + t("favorite")
                        : "☆ " + t("favorite")
                    ),
                    React.createElement(
                      "button",
                      {
                        onClick: function () {
                          return startEdit(powerup);
                        },
                        className:
                          "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-all",
                      },
                      t("edit")
                    ),
                    React.createElement(
                      "button",
                      {
                        onClick: function () {
                          return deletePowerup(powerup.id);
                        },
                        className:
                          "p-2 bg-red-600/80 hover:bg-red-500 text-white rounded-lg transition-all",
                      },
                      t("delete")
                    )
                  )
                )
              );
            })
      ),
      React.createElement(
        "div",
        { className: "mt-6 text-center text-green-400 text-sm" },
        filteredPowerups.length,
        " ",
        t("displayedCount"),
        " ",
        powerups.length,
        " ",
        t("total")
      )
    )
  );
};

ReactDOM.render(
  React.createElement(PowerupManager, null),
  document.getElementById("root")
);

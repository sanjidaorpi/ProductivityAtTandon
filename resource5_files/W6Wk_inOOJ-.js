;/*FB_PKG_DELIM*/

__d("AboutThisAccountRefererTypes",[],(function(a,b,c,d,e,f){"use strict";a={ACCOUNT_SETTINGS:"AccountSettings",FEED:"Feed",FEED_ADS:"FeedAds",PROFILE_MORE:"ProfileMore",PROFILE_USERNAME:"ProfileUsername",QUICK_PROMOTION:"QuickPromotion",SHOPPING_HOME_ADS:"ShoppingHomeAds",SHOPPING_PDP:"ShoppingPDP",STORY:"Story"};b=a;f["default"]=b}),66);
__d("PolarisAboutThisAccountUtils",["PolarisConfig"],(function(a,b,c,d,e,f,g){"use strict";function a(a){if(!d("PolarisConfig").isLoggedIn())return!1;a=a.showAccountTransparencyDetails;a=a===void 0?!1:a;return a}g.getIsEligibleForATA=a}),98);
__d("PolarisClipboard",["ExecutionEnvironment","UserAgent","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(){if(!(h||(h=c("ExecutionEnvironment"))).canUseDOM)return!1;if(c("UserAgent").isBrowser("Firefox < 41"))return!1;return c("UserAgent").isBrowser("Chrome >= 43")?!0:typeof document.queryCommandSupported==="function"&&document.queryCommandSupported("copy")}function b(a,b){b=b!=null?b:c("nullthrows")(document.body);var d=document.createElement("span");d.textContent=a;b.appendChild(d);a=window.getSelection();a.removeAllRanges();var e=document.createRange();e.selectNodeContents(d);a.addRange(e);e=!0;try{e=document.execCommand("copy")}catch(a){e=!1}a.removeAllRanges();b.removeChild(d);return e}g.canCopy=a;g.copy=b}),98);
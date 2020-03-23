import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private http: HttpClient) { }

  getRestaurantsFromPlacesAPI(lat: number, lng: number) {
    return this.http.get(`https://whatshallweeat.dev/api/restaurants/list/location=${lat},${lng}`)
    .pipe(
      map((result: any) => result.results),
    );/*
    return of({
      "html_attributions" : [],
      "next_page_token" : "CqQCGwEAAAoTZB8thl_-PDvyF2A6vHGUvICS_xlTirOU7_nyekfz25rOqkeULItOyu_urvC49JsOQyzjOvKYIYCjaljGhTTwvdN70IiH_cOmNh5fqzYqQjO9_C0IVbsxdmPckhN7hA99_k17QwlWGOyo7A5NK4udz1WP54UX5Hvc7KAkFk_Sn3cMbHAdfe6BrtleoXaBwJU2Z-UeqKpVXqeLocNTbnJlrkqmuokw0pIf_GjBwQr3d5BahwRj5ZXWux7_jBLA2ih1l-chG1MnCLioyzPhwSEUFVY095_6NEmXbDmG6DfiUDrRqWVaa9aYapmdyXZcDJIvmFlFAHlURXunzWdvGN7F9ENHTRV8aEJlDOo4td_EpbZE7E8u90VcvSfCWRLtuhIQU2C3t4SH3ZCR5GsphQ8QxRoUzPfQz9vQUXDhgrMu6I6WH4fYN4Y",
      "results" : [
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9401146,
                  "lng" : -77.1754313
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.94147812989273,
                     "lng" : -77.17431552010727
                  },
                  "southwest" : {
                     "lat" : 38.93877847010728,
                     "lng" : -77.17701517989272
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "d2bc86b39bac6804a9de05ce974519a09d025e94",
            "name" : "Esaan",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 2268,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/114989665890968275515\"\u003eJoshua Abercrombie\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAU4SG2iriolkATogf-v5-HPgUzSlClNiHyDNM15bMi1n96_jxpMhIrieOgEOIjbGCknhdX77gD1dRPvtAiYKnmul3_s3JmdcXFYBHnLikGJDiPauFvNuWBbNmIdICfM5LEhDuE5ABVFJqqNFbeDTLrBiqGhTEyFM5PjL7am-UkHopl7IhLA2r3A",
                  "width" : 4032
               }
            ],
            "place_id" : "ChIJBwmdKF-1t4kRf_MPiPo0REY",
            "plus_code" : {
               "compound_code" : "WRRF+2R McLean, Dranesville, VA",
               "global_code" : "87C4WRRF+2R"
            },
            "rating" : 4.5,
            "reference" : "ChIJBwmdKF-1t4kRf_MPiPo0REY",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 109,
            "vicinity" : "1307 Old Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9400995,
                  "lng" : -77.17564089999999
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.94147812989273,
                     "lng" : -77.17442032010726
                  },
                  "southwest" : {
                     "lat" : 38.93877847010728,
                     "lng" : -77.17711997989271
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "9e5553b6f54795915d6f2b7045318d4f6cb9e3dd",
            "name" : "Pasa Thai",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 1200,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/107399899189050453422\"\u003eA Google User\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAA2IOuYRMbKVNlNi-HReZFy2sCMdFVYiisEI2A0Jg0VK2Mt7MoPmQ2J89v9QbZq2GzPjaoTpGvALaoJQO2nL63XyF5-DbXGgTc2uCEAfZ7Jn-SetTRSY3YZ508hqPmBtgLEhA55J_0FRBuu5RjYV8c1Kk4GhRGXKFBG7s1OShaQWXXWpLxiaD3Fg",
                  "width" : 1800
               }
            ],
            "place_id" : "ChIJl1t91161t4kRYQzrNyvSN-A",
            "plus_code" : {
               "compound_code" : "WRRF+2P McLean, Dranesville, VA",
               "global_code" : "87C4WRRF+2P"
            },
            "price_level" : 2,
            "rating" : 4.3,
            "reference" : "ChIJl1t91161t4kRYQzrNyvSN-A",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 140,
            "vicinity" : "1315 Old Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9391819,
                  "lng" : -77.1744133
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.94051277989271,
                     "lng" : -77.17331742010728
                  },
                  "southwest" : {
                     "lat" : 38.93781312010727,
                     "lng" : -77.17601707989272
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "b219799100d3ed432d419bb46f146eaef8000a90",
            "name" : "Red Tomato Pizzeria",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 4032,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/100899705375636878612\"\u003eSean\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAsPTJ4j7Aut6WoLj8akKy2gJ_fShxP8H_W_gqJQZRdR9GjKhLVD_Z_9o30NNZoWJsuanCAh8WJYpMzp1JopMaDcqG7IIfOH_eCs-95ihtuc8wv8Gg7hRePnWE_C96sFuAEhCgSxP2-KYU9S1ZM_NesVz-GhRDVNcZOoPvMfUiCP2G55lQs4B6bQ",
                  "width" : 3024
               }
            ],
            "place_id" : "ChIJhf_QBl-1t4kRWKYFICTeMjA",
            "plus_code" : {
               "compound_code" : "WRQG+M6 McLean, Dranesville, VA",
               "global_code" : "87C4WRQG+M6"
            },
            "price_level" : 1,
            "rating" : 4.2,
            "reference" : "ChIJhf_QBl-1t4kRWKYFICTeMjA",
            "scope" : "GOOGLE",
            "types" : [
               "meal_delivery",
               "meal_takeaway",
               "restaurant",
               "food",
               "point_of_interest",
               "establishment"
            ],
            "user_ratings_total" : 80,
            "vicinity" : "1327 Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9391766,
                  "lng" : -77.17859129999999
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.94055082989272,
                     "lng" : -77.17726077010727
                  },
                  "southwest" : {
                     "lat" : 38.93785117010727,
                     "lng" : -77.17996042989272
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "4a71eb80c1c8a6a292d2549fec2c6b638df4154f",
            "name" : "Fahrenheit Asian Hot Soups And Noodles",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 4032,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/103367456555048612030\"\u003erachael 520\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAPrTLENaNhSWlpGJNvSHCOPNYg1zIbUdwsZobSlK1eIveZm9Tojnpfmr5_cFOqTfj8exRqiYqQ4X3qENXfVLAHk3oF3VRee3nTYeAxAgcrpLcMA5phuOvIemDQb56Wl5qEhCs4T43LCb34diA52g89PCVGhSQ1yhQbnUQxjoCwElbwizH_ZKTNg",
                  "width" : 3024
               }
            ],
            "place_id" : "ChIJT9TFF1m1t4kRMQp5pjlnhUc",
            "plus_code" : {
               "compound_code" : "WRQC+MH McLean, Dranesville, VA",
               "global_code" : "87C4WRQC+MH"
            },
            "price_level" : 2,
            "rating" : 4.2,
            "reference" : "ChIJT9TFF1m1t4kRMQp5pjlnhUc",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 359,
            "vicinity" : "1313 Dolley Madison Blvd #103, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9383413,
                  "lng" : -77.1756625
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93977187989272,
                     "lng" : -77.17414812010729
                  },
                  "southwest" : {
                     "lat" : 38.93707222010728,
                     "lng" : -77.17684777989273
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "485a7a2ee8025e1164898340163ba7d1f7142dca",
            "name" : "Sweet Leaf Cafe",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 2470,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/108065185093797553893\"\u003eA Google User\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAA4dpiSsPHJdj0qWzQsBWcupoDzEp5sLPkmfHs2CKFCbbBvZVMnQSulBhedvEqLBcDbkF_MlzsoHDuKs4_D9BtGmd5mmko-kPrepHcvEaHZslbWYu9oJyWGY3hw0JRsqTcEhBLaMS7YhUrnO98fCjEdzroGhTbc_GXE9i_eCi2c3cffqr_xf_2KA",
                  "width" : 2023
               }
            ],
            "place_id" : "ChIJ60AuJ1y1t4kR_Ms70zCSf8g",
            "plus_code" : {
               "compound_code" : "WRQF+8P McLean, Dranesville, VA",
               "global_code" : "87C4WRQF+8P"
            },
            "price_level" : 2,
            "rating" : 4.4,
            "reference" : "ChIJ60AuJ1y1t4kR_Ms70zCSf8g",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "store", "establishment" ],
            "user_ratings_total" : 212,
            "vicinity" : "1359 Old Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9750861,
                  "lng" : -77.1626911
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.97640842989273,
                     "lng" : -77.16138427010726
                  },
                  "southwest" : {
                     "lat" : 38.97370877010729,
                     "lng" : -77.16408392989271
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "697521c385098405b3f2f49342728a6f739b8d12",
            "name" : "Fish Taco",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 2268,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/117715972286710854874\"\u003eA Google User\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAzt6H3ZSzCgA7UjcPa5_Z7pxZACSxzUKT199Zrt_L5QMT5h5Y47ou5JExD9j3OlKCFhHGFj1TzSbMzDdGnmLqZhslSIAjmFCBlS2KJ0qSsyNZQSAWfbY1F9w8ugYSSnTyEhDeOpHUSlGJCMJhpYT5mW6yGhTPY2atBaULtQQsX_ZVaxGToBpXJA",
                  "width" : 4032
               }
            ],
            "place_id" : "ChIJ6UWV--TKt4kRri6L8nNHajo",
            "plus_code" : {
               "compound_code" : "XRGP+2W Cabin John, 7, MD",
               "global_code" : "87C4XRGP+2W"
            },
            "price_level" : 2,
            "rating" : 4.5,
            "reference" : "ChIJ6UWV--TKt4kRri6L8nNHajo",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 342,
            "vicinity" : "7945 Macarthur Blvd, Cabin John"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9750745,
                  "lng" : -77.16259099999999
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.97638522989272,
                     "lng" : -77.16125132010728
                  },
                  "southwest" : {
                     "lat" : 38.97368557010728,
                     "lng" : -77.16395097989272
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "4e7a9d8558ad72d2000f18a51e600a4b8ac1c514",
            "name" : "Wild Tomato",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 4032,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/112635385611139854010\"\u003eKC Miller\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAA59FiCK7O52V1RfXMZ7fbKsiROCLJ_ikcGDTuGZsGZ5B-30k3zqAw1x0m-epCNz7Pbh46ynpnMlr2BOeXfwbjrKpA1j8E0qoY8oef1dXxlA8RMblTQVBQdHbofCULzwNIEhA8Dd8X1DKXJcTDYvh-rQHdGhRp88tJEz_8A6W1bwBL_yFgmIF_sw",
                  "width" : 3024
               }
            ],
            "place_id" : "ChIJHcqH-uTKt4kRRkrvmdRrXdc",
            "plus_code" : {
               "compound_code" : "XRGP+2X Cabin John, 7, MD",
               "global_code" : "87C4XRGP+2X"
            },
            "price_level" : 2,
            "rating" : 4.5,
            "reference" : "ChIJHcqH-uTKt4kRRkrvmdRrXdc",
            "scope" : "GOOGLE",
            "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 156,
            "vicinity" : "7945 Macarthur Blvd, Cabin John"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.93741929999999,
                  "lng" : -77.1751483
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93884272989272,
                     "lng" : -77.17396412010729
                  },
                  "southwest" : {
                     "lat" : 38.93614307010727,
                     "lng" : -77.17666377989272
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "d4476d514781134b7ea8209bedfdf4ca975c0d64",
            "name" : "Rocco's Italian Restaurant",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 3024,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/102918845785912376643\"\u003eA Google User\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAuxYl8yc8Iv94hHHYviwQ4yYw5sRXUrdMsBIrwEUQ6Xp4l08GgHooCSN8EcopP2ZwdmnuqxltTyyh0yYo0nfv6rm7TRCwUr18jIC8Nx0-8h1hdULcwt24rs-oL2YATs03EhDidBzpSTrUIacwBX0rR9o-GhRWTQJc7In20PEc1HQCwS2CJAD2-Q",
                  "width" : 4032
               }
            ],
            "place_id" : "ChIJ0xu7nV61t4kR4Khxij40FGo",
            "plus_code" : {
               "compound_code" : "WRPF+XW McLean, Dranesville, VA",
               "global_code" : "87C4WRPF+XW"
            },
            "price_level" : 2,
            "rating" : 4.4,
            "reference" : "ChIJ0xu7nV61t4kR4Khxij40FGo",
            "scope" : "GOOGLE",
            "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 202,
            "vicinity" : "1357 Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9361942,
                  "lng" : -77.1766222
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93753007989272,
                     "lng" : -77.17512682010727
                  },
                  "southwest" : {
                     "lat" : 38.93483042010728,
                     "lng" : -77.17782647989272
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "6a4e6b6d5902d88cd7b2a066d1c5c9b4a4e0b772",
            "name" : "Dal Grano",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 1836,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/104429736440720496631\"\u003eWilliam Morris\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAANc8iQDVpR9hKBJNZEZwhOrgO0IrxBc1FB8bV9QhBfelgJNgKHgC1RZqWFrdLa3fADr69ZuORL2x1diooKVFnGwSEbHNj2EEYWM0IgYAUhypkREvrplqzAmyMHlTX3T0WEhBjUQ3ZnBJ8fTcp3NglEeMZGhS38prXWYR_czEniU-47N4gaaFRlg",
                  "width" : 3264
               }
            ],
            "place_id" : "ChIJpdYfOVy1t4kRBrNV_kgKMSo",
            "plus_code" : {
               "compound_code" : "WRPF+F9 McLean, Dranesville, VA",
               "global_code" : "87C4WRPF+F9"
            },
            "rating" : 4.7,
            "reference" : "ChIJpdYfOVy1t4kRBrNV_kgKMSo",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 141,
            "vicinity" : "1386 Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.935872,
                  "lng" : -77.176473
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93722547989272,
                     "lng" : -77.17506792010728
                  },
                  "southwest" : {
                     "lat" : 38.93452582010728,
                     "lng" : -77.17776757989273
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "e293c26164756821b3db7184d3dfe0e96016ee6f",
            "name" : "Masala Indian Cuisine",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 4032,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/103079578495788118800\"\u003emehadi\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAoituLYNGJ5hPlfAh0UrA2E1vxzzbEEie2OXEt8xGtVT3Ivi6ts5Tgfn73iz_LvU_zag4zbkTgcjjt0M8VwTeDv5qLH2O78Yz6KlBJLw0bId5g0Qlwecv0Ww5GUIcmdp7EhC0ATZ5lNyrKQt5OKuFwxIsGhRC_nYSlBtDplrzxS8lSkMLpES8Eg",
                  "width" : 3024
               }
            ],
            "place_id" : "ChIJiU9maly1t4kRhRgvUSv175A",
            "plus_code" : {
               "compound_code" : "WRPF+8C McLean, Dranesville, VA",
               "global_code" : "87C4WRPF+8C"
            },
            "price_level" : 2,
            "rating" : 4.1,
            "reference" : "ChIJiU9maly1t4kRhRgvUSv175A",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 264,
            "vicinity" : "1394 Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.93564370000001,
                  "lng" : -77.17722959999999
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93705007989273,
                     "lng" : -77.17581207010727
                  },
                  "southwest" : {
                     "lat" : 38.93435042010728,
                     "lng" : -77.17851172989272
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "7f8b859fae1934efbbedaf692306b610ed008824",
            "name" : "Forbidden City Express",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 3456,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/112416435206481757423\"\u003eRichard Heath\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAIUAnAWg_nUrlMOdRiXQ8hGtJTFV_j82pcgOC6ahEdK6rbBarv2Qcg3kCxlu10GWdn3UkyHv6gQOqjJnN_4OrX1ISQ9-Sw0-ERCkC4gKMPi_dtKZkYLH2YkX7oTXVyUVAEhDBNiil2D0DonABKx-bgLZFGhQun204a8la6oPMAiVrcuNdeAX7CA",
                  "width" : 4608
               }
            ],
            "place_id" : "ChIJHSr3d1y1t4kRlTcRsiQGYaA",
            "plus_code" : {
               "compound_code" : "WRPF+74 McLean, Dranesville, VA",
               "global_code" : "87C4WRPF+74"
            },
            "price_level" : 1,
            "rating" : 4,
            "reference" : "ChIJHSr3d1y1t4kRlTcRsiQGYaA",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 40,
            "vicinity" : "6732 Curran St #3803, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9354616,
                  "lng" : -77.17964099999999
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93675957989272,
                     "lng" : -77.17817962010726
                  },
                  "southwest" : {
                     "lat" : 38.93405992010728,
                     "lng" : -77.18087927989271
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "36d247693efe6b0abc0a82c8b854044a73f69445",
            "name" : "Subway",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 4032,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/104036099713096701464\"\u003eMilena Garcia\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAA-wPvyUdEAJWQeJuoZ33uY8f86uJYd2Igf8O7an8bVh2FtQaBPgH60UrW4kROfy1bqs56iEfjk2EsFQUNC44lvTan6xUap4jlGA3QxF--1l6bZ4Jxd8MlvHXPizDfi6jFEhDtK_VqRrEMxz_7CmM3lVy1GhRnmLEJyK7ZcN_UlEn8n_rN_wLI5g",
                  "width" : 3024
               }
            ],
            "place_id" : "ChIJ2enkrlu1t4kRugzYPXGBLgw",
            "plus_code" : {
               "compound_code" : "WRPC+54 McLean, Dranesville, VA",
               "global_code" : "87C4WRPC+54"
            },
            "price_level" : 1,
            "rating" : 4.1,
            "reference" : "ChIJ2enkrlu1t4kRugzYPXGBLgw",
            "scope" : "GOOGLE",
            "types" : [
               "meal_takeaway",
               "restaurant",
               "food",
               "point_of_interest",
               "establishment"
            ],
            "user_ratings_total" : 55,
            "vicinity" : "6829 Elm St Suite 150, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9356743,
                  "lng" : -77.1815711
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93691202989272,
                     "lng" : -77.18030567010727
                  },
                  "southwest" : {
                     "lat" : 38.93421237010728,
                     "lng" : -77.18300532989271
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "b4b13b3b6d2a63130498423d4f19d0f0e4d8226f",
            "name" : "Pulcinella Italian Host",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 3024,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/110532678237823473305\"\u003eA Google User\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAASfotHwgPguarVDfZ6GOnmTrfWxYILy0DFlacPfNVWd5PzoTjy8D0wOGCqjP_OFKNXguEalMt6qpuJxJ9Jn298klSfd2aly61cz9mJK6sR3E7y_46lkusKGtTbU7h01p2EhDtLriK3ubhxxYFG3DCbTkkGhSCO3CfSO9HnbvRsQj8AJpW94QWwQ",
                  "width" : 4032
               }
            ],
            "place_id" : "ChIJBdjhXVq1t4kRFjEJRol7dzY",
            "plus_code" : {
               "compound_code" : "WRP9+79 McLean, Dranesville, VA",
               "global_code" : "87C4WRP9+79"
            },
            "price_level" : 2,
            "rating" : 4.4,
            "reference" : "ChIJBdjhXVq1t4kRFjEJRol7dzY",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 364,
            "vicinity" : "6852 Old Dominion Dr, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.935304,
                  "lng" : -77.17917199999999
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93664412989272,
                     "lng" : -77.17795407010728
                  },
                  "southwest" : {
                     "lat" : 38.93394447010728,
                     "lng" : -77.18065372989271
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "e3fbb051adb7ee0c7240f41188437ff1f0eec143",
            "name" : "Wok 'N Roll Chinese Cafe",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 3591,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/111256990851069903981\"\u003eWok &#39;N Roll Chinese Cafe\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAh2mAQRjIWswh3FHgcEkE8_n5vf-yXJxMvbiGwa5uBqPuYH39ClCAXfHV9dFZ0iovncfavnXJZpZj1wRSDNGWlIYJp5WkU9iXmkvgI-4le7LMx-mxA8roxB1XG8qz9kDaEhDouihnIMOBnxCC6DRvbgvoGhQiIy9Oj3IzhukutQrdzALv_9J3wQ",
                  "width" : 5387
               }
            ],
            "place_id" : "ChIJv4obp1u1t4kRzrn4Q1-nuUo",
            "plus_code" : {
               "compound_code" : "WRPC+48 McLean, Dranesville, VA",
               "global_code" : "87C4WRPC+48"
            },
            "price_level" : 1,
            "rating" : 4.1,
            "reference" : "ChIJv4obp1u1t4kRzrn4Q1-nuUo",
            "scope" : "GOOGLE",
            "types" : [
               "meal_delivery",
               "meal_takeaway",
               "restaurant",
               "food",
               "point_of_interest",
               "establishment"
            ],
            "user_ratings_total" : 129,
            "vicinity" : "1371 Beverly Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9351157,
                  "lng" : -77.1793065
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93657907989272,
                     "lng" : -77.17801862010728
                  },
                  "southwest" : {
                     "lat" : 38.93387942010727,
                     "lng" : -77.18071827989273
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "41a09e3cf84256721f22206d9a37269d6e005054",
            "name" : "Chop N Chicken",
            "opening_hours" : {
               "open_now" : false
            },
            "photos" : [
               {
                  "height" : 1536,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/111958049491158283157\"\u003eChop N Chicken\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAA_HNsvj0MJD-Q0vR2FwjpjhDWt3ERBbK0htOVXMF_V2PAmJ6sKSuPhWOjR7mfaxHHHFGn_rGcdBzeHwtFKKLuJDM4N4hfcb-19K2FuVaMRrTTG9p2b5dK6FuhnahTRa_PEhAKCfDahG9TvkSs23C6tuOxGhSSH6r6lR8cMtpKSkgyNzzFfphheQ",
                  "width" : 2048
               }
            ],
            "place_id" : "ChIJne2Up1u1t4kRt0uBRHjRyqY",
            "plus_code" : {
               "compound_code" : "WRPC+27 McLean, Dranesville, VA",
               "global_code" : "87C4WRPC+27"
            },
            "price_level" : 1,
            "rating" : 4.6,
            "reference" : "ChIJne2Up1u1t4kRt0uBRHjRyqY",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 46,
            "vicinity" : "1375 Beverly Rd #3603, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9347409,
                  "lng" : -77.17687149999999
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93622547989273,
                     "lng" : -77.17537962010728
                  },
                  "southwest" : {
                     "lat" : 38.93352582010728,
                     "lng" : -77.17807927989273
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "4ee26605c556ecb80e3580823a46ef264d439e43",
            "name" : "Boston Market",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 1183,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/116499615694138529137\"\u003eA Google User\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAASQBLu8jifuKHX9WgwOKl3NHFHLiM9kCZIr8Xtuf8aDlNZn-wrE-HWPzNY3BSwLQYx-8Zi3m74uXj6Zfns2K9eHzEzXvV26-2x7Cq0lqOtrCVDoIpOOk-2YBUasBFgvXEhCQqMsV_kKoX1j2lndcQ1pwGhRVluFOCbkrxKLUcEjcCgenL6b28g",
                  "width" : 1774
               }
            ],
            "place_id" : "ChIJlQ4uh1y1t4kRiPCiMVR3JYs",
            "plus_code" : {
               "compound_code" : "WRMF+V7 McLean, Dranesville, VA",
               "global_code" : "87C4WRMF+V7"
            },
            "price_level" : 1,
            "rating" : 4,
            "reference" : "ChIJlQ4uh1y1t4kRiPCiMVR3JYs",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 132,
            "vicinity" : "1408 Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.93446,
                  "lng" : -77.178004
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93583522989272,
                     "lng" : -77.17655817010728
                  },
                  "southwest" : {
                     "lat" : 38.93313557010728,
                     "lng" : -77.17925782989273
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "583a59d989979d8d5bca569d77c107ac8888160f",
            "name" : "Listrani's",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 4032,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/101165522246293846036\"\u003eListrani&#39;s\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAPhtu2i_kprLPVrUiJygwP29t5hK8W-Q1xGgpScWmXACw2Izuq2qI_Vsed8yQK0ks0ePlq5puuKfU4MKEcuaRyBG7hpJL8Oithc7QvAOHj_9ND8XF1y_hfzAmoK-LDrruEhBcCPHskKL3xz0n9Qf6EbbMGhREN4rS_9BKu90VjPXIU1HR2ehbbg",
                  "width" : 3024
               }
            ],
            "place_id" : "ChIJyRY4ZVu1t4kR5fOQXP7nJAk",
            "plus_code" : {
               "compound_code" : "WRMC+QQ McLean, Dranesville, VA",
               "global_code" : "87C4WRMC+QQ"
            },
            "price_level" : 1,
            "rating" : 4.5,
            "reference" : "ChIJyRY4ZVu1t4kR5fOQXP7nJAk",
            "scope" : "GOOGLE",
            "types" : [
               "meal_delivery",
               "restaurant",
               "food",
               "point_of_interest",
               "establishment"
            ],
            "user_ratings_total" : 142,
            "vicinity" : "6808 Old Dominion Dr, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9324188,
                  "lng" : -77.17893219999999
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93368782989272,
                     "lng" : -77.17778077010728
                  },
                  "southwest" : {
                     "lat" : 38.93098817010728,
                     "lng" : -77.18048042989273
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "64e212aa5155d269225003075eaca1c81471fecc",
            "name" : "Santini's New York Style Deli",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 4032,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/109116919620323789176\"\u003eSolon V\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAGXvQ2TKpTT1F_eHx7KXXxQPU3e--Z4A7oJMy5uhTjeAz2CNths4zb9HJddqcVGb7Lakn2jODwxVvRnxZrpnHsdI7XFMkYBo62xGxwHD6rN_tCxX6nGuLZI5z-1l_tg-qEhByxQzp93f5QJdDxCbwswbbGhRD1dKp863gFHfy9HotgtC_hdsEUQ",
                  "width" : 3024
               }
            ],
            "place_id" : "ChIJSQm2ykS1t4kRIrGqGRwiSVI",
            "plus_code" : {
               "compound_code" : "WRJC+XC McLean, Dranesville, VA",
               "global_code" : "87C4WRJC+XC"
            },
            "price_level" : 1,
            "rating" : 4.2,
            "reference" : "ChIJSQm2ykS1t4kRIrGqGRwiSVI",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "store", "establishment" ],
            "user_ratings_total" : 500,
            "vicinity" : "1443 Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.9315677,
                  "lng" : -77.17855489999999
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.93296487989272,
                     "lng" : -77.17724027010726
                  },
                  "southwest" : {
                     "lat" : 38.93026522010728,
                     "lng" : -77.17993992989271
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "3b3c419c2d67202a7f4dd363bb8d6718790f93e7",
            "name" : "CAVA",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 4048,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/115079982226604503616\"\u003eJames Laciny\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAJ0bP3X1Za7sk_Sghc7IupqAWDimYXF-TBvyVUgpfCQ78ZQm5yA0Wr29WodI_f-W5PgOwwO1Ksy1JBqmjr9JESN4vh7UCXlOlhQC28sYo5PRfu4i8tYeaJ3g03DqJfQA5EhAqbgSzp2833m1ModUhGqceGhSUVXQhI8OCBYuyhifsnyps8r4Sig",
                  "width" : 3036
               }
            ],
            "place_id" : "ChIJ59O3vkS1t4kRhr8JwraOMFc",
            "plus_code" : {
               "compound_code" : "WRJC+JH McLean, Dranesville, VA",
               "global_code" : "87C4WRJC+JH"
            },
            "price_level" : 1,
            "rating" : 4.5,
            "reference" : "ChIJ59O3vkS1t4kRhr8JwraOMFc",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 217,
            "vicinity" : "1445 Chain Bridge Rd, McLean"
         },
         {
            "geometry" : {
               "location" : {
                  "lat" : 38.969366,
                  "lng" : -77.1388259
               },
               "viewport" : {
                  "northeast" : {
                     "lat" : 38.97067902989272,
                     "lng" : -77.13753477010728
                  },
                  "southwest" : {
                     "lat" : 38.96797937010728,
                     "lng" : -77.14023442989271
                  }
               }
            },
            "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id" : "466b441cca8becfcaf9409939cf1847a1e216fb2",
            "name" : "Glen Echo Pizza & Subs",
            "opening_hours" : {
               "open_now" : true
            },
            "photos" : [
               {
                  "height" : 2448,
                  "html_attributions" : [
                     "\u003ca href=\"https://maps.google.com/maps/contrib/103248337710510997346\"\u003eArielandJess WorldPeace\u003c/a\u003e"
                  ],
                  "photo_reference" : "CmRaAAAAw7sdIBrTfZzJnJt934uoebDNPyZmOX1axAS3GHRXC6JvTXbcacLcOtlycyIVKnRsAbCu3ZkqXTr4TGf6N-qhwugPPTCaEMPNBN5u1I5xe7XUK6VQXURTpay8jXbozxi0EhCVQcgXRm5TyJ79TdsyRgywGhQTKLN0-bKknmlaYAJnVcQuClRvNA",
                  "width" : 3264
               }
            ],
            "place_id" : "ChIJze3rm1rKt4kRDGqe0awmY5s",
            "plus_code" : {
               "compound_code" : "XV96+PF Bethesda, 7, MD",
               "global_code" : "87C4XV96+PF"
            },
            "price_level" : 1,
            "rating" : 4.4,
            "reference" : "ChIJze3rm1rKt4kRDGqe0awmY5s",
            "scope" : "GOOGLE",
            "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
            "user_ratings_total" : 60,
            "vicinity" : "7307 Macarthur Blvd, Bethesda"
         }
      ],
      "status" : "OK"
   }
   ).pipe(
    map((result: any) => result.results),
  );*/
  }

  getRestaurantListByUUID(uuid: string) {
    return this.http.get(`https://whatshallweeat.dev/api/restaurants/${uuid}`);
  }

  addRestaurantToList(restaurant: {}) {
    return this.http.post(`https://whatshallweeat.dev/api/restaurants/`, restaurant);
  }

  removeRestaurantFromList(restaurant: {}) {
	const httpOptions = {
    		headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: restaurant
	};
    return this.http.delete(`https://whatshallweeat.dev/api/restaurants/`, httpOptions);
  }
}

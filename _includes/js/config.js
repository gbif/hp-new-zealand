var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch",
      "path": "data"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": "#cc6600",
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "reactIntlLocale": "en-GB",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "and",
      "predicates": [
        {
          "type": "in",
          "key": "country",
          "values": [
            "NZ"
          ]
        },
        {
          "type": "equals",
          "key": "notIssues",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        }
      ]
    },
    "highlightedFilters": [
      "basisOfRecord",
      "taxonKey",
      "year",
      "occurrenceStatus",
      "issue",
      "typeStatus"
    ],
    "excludedFilters": [
      "country"
    ],
    "defaultEnabledTableColumns": [
      "features",
      "coordinates",
      "year",
      "basisOfRecord",
      "dataset",
      "publisher",
      "catalogNumber"
    ],
    "mapSettings": {
      "lat": -40.4291568,
      "lng": 172.2973463,
      "zoom": 3.5
    }
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {}
};

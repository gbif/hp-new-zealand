var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
        route: '/data'
    }
  },
  occurrence: {
    mapSettings: {
      lat: -40.4291568,
      lng: 172.2973463,
      zoom: 3.5
    },
    excludedFilters: ['country'],
    defaultTableColumns: ['features', 'coordinates', 'year', 'basisOfRecord', 'dataset', 'publisher', 'catalogNumber'], // the first column will always be scientificName, that cannot be changed
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "in",
          "key": "country",
          "values": ["NZ"]
        },
        {
          "type": "equals",
          "key": "notIssues",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        }
      ]
    }
  }
};

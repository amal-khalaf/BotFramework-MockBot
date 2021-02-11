// This sample is borrowed from the AdaptiveCards repo
// https://github.com/microsoft/AdaptiveCards/blob/main/samples/v1.3/Scenarios/Agenda.json

export default () => ({
  type: 'AdaptiveCard',
  body: [
    {
      type: 'ColumnSet',
      horizontalAlignment: 'Center',
      columns: [
        {
          type: 'Column',
          items: [
            {
              type: 'ColumnSet',
              horizontalAlignment: 'Center',
              columns: [
                {
                  type: 'Column',
                  items: [
                    {
                      type: 'TextBlock',
                      text: '**Redmond**',
                      wrap: true
                    },
                    {
                      type: 'TextBlock',
                      spacing: 'None',
                      text: '8a - 12:30p',
                      wrap: true
                    }
                  ],
                  width: 'auto'
                }
              ]
            }
          ],
          width: 1
        },
        {
          type: 'Column',
          spacing: 'Large',
          separator: true,
          items: [
            {
              type: 'ColumnSet',
              horizontalAlignment: 'Center',
              columns: [
                {
                  type: 'Column',
                  items: [
                    {
                      type: 'TextBlock',
                      text: '**Bellevue**',
                      wrap: true
                    },
                    {
                      type: 'TextBlock',
                      spacing: 'None',
                      text: '12:30p - 3p',
                      wrap: true
                    }
                  ],
                  width: 'auto'
                }
              ]
            }
          ],
          width: 1
        },
        {
          type: 'Column',
          spacing: 'Large',
          separator: true,
          items: [
            {
              type: 'ColumnSet',
              horizontalAlignment: 'Center',
              columns: [
                {
                  type: 'Column',
                  items: [
                    {
                      type: 'TextBlock',
                      text: '**Seattle**',
                      wrap: true
                    },
                    {
                      type: 'TextBlock',
                      spacing: 'None',
                      text: '8p',
                      wrap: true
                    }
                  ],
                  width: 'auto'
                }
              ]
            }
          ],
          width: 1
        }
      ]
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          items: [
            {
              type: 'ColumnSet',
              columns: [
                {
                  type: 'Column',
                  spacing: 'None',
                  items: [
                    {
                      type: 'TextBlock',
                      text: '2:00 PM',
                      wrap: true
                    }
                  ],
                  width: 'stretch'
                }
              ]
            },
            {
              type: 'TextBlock',
              spacing: 'None',
              text: '1hr',
              isSubtle: true,
              wrap: true
            }
          ],
          width: '110px'
        },
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: '**Contoso Campaign Status Meeting**',
              wrap: true
            },
            {
              type: 'ColumnSet',
              spacing: 'None',
              columns: [
                {
                  type: 'Column',
                  items: [
                    {
                      type: 'TextBlock',
                      text: 'Conf Room Bravern-2/9050',
                      wrap: true
                    }
                  ],
                  width: 'stretch'
                }
              ]
            },
            {
              type: 'ColumnSet',
              spacing: 'Small',
              columns: [
                {
                  type: 'Column',
                  items: [
                    {
                      type: 'TextBlock',
                      text: '**Contoso Brand Guidelines** shared by **Susan Metters**',
                      wrap: true
                    }
                  ],
                  width: 'stretch'
                }
              ]
            }
          ],
          width: 40
        }
      ]
    },
    {
      type: 'ColumnSet',
      spacing: 'None',
      columns: [
        {
          type: 'Column',
          width: '110px'
        },
        {
          type: 'Column',
          items: [
            {
              type: 'ColumnSet',
              columns: [
                {
                  type: 'Column',
                  items: [
                    {
                      type: 'TextBlock',
                      text: 'about 45 minutes',
                      isSubtle: true,
                      wrap: true
                    }
                  ],
                  width: 'stretch'
                }
              ]
            }
          ],
          width: 40
        }
      ]
    },
    {
      type: 'ColumnSet',
      spacing: 'None',
      columns: [
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              spacing: 'None',
              text: '8:00 PM',
              wrap: true
            },
            {
              type: 'TextBlock',
              spacing: 'None',
              text: '1hr',
              isSubtle: true,
              wrap: true
            }
          ],
          width: '110px'
        },
        {
          type: 'Column',
          width: 'auto',
          spacing: 'None'
        },
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: '**Alaska Airlines AS1021 flight to Chicago**',
              wrap: true
            },
            {
              type: 'ColumnSet',
              spacing: 'None',
              columns: [
                {
                  type: 'Column',
                  items: [
                    {
                      type: 'TextBlock',
                      text:
                        'Seattle Tacoma International Airport (17801 International Blvd, Seattle, WA, United States)',
                      wrap: true
                    }
                  ],
                  width: 'stretch'
                }
              ]
            }
          ],
          width: 40
        }
      ]
    }
  ],
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  version: '1.3'
});

const DEFAULT_MAILING_ADDRESS = 'Level 1, 50-56 York St, South Melbourne, VIC 3205, AUSTRALIA'

module.exports = {
  regions: [
    {
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      phone: {
        local: {
          human_readable: '1300 88 99 00',
          number: '1300889900',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
    },
    {
      code: 'CA',
      name: 'Canada',
      lang: 'en-CA',
      phone_prefix: '1',
      currency_formatting_locale: 'en-CA',
      currency_code: 'CAD',
      phone: {
        local: {
          human_readable: '778 300 0814',
          number: '7783000814',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
    },
  ],

  defaultRegionCode: 'AU',
}

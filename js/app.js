var myApp = angular.module('preWorkout', [])
  .controller('featuredItemCtrl', [function () {

    var featuredItem = this;

    featuredItem.item = {
      title : 'Neon Sport Volt Creatine Free Preworkout with Beta Alanine',
      img : 'img/neon-sport.jpg',
      link : 'https://www.amazon.com/gp/product/B00VAPRCW8/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00VAPRCW8&linkId=5ce833b1d4d606fd9d7aec511f9a6cc6',
      under20 : true
    };

  }])
  .controller('itemsCtrl', [function () {

    var listItems = this;

    listItems.items = [
      {
        title: 'Optimum Nutrition Gold Standard',
        img : 'img/opt-pre.jpg',
        link : 'https://www.amazon.com/gp/product/B00PYB2X8C/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00PYB2X8C&linkId=a6360a029f4904acaa73af79c5a8e9a6'
      },
      {
        title: 'Cellucor C4',
        img : 'img/c4.jpg',
        link :  'https://www.amazon.com/gp/product/B00VAPRMDM/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00VAPRMDM&linkId=3dedc3974432a2b3fb5a6a7b6ed2071e'
      },
      {
        title: 'Six Star Explosion',
        img : 'img/six.jpg',
        link : 'https://www.amazon.com/gp/product/B00OXLP6H4/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00OXLP6H4&linkId=40d14f9fac49522a9c3bb93621f0d686',
        under20 : true
      },
      {
        title: 'Muscle Pharm Arnold Schwarzenegger Series Iron Pump',
        img : 'img/arnold.jpg',
        link : 'https://www.amazon.com/gp/product/B00FCGLHKE/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00FCGLHKE&linkId=4aa95e1dcff927ce815f3226d26f6895',
        under20 : true
      },
      {
        title: 'BPI Sports 1.M.R. Vortex',
        img : 'img/bpi.jpg',
        link : 'https://www.amazon.com/gp/product/B00O64JPFM/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00O64JPFM&linkId=f48d92868cd6738284aea6c74eb362e5',
        under20 : true
      },
      {
        title: 'RARI NUTRITION - INFINITY',
        img : 'img/rari.jpg',
        link : 'https://www.amazon.com/gp/product/B01DB5RQBQ/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01DB5RQBQ&linkId=bea88c4bb176f7237ebb4ab3c703784c'
      },
      {
        title: 'Mr Hyde Intense Energy',
        img : 'img/hyde.jpg',
        link : 'https://www.amazon.com/gp/product/B0182L5S1Y/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0182L5S1Y&linkId=074940f02f0a008999cc4a2c0b9dbd4b'
      },
      {
        title: 'MuscleTech Pro Series Neurocore',
        img : 'img/tech.jpg',
        link : 'https://www.amazon.com/gp/product/B0187S2NLU/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0187S2NLU&linkId=00d1f2025ad252204222545da786440a'
      },
      {
        title: 'Optimum Nutrition Amino Energy',
        img : 'img/on.jpg',
        link : 'https://www.amazon.com/gp/product/B005Q8IM6K/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B005Q8IM6K&linkId=29ef53f9b8b5df350075efa6df7bbaf5',
        under20 : true
      },
      {
        title: 'Force Factor BRX',
        img : 'img/brx.jpg',
        link : 'https://www.amazon.com/gp/product/B0084N2WVK/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0084N2WVK&linkId=f7d6695fb4047af673f63215aa03eae7',
        cheapest : true
      },
      {
        title: 'GAT Clinically Tested Nitraflex, Testosterone Enhancing',
        img : 'img/gat.jpg',
        link : 'https://www.amazon.com/gp/product/B008RL1HBU/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B008RL1HBU&linkId=cfbbeb31a78192c99ebc0f31c1abf625'
      },
      {
        title: 'Cobra Labs The Curse',
        img : 'img/cobra.jpg',
        link : 'https://www.amazon.com/gp/product/B0089N51EK/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0089N51EK&linkId=73e4be09f3867ebf37378d0c4ea903aa'
      },
      {
        title: 'Betancourt Nutrition - B-Nox',
        img : 'img/b-nox.jpg',
        link : 'https://www.amazon.com/gp/product/B01FY7RXRG/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01FY7RXRG&linkId=4c592467f18604752d8994999d8e0afa'
      },
      {
        title: 'ENGN By EVLUTION NUTRITION',
        img : 'img/engn.jpg',
        link : 'https://www.amazon.com/gp/product/B01B833COI/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01B833COI&linkId=8d9125ff9658bb687451f89db9405998'
      },
      {
        title: 'Universal Nutrition Animal Rage XL',
        img : 'img/rage.jpg',
        link : 'https://www.amazon.com/gp/product/B00GWQ9LNI/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00GWQ9LNI&linkId=aafe0c78e388e84a7ec58ba32d4e0989'
      },
      {
        title: 'Forzagen',
        img : 'img/f5.jpg',
        link : 'https://www.amazon.com/gp/product/B01ERK66P6/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01ERK66P6&linkId=73a4cc2352ce89b5dc943c528c57a8a4'
      },
      {
        title: 'MuscleTech Anarchy',
        img : 'img/anarchy.jpg',
        link : 'https://www.amazon.com/gp/product/B00VE95NWQ/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00VE95NWQ&linkId=7c9191c8536f3b464b5e08e74eeda2ae',
        under20 : true
      },
      {
        title: 'NITROSURGE',
        img : 'img/nitrosurge.jpg',
        link : 'https://www.amazon.com/gp/product/B01ATYWQXK/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01ATYWQXK&linkId=ed6da1d0d9eaac0485a5e932e5e3cbbe'
      },
      {
        title: 'BPI Sports Pump HD',
        img : 'img/pumphd.jpg',
        link : 'https://www.amazon.com/gp/product/B011GXZTL4/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B011GXZTL4&linkId=63d71ef90270f9628cffb53731cfa280'
      },
      {
        title: 'Nutrex Research Outrage',
        img : 'img/nutrex.jpg',
        link : 'https://www.amazon.com/gp/product/B00VBYJX0W/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00VBYJX0W&linkId=88f86bf794921fb420a336c9075eb88e',
        under20 : true
      },
      {
        title: 'KRAZ4D',
        img : 'img/kraz4d.jpg',
        link : 'https://www.amazon.com/gp/product/B018TEDNMA/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B018TEDNMA&linkId=a579b62d6c9509c6f398e65b34056c7c',
        under20 : true
      },
      {
        title: 'FINAFLEX Stimul8',
        img : 'img/finaflex.jpg',
        link : 'https://www.amazon.com/gp/product/B00EZJ4ILY/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00EZJ4ILY&linkId=c143a975fe68441bc983c496e1352ac6'
      },
      {
        title: 'Savage Roar | Dynamik Muscle',
        img : 'img/savage-roar.jpg',
        link : 'https://www.amazon.com/gp/product/B015G3QMPW/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B015G3QMPW&linkId=c87834ea15b93f95ec9081e2f1ae2dbc'
      },
      {
        title: 'MRM Driven Natural',
        img : 'img/driven.jpg',
        link : 'https://www.amazon.com/gp/product/B0052ONYEI/ref=as_li_tl?ie=UTF8&tag=cheappreworko-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0052ONYEI&linkId=5e3a0dd41b275870315696a8b300445f',
        under20 : true
      },
      {
        title: 'MuscleTech Shatter SX-7',
        img : 'img/shatter.jpg',
        link : 'http://amzn.to/2bsNuH5'
      },
      {
        title: 'Primal Potion From Ultrachamp',
        img : 'img/primal.jpg',
        link : 'http://amzn.to/2bzaQrY'
      },
      {
        title: 'VEX',
        img : 'img/vex.jpg',
        link : 'http://amzn.to/2biSbmw'
      },
      {
        title: 'MAN Sports Pump Powder',
        img : 'img/man.jpg',
        link : 'http://amzn.to/2bzagtY'
      },
      {
        title: 'Run Everything Labs Show The World Pump Formula',
        img : 'img/stw.jpg',
        link : 'http://amzn.to/2bzb2az'
      },
      {
        title: 'USN 3XT-PUMP',
        img : 'img/3xt.jpg',
        link : 'http://amzn.to/2bsNUNI'
      },
      {
        title: 'VIPER Pre-Workout',
        img : 'img/viper.jpg',
        link : 'http://amzn.to/2bHBiCZ'
      },
      {
        title: 'SDC Nutrition About Time Aux',
        img : 'img/aux.jpg',
        link : 'http://amzn.to/2b6hl77'
      },
      {
        title: 'Venum',
        img : 'img/venum.jpg',
        link : 'http://amzn.to/2bzaEJc'
      },
      {
        title: 'H:vol',
        img : 'img/vol.jpg',
        link : 'http://amzn.to/2bzaMs9'
      },
      {
        title: 'Athletic Edge Steeledge',
        img : 'img/ae.jpg',
        link : 'http://amzn.to/2bzbQwc'
      },
      {
        title: 'CON-CRÉT BURNTM',
        img : 'img/con.jpg',
        link : 'http://amzn.to/2bHBQZF'
      },
      {
        title: 'Hyper Max XT',
        img : 'img/hyper.jpg',
        link : 'http://amzn.to/2bzbiX6'
      },
      {
        title: 'Fitness Labs',
        img : 'img/fl.jpg',
        link : 'http://amzn.to/2b41N6X'
      },
      {
        title: 'ANS Performance Ritual',
        img : 'img/ans.jpg',
        link : 'http://amzn.to/2bzaLVb'
      }
    ];

  }]);

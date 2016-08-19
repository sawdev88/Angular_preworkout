var myApp = angular.module('preWorkout', [])
  .controller('featuredItemCtrl', function () {

    var featuredItem = this;

    featuredItem.item = {
      title : 'Neon Sport Volt Creatine Free Preworkout with Beta Alanine',
      img : 'img/neon-sport.jpg',
      link : 'https://www.amazon.com/gp/product/B00VAPRCW8/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00VAPRCW8&linkId=9f7c53f7be429803d8ef0afea7ff195e'
    };

  })
  .controller('itemsCtrl', function () {

    var listItems = this;

    listItems.items = [
      {
        title: 'Optimum Nutrition Gold Standard',
        img : 'img/opt-pre.jpg',
        link : 'https://www.amazon.com/gp/product/B00PYB2X8C/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00PYB2X8C&linkId=3ddee10269292194272b8b23e6e5213b'
      },
      {
        title: 'Cellucor C4',
        img : 'img/c4.jpg',
        link :  'https://www.amazon.com/gp/product/B00VAPRMDM/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00VAPRMDM&linkId=9ad9f1bb6b97aae449fc8cbd94d5c495'
      },
      {
        title: 'Six Star Explosion',
        img : 'img/six.jpg',
        link : 'https://www.amazon.com/gp/product/B00OXLP6H4/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00OXLP6H4&linkId=dc39fded7f34b3c4b6c5e8be7395bdce'
      },
      {
        title: 'Muscle Pharm Arnold Schwarzenegger Series Iron Pump',
        img : 'img/arnold.jpg',
        link : 'https://www.amazon.com/gp/product/B00FCGLHKE/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00FCGLHKE&linkId=02dc0da281fdcfdc80eadc953e079c38'
      },
      {
        title: 'BPI Sports 1.M.R. Vortex',
        img : 'img/bpi.jpg',
        link : 'https://www.amazon.com/gp/product/B00O64JPFM/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00O64JPFM&linkId=40c438fb8d002de61261fcbc8fde901f'
      },
      {
        title: 'RARI NUTRITION - INFINITY',
        img : 'img/rari.jpg',
        link : 'https://www.amazon.com/gp/product/B01DB5RQBQ/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01DB5RQBQ&linkId=2bb19c2b3f61c4ecc8d8366e9ee6c69f'
      },
      {
        title: 'Mr Hyde Intense Energy',
        img : 'img/hyde.jpg',
        link : 'https://www.amazon.com/gp/product/B0182L5S1Y/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0182L5S1Y&linkId=5d18778a01abe81425d2fc65bd2a6f6b'
      },
      {
        title: 'MuscleTech Pro Series Neurocore',
        img : 'img/tech.jpg',
        link : 'https://www.amazon.com/gp/product/B0187S2NLU/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0187S2NLU&linkId=8981f88f41be654b305bc80f9926347d'
      },
      {
        title: 'Optimum Nutrition Amino Energy',
        img : 'img/on.jpg',
        link : 'https://www.amazon.com/gp/product/B005Q8IM6K/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B005Q8IM6K&linkId=40a5c6f418e074d6c66554ba008a3c1d'
      },
      {
        title: 'GAT Clinically Tested Nitraflex, Testosterone Enhancing',
        img : 'img/gat.jpg',
        link : 'https://www.amazon.com/gp/product/B008RL1HBU/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B008RL1HBU&linkId=85073f4eb81308cd3d5b4ecc8b388990'
      },
      {
        title: 'Cobra Labs The Curse',
        img : 'img/cobra.jpg',
        link : 'https://www.amazon.com/gp/product/B0089N51EK/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0089N51EK&linkId=023c990647ba4ba1dcd914dcc6b92067'
      },
      {
        title: 'Betancourt Nutrition - B-Nox',
        img : 'img/b-nox.jpg',
        link : 'https://www.amazon.com/gp/product/B01FY7RXRG/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01FY7RXRG&linkId=d67c6e51da7f788a5ff2a166a68d94ce'
      },
      {
        title: 'ENGN By EVLUTION NUTRITION',
        img : 'img/engn.jpg',
        link : 'https://www.amazon.com/gp/product/B01B833COI/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01B833COI&linkId=10c617b2e274af9e482452a83e88fec0'
      },
      {
        title: 'Universal Nutrition Animal Rage XL',
        img : 'img/rage.jpg',
        link : 'https://www.amazon.com/gp/product/B00GWQ9LNI/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00GWQ9LNI&linkId=d0818d0af79c02cb3e91ee40e28a5701'
      },
      {
        title: 'Forzagen',
        img : 'img/f5.jpg',
        link : 'https://www.amazon.com/gp/product/B01ERK66P6/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01ERK66P6&linkId=b1a35fc598229b19cd093ac03caf9bfb'
      },
      {
        title: 'MuscleTech Anarchy',
        img : 'img/anarchy.jpg',
        link : 'https://www.amazon.com/gp/product/B00VE95NWQ/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00VE95NWQ&linkId=49b5652eea7e3bf23f8a8c079ee974d6'
      },
      {
        title: 'NITROSURGE',
        img : 'img/nitrosurge.jpg',
        link : 'https://www.amazon.com/gp/product/B01ATYWQXK/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01ATYWQXK&linkId=30862ca7707841ee0d3585eb07560052'
      },
      {
        title: 'BPI Sports Pump HD',
        img : 'img/pumphd.jpg',
        link : 'https://www.amazon.com/gp/product/B011GXZTL4/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B011GXZTL4&linkId=cb058db4f44e287ec20791c2cdfe50f4'
      },
      {
        title: 'Nutrex Research Outrage',
        img : 'img/nutrex.jpg',
        link : 'https://www.amazon.com/gp/product/B00VBYJX0W/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00VBYJX0W&linkId=3ccb39aee82e49cde5e07cc95ff97bd1'
      },
      {
        title: 'KRAZ4D',
        img : 'img/kraz4d.jpg',
        link : 'https://www.amazon.com/gp/product/B018TEDNMA/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B018TEDNMA&linkId=fcd3a3eb7580c579c818e0907b8c091f'
      },
      {
        title: 'FINAFLEX Stimul8',
        img : 'img/finaflex.jpg',
        link : 'https://www.amazon.com/gp/product/B00EZJ4ILY/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00EZJ4ILY&linkId=2ba9d786e9d146ac8f370c80648dcaed'
      },
      {
        title: 'Force Factor BRX',
        img : 'img/brx.jpg',
        link : 'https://www.amazon.com/gp/product/B0084N2WVK/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0084N2WVK&linkId=1f3375effbea7f90e8d6f26927c2b6cd'
      },
      {
        title: 'Savage Roar | Dynamik Muscle',
        img : 'img/savage-roar.jpg',
        link : 'https://www.amazon.com/gp/product/B015G3QMPW/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B015G3QMPW&linkId=9e5f043d30559d2f97d04d2aae86c63e'
      },
      {
        title: 'MRM Driven Natural',
        img : 'img/driven.jpg',
        link : 'https://www.amazon.com/gp/product/B0052ONYEI/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0052ONYEI&linkId=ce8d74e063b8c877071c42ee9e1ed8af'
      },
      {
        title: 'MuscleTech Shatter SX-7',
        img : 'img/shatter.jpg',
        link : 'http://amzn.to/2bG6hzg'
      },
      {
        title: 'Primal Potion From Ultrachamp',
        img : 'img/primal.jpg',
        link : 'http://amzn.to/2bqmmJY'
      },
      {
        title: 'VEX',
        img : 'img/vex.jpg',
        link : 'http://amzn.to/2b52Tw6'
      },
      {
        title: 'MAN Sports Pump Powder',
        img : 'img/man.jpg',
        link : 'http://amzn.to/2bG7MNH'
      },
      {
        title: 'Run Everything Labs Show The World Pump Formula',
        img : 'img/stw.jpg',
        link : 'http://amzn.to/2bG89bm'
      },
      {
        title: 'USN 3XT-PUMP',
        img : 'img/3xt.jpg',
        link : 'http://amzn.to/2bG7mXR'
      },
      {
        title: 'VIPER Pre-Workout',
        img : 'img/viper.jpg',
        link : 'http://amzn.to/2b3tvKE'
      },
      {
        title: 'SDC Nutrition About Time Aux',
        img : 'img/aux.jpg',
        link : 'http://amzn.to/2b53QVk'
      },
      {
        title: 'Venum',
        img : 'img/venum.jpg',
        link : 'http://amzn.to/2bqnNYU'
      },
      {
        title: 'H:vol',
        img : 'img/vol.jpg',
        link : 'http://amzn.to/2bG7Z3w'
      },
      {
        title: 'Athletic Edge Steeledge',
        img : 'img/ae.jpg',
        link : 'http://amzn.to/2b3qytO'
      },
      {
        title: 'CON-CRÉT BURNTM',
        img : 'img/con.jpg',
        link : 'http://amzn.to/2bG8gU0'
      },
      {
        title: 'Hyper Max XT',
        img : 'img/hyper.jpg',
        link : 'http://amzn.to/2bqnVHY'
      },
      {
        title: 'Fitness Labs',
        img : 'img/fl.jpg',
        link : 'http://amzn.to/2bhsani'
      },
      {
        title: 'ANS Performance Ritual',
        img : 'img/ans.jpg',
        link : 'http://amzn.to/2bBBrWB'
      }
    ];

  });

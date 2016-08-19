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
        title: 'Optimum Nutrition Gold Standard Pre-Workout',
        img : 'img/opt-pre.jpg',
        link : 'https://www.amazon.com/gp/product/B00PYB2X8C/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00PYB2X8C&linkId=3ddee10269292194272b8b23e6e5213b'
      },
      {
        title: 'Cellucor C4 Pre Workout',
        img : 'img/c4.jpg',
        link :  'https://www.amazon.com/gp/product/B00VAPRMDM/ref=as_li_tl?ie=UTF8&tag=103c6-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00VAPRMDM&linkId=9ad9f1bb6b97aae449fc8cbd94d5c495'
      },
      {
        title: 'Six Star Pre-Workout Explosion',
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
      }
    ];

  });

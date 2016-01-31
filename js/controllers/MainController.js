app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
     {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Thai Peanutbutter Burger',
      description: 'Bacon, jalapeno-pineapple chutney, peanut butter, cilantro.',
      price: 6.75
    },
    
    {
      name: 'The Plains',
      description: 'Red pesto with brocolli, almonds, corn, tomatoes, red onions, turkey + cheddar.',
      price: 19.99
    },
    
    {
      name: 'Ballpark Special',
      description: '1/4lb all beef dog on a poppyseed bun, high life mustard, chopped onion and tomato.',
      price: 6.99 
    }
    ];
  
  $scope.extras = [
    {
     name: 'Truffle Fries',
     description: 'House cut and tossed in fresh grated parmesan cheese and parsley.',
     price: 3.99
    },
    
    {
     name: 'Sweet Potato Fries',
     description: 'Choose sweet or salty.',
     price: 3.99
    },
    
    {
     name: 'Duck Fat Fries',
     description: 'House cut, citrus duck fat, parsley.',
     price: 3.99
    }
    
    ];

}]);
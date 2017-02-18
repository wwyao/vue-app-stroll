import RefineOrder from 'components/shoppingcar/component/RefineOrder.vue';
import AddAddress from 'components/shoppingcar/component/AddAddress.vue';
import Myaddress from 'components/my-address/My-address.vue';
import Paysuccess from 'components/my-pay-success/My-pay-success.vue';

export default {
  routes: [
    {
      path: 'refine-order',
      name: 'refine-order',
      components: {
        refineordercontent: RefineOrder
      },
      children: [{
        path: 'my-address',
        name: 'my-address',
        component: Myaddress,
        children: [{
          path: 'add-address',
          name: 'add-address',
          components: {
            addaddresscontent: AddAddress
          }
        }]
      },
      {
        path: 'pay-success',
        name: 'pay-success',
        component: Paysuccess,
        children: [{
          path: 'add-address',
          name: 'add-address',
          components: {
            addaddresscontent: AddAddress
          }
        }]
      }]
    }
  ]
};

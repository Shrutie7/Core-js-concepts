//createOrder
//proceedToPayment
//showOrderSummary
//updateWallet

const cart = ["pyjama", "kurta", "shirt"];

//consuming
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  }).then(function(orderId){
    return proceedToPayment(orderId);
  }).then(function(paymentInfo){
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
  }).then(function(WalletBalance){
    console.log(WalletBalance);
    return updateWallet(WalletBalance);
  }).then(function(updatedwallet){
    console.log(updatedwallet);
  })
  .catch(function (err) {
    console.log(err.message);
  });

//producers
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //validatecart
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    //get orderId from api call
    const orderId = "7654321";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}
function validateCart(cart) {
  if (cart.length > 0) {
    return true;
  } else return false;
}
function isPaymentSuccess(orderId) {
  if (orderId) {
    return true;
  } else {
    return false;
  }
}
function proceedToPayment(orderId) {
  const pr = new Promise(function (resolve, reject) {
    const paymentInfo = `Rs 1000 for orderId ${orderId}`;
    if (paymentInfo) {
      resolve(paymentInfo);
    }
    if (isPaymentSuccess(orderId)) {
      const err = new Error("Oops Payment is not successful RETRY!!");
      reject(err);
    }
  });
  return pr;
}
function showOrderSummary(paymentInfo) {
  const pr = new Promise(function (resolve, reject) {
    const WalletBalance = `Showing order summary and wallet balance is updated for ${paymentInfo} and is now at Rs 2000 `;
    resolve(WalletBalance);
});
return pr;
}
function updateWallet(WalletBalance) {
  const pr = new Promise(function (resolve, reject) {
    resolve("Wallet has been successfully updated");
});
return pr;
}

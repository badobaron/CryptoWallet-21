$(document).ready(function() {
  var bitcoin = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';
  var btcprice = 0;
  var litecoin = 'https://api.coinmarketcap.com/v1/ticker/litecoin/';
  var litprice = 0;
  var ethereum = 'https://api.coinmarketcap.com/v1/ticker/ethereum/';
  var ethprice = 0;
  var lisk = 'https://api.coinmarketcap.com/v1/ticker/lisk/';
  var lskprice = 0;
  var ripple = 'https://api.coinmarketcap.com/v1/ticker/ripple/';
  var ripprice = 0;
  var dao = 'https://api.coinmarketcap.com/v1/ticker/the-dao/';
  var daoprice = 0;
  var dash = 'https://api.coinmarketcap.com/v1/ticker/dash/';
  var dashprice = 0;
  var doge = 'https://api.coinmarketcap.com/v1/ticker/dogecoin/';
  var dogeprice = 0;
  var maid = 'https://api.coinmarketcap.com/v1/ticker/maidsafecoin/';
  var maidprice = 0;
  var digx = 'https://api.coinmarketcap.com/v1/ticker/digixdao/';
  var digxprice = 0;

  $.getJSON(bitcoin, function(data) {
    btcprice = data[0].price_usd;
    $(".tickbtc").append('<h3>$' + btcprice.toFixed(2) + '</h3>');
  });

  $.getJSON(litecoin, function(data) {
    litprice = data[0].price_usd;
    $(".tickltc").append('<h3>$' + litprice.toFixed(2) + '</h3>');
  });
  $.getJSON(ethereum, function(data) {
    ethprice = data[0].price_usd;
    $(".ticketh").append('<h3>$' + ethprice.toFixed(2) + '</h3>');
  });
  $.getJSON(lisk, function(data) {
    lskprice = data[0].price_usd;
    $(".ticklsk").append('<h3>$' + lskprice.toFixed(2) + '</h3>');
  });
  $.getJSON(ripple, function(data) {
    ripprice = data[0].price_usd;
    $(".tickxrp").append('<h3>$' + ripprice.toFixed(2) + '</h3>');
  });
  $.getJSON(dao, function(data) {
    daoprice = data[0].price_usd;
    $(".tickdao").append('<h3>$' + daoprice.toFixed(2) + '</h3>');
  });
  $.getJSON(dash, function(data) {
    dashprice = data[0].price_usd;
    $(".tickdash").append('<h3>$' + dashprice.toFixed(2) + '</h3>');
  });
  $.getJSON(doge, function(data) {
    dogeprice = data[0].price_usd;
    $(".tickdoge").append('<h3>$' + dogeprice.toFixed(2) + '</h3>');
  });
  $.getJSON(maid, function(data) {
    maidprice = data[0].price_usd;
    $(".tickmaid").append('<h3>$' + maidprice.toFixed(2) + '</h3>');
  });
  $.getJSON(digx, function(data) {
    digxprice = data[0].price_usd;
    $(".tickdgd").append('<h3>$' + digxprice.toFixed(2) + '</h3>');
  });

  $('#submit').on('click', function() {
    var btc = document.getElementById('btcinp').value;
    var lit = document.getElementById('litinp').value;
    var eth = document.getElementById('ethinp').value;
    var lsk = document.getElementById('lskinp').value;
    var rip = document.getElementById('ripinp').value;
    var tdao = document.getElementById('daoinp').value;
    var dsh = document.getElementById('dashinp').value;
    var dog = document.getElementById('doginp').value;
    var msc = document.getElementById('mscinp').value;
    var dig = document.getElementById('diginp').value;

    total = '$ ' + ((btc * btcprice) + (lit * litprice) + (eth * ethprice) + (lsk * lskprice) + (rip * ripprice) + (tdao * daoprice) + (dsh * dashprice) + (dog * dogeprice) + (msc * maidprice) + (dig * digxprice)).toFixed(2);
    $('#txt2').val(total);

  });
});

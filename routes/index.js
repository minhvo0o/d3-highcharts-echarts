var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nhóm 4' });
});

router.get('/Echarts', function(req, res, next) {
  res.render('Echarts', { title: 'Nhóm 4' });
});

router.get('/Highcharts', function(req, res, next) {
  res.render('Highcharts', { title: 'Nhóm 4' });
});

module.exports = router;

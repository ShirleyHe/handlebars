var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/base_dd', function(req, res, next) {
  res.render('demo', { dadius: [
    {
      "id": 1,
      "name": "<p>一大队</p>",
      "responsiblearea": "陆家嘴、北蔡、六里、东明部分地区"
    },
    {
      "id": 2,
      "name": "<p>二大队</p>",
      "responsiblearea": "迪士尼、北蔡、六里、东明部分地区"
    },
    {
      "id": 3,
      "name": "<p>三大队</p>",
      "responsiblearea": "张江高科、北蔡、六里、东明部分地区"
    },
  ]});
});

router.get('/dadui/queryAll', function(req, res, next) {
  res.send([
    {
      "id": 1,
      "name": "<p>一大队</p>",
      "responsiblearea": "陆家嘴、北蔡、六里、东明部分地区"
    },
    {
      "id": 2,
      "name": "<p>二大队</p>",
      "responsiblearea": "迪士尼、北蔡、六里、东明部分地区"
    },
    {
      "id": 3,
      "name": "<p>三大队</p>",
      "responsiblearea": "张江高科、北蔡、六里、东明部分地区"
    },
  ]);
});

module.exports = router;

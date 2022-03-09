var mocha = require('mocha');
var should = require('should');
var sortJsonArray = require('./');

describe('error', function() {
  it('Error should be thrown because the passed value is not a valid array', function() {
    (function() {
      sortJsonArray({});
    }).should.throw('sort-json-array expects an array.');
  });

  it('Error should be thrown because the passed value is not a valid array', function() {
    (function() {
      sortJsonArray("");
    }).should.throw('sort-json-array expects an array.');
  });

  it('Error should be thrown because an incorrect argument is passed', function() {
    (function() {
      var arr = [{key: 'e'}, {key: 'a'}, {key: 'f'}];
      sortJsonArray(arr, 'key','xyz').should.eql([
        {key: 'a'},
        {key: 'e'},
        {key: 'f'}
      ])
    }).should.throw('Wrong argument.');
  });

});

describe('empty array', function() {
  it('An empty array should be returned as a null value is passed:', function() {
    sortJsonArray().should.eql([]);
    sortJsonArray(undefined).should.eql([]);
    sortJsonArray(null).should.eql([]);
  })
});

describe('sortJsonArray', function() {
  it('Array should be sorted by a proprty in ascending order', function() {
    var arr = [{key: 'e'}, {key: 'a'}, {key: 'f'}];
    sortJsonArray(arr, 'key').should.eql([
      {key: 'a'},
      {key: 'e'},
      {key: 'f'}
    ])
  });

  it('Array should be sorted by a proprty in ascending order', function() {
    var arr = [{key: 'e'}, {key: 'a'}, {key: 'f'}];
    sortJsonArray(arr, 'key','asc').should.eql([
      {key: 'a'},
      {key: 'e'},
      {key: 'f'}
    ])
  });

  it('Array should be sorted by a proprty in descending order', function() {
    var arr = [{key: 'e'}, {key: 'a'}, {key: 'f'}];
    sortJsonArray(arr, 'key','des').should.eql([
      {key: 'f'},
      {key: 'e'},
      {key: 'a'}
    ])
  });

  it('Array should be sorted by a proprty in ascending order even if there are null values', function() {
    var arr = [{key: null}, {key: 'x'}, {key: 'a'}];
    sortJsonArray(arr, 'key','asc').should.eql([
      {key: null},
      {key: 'a'},
      {key: 'x'}
    ])
  });

});

'use strict';

describe('golosuy.version module', function() {
  beforeEach(module('golosuy.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});

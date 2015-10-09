/* jshint expr:true */
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';

describe('Acceptance: Presentation', function() {
  beforeEach(function() {
    this.application = startApp();
  });

  afterEach(function() {
    this.application.destroy();
  });

  describe("loading the root of the app", function() {
    beforeEach(function() {
      visit('/');
    });
    it('navigates to the first slide', function() {
      expect(currentPath()).to.equal('presentation.slide');
    });
    it("contains the the-first-slide.hbs content", function() {
      expect($('.spec-the-first-slide-title')).to.have.text('Slide One');
    });
  });
});

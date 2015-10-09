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
      expect($('.spec-the-first-slide-title')).to.have.text('Ember Presents!');
    });
    describe("hitting the left arrow", function() {
      beforeEach(function() {
        keyEvent(window, 'keydown', 37);
        keyEvent(window, 'keyup', 37);
      });
      it("remains on the first slide", function() {
        expect($('.spec-the-first-slide-title')).to.have.text('Ember Presents!');
      });
    });
    describe("hitting the right arrow", function() {
      beforeEach(function() {
        keyEvent(window, 'keydown', 39);
        keyEvent(window, 'keyup', 39);
      });
      it("transitions to the seconds slide", function() {
        expect($('.spec-the-second-slide-title')).to.have.text('Is This a Good Idea?');
      });
    });

  });
});

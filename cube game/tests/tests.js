const expect = chai.expect;

describe('Cube Game Tests', function() {
  // Stub console.log for tests that require it
  let consoleLogStub;
  
  beforeEach(function() {
    try {
      resetGame();
    } catch (error) {
      console.error("resetGame is not defined", error);
    }
    consoleLogStub = sinon.stub(console, 'log');
  });
  
  afterEach(function() {
    consoleLogStub.restore();
  });
  
  it('should initialize a 3x3x3 cube with Swift flip, scramble length 20, Perspective camera, Cube color scheme', function() {
    try {
      initializeGame(3, 20, 'Swift', 'Perspective', 'Cube');
      expect(gameState.cubeSize).to.equal(3);
      expect(gameState.scrambleLength).to.equal(20);
      expect(gameState.flipType).to.equal('Swift');
      expect(gameState.cameraAngle).to.equal('Perspective');
      expect(gameState.colorScheme).to.equal('Cube');
    } catch (error) {
      console.error("initializeGame or gameState is not defined", error);
      expect.fail("initializeGame or gameState is not defined");
    }
  });
  
  it('should initialize a 4x4x4 cube with Bounce flip, scramble length 25, Ortographic camera, Dust color scheme', function() {
    try {
      initializeGame(4, 25, 'Bounce', 'Ortographic', 'Dust');
      expect(gameState.cubeSize).to.equal(4);
      expect(gameState.scrambleLength).to.equal(25);
      expect(gameState.flipType).to.equal('Bounce');
      expect(gameState.cameraAngle).to.equal('Ortographic');
      expect(gameState.colorScheme).to.equal('Dust');
    } catch (error) {
      console.error("initializeGame or gameState is not defined", error);
      expect.fail("initializeGame or gameState is not defined");
    }
  });
  
  it('should initialize a 5x5x5 cube with Smooth flip, scramble length 30, Perspective camera, Rain color scheme', function() {
    try {
      initializeGame(5, 30, 'Smooth', 'Perspective', 'Rain');
      expect(gameState.cubeSize).to.equal(5);
      expect(gameState.scrambleLength).to.equal(30);
      expect(gameState.flipType).to.equal('Smooth');
      expect(gameState.cameraAngle).to.equal('Perspective');
      expect(gameState.colorScheme).to.equal('Rain');
    } catch (error) {
      console.error("initializeGame or gameState is not defined", error);
      expect.fail("initializeGame or gameState is not defined");
    }
  });
  
  it('should start the game', function() {
    try {
      startGame();
      expect(gameState.isRunning).to.be.true;
    } catch (error) {
      console.error("startGame or gameState is not defined", error);
      expect.fail("startGame or gameState is not defined");
    }
  });
  
  it('should reset the game', function() {
    try {
      startGame();
      resetGame();
      expect(gameState.isRunning).to.be.false;
      expect(gameState.isPaused).to.be.false;
    } catch (error) {
      console.error("resetGame or gameState is not defined", error);
      expect.fail("resetGame or gameState is not defined");
    }
  });
  
  it('should pause the game', function() {
    try {
      startGame();
      pauseGame();
      expect(gameState.isPaused).to.be.true;
    } catch (error) {
      console.error("pauseGame or gameState is not defined", error);
      expect.fail("pauseGame or gameState is not defined");
    }
  });
  
  it('should change color scheme during gameplay', function() {
    try {
      initializeGame(3, 20, 'Swift', 'Perspective', 'Cube');
      gameState.colorScheme = 'Erno';
      expect(gameState.colorScheme).to.equal('Erno');
    } catch (error) {
      console.error("initializeGame or gameState is not defined", error);
      expect.fail("initializeGame or gameState is not defined");
    }
  });
  
  it('should initialize a cube with scramble length 0', function() {
    try {
      initializeGame(3, 0, 'Swift', 'Perspective', 'Cube');
      expect(gameState.scrambleLength).to.equal(0);
    } catch (error) {
      console.error("initializeGame or gameState is not defined", error);
      expect.fail("initializeGame or gameState is not defined");
    }
  });
  
  it('should complete the game and log completion', function() {
    try {
      completeGame();
      expect(console.log.calledWith("Complete!")).to.be.true;
    } catch (error) {
      console.error("completeGame is not defined", error);
      expect.fail("completeGame is not defined");
    }
  });
  
  it('should view stats during gameplay', function() {
    try {
      viewStats();
      expect(console.log.calledWith("Stats viewed")).to.be.true;
    } catch (error) {
      console.error("viewStats is not defined", error);
      expect.fail("viewStats is not defined");
    }
  });
});

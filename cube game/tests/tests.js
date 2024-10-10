const expect = chai.expect;

describe('Tetris Game Tests', function() {
  
  // Helper function to safely execute functions
  function safeFunctionCall(fn, ...args) {
    try {
      return fn(...args);
    } catch (error) {
      throw new Error(`${fn.name || 'Function'} is not defined or failed.`);
    }
  }
  
  it('Test Case 1: Initialize the grid with 10x20 cells.', function() {
    let grid;
    try {
      grid = createGrid();
    } catch (error) {
      throw new Error('createGrid is not defined or failed.');
    }
    expect(grid.length).to.equal(20); // Check rows
    expect(grid[0].length).to.equal(10); // Check columns
  });
  
  it('Test Case 2: Generate the first piece when the game starts.', function() {
    let piece;
    try {
      piece = createPiece();
    } catch (error) {
      throw new Error('createPiece is not defined or failed.');
    }
    expect(piece).to.not.be.null;
    expect(piece.x).to.equal(3); // Initial x position
    expect(piece.y).to.equal(-2); // Initial y position (starting above the grid)
  });
  
  it('Test Case 3: Move the active piece left.', function() {
    piece = createPiece();
    const initialX = piece.x;
    try {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    } catch (error) {
      throw new Error('Keydown event for "ArrowLeft" is not defined or failed.');
    }
    expect(piece.x).to.equal(initialX - 1);
  });
  
  it('Test Case 4: Move the active piece right.', function() {
    piece = createPiece();
    const initialX = piece.x;
    try {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    } catch (error) {
      throw new Error('Keydown event for "ArrowRight" is not defined or failed.');
    }
    expect(piece.x).to.equal(initialX + 1);
  });
  
  it('Test Case 5: Move the active piece down.', function() {
    piece = createPiece();
    const initialY = piece.y;
    try {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    } catch (error) {
      throw new Error('Keydown event for "ArrowDown" is not defined or failed.');
    }
    expect(piece.y).to.equal(initialY + 1);
  });
  
  it('Test Case 6: Rotate the active piece.', function() {
    piece = createPiece();
    const initialMatrix = JSON.stringify(piece.matrix);
    try {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    } catch (error) {
      throw new Error('Keydown event for "ArrowUp" is not defined or failed.');
    }
    const rotatedMatrix = JSON.stringify(piece.matrix);
    expect(rotatedMatrix).to.not.equal(initialMatrix); // Ensure the piece rotated
  });
  
  it('Test Case 7: Clear a completed row.', function() {
    grid[19].fill(1); // Simulate a completed row at the bottom
    try {
      clearRows();
    } catch (error) {
      throw new Error('clearRows is not defined or failed.');
    }
    expect(grid[19].every(cell => cell === 0)).to.be.true; // The bottom row should now be empty
  });
  
  it('Test Case 8: Pause the game.', function() {
    isPaused = false;
    try {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'p' }));
    } catch (error) {
      throw new Error('Keydown event for "p" is not defined or failed.');
    }
    expect(isPaused).to.be.true; // Check if the game is paused
  });
  
  it('Test Case 9: Resume the game.', function() {
    isPaused = true;
    try {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'p' }));
    } catch (error) {
      throw new Error('Keydown event for "p" is not defined or failed.');
    }
    expect(isPaused).to.be.false; // Check if the game resumes
  });
  
  it('Test Case 10: Increase the score after clearing rows.', function() {
    const initialScore = score;
    grid[19].fill(1); // Simulate a completed row
    try {
      clearRows();
    } catch (error) {
      throw new Error('clearRows is not defined or failed.');
    }
    expect(score).to.be.greaterThan(initialScore);
  });
  
  it('Test Case 11: End the game when a piece cannot be placed.', function() {
    grid[0].fill(1); // Fill the top row to simulate game over
    piece = createPiece();
    let result;
    try {
      result = collide(piece.x, piece.y);
    } catch (error) {
      throw new Error('collide is not defined or failed.');
    }
    expect(result).to.be.true; // Collision should occur, meaning the game should end
  });
  
});

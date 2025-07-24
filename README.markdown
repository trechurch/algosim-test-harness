# AstraTest

A TypeScript test harness inspired by AlgoSim's `SelfTest.pas`, designed for rigorous expression validation with support for symbolic math, matrices, colors, and future integration with simulation visuals or multi-object governance logic.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/astratest.git
   cd astratest
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Build the Project**:
   ```bash
   npm run build
   ```

4. **Run the Tests**:
   ```bash
   npm start
   ```

## Project Structure

- `src/Types.ts`: Core type definitions.
- `src/Evaluator.ts`: Expression evaluation logic (stub).
- `src/TestCore.ts`: Central test dispatcher.
- `src/Comparators.ts`: Type-specific comparison logic.
- `src/Logger.ts`: Structured logging and progress tracking.
- `src/TestRunner.ts`: Manages test sequences and chapters.
- `src/index.ts`: Entry point with example tests.

## Extending the Harness

- Add new types in `Types.ts` and corresponding comparators in `Comparators.ts`.
- Extend `Evaluator.ts` with a real parser (e.g., `mathjs`) for complex expressions.
- Integrate Three.js for visualization by adding a `Visualizer.ts` module.

## License

MIT
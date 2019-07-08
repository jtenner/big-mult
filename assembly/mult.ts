/**
 * Implementation of Hopcroft's giant matrix multiplaction by sampling
 */

export type Scalar = i32;
export type Probability = f32;
export type Vector = Scalar[];
export type ProbabilityVector = f32[];
export type Matrix = Vector[];
export type ScalarTransform = (n: Scalar) => Scalar;

/**
 * Functon that returns an integer index k of n where  k in (0, n-1)
 * @param n the size of the array to sample
 */
function sampleIndex(n: Scalar): Scalar {
  return Math.round(Math.random() * n);
}

/**
 * selectColumn
 * @param m a matrix
 * @param f a scalar transformation function which picks the column
 */
export function selectColumn(m: Matrix, f: ScalarTransform): Vector {
  return m[f(m.length)];
}

/**
 * selectRow
 * implemented with for loops to be as fast for huge matrices (map gets slow for million+ entries)
 * @param m a matrix
 * @param f function to select the row
 */
export function selectRow(m: Matrix, f: ScalarTransform): Vector {
  const len = m.length;
  const height = m[0].length;
  const index = f(height);
  let result: Scalar[] = [];
  for (let i = 0; i < len; ++i) {
    result.push(m[i][index]);
  }
  return result;
}

/**
 * Vector dot product
 * @param x a vector
 * @param y a vector
 */
export function dot(x: Vector, y: Vector): Scalar {
  let result: Scalar = 0;
  const len: Scalar = x.length;
  for (let i = 0; i < len; ++i) {
    result += x[i] * y[i];
  }
  return result;
}

/**
 * Sometimes we want to do some precomputation in order to avoid unecessary loops
 * @param m a matrix to be transposed
 */
export function transpose(m: Matrix): Matrix {
  const mT: Matrix = [];
  for (let k = 0; k < m[0].length; k++) {
    mT[k] = [];
  }
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
      mT[j][i] = m[i][j];
    }
  }
  return mT;
}

/**
 * create a vector of probabilities that a column/row is chosen for a single random sample
 * @param a a vector
 * @param b a vector
 */
export function scalePKs(a: Matrix, b: Matrix): ProbabilityVector {
    // tranpose b
    // dot all the column/row pairs
    // scale them all by their sum
  return null;
}

/**
 * giantMult returns a low error sampled matrix product AB
 * @param a The first matrix
 * @param b The second matrix
 */
export function giantMult(a: Matrix, b: Matrix): Matrix {
  return null; //TODO
}

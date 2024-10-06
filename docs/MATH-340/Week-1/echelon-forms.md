# Echelon Forms

!!! abstract
    - Learn what [echelon form (EF)](#echelon-form) and [reduced row echelon form (RREF)](#reduced-row-echelon-form) are and how to get a matrix into these forms.
    - Understand how to find the general solution to a linear system of equations by row reduction to EF or RREF.
    - Determine when a system  has no solution, a unique solution, or infinitely many solutions.

## Echelon Form

A matrix is in **echelon form (EF)** if it satisfies the following conditions:

- All non-zero rows are above any zero rows.
- Each non-zero leading entry of a row is to the left of the non-zero leading entries of lower rows.

!!! example "Example: Matrices in Echelon Form"

    Let $*$ denote any number and $\fbox{*}$ denote any non-zero number. The following matrices are in echelon form:

    $$
    \begin{bmatrix}
    \fbox{*} & * & * \\
    0 & 0 & \fbox{*} \\
    \end{bmatrix}
    \quad \text{and} \quad
    \begin{bmatrix}
    0 & \fbox{*} & * & * & * & * \\
    0 & 0 & 0 & \fbox{*} & * & * \\
    0 & 0 & 0 & 0 & 0 & \fbox{*} \\
    0 & 0 & 0 & 0 & 0 & 0 \\
    \end{bmatrix}
    $$

### Reduced Row Echelon Form

A matrix is in reduced row echelon form (RREF) if it satisfies [echelon form](#echelon-form) and the following conditions:

- Non-zero leading entries are $1$.
- There are zeros above and below each leading $1$.

!!! example "Example: Matrices in Reduced Row Echelon Form"

    Let $*$ denote any number and $\fbox{*}$ denote any non-zero number. The following matrices are in reduced row echelon form:

    $$
    \begin{bmatrix}
    \fbox{1} & * & 0 \\
    0 & 0 & \fbox{1} \\
    \end{bmatrix}
    \quad \text{and} \quad
    \begin{bmatrix}
    0 & 1 & * & * & * & * \\
    0 & 0 & 0 & 1 & * & * \\
    0 & 0 & 0 & 0 & 0 & 1 \\
    0 & 0 & 0 & 0 & 0 & 0 \\
    \end{bmatrix}
    $$

!!! tip "Theorem"
    - Any matrix can be put into a **unique** reduced echelon form by row operations.
    - Row operations do not change the solution set of a linear system.

## Row Reduction

### To Echelon Form

Work top left to bottom right to put a matrix into echelon form:

1. Find the leftmost column with a non-zero entry.
2. Make the leading entry $1$ by scaling the row.
3. Use row operations to make all entries below the leading entry $0$.
4. Repeat for the next column.
5. Continue until the matrix is in echelon form.

### To Reduced Row Echelon Form

To put a matrix into reduced row echelon form:

1. Put the matrix into echelon form.
2. Make the leading entry $1$.
3. Use row operations to make all entries above and below the leading entry $0$.
4. Repeat for the next row.
5. Continue until the matrix is in reduced row echelon form.

!!! note
    - A matrix can have multiple echelon forms, as the steps to get to go from echelon form to reduced row echelon form are all echelon forms.

## Terminology

If a matrix is in echelon form:

- The **pivot** is a non-zero leading entry.
- The **pivot column** is the column with the pivot.
- The **pivot variable** is the variable corresponding to the pivot column.
- The **free column** is a non-pivot column in the coefficient matrix.
- The **free variable** is the variable corresponding to the free column.

!!! example

    $$
    \left[
    \begin{array}{ccccc|c}
    \fbox{1} & -1 & 0 & -5 & 0 & -9 \\
    0 & 0 & \fbox{1} & 4 & 0 & 4 \\
    0 & 0 & 0 & 0 & \fbox{1} & 3 \\
    \end{array}
    \right]
    $$

    - Pivots are marked as $\fbox{x}$.
    - Pivot columns are columns $1$, $3$, and $5$.
    - Pivot variables are variables $x_1$, $x_3$, and $x_5$.
    - Free columns are columns without pivots, so columns $2$ and $4$ are free columns.
    - Free variables are variables $x_2$ and $x_4$.

## Solving a General Linear System

To solve a general linear system:

1. Derive the augmented matrix from the system.
2. Put the matrix into reduced row echelon form.
3. Isolate the pivot variables in terms of the free variables (if any).
4. Write the general solution, with free variables as parameters (parametrization).

## Consistent/Inconsistent Systems

**Consistent System:** A linear system that has at least one solution.
**Inconsistent System:** A linear system that has no solutions.

### Determining Consistency

With a matrix in reduced row echelon form:

- A system is **inconsistent** if and only if the last column is pivot row of $[0 \ldots 0 | b]$.
- A system is **consistent** if and only if the last column is not a pivot row of $[0 \ldots 0 | b]$ and there are no free variables, resulting in a unique solution.
- A system is **consistent** if and only if the last column is not a pivot row of $[0 \ldots 0 | b]$ and there are free variables, resulting in infinitely many solutions.
# Linear Equations

!!! abstract
    - Review systems of linear equations and basic methods of solving them
    - Learning how to convert systems of linear equations with [augmented matrices](#augmented-matrices) and use row reduction to simplify them

## Review of Systems of Linear Equations

Linear Algebra is a mathematics emerging from solving systems of linear equations.


### Solving Linear Equations

!!! example
    Find all $x$, $y$ such that $x-y=-2$ and $3x-6y=-15$

    #### Method 1 (Substitution)
    Solving for one variable in an equation, and substituting into the other

    $$
    \begin{align*}
    & x - y = -2 \\
    & 3x - 6y = -15 \\\\
    & x = y - 2 \\\\
    & 3(y - 2) - 6y = -15 \\
    & 3y - 6 - 6y = -15 \\
    & -3y - 6 = -15 \\
    & -3y = -9 \\
    & y = 3 \\\\
    & x = 3 - 2 \\
    & x = 1 \\\\
    & x = 1, y = 3 \quad \blacksquare
    \end{align*}
    $$

    !!! warning
        The issue with this method gets harder with more variables and equations

    #### Method 2 (Elimination)
    Adding equations, subtracting equations, multiplying equations to simplify equations in a way to eliminate variables

    $$
    \begin{align*}
    & x-y=-2\\
    & 3x-6y=-15\\\\
    & x-y=-2\\
    & 0x-3y=-9 \\\\
    & y=3\\
    & x=1\\\\
    & x = 1, y = 3 \quad \blacksquare
    \end{align*}
    $$

    #### Geometric Picture

    <iframe src="https://www.desmos.com/calculator/w4xmdqoptx?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

    Graphically, where the two lines meet is the solution to the system

### Generalized Possible Solutions

1. One Solution: Lines intersect exactly once
2. No Solution: Lines don't intersect
3. Infinite Solutions: Lines are the same

## Elimination

!!! example
    Find all $x$, $y$, $z$ such that $x-2y+4z=1$ and $x+y+7z=3$

    $$
    \begin{align*}
    & x-2y+4z=1\\
    & x+y+7z=3\\\\
    & x-2y+4z=1\\
    & 3y+3z=2\\\\
    & 3y+3z=2 \rightarrow y=-z+\frac{2}{3}\\
    & x-2y+4z=1 \rightarrow x-2(-z+\frac{2}{3}) + 4z = 1 \rightarrow -6z + \frac{7}{3}\\\\
    & (x, y, z) = (-6z + \frac{7}{3}, -z + \frac{2}{3}, z) \quad \blacksquare
    \end{align*}
    $$

In the example above, $z$ is a free variable, meaning $z$ can be any value

Ideally, we want a systematic way to solve complex systems of linear equations. Luckily, there are matrices

## Augmented Matrices

!!! abstract "Linear Equation in $n$ variables"
    A linear equation in $n$ variables $x_1, x_2, \ldots, x_n$ is an equation of the form $a_1x_1 + a_2x_2 + \ldots + a_nx_n = b$ where $a_1, a_2, \ldots, a_n, b$ are constants

### General Linear System
A system of $m$ linear equations in $n$ variables is a set of equations of the form:

$$
\begin{align*}
a_{11}x_1 + a_{12}x_2 + \ldots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \ldots + a_{2n}x_n &= b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \ldots + a_{mn}x_n &= b_m
\end{align*}
$$

Constants are $a_{ij}$ and $b_i$, where $i$ is the row and $j$ is the column (based off a one-indexed system)

### Augmented Matrix

An augmented matrix is a matrix (rectangular array of numbers) that represents a general linear system

$$
\left[
\begin{array}{cccc|c}
a_{11} & a_{12} & \ldots & a_{1n} & b_1 \\
a_{21} & a_{22} & \ldots & a_{2n} & b_2 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{m1} & a_{m2} & \ldots & a_{mn} & b_m
\end{array}
\right]
$$

The vertical line separates the coefficient matrix (typically denoted as $A$) and the constant matrix

!!! abstract
    - Goal: Find general solution to linear system
    - Strategy: "Combine" equations (rows of the matrix) to eliminate variables

### Row Operations

Given equations $E_1, E_2, \ldots, E_m$, we can perform the following operations:

1. Scale (multiply) row/equation by a non-zero constant. ($cE_i \rightarrow E_i$)
2. Add/subtract a multiple of one row/equation to another row/equation. ($cE_i + E_j \rightarrow E_j$)
3. Interchange two rows/equations. ($E_i \leftrightarrow E_j$)

!!! example
    Find all $x$, $y$ such that $x-y=-2$ and $3x-6y=-15$

    $$
    \begin{align*}
    & \left[
    \begin{array}{cc|c}
    1 & -1 & -2 \\
    3 & -6 & -15
    \end{array}
    \right]
    \quad
    -3R_1 + R_2 \rightarrow R_2 \\
    & = \left[
    \begin{array}{cc|c}
    1 & -1 & -2 \\
    0 & -3 & -9
    \end{array}
    \right]
    \end{align*}
    $$

!!! example
    Find all $x$, $y$, $z$ such that $x-2y+4z=1$ and $x+y+7z=3$

    $$
    \begin{align*}
    & \left[
    \begin{array}{ccc|c}
    1 & -2 & 4 & 1 \\
    1 & 1 & 7 & 3
    \end{array}
    \right]
    \quad
    -R_1 + R_2 \rightarrow R_2 \\
    & = \left[
    \begin{array}{ccc|c}
    1 & -2 & 4 & 1 \\
    0 & 3 & 3 & 2
    \end{array}
    \right]
    \end{align*}
    $$

Solving linear systems using matrices is more efficient and systematic than substitution or elimination


# Week 1

!!! abstract "At a Glance"
    - Topics: Systems of Linear Equations, Solutions and Elementary Operations, Gaussian Elimination
    - Readings: Chapter 1.1-1.2
    - Practice Problems:
        - 1.1: 1,7, 8, 10, 14
        - 1.2: 1-5, 8-12, 22  1.3:
    - Homework: None due, Start working on homework
    - Discussion: None this week

## Chapter 1: Systems of Linear Equations

### Section 1.1: Solutions and Elementary Operations

!!! example
    In a Wisconsin forest, there are robins and badgers.
    Together they have 18 heads and 56 legs.
    How many robins and badgers are in the forest?

    $$
    \begin{align*}
    r + b &= 18 \\
    2r + 4b &= 56
    \end{align*}
    $$

    Using equations, we can solve for the number of robins and badgers in the forest.

#### Linear Equations

An equation of the form $a_1x_1 + a_2x_2 + \ldots + a_nx_n = b$ is called a **linear equation**

- The real (or complex) quantities $a_1, a_2, \ldots, a_n, b$ are **constants** (coefficients)
- The variables $x_1, x_2, \ldots, x_n$ are called **unknowns**

Referencing the example above, $r$ and $b$ are the unknowns, and 18 and 56 are the constants.

!!! example

    What are some equations that are not linear equations?

    $$
    \begin{align*}
    xy &= 1 \\
    \sin(x) + y &= 2 \\
    x^2 + y^2 &= 1
    \end{align*}
    $$

More generally, a system of $m$ linear equations in $n$ unknowns $x_1, x_2, \ldots, x_n$ is a set of $m$ equations each with $n$ unknowns of the form:

$$
\begin{align*}
a_{11}x_1 + a_{12}x_2 + \ldots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \ldots + a_{2n}x_n &= b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \ldots + a_{mn}x_n &= b_m
\end{align*}
$$

A system of linear equations is also called a **linear system**.

A solution to a linear system is a sequence of numbers $s_1, s_2, \ldots, s_n$ that satisfies all the equations in the system when substituted for $x_1, x_2, \ldots, x_n$.

Let $(*)$ be the linear system above:

- If $(*)$ has a solution, it is called **consistent** (it may have one or infinitely many solutions)
- If $(*)$ has no solution, it is called **inconsistent**
- If $(*)$ has $b_1 = b_2 = \ldots = b_m = 0$, it is called a **homogeneous system**
    - A homogeneous system always has at least one solution: the trivial solution $x_1 = x_2 = \ldots = x_n = 0$
    - A homogeneous system may have nontrivial solutions, where not each $x_i$ is 0

Consider another system of $r$ linear equations in $n$ unknowns:

$$
\begin{align*}
c_{11}x_1 + c_{12}x_2 + \ldots + c_{1n}x_n &= d_1 \\
c_{21}x_1 + c_{22}x_2 + \ldots + c_{2n}x_n &= d_2 \\
\vdots \\
c_{r1}x_1 + c_{r2}x_2 + \ldots + c_{rn}x_n &= d_r
\end{align*}
$$

Let $(**)$ be the linear system above:

The systems $(*)$ and $(**)$ are **equivalent** if they have the same solution set.

!!! example
    In another Wisconsin forest, there are also robins and badgers.
    Together they have 18 heads, 36 eyes, and 56 legs.
    How many robins and badgers are in the forest?
    Can we use any new terminology to describe this system?

    $$
    \begin{align*}
    r + b &= 18 \\
    2r + 4b &= 56 \\
    2r + 2b &= 36
    \end{align*}
    $$

!!! example
    In a third Wisconsin forest, there are deer and badgers.
    Together they have 18 heads and 70 legs.
    How many deer and badgers are in the forest?
    Can we use any new terminology to describe this system?

    $$
    \begin{align*}
    d + b &= 18 \\
    4d + 4b &= 70
    \end{align*}
    $$

    This system turns out to be inconsistent, which means there is no solution.

!!! abstract "Definition/Theorem"

    The following operations, called **elementary operations**, can be performed on a linear system to produce an equivalent system:

    - Interchange two equations ($E_i \leftrightarrow E_j$)
    - Multiply an equation by a nonzero constant ($cE_i$, where $c \neq 0$)
    - Add a multiple of one equation to another equation ($E_i + cE_j$)

We track these operations using an array/matrix to record the coefficients of the linear system.

The coefficient matrix of the linear system $(*)$ is the $m \times n$ matrix:

$$
A=
\begin{bmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
a_{21} & a_{22} & \ldots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \ldots & a_{mn}
\end{bmatrix}
$$

We can also build a $m \times 1$ matrix that includes the constants on the right-hand side of the linear system. This is known as the **constant matrix** (or **column vector**) representing the constant terms of the linear equations.

$$
b =
\begin{bmatrix}
b_1 \\
b_2 \\
\vdots \\
b_m
\end{bmatrix}
$$

Adjoining the coefficient matrix and the constant matrix gives us the **augmented matrix** of the linear system $(*)$:

$$
\left[
\begin{array}{c:c}
A & b
\end{array}
\right]
=
\left[
\begin{array}{cccc:c}
a_{11} & a_{12} & \ldots & a_{1n} & b_1 \\
a_{21} & a_{22} & \ldots & a_{2n} & b_2 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{m1} & a_{m2} & \ldots & a_{mn} & b_m
\end{array}
\right]
$$


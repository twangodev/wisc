# Vector Equations

!!! abstract
    - Learn what vectors are and what $\mathbb{R}^n$ represents.
    - Define a linear combination and span of a set of vectors.
    - Understand how to see if a vector $\mathbf{b}$ can be written as a linear combination of a set of vectors computationally and conceptually.

## Vectors in n-Space

$\mathbb{R}$ represent real numbers, which can be thought of as an infinite line, in one dimension.

$\mathbb{R}^2$ are ordered pairs of real numbers, which can represent a plane.

$$
\mathbb{R}^2 = (x, y) \quad x, y \in \mathbb{R}
$$

$\mathbb{R}^3$ are ordered triples of real numbers, which can represent three-dimensional space.

$$
\mathbb{R}^3 = (x, y, z) \quad x, y, z \in \mathbb{R}
$$

In general, $\mathbb{R}^n$ are a set of $n$-tuples $x_1, x_2, \ldots x_n$ of real numbers, which can represent $n$-dimensional space.

Elements of $\mathbb{R}^n$ are usually written as a column vector:

$$
\mathbb{R}^n =
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix}
\quad x_1, x_2, \ldots, x_n \in \mathbb{R}
$$

Vectors can be written in the notation $\vec{v}$, where $\vec{v}$ is a vector in $\mathbb{R}^n$:

$$
\vec{x} =
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix}
\in \mathbb{R}^n
$$

### Zero Vector

The zero vector is a vector where its entries are entirely zero, denoted as $\vec{0}$:

$$
\vec{0} =
\begin{bmatrix}
0 \\
0 \\
\vdots \\
0
\end{bmatrix} \in \mathbb{R}^n
$$

### Vector Operations

#### Addition

Vectors can be added together by adding their corresponding entries, given two vectors $\vec{u}$ and $\vec{v}$ $\in \mathbb{R}^n$ (same dimension):

$$
\vec{u} + \vec{v} =
\begin{bmatrix}
u_1 + v_1 \\
u_2 + v_2 \\
\vdots \\
u_n + v_n
\end{bmatrix}
$$

#### Subtraction

Vectors can be subtracted by subtracting their corresponding entries, given two vectors $\vec{u}$ and $\vec{v}$ $\in \mathbb{R}^n$ (same dimension):

$$
\vec{u} - \vec{v} =
\begin{bmatrix}
u_1 - v_1 \\
u_2 - v_2 \\
\vdots \\
u_n - v_n
\end{bmatrix}
$$

#### Scalar Multiplication

Vectors can be multiplied by a scalar, given a vector $\vec{v}$ $\in \mathbb{R}^n$ and a scalar $c$:

$$
c \vec{v} =
\begin{bmatrix}
c v_1 \\
c v_2 \\
\vdots \\
c v_n
\end{bmatrix}
$$

#### Arithmetic Properties

Vectors in $\mathbb{R}^n$ satisfy basic arithmetic properties such as:

- ${(\vec{u} + \vec{v})} + \vec{w} = \vec{u} + {(\vec{v} + \vec{w})}$
- $\vec{0} + \vec{v} = \vec{v}$
- $0 \vec{v} = \vec{0}$
- $c (\vec{u} + \vec{v}) = c \vec{u} + c \vec{v}$

## Linear Combination and Span

### Linear Combination

Let $\vec{v_1}, \vec{v_2}, \ldots, \vec{v_k}$ be vectors in $\mathbb{R}^n$ and $c_1, c_2, \ldots, c_k$ be scalars (otherwise known as weights). Then, a linear combination of $\vec{v_1}, \vec{v_2}, \ldots, \vec{v_k}$ is:

$$
c_1 \vec{v_1} + c_2 \vec{v_2} + \ldots + c_k \vec{v_k}
$$

### Span

The span of a set of vectors $\vec{v_1}, \vec{v_2}, \ldots, \vec{v_k}$ in $\mathbb{R}^n$ is the set of all possible linear combinations of $\vec{v_1}, \vec{v_2}, \ldots, \vec{v_k}$:

$$
\text{span}(\vec{v_1}, \vec{v_2}, \ldots, \vec{v_k}) = \{ c_1 \vec{v_1} + c_2 \vec{v_2} + \ldots + c_k \vec{v_k} \mid c_1, c_2, \ldots, c_k \in \mathbb{R} \}
$$

??? question "Why is $\vec{0}$ always in $\text{span}(v_1, v_2, \ldots, v_k)$?"
    $\vec{0}$ is always in $\text{span}(v_1, v_2, \ldots, v_k)$ because it can be written as a linear combination of the vectors in the set:

    $$
    0 \vec{v_1} + 0 \vec{v_2} + \ldots + 0 \vec{v_k} = \vec{0}
    $$

!!! tip
    Conceptually, the span of a set of vectors is everywhere we can get to in $\mathbb{R}^n$ by moving around in the directions of the vectors in the set.

!!! example
    Describe the span of the vectors geometrically.

    $\vec{v_1} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ in $\mathbb{R}^2$.

    The span of $\vec{v_1}$ is $c \begin{bmatrix} 1 \\ 2 \end{bmatrix}$, which is a line in $\mathbb{R}^2$.

## Vectors and Existence of Linear System Solutions

An augmented matrix $[A | \vec{b}]$ can be written as a row of column vectors:

$$
\left[
\begin{array}{cccc|c}
a_{11} & a_{12} & \ldots & a_{1n} & b_1 \\
a_{21} & a_{22} & \ldots & a_{2n} & b_2 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{m1} & a_{m2} & \ldots & a_{mn} & b_m
\end{array}
\right]=
\begin{bmatrix}
\vec{a_1} & \vec{a_2} & \ldots & \vec{a_n} & | & \vec{b}
\end{bmatrix}= [A | \vec{b}]
$$

The system of equations $A \vec{x} = \vec{b}$ can be written as a linear combination of the columns of $A$, for $\vec{x} \in \mathbb{R}^n$:

$$
x_1 \vec{a_1} + x_2 \vec{a_2} + \ldots + x_n \vec{a_n} = \vec{b} \Leftrightarrow x_1 \begin{bmatrix} a_{11} \\ a_{21} \\ \vdots \\ a_{m1} \end{bmatrix} + x_2 \begin{bmatrix} a_{12} \\ a_{22} \\ \vdots \\ a_{m2} \end{bmatrix} + \ldots + x_n \begin{bmatrix} a_{1n} \\ a_{2n} \\ \vdots \\ a_{mn} \end{bmatrix} = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}
$$

This implies that $\vec{b}$ is a linear combination of $\vec{a_1}, \vec{a_2}, \ldots, \vec{a_n}$ if and only if the system of equations $A \vec{x} = \vec{b}$ has a solution. Equivalently, $\vec{b}$ is in the span of the columns of $A$ if and only if the system of equations $A \vec{x} = \vec{b}$ has a solution.

In summary, given $\vec{a}$ and $\vec{x}$ are vectors in $\mathbb{R}^m$ and $\mathbb{R}^n$ respectively, if $A = \begin{bmatrix}\vec{a_1} &  \vec{a_2} & \ldots  & \vec{a_n}\end{bmatrix}$ is a $m \times n$ matrix, then $A\vec{x} = x_1 \vec{a_1} + x_2 \vec{a_2} + \ldots + x_n \vec{a_n}$.

Therefore, the following are equivalent statements:

- The linear system $A \vec{x} = \vec{b}$ has a solution.
- $\vec{b}$ is in the span of the columns of $A$, or $\vec{b}$ is a linear combination of the columns of $A$.
- The linear system of $\left[\begin{array}{c|c}A & \vec{b}\end{array}\right]$ has a solution.


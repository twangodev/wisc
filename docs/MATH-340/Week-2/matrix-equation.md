# Matrix Equation

!!! abstract
    - Learn how to compute $A\vec{x}$ in 2 ways
    - Understand how to write linear system in vector form and matrix form

## Definition of Ax

Given $\vec{a}$ and $\vec{x}$ are vectors in $\mathbb{R}^m$ and $\mathbb{R}^n$ respectively, if $A = \begin{bmatrix}\vec{a_1} &  \vec{a_2} & \ldots  & \vec{a_n}\end{bmatrix}$ is a $m \times n$ matrix, then $A\vec{x} = x_1 \vec{a_1} + x_2 \vec{a_2} + \ldots + x_n \vec{a_n}$.

## Methods of Computing Ax

### Linear Combinations

Given $A = \begin{bmatrix}\vec{a_1} &  \vec{a_2} & \ldots  & \vec{a_n}\end{bmatrix}$ and $\vec{x} = \begin{bmatrix}x_1 \\ x_2 \\ \vdots \\ x_n\end{bmatrix}$, then $A\vec{x} = x_1 \vec{a_1} + x_2 \vec{a_2} + \ldots + x_n \vec{a_n}$.

This form is typically referred to as vector form, where the product of a matrix and a vector is a linear combination of the columns of the matrix.

### Row-Column Multiplication

Given $A = \begin{bmatrix}a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn}\end{bmatrix}$ and $\vec{x} = \begin{bmatrix}x_1 \\ x_2 \\ \vdots \\ x_n\end{bmatrix}$, then:

$$A\vec{x} = \begin{bmatrix}a_{11}x_1 + a_{12}x_2 + \ldots + a_{1n}x_n \\ a_{21}x_1 + a_{22}x_2 + \ldots + a_{2n}x_n \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \ldots + a_{mn}x_n\end{bmatrix}$$

This form is typically referred to as matrix form, where the product of a matrix and a vector is a vector.

#### Undefined Solutions

When the number of columns in $A$ is not equal to the number of rows in $\vec{x}$, the product $A\vec{x}$ is undefined.

!!! tip
    The product of any two matrices is defined if and only if the number of columns in the first matrix is equal to the number of rows in the second matrix. In other words, if $A$ is a $m_A \times n_A$ matrix and $B$ is a $m_B \times n_B$ matrix, then the product $AB$ is defined if and only if $n_A = m_B$. (i.e the middle numbers are equal)
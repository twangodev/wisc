# Echelon Forms

Echoleon forms are a way to organize matrices to make it easier to solve systems of linear equations. There are three types of echelon forms: echelon form, row echelon form, and reduced row echelon form.

In summary, the differences between these forms are the strictness of the conditions on the leading entries (pivots) and the other entries in the pivot columns.

| Form                     | Differences                                                                                         |
|--------------------------|-----------------------------------------------------------------------------------------------------|
| Echelon Form             | Least strict, allowing for any non-zero leading entries and not requiring them to be $1$.           |
| Row Echelon Form         | Requires leading entries to be $1$ but still allows nonzero entries elsewhere in the pivot columns. |
| Reduced Row Echelon Form | Most specific, requiring both leading ones and zeroes in all other positions of each pivot column.  |

## Echelon Form

A matrix is in echelon form if:

- All rows that contain only zeros are at the bottom of the matrix.
- The leading entry (first nonzero number from the left) of each row is in a column to the right of the leading entry of the row above it.
- There are no specific conditions on the values of the leading entries; they do not need to be $1$.

This results in non-zero rows are ordered by having leading entries further right as you go down the rows.

## Row Echelon Form (REF)

A matrix is in row echelon form if:

- It meets all the conditions of echelon form.
- Additionally, the leading entry of each row (pivot) is $1$.

This results in the rows below each pivot contain only zeros in the column where the pivot appears.

## Reduced Row Echelon Form (RREF)
A matrix is in reduced row echelon form if:

- It meets all the conditions of row echelon form.
- Additionally, each leading $1$ (pivot) is the only non-zero entry in its column (i.e., all other entries in that column must be zero).

This results in a form is unique for any matrix, meaning every matrix has exactly one reduced row echelon form.

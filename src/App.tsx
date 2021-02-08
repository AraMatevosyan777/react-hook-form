import React from 'react'
import Form from './form/Form';

// const useYupValidationResolver = (validationSchema:any) =>
//   useCallback(
//     async data => {
//       try {
//         const values = await validationSchema.validate(data, {
//           abortEarly: false
//         });

//         return {
//           values,
//           errors: {}
//         };
//       } catch (errors) {
//         return {
//           values: {},
//           errors: errors.inner.reduce(
//             (allErrors:any, currentError:any) => ({
//               ...allErrors,
//               [currentError.path]: {
//                 type: currentError.type ?? "validation",
//                 message: currentError.message
//               }
//             }),
//             {}
//           )
//         };
//       }
//     },
//     [validationSchema]
//   );

const App = () => {
  return (
    <div className='app'>
      <Form/>
    </div>
  );
}

export default App

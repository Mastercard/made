/* replace partnerbank with theme name below */

module.exports = function (dictionary) {
  return (
    ` 
    <h2 style="font: 1.5rem Arial, Helvetica; color: currentColor;">Color</h2>
    <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Options</h3>
    <table style="
          font: 100% Arial, Helvetica;
          color: currentColor;
          width:100%;
          line-height:1.5">
      <thead>
          <tr>
          <th style="text-align:left;width: 25%;">Token Name</th>
          <th style="text-align:left;width: 35%;">Role</th>
          <th style="text-align:left;width: 10%;">Value</th>
          <th style="text-align:left;width: 30%;"></th>
          </tr>       
      </thead>
      <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `color` &&
            token.attributes.type === `gray`) ||
          token.attributes.type === `accent` ||
          token.attributes.type === `white` ||
          token.attributes.type === `black`
      )
      .map((token) => {
        return `
         <tr>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <code>${token.name}</code>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <p style="font-size: 0.75rem;padding: 0;">${
           token.comment ? token.comment : ""
         }</p>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
         <div style="background:${
           token.value
         };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
             <code style="text-transform:uppercase">${token.value}</code>
             </td>
            
         </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
      <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Brand Colours </h3>
    <table style="
          font: 100% Arial, Helvetica;
          color: currentColor;
          width:100%;
          line-height:1.5">
      <thead>
          <tr>
          <th style="text-align:left;width: 25%;">Token Name</th>
          <th style="text-align:left;width: 35%;">Role</th>
          <th style="text-align:left;width: 10%;">Value</th>
          <th style="text-align:left;width: 30%;"></th>
          </tr>       
      </thead>
      <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type != `action` &&
          token.attributes.type != `background` &&
          token.attributes.type != `border` &&
          token.attributes.type != `feedback` &&
          token.attributes.type != `backdrop` &&
          token.attributes.type != `form` &&
          token.attributes.type != `text` &&
          token.attributes.type != `visualization` &&
          token.attributes.type != `gray` &&
          token.attributes.type != `accent` &&
          token.attributes.type != `white` &&
          token.attributes.type != `black`
      )
      .map((token) => {
        return `
         <tr>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <code>${token.name}</code>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <p style="font-size: 0.75rem;padding: 0;">${
           token.comment ? token.comment : ""
         }</p>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
         <div style="background:${
           token.value
         };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
             <code style="text-transform:uppercase">${token.value}</code>
             </td>
            
         </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
      <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">MCC Brand Colours </h3>
    <table style="
          font: 100% Arial, Helvetica;
          color: currentColor;
          width:100%;
          line-height:1.5">
      <thead>
          <tr>
          <th style="text-align:left;width: 25%;">Token Name</th>
          <th style="text-align:left;width: 35%;">Role</th>
          <th style="text-align:left;width: 10%;">Value</th>
          <th style="text-align:left;width: 30%;"></th>
          </tr>       
      </thead>
      <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `connect` &&
          token.attributes.attribute === `color`
      )
      .map((token) => {
        return `
         <tr>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <code>${token.name}</code>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <p style="font-size: 0.75rem;padding: 0;">${
           token.comment ? token.comment : ""
         }</p>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
         <div style="background:${
           token.value
         };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
             <code style="text-transform:uppercase">${token.value}</code>
             </td>
            
         </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
      <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Text Color</h3>
    <table style="
          font: 100% Arial, Helvetica;
          color: currentColor;
          width:100%;
          line-height:1.5">
      <thead>
          <tr>
          <th style="text-align:left;width: 25%;">Token Name</th>
          <th style="text-align:left;width: 35%;">Role</th>
          <th style="text-align:left;width: 10%;">Value</th>
          <th style="text-align:left;width: 30%;"></th>
          </tr>       
      </thead>
      <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `color` &&
            token.attributes.type === `text`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `color`)
      )
      .map((token) => {
        return `
         <tr>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <code>${token.name}</code>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <p style="font-size: 0.75rem;padding: 0;">${
           token.comment ? token.comment : ""
         }</p>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
         <div style="background:${
           token.value
         };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
             <code style="text-transform:uppercase">${token.value}</code>
             </td>
            
         </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
    <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Background Color</h3>
    <table style="
          font: 100% Arial, Helvetica;
          color: currentColor;
          width:100%;
          line-height:1.5">
      <thead>
          <tr>
          <th style="text-align:left;width: 25%;">Token Name</th>
          <th style="text-align:left;width: 35%;">Role</th>
          <th style="text-align:left;width: 10%;">Value</th>
          <th style="text-align:left;width: 30%;"></th>
          </tr>       
      </thead>
      <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `background`
      )
      .map((token) => {
        return `
         <tr>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <code>${token.name}</code>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <p style="font-size: 0.75rem;padding: 0;">${
           token.comment ? token.comment : ""
         }</p>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
         <div style="background:${
           token.value
         };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
             <code style="text-transform:uppercase">${token.value}</code>
             </td>
            
         </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
      <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Border Color</h3>
    <table style="
          font: 100% Arial, Helvetica;
          color: currentColor;
          width:100%;
          line-height:1.5">
      <thead>
          <tr>
          <th style="text-align:left;width: 25%;">Token Name</th>
          <th style="text-align:left;width: 35%;">Role</th>
          <th style="text-align:left;width: 10%;">Value</th>
          <th style="text-align:left;width: 30%;"></th>
          </tr>       
      </thead>
      <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `border`
      )
      .map((token) => {
        return `
         <tr>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <code>${token.name}</code>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <p style="font-size: 0.75rem;padding: 0;">${
           token.comment ? token.comment : ""
         }</p>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
         <div style="background:${
           token.value
         };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
             <code style="text-transform:uppercase">${token.value}</code>
             </td>
            
         </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
      <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Action Colours </h3>
    <table style="
          font: 100% Arial, Helvetica;
          color: currentColor;
          width:100%;
          line-height:1.5">
      <thead>
          <tr>
          <th style="text-align:left;width: 25%;">Token Name</th>
          <th style="text-align:left;width: 35%;">Role</th>
          <th style="text-align:left;width: 10%;">Value</th>
          <th style="text-align:left;width: 30%;"></th>
          </tr>       
      </thead>
      <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `action`
      )
      .map((token) => {
        return `
         <tr>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <code>${token.name}</code>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <p style="font-size: 0.75rem;padding: 0;">${
           token.comment ? token.comment : ""
         }</p>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
         <div style="background:${
           token.value
         };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
             <code style="text-transform:uppercase">${token.value}</code>
             </td>
            
         </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
      <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Form Colors</h3>
    <table style="
          font: 100% Arial, Helvetica;
          color: currentColor;
          width:100%;
          line-height:1.5">
      <thead>
          <tr>
          <th style="text-align:left;width: 25%;">Token Name</th>
          <th style="text-align:left;width: 35%;">Role</th>
          <th style="text-align:left;width: 10%;">Value</th>
          <th style="text-align:left;width: 30%;"></th>
          </tr>       
      </thead>
      <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `form`
      )
      .map((token) => {
        return `
         <tr>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <code>${token.name}</code>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <p style="font-size: 0.75rem;padding: 0;">${
           token.comment ? token.comment : ""
         }</p>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
         <div style="background:${
           token.value
         };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
             <code style="text-transform:uppercase">${token.value}</code>
             </td>
            
         </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
      <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Feedback Colors</h3>
      <table style="
            font: 100% Arial, Helvetica;
            color: currentColor;
            width:100%;
            line-height:1.5">
        <thead>
            <tr>
            <th style="text-align:left;width: 25%;">Token Name</th>
            <th style="text-align:left;width: 35%;">Role</th>
            <th style="text-align:left;width: 10%;">Value</th>
            <th style="text-align:left;width: 30%;"></th>
            </tr>       
        </thead>
        <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `feedback`
      )
      .map((token) => {
        return `
           <tr>
           <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
           <code>${token.name}</code>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
           <p style="font-size: 0.75rem;padding: 0;">${
             token.comment ? token.comment : ""
           }</p>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
           <div style="background:${
             token.value
           };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
               <code style="text-transform:uppercase">${token.value}</code>
               </td>
              
           </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
      <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Data Vizualisation Colors</h3>
      <table style="
            font: 100% Arial, Helvetica;
            color: currentColor;
            width:100%;
            line-height:1.5">
        <thead>
            <tr>
            <th style="text-align:left;width: 25%;">Token Name</th>
            <th style="text-align:left;width: 35%;">Role</th>
            <th style="text-align:left;width: 10%;">Value</th>
            <th style="text-align:left;width: 30%;"></th>
            </tr>       
        </thead>
        <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `visualization`
      )
      .map((token) => {
        return `
           <tr>
           <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
           <code>${token.name}</code>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
           <p style="font-size: 0.75rem;padding: 0;">${
             token.comment ? token.comment : ""
           }</p>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 8px;display: flex;align-items: center;text-align:left;">
           <div style="background:${
             token.value
           };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
               <code style="text-transform:uppercase">${token.value}</code>
               </td>
              
           </tr>`;
      })
      .join(`\n`) +
    `\n 
      </tbody>
      </table>
      <h2 style="font: 1.5rem Arial, Helvetica; color: currentColor;">Spacing</h2>
      <table style="
            font: 100% Arial, Helvetica;
            color: currentColor;
            width:100%;
            line-height:1.5">
        <thead>
            <tr>
            <th style="text-align:left;width: 25%;">Token Name</th>
            <th style="text-align:left;width: 35%;">Role</th>
            <th style="text-align:left;width: 10%;">Value</th>
            <th style="text-align:left;width: 30%;"></th>
            </tr>       
        </thead>
        <tbody>` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `space`)
      .map((token) => {
        return `
           <tr>
           <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
           <code>${token.name}</code>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
           <p style="font-size: 0.75rem;padding: 0;">${
             token.comment ? token.comment : ""
           }</p>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
           <div style="height:${token.value};width:${
          token.value
        };display:inline-block;background:lightgray"></div>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
               <code style="text-transform:uppercase">${token.value}</code>
               </td>
              
           </tr>`;
      })
      .join(`\n`) +
    `\n  
          </tbody>
          </table>
          <h2 style="font: 1.5rem Arial, Helvetica; color: currentColor;"> Typography </h2>
          <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Font Size</h3>
          <table style="
                font: 100% Arial, Helvetica;
                color: currentColor;
                width:100%;
                line-height:1.5">
            <thead>
                <tr>
                <th style="text-align:left;width: 25%;">Token Name</th>
                <th style="text-align:left;width: 35%;">Role</th>
                <th style="text-align:left;width: 10%;">Value</th>
                <th style="text-align:left;width: 30%;"></th>
                </tr>       
            </thead>
            <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `size`) ||
          token.attributes.item === `size`
      )
      .map((token) => {
        return `
               <tr>
               <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
               <code>${token.name}</code>
               </td>
               <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
               <p style="font-size: 0.75rem;padding: 0;">${
                 token.comment ? token.comment : ""
               }</p>
               </td>
               <td style="border-bottom:1px solid #f0f0f0;">
               <div style="font-size:${token.value}";>${token.value}</div>
               </td>
               <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
                   <code style="text-transform:uppercase">${token.value}</code>
                   </td>
                  
               </tr>`;
      })
      .join(`\n`) +
    `\n  
              </tbody>
              </table>           
              <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Font Family</h3>
              <table style="
                    font: 100% Arial, Helvetica;
                    color: currentColor;
                    width:100%;
                    line-height:1.5">
                <thead>
                    <tr>
                    <th style="text-align:left;width: 25%;">Token Name</th>
                    <th style="text-align:left;width: 35%;">Role</th>
                    <th style="text-align:left;width: 10%;">Value</th>
                    <th style="text-align:left;width: 30%;"></th>
                    </tr>       
                </thead>
                <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `family`) ||
          token.attributes.item === `family`
      )
      .map((token) => {
        return `
                   <tr>
                   <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
                   <code>${token.name}</code>
                   </td>
                   <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
                   <p style="font-size: 0.75rem;padding: 0;">${
                     token.comment ? token.comment : ""
                   }</p>
                   </td>
                   <td style="border-bottom:1px solid #f0f0f0;">
                  
                   </td>
                   <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
                       <code style="text-transform:uppercase">${
                         token.value
                       }</code>
                       </td>
                      
                   </tr>`;
      })
      .join(`\n`) +
    `\n    
    </tbody>
    </table>           
    <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Line Height</h3>
    <table style="
          font: 100% Arial, Helvetica;
          color: currentColor;
          width:100%;
          line-height:1.5">
      <thead>
          <tr>
          <th style="text-align:left;width: 25%;">Token Name</th>
          <th style="text-align:left;width: 35%;">Role</th>
          <th style="text-align:left;width: 10%;">Value</th>
          <th style="text-align:left;width: 30%;"></th>
          </tr>       
      </thead>
      <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `line` &&
          token.attributes.type === `height`
      )
      .map((token) => {
        return `
         <tr>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <code>${token.name}</code>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
         <p style="font-size: 0.75rem;padding: 0;">${
           token.comment ? token.comment : ""
         }</p>
         </td>
         <td style="border-bottom:1px solid #f0f0f0;">
         </td>
         <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
             <code style="text-transform:uppercase">${token.value}</code>
             </td>
            
         </tr>`;
      })
      .join(`\n`) +
    `\n    
      </tbody>
      </table>           
      <h3 style="font: 1.25rem Arial, Helvetica; color: currentColor;">Shadow</h3>
      <table style="
            font: 100% Arial, Helvetica;
            color: currentColor;
            width:100%;
            line-height:1.5">
        <thead>
            <tr>
            <th style="text-align:left;width: 25%;">Token Name</th>
            <th style="text-align:left;width: 35%;">Role</th>
            <th style="text-align:left;width: 10%;">Value</th>
            <th style="text-align:left;width: 30%;"></th>
            </tr>       
        </thead>
        <tbody>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `shadow` ||
          token.attributes.attributes === `shadow` ||
          token.attributes.item === `shadow`
      )
      .map((token) => {
        return `
           <tr>
           <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
           <code>${token.name}</code>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 0.5rem;">
           <p style="font-size: 0.75rem;padding: 0;">${
             token.comment ? token.comment : ""
           }</p>
           </td>
           <td style="border-bottom:1px solid #f0f0f0;">
           <div style="box-shadow:${
            token.value
          };display:block;margin-right:24px;width:24px;height:24px;border-radius:50%;border:1px solid #bcbcbc"></div>
         
           </td>
           <td style="border-bottom:1px solid #f0f0f0;padding: 8px;">
               <code style="text-transform:uppercase">${token.value}</code>
               </td>
              
           </tr>`;
      })
      .join(`\n`) +
    `\n  
                  </tbody>
                  </table>`
  );
};

import * as React from 'react';
import { ReactElement } from 'react';

export const Footer: React.FunctionComponent = (): ReactElement => {
  const dateNow = new Date();

  return (
    <div data-testid='footer'>
      <div>
        <div className='w-full mt-24 drop-shadow-[10px_35px_35px_rgba(93,58,183,0.49)]'>
          <footer id='App-footer' className='sticky w-full z-50 bottom-0 bg-primary-custom py-5'>
            <p className='text-xs lg:text-sm leading-none text-secondary-custom text-center'>
              <a href={'https://github.com/marcantoinedutoit/'}>Copyright</a> ©{dateNow.getFullYear()}.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

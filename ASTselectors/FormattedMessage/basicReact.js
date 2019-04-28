import React from 'react';
import FormattedMessage from 'react-intl';

export const basic = () => {
  return (
    <div>
      <FormattedMessage id={`someMessageId`} />
      <FormattedMessage id={`someOtherMessageId`}>{text => text}</FormattedMessage>
      <h1>This is not intl component</h1>
    </div>
  );
};

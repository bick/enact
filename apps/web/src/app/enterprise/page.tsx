'use client';

import { EnterpriseHero } from './enterprise-hero';
import { EnterpriseServices } from './enterprise-services';
import { EnterpriseProcess } from './enterprise-process';
import { EnterpriseBenefits } from './enterprise-benefits';
import { EnterpriseCTA } from './enterprise-cta';

export default function Enterprise() {
  return (
    <>
      <EnterpriseHero />
      <EnterpriseServices />
      <EnterpriseProcess />
      <EnterpriseBenefits />
      <EnterpriseCTA />
    </>
  );
}

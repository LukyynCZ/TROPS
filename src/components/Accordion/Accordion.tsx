import AccordionSections from './AccordionSections';

interface AccordionData {
  title: string;
  content: string;
}

const Accordion = () => {
  const accordionData: AccordionData[] = [
    {
      title: 'Exclusive offers and discounts',
      content:
        'TROPS VIP Club members have access to exclusive offers and discounts on suits and accessories. These offers are only available to club members and are often very advantageous',
    },
    {
      title: 'Individual approach',
      content:
        'TROPS customer service focuses on a personal approach to customers and this principle also applies to VIP club members. Club members have a personal stylist available to advise them on the selection of suits and accessories to suit their style and needs',
    },
    {
      title: 'Fast and free shipping',
      content:
        'VIP Club members are entitled to fast and free shipping on their orders. This means they can order a suit from the comfort of their home and not have to worry about shipping',
    },
    {
      title: 'Priority order processing',
      content:
        'Orders of VIP club members are processed on a priority basis. This means that club members get their suits and accessories faster than other customers',
    },
    {
      title: 'Invitation to special events',
      content:
        'VIP club members are invited to special events and suit shows that are held for club members only. This is an opportunity to see the new collections in front of other customers and meet other club members',
    },
    {
      title: 'Opportunity to earn bonus points',
      content:
        'VIP Club members have the opportunity to earn bonus points for their purchases, which they can later use for additional purchases of TROPS suits and accessories',
    },
  ];
  return (
    <div className='w-full'>
      {accordionData.map((data): any => (
        <AccordionSections title={data.title} content={data.content} key={data.title} />
      ))}
    </div>
  );
};

export default Accordion;

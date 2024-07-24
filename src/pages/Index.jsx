import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Gift, IdCard, Ticket } from 'lucide-react';

const Index = () => {
  const cardTypes = [
    { title: 'Credit Cards', description: 'Convenient payment method for purchases', icon: <CreditCard className="h-8 w-8 mb-2" /> },
    { title: 'Gift Cards', description: 'Perfect for presents and special occasions', icon: <Gift className="h-8 w-8 mb-2" /> },
    { title: 'ID Cards', description: 'Essential for identification and security', icon: <IdCard className="h-8 w-8 mb-2" /> },
    { title: 'Membership Cards', description: 'Access exclusive benefits and rewards', icon: <Ticket className="h-8 w-8 mb-2" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Discover the World of Cards</h1>
      <p className="text-xl text-center mb-12">Explore various types of cards and their applications in modern life</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardTypes.map((card, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex justify-center">{card.icon}</div>
              <CardTitle className="text-center">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">{card.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Why Choose Our Card Solutions?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Wide variety of card types for every need</li>
            <li>Secure and reliable card technology</li>
            <li>Customizable designs to fit your brand</li>
            <li>Excellent customer support</li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Get Started Today</Button>
        </CardFooter>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to explore our card solutions?</h2>
        <Button size="lg">Contact Us</Button>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2023 Card Solutions Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
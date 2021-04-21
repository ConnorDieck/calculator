
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 500, years: 10, rate: .15})).toEqual('8.07');
  expect(calculateMonthlyPayment({amount: 600, years: 12, rate: .3})).toEqual('15.44');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 800000, years: 50, rate: 4})).toEqual('266666.67');
});

/// etc

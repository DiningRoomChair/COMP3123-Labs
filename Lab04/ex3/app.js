var should = require('should');
var calc = require('./calculator');

describe('Calculator', function(){
    describe('when used synchronously', function(){
        //addition tests
        it('should add two numbers correctly', function(){
            calc.addTwoNumbers(2, 2).should.equal(4);
        })
        it('should not make mistakes', function(){
            calc.addTwoNumbers(20, 30).should.not.equal(51);
        })
        it('should throw errors', function(){
            try{
                calc.addTwoNumbers("a", "b").should.throw();
            }
            catch(e){};
        })
        //subtraction tests
        it('should subtract two numbers correctly', function(){
            calc.subtractTwoNumbers(2, 2).should.equal(0);
        })
        it('should not make mistakes', function(){
            calc.subtractTwoNumbers(20, 30).should.not.equal(-11);
        })
        it('should throw errors', function(){
            try{
                calc.subtractTwoNumbers("a", "b").should.throw();
            }
            catch(e){}
        })
    })
});
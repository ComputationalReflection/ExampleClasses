package examples.test.rule_7_40_2;

public class A2 implements A1{

    @Override
    public void exampleA1_1() {
        System.out.println("Hello world");
    }

    @Override
    public String exampleA1_2(int ab) {
        return "Hello "+ab;
    }
}

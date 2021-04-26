package examples.test.rule_3_10_star;

class B2 {
	
	private int a = 2;
	private int b = 2;

	@Override
	public String toString() {
		return a+" "+number(b);
		
	}
	
	public int a(){
		return a;
	}

	protected int number(int num){
		return num;
	}

}

package examples.test.rule_3_10_star;

class B3 {
	
	private int a = 2;
	private int b = 2;
	private int c = 2;
	private int d = 2;

	@Override
	public String toString() {
		int e = c + d;
		return a+" "+number(b);
		
	}
	
	public int a(){
		return a;
	}

	protected int b(){
		return b;
	}

	private int c(){
		return c;
	}

	int d(){
		return d;
	}

	public int number(int num){
		return num;
	}

}

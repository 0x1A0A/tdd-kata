#include <catch2/catch_test_macros.hpp>

int add(int a, int b) {
	return a+b;
}

long reverse_i(long a) {
	long result = 0;
	while (a) {
		result *=10;
		result += a%10;
		a /= 10;	
	}
	return result;
}

TEST_CASE("Add number", "[catch2 test add]") {
	REQUIRE(add(1,2)==3);
}

TEST_CASE("Reverse number", "[catch2 test reverse]") {
	REQUIRE(reverse_i(10) == 1);
	REQUIRE(reverse_i(12) == 21);
	REQUIRE(reverse_i(100009) == 900001);
}

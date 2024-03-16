enable_testing()

file(
	GLOB_RECURSE app_src
	"${CMAKE_CURRENT_LIST_DIR}/*.cpp"
)

file(
	GLOB_RECURSE app_test_src
	"${CMAKE_CURRENT_LIST_DIR}/test-*.cpp"
)

add_executable(tdd ${app_src})
target_link_libraries(tdd GTest::gtest_main)

include(GoogleTest)
gtest_discover_tests(tdd)

#include <ios>
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
int main() {
    int N;
    scanf("%d", &N);
    int dp[1000001] = { 0, 0, 1, 1, };
    for (int i=4; i<=N; i++) {
        dp[i] = dp[i-1] + 1;
        if (i % 3 == 0)
            dp[i] = MIN(dp[i], dp[i/3] + 1);
        if (i % 2 == 0)
            dp[i] = MIN(dp[i], dp[i/2] + 1);
    }
    printf("%d", dp[N]);
    return 0;  
}

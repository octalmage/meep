package keeper_test

import (
	"testing"

	testkeeper "github.com/octalmage/meep/testutil/keeper"
	"github.com/octalmage/meep/x/meep/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MeepKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
